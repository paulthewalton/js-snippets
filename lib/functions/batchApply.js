/**
 * Call one function multiple times with an array of values/value arrays to pass to each call.
 * @category Functional Programming
 * @arg {function} fn Function to call.
 * @arg {Array[]} argsArray Array of arguments for function.
 * @arg {*} thisArg Value to set as `this` for the function.
 * @returns {Array} Array of returns from each call of fn.
 * @example
 * batchApply(Math.pow, [[2, 2], [10, 3]]) // -> [4, 1000]
 */
export function batchApply(fn, argsArray, thisArg) {
	return argsArray.map((value) => {
		return Array.isArray(value) ? fn.apply(this, value) : fn.call(this, value);
	}, thisArg);
}
