/**
 * Check if value is a number
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isNumber(value) {
	return (typeof value === "number" && !isNaN(value)) || value instanceof Number;
}
