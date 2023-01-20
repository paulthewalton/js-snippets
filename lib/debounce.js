/**
 * Debounce a function by setting a minimum elapsed time between invocations.
 * * When called before the elapsed time, will return the last result
 * * Debounced function has 2 methods:
 *   - flush(), which cancels the timer and immediately returns the result of the invoked function, and
 *   - cancel(), which just cancels the timer.
 * @summary Debounce a function by setting a minimum elapsed time between invocations.
 * @category Functional Programming
 * @template T
 * @param {function(): T} fn Function to debounce.
 * @param {number} wait Minimum elapsed time between invoking `fn`.
 * @param {boolean} [leading=false] Optional. Whether to invoke the function the first time is is called before waiting. Default false.
 * @returns Debounced function.
 */
export function debounce(fn, wait, leading) {
	leading = !!leading || false;
	let timeout, lastThis, lastArgs, lastResult;

	/**
	 * @returns {T}
	 */
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
