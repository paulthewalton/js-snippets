import { isNumeric } from "./isNumeric";
import { isString } from "./isString";

/**
 * Parse for boolean.
 * Checks for numeric strings, and "true", else casting to boolean.
 * @summary Parse for boolean.
 * @category Type
 * @arg {string} value
 * @returns {boolean}
 */
export function parseBool(value) {
	if (isNumeric(value)) {
		return !!Number(value);
	} else if (isString(value)) {
		return value.toLowerCase().trim() === "true";
	}
	return !!value;
}
