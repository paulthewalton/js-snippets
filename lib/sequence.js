import { isCallable } from "./isCallable";

/**
 * Sequence multiple functions into one function.
 * @category Functional Programming
 * @arg {...function} fns Callable functions.
 * @returns {function}
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
