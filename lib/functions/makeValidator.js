import { isCallable } from "../type";
import { batch } from "./batch";

/**
 * Turn a series of functions into a testing function.
 * @category Functional Programming
 * @arg {function[]} fns Array of functions to test arguments.
 * @arg {*|boolean} strictMode Whether tested arguments have to pass all.
 *      tests (true/false -> AND/OR)
 * @return {function}
 */
export function makeValidator(fns, strictMode) {
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
