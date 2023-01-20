/**
 * Strip substrings from the end of a string.
 * @category String
 * @arg {string|RegExp} match - Substring or regex to match.
 * @arg {string} str
 * @returns {string}
 */
export function stripEnd(match, str) {
	if (match instanceof RegExp) {
		match = new RegExp(`(${match.source})\$`, match.flags);
		while (match.test(str)) {
			str = str.replace(match, "");
		}
	} else {
		while (str.endsWith(match)) {
			str = str.slice(0, str.length - match.length);
		}
	}
	return str;
}
