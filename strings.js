/**
 * Parse a CSS time string into ms
 * @param {String} cssTimeStr
 * @returns {number}
 */
export function parseCSSTime(cssTimeStr) {
	const time = parseFloat(cssTimeStr);
	if (time && cssTimeStr.endsWith("s")) {
		return time * (cssTimeStr.endsWith("ms") ? 1 : 1000);
	}
	return 0;
}

/**
 * Copy a string to the users clipboard
 * @param {String} str - string to copy to clipboard
 */
export function copyToClipboard(str) {
	const el = document.createElement("textarea"); // Create a <textarea> element
	el.value = str; // Set its value to the string that you want copied
	el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
	el.style.position = "absolute";
	el.style.left = "-9999px"; // Move outside the screen to make it invisible
	document.body.appendChild(el); // Append the <textarea> element to the HTML document
	const selected =
		document.getSelection().rangeCount > 0 // Check if there is any content selected previously
			? document.getSelection().getRangeAt(0) // Store selection if found
			: false; // Mark as false to know no selection existed before
	el.select(); // Select the <textarea> content
	document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
	document.body.removeChild(el); // Remove the <textarea> element
	if (selected) {
		// If a selection existed before copying
		document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
		document.getSelection().addRange(selected); // Restore the original selection
	}
}

/**
 * Strip the case of a string: no capitals, words separated by a single space
 * @param {String} str
 * @returns {String}
 */
export const stripCase = str =>
	str
		.replace(/([A-Z]+)/, " $1")
		.replace(/[_-]+/, " ")
		.replace(/\s+/, " ")
		.trim()
		.toLowerCase();

/**
 * Upper case the first letter of each word in a string.
 * @param {String} str
 * @returns {String}
 */
export const upperCaseWords = str => str.replace(/\b\w/, match => match.toUpperCase());

/**
 * Lower case the first letter of each word in a string.
 * @param {String} str
 * @returns {String}
 */
export const lowerCaseWords = str => str.replace(/\b\w/, match => match.toLowerCase());

/**
 * Upper case the first letter of a string.
 * @param {String} str
 * @returns {String}
 */
export const upperCaseFirst = str => str.charAt(0).toUpperCase + str.slice(1);

/**
 * Lower case the first letter of a string.
 * @param {String} str
 * @returns {String}
 */
export const lowerCaseFirst = str => str.charAt(0).toLowerCase + str.slice(1);

/**
 * Sentence case a string, i.e. This text is sentenced
 * @param {String} str
 * @returns {String}
 */
export const sentenceCase = str => upperCaseFirst(stripCase(str));

/**
 * Title case a string, i.e. This Text Is Titled
 * @param {String} str
 * @returns {String}
 */
export const titleCase = str => upperCaseWords(stripCase(str));

/**
 * Pascal case a string, i.e. ThisTextIsPascaled
 * @param {String} str
 * @returns {String}
 */
export const pascalCase = str => titleCase(str).replace(" ", "");

/**
 * Snake case a string, i.e. this_text_is_snaked
 * @param {String} str
 * @returns {String}
 */
export const snakeCase = str => stripCase(str).replace(" ", "_");

/**
 * Kebab case a string, i.e. this-text-is-kebabed
 * @param {String} str
 * @returns {String}
 */
export const kebabCase = str => stripCase(str).replace(" ", "-");

/**
 * Camel case a string, i.e. thisTextIsCameled
 * @param {String} str
 * @returns {String}
 */
export const camelCase = str => lowerCaseFirst(pascalCase(str));
