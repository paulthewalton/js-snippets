/**
 * Upper case the first letter of a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 */
export function upperCaseFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
