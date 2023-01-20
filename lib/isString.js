/**
 * Check if a value is a string
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isString(value) {
	return typeof value == "string" || value instanceof String;
}
