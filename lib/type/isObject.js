/**
 * Determine whether a value is an Object
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isObject(value) {
	return value !== null && typeof value == "object";
}
