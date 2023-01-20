import { isCallable } from "../type";

/**
 * Resolve to the first argument that satisfies an async validation callback, or the last value provided.
 * * Resolves to `undefined` if no values are passed.
 * @summary Resolve to the first argument that satisfies an async validation callback.
 * @see fallbackUntil
 * @category Fallback
 * @arg {function} validate - Validation callback.
 * @arg {...*} values - Variable number of candidate values.
 * @throws {TypeError} If the callback isn't callable.
 * @returns {Promise.<?*>}
 */
export async function fallbackUntilAsync(validate, ...values) {
	if (!isCallable(validate)) {
		throw TypeError;
	}
	for (const value of values) {
		if (await validate(value)) {
			return value;
		}
	}
	return values.length ? values.pop() : undefined;
}
