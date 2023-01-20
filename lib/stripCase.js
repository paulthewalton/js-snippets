/**
 * Strip the case of a string: no capitals, words separated by a single space.
 * @summary Strip the case of a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 */
export function stripCase(str) {
	return str
		.replace(/([A-Z]+)/g, " $1")
		.replace(/[_-]+/g, " ")
		.replace(/\s+/g, " ")
		.trim()
		.toLowerCase();
}
