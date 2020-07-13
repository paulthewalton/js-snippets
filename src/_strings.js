import { flatten } from "./_arrays";

/**
 * @function
 * @returns {string}
 */
export const percentage = (fraction) => `${fraction * 100}%`;

/**
 * @function
 * @returns {string}
 */
export const getUniqueId = () => `${Date.now()}-${Math.random()}`;

/**
 * Copy a string to the users clipboard.
 * @arg {string} str String to copy to clipboard.
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
 * Strip substrings from the start of a string.
 * @arg {string|RegExp} match Substring or regex to match.
 * @arg {string} str String to operate on.
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

/**
 * Strip substrings from the end of a string.
 * @arg {string|RegExp} match Substring or regex to match.
 * @arg {string} str String to operate on.
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

/**
 * Join path segments.
 * @arg {...string|string[]} segments Path segments. Arrays and nested arrays will be flattened.
 * @returns {string}
 */
export function pathJoin(...segments) {
	segments = flatten(segments, Infinity);
	segments = segments.map((segment, index) => {
		if (index !== 0) {
			segment = stripStart("/", segment);
		}
		if (index !== segments.length - 1) {
			segment = stripEnd("/", segment);
		}
		return segment;
	});
	return segments.join("/");
}

/**
 * Strip the case of a string: no capitals, words separated by a single space.
 * @arg {string} str
 * @returns {string}
 */
export const stripCase = (str) =>
	str
		.replace(/([A-Z]+)/, " $1")
		.replace(/[_-]+/, " ")
		.replace(/\s+/, " ")
		.trim()
		.toLowerCase();

/**
 * Upper case the first letter of each word in a string.
 * @arg {string} str
 * @returns {string}
 */
export const upperCaseWords = (str) => str.replace(/\b\w/, (match) => match.toUpperCase());

/**
 * Lower case the first letter of each word in a string.
 * @arg {string} str
 * @returns {string}
 */
export const lowerCaseWords = (str) => str.replace(/\b\w/, (match) => match.toLowerCase());

/**
 * Upper case the first letter of a string.
 * @arg {string} str
 * @returns {string}
 */
export const upperCaseFirst = (str) => str.charAt(0).toUpperCase + str.slice(1);

/**
 * Lower case the first letter of a string.
 * @arg {string} str
 * @returns {string}
 */
export const lowerCaseFirst = (str) => str.charAt(0).toLowerCase + str.slice(1);

/**
 * Sentence case a string, i.e. This text is sentenced.
 * @arg {string} str
 * @returns {string}
 */
export const sentenceCase = (str) => upperCaseFirst(stripCase(str));

/**
 * Title case a string, i.e. This Text Is Titled.
 * @arg {string} str
 * @returns {string}
 */
export const titleCase = (str) => upperCaseWords(stripCase(str));

/**
 * Pascal case a string, i.e. ThisTextIsPascaled.
 * @arg {string} str
 * @returns {string}
 */
export const pascalCase = (str) => titleCase(str).replace(" ", "");

/**
 * Snake case a string, i.e. this_text_is_snaked.
 * @arg {string} str
 * @returns {string}
 */
export const snakeCase = (str) => stripCase(str).replace(" ", "_");

/**
 * Kebab case a string, i.e. this-text-is-kebabed.
 * @arg {string} str
 * @returns {string}
 */
export const kebabCase = (str) => stripCase(str).replace(" ", "-");

/**
 * Camel case a string, i.e. thisTextIsCameled.
 * @arg {string} str
 * @returns {string}
 */
export const camelCase = (str) => lowerCaseFirst(pascalCase(str));
