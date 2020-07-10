import { isCallable } from "./type";

/**
 * Return the first argument that satisfies a validation callback, or the last
 * value provided.
 * @arg {Function} validate - Validation callback.
 * @arg {...*} values - Variable number of candidate values.
 * @returns {*}
 */
export function fallbackUntil(validate, ...values) {
	if (!isCallable(validate)) {
		throw TypeError;
	}
	for (const value of values) {
		if (validate(value)) {
			return value;
		}
	}
	return values.length ? values.pop() : null;
}
