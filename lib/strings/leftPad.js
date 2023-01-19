/**
 * Add left padding to a string. Only validation is converting non-zero falsey
 * values for `char` to a single space.
 * @summary Add left padding to a string.
 * @category String
 * @arg {string} str - String to pad, value is cast to string.
 * @arg {number} length - Desired minimum string length.
 * @arg {string} [char] - Padding character, default single space.
 * @returns {string}
 * @example
 * leftPad("hello", 8); // => "   hello"
 * leftPad(24, 4, 0); // => "0024"
 */
export function leftPad(str, length, char = " ") {
	str = String(str);
	if (!char && char !== 0) char = " ";
	while (str.length < length) {
		str = char + str;
	}
	return str;
}
