import { isCallable } from "./_type";
// import { compatRequestAnimationFrame, compatCancelAnimationFrame } from "./compat";

/**
 * Sequence multiple functions into one function.
 * @arg {...Function} fns Callable functions.
 * @returns {Function}
 * @example
 * var abc = sequence(a, b, c);
 * abc(x); // -> c(b(a(x)))
 */
export function sequence(...fns) {
	fns = fns.filter(isCallable);
	return function (result) {
		for (let i = 0; i < fns.length; i++) {
			result = fns[i].call(this, result);
		}
		return result;
	};
}

/**
 * Compose multiple functions into one function.
 * @arg {...Function} fns Callable functions.
 * @returns {Function}
 * @example
 * var abc = compose(a, b, c);
 * abc(x); // -> a(b(c(x)))
 */
export function compose(...fns) {
	return sequence.apply(null, fns.reverse());
}

/**
 * Create one function that runs multiple functions on the same arguments.
 * * Returned function returns array of results in order of original args.
 * @arg {...Function} fns Callable functions.
 * @returns {Function}
 * @example
 * var abc = batch(a, b, c);
 * abc(x); // -> [a(x), b(x), c(x)];
 */
export function batch(...fns) {
	fns = fns.filter(isCallable);
	const returns = new Array(fns.length);
	return function (...args) {
		for (let i = 0; i < fns.length; i++) {
			returns[i] = fns[i].apply(this, args);
		}
		return returns;
	};
}

/**
 * Call one function multiple times with an array of values/value arrays to pass to each call.
 * @arg {Function} fn Function to call.
 * @arg {*[][]} argsArray Array of arguments for function.
 * @arg {*} [thisArg] Value to set as `this` for the function.
 * @returns {*[]} Array of returns from each call of fn.
 * @example
 * batchApply(Math.pow, [[2, 2], [10, 3]]) // -> [4, 1000]
 */
export function batchApply(fn, argsArray, thisArg) {
	return argsArray.map((value) => {
		return Array.isArray(value) ? fn.apply(this, value) : fn.call(this, value);
	}, thisArg);
}

/**
 * Turn a series of functions into a testing function.
 * @arg {Function[]} fns Array of functions to test arguments.
 * @arg {*|boolean} strictMode Whether tested arguments have to pass all.
 *      tests (true/false -> AND/OR)
 * @return {Function}
 */
export function makeTest(fns, strictMode) {
	fns = fns.filter(isCallable);
	if (!fns.length) {
		throw TypeError("An assessment must consist of at least 1 testing function");
	}
	const trials = batch(...fns);
	strictMode = !!strictMode;
	return function (...args) {
		return trials(...args).reduce((lastResult, value) => (strictMode ? lastResult && value : lastResult || value));
	};
}

/**
 * Process placeholder values for partial application of functions.
 * * Values of `_` will be replaced with `undefined` unless preceded by backslash
 * @private
 * @arg {*[]} partials Array of values to partially apply to a function.
 * @returns {Object} Placeholders and processed partial arguments.
 */
function processPartialPlaceholders(partials) {
	const placeholders = [];
	const processedPartials = partials.map((value, index) => {
		switch (value) {
			case processPartialPlaceholders.placeholder:
				placeholders.push(index);
				return undefined;
			case `\${processPartialPlaceholders.placeholder}`:
				return processPartialPlaceholders.placeholder;
			default:
				return value;
		}
	});
	return { placeholders, processedPartials };
}
Object.defineProperty(processPartialPlaceholders, "placeholder", {
	value: "_",
});

/**
 * Partially apply arguments to a function without setting `this`.
 * * Use `_` as a placeholder value, final arguments will fill those positions from left-to-right, appending any remaining arguments.
 * @arg {Function} fn Function to partially apply.
 * @arg {...*} partials Arguments to partially apply to `fn`.
 * @returns {Function}
 * @example
 * let forceGreaterThanZero = partial(Math.max, 0);
 * forceGreaterThanZero(myNum) // ~= Math.max(0, myNum)
 */
export function partial(fn, ...partials) {
	const { placeholders, processedPartials } = processPartialPlaceholders(partials);
	return function (...args) {
		placeholders.forEach((placeholder) => {
			processedPartials[placeholder] = args.shift();
		});
		return fn.apply(this, processedPartials.concat(args));
	};
}
Object.defineProperty(partial, "placeholder", {
	get: () => processPartialPlaceholders.placeholder,
});

/**
 * Partially apply arguments to a function from right-to-left without setting `this`.
 * * Use `_` as a placeholder value, final arguments will replace those positions from right-to-left, prepending any remaining arguments.
 * @arg {Function} fn Function to partially apply.
 * @arg {...*} partials Arguments to partially apply to `fn`.
 * @returns {Function}
 * @example
 * let divide = (a, b) => { a / b };
 * let divideBy2 = partialRight(divide, 2);
 * divideBy2(myNum) // ~= divide(myNum, 2)
 */
export function partialRight(fn, ...partials) {
	const { placeholders, processedPartials } = processPartialPlaceholders(partials);
	return function (...args) {
		placeholders.forEach((placeholder) => {
			processedPartials[placeholder] = args.pop();
		});
		return fn.apply(this, args.concat(processedPartials));
	};
}
Object.defineProperty(partialRight, "placeholder", {
	get: () => processPartialPlaceholders.placeholder,
});

/**
 * Throttle a high-frequecy and/or resource intensive function.
 * @arg {Function} fn Function to throttle.
 * @arg {number} wait Minimum number of millseconds to wait between calls.
 * @returns {Function} Throttled function.
 */
export function throttle(fn, wait) {
	let context, args, result;
	let timeout = null;
	let previous = 0;
	const later = function () {
		previous = Date.now();
		timeout = null;
		result = fn.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function () {
		const now = Date.now();
		const remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = fn.apply(context, args);
			if (!timeout) {
				context = args = null;
			}
		} else if (!timeout) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
}

/**
 * Debounce a function by setting a minimum elapsed time between invocations.
 * * When called before the elapsed time, will return the last result
 * * Debounced function has 2 methods:
 *   - flush(), which cancels the timer and immediately returns the result of the invoked function, and
 *   - cancel(), which just cancels the timer.
 * @arg {Function} fn Function to debounce.
 * @arg {number} wait Minimum elapsed time between invoking `fn`.
 * @arg {boolean} [leading=false] Optional. Whether to invoke the function the first time is is called before waiting. Default false.
 * @returns {Function} Debounced function.
 */
export function debounce(fn, wait, leading) {
	leading = !!leading || false;
	let timeout, lastThis, lastArgs, lastResult;

	const invokeFunc = function () {
		var args = lastArgs,
			thisArg = lastThis;
		lastArgs = lastThis = undefined;
		lastResult = fn.apply(thisArg, args);
		return lastResult;
	};
	const debounced = function (...args) {
		lastArgs = args;
		lastThis = this;
		if (leading && !timeout) {
			timeout = setTimeout(() => {}, wait);
			return invokeFunc();
		}
		clearTimeout(timeout);
		timeout = setTimeout(invokeFunc, wait);
		return lastResult;
	};
	debounced.cancel = function () {
		clearTimeout(timeout);
	};
	debounced.flush = function () {
		clearTimeout(timeout);
		return invokeFunc();
	};

	return debounced;
}
