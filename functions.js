import { isCallable } from "./type";

/**
 * Sequence multiple functions into one function.
 * @param {...Function} fns - callable functions
 * @returns {Function}
 * @example
 * var abc = sequence(a, b, c);
 * abc(x); // -> c(b(a(x)))
 */
export function sequence(...fns) {
	fns = fns.filter(isCallable);
	return function(result) {
		for (let i = 0; i < fns.length; i++) {
			result = fns[i].call(this, result);
		}
		return result;
	};
}

/**
 * Compose multiple functions into one function.
 * @param {...Function} fns - callable functions
 * @returns {Function}
 * @example
 * var abc = compose(a, b, c);
 * abc(x); // -> a(b(c(x)))
 */
export function compose(...fns) {
	return sequence.apply(null, fns.reverse());
}

/**
 * Create one function that runs multiple functions on the same arguments
 * Returned function returns array of results in order of original args
 * @param {...Function} fns - callable functions
 * @returns {Function}
 * @example
 * var abc = batch(a, b, c);
 * abc(x); // -> [a(x), b(x), c(x)];
 */
export function batch(...fns) {
	fns = fns.filter(isCallable);
	const returns = new Array(fns.length);
	return function(...args) {
		for (let i = 0; i < fns.length; i++) {
			returns[i] = fns[i].apply(this, args);
		}
		return returns;
	};
}

/**
 * Call one function multiple times with an array of values/value arrays to pass to each call
 * @param {Function} fn - function to call
 * @param {*[][]} argsArray - array of arguments for function
 * @param {*} thisArg - value to set as `this` for the function
 * @returns {*[]} - Array of returns from each call of fn
 * @example
 * batchApply(Math.pow, [[2, 2], [10, 3]]) // -> [4, 1000]
 */
export function batchApply(fn, argsArray, thisArg) {
	return argsArray.map(value => {
		return Array.isArray(value) ? fn.apply(this, value) : fn.call(this, value);
	}, thisArg);
}

/**
 * Turn a series of functions into a testing function
 * @param {Function[]} fns - array of functions to test arguments
 * @param {*|Boolean} strictMode - whether tested arguments have to pass all
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
	return function(...args) {
		return trials(...args).reduce((lastResult, value) =>
			strictMode ? lastResult && value : lastResult || value
		);
	};
}
