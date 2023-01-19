import { sequence } from "./sequence";
/**
 * Compose multiple functions into one function.
 * @category Functional Programming
 * @arg {...function} fns Callable functions.
 * @returns {function}
 * @example
 * var abc = compose(a, b, c);
 * abc(x); // -> a(b(c(x)))
 */
export function compose(...fns) {
	return sequence.apply(null, fns.reverse());
}
