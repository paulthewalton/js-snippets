import { isCallable } from "../type";

/**
 * Create one function that runs multiple functions on the same arguments.
 * * Returned function returns array of results in order of original args.
 * @summary Create one function that runs multiple functions on the same arguments.
 * @category Functional Programming
 * @arg {...function} fns Callable functions.
 * @returns {function}
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
