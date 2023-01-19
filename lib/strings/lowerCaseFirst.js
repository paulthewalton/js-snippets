/**
 * Lower case the first letter of a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 */
export function lowerCaseFirst(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}
