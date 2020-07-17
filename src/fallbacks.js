/**
 * @file
 * @kind overview
 * @summary Utilities for fallback and default values.
 * @author Paul Walton
 */

import { isCallable } from "./type";

/**
 * Return the first argument that satisfies a validation callback, or the last value provided.
 * * Returns `undefined` if no values are passed.
 * @summary Return the first argument that satisfies a validation callback.
 * @arg {Function} validate - Validation callback.
 * @arg {...*} values - Variable number of candidate values.
 * @throws {TypeError} If the callback isn't callable.
 * @returns {?*}
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
	return values.length ? values.pop() : undefined;
}
