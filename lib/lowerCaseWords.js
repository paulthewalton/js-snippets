/**
 * Lower case the first letter of each word in a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 */
export function lowerCaseWords(str) {
	return str.replace(/\b\w/g, (match) => match.toLowerCase());
}
