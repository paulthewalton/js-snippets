/**
 * Strip substrings from the start of a string.
 * @category String
 * @arg {string|RegExp} match - Substring or regex to match.
 * @arg {string} str
 * @returns {string}
 */
export function stripStart(match, str) {
	if (match instanceof RegExp) {
		match = new RegExp(`^(${match.source})`, match.flags);
		while (match.test(str)) {
			str = str.replace(match, "");
		}
	} else {
		while (str.startsWith(match)) {
			str = str.slice(match.length);
		}
	}
	return str;
}
