/**
 * Upper case the first letter of each word in a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 */
export function upperCaseWords(str) {
	return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
