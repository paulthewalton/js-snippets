/**
 * @file
 * @kind overview
 * @summary Utilities for working with strings.
 * @author Paul Walton
 */

import { flatten } from "./arrays";

/**
 * Turn a fractional number into a percentage string.
 * @function
 * @arg {number} fraction
 * @returns {string}
 * @example percentage(0.725); // "72.5%"
 */
export const percentage = (fraction) => `${fraction * 100}%`;

/**
 * Get a unique id string.
 * @function
 * @returns {string}
 */
export const getUniqueId = () => `${Date.now()}-${Math.random()}`;

/**
 * Copy a string to the users clipboard.
 * @arg {string} str - String to copy to clipboard.
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

/**
 * Strip substrings from the end of a string.
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

/**
 * Join path segments.
 * @arg {...(string|string[])} segments - Path segments. Arrays and nested arrays will be flattened.
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
 * @summary Strip the case of a string.
 * @function
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
 * @function
 * @arg {string} str
 * @returns {string}
 */
export const upperCaseWords = (str) => str.replace(/\b\w/, (match) => match.toUpperCase());

/**
 * Lower case the first letter of each word in a string.
 * @function
 * @arg {string} str
 * @returns {string}
 */
export const lowerCaseWords = (str) => str.replace(/\b\w/, (match) => match.toLowerCase());

/**
 * Upper case the first letter of a string.
 * @function
 * @arg {string} str
 * @returns {string}
 */
export const upperCaseFirst = (str) => str.charAt(0).toUpperCase + str.slice(1);

/**
 * Lower case the first letter of a string.
 * @function
 * @arg {string} str
 * @returns {string}
 */
export const lowerCaseFirst = (str) => str.charAt(0).toLowerCase + str.slice(1);

/**
 * Sentence case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example sentenceCase("this is my sample"); // => "This is my sample"
 */
export const sentenceCase = (str) => upperCaseFirst(stripCase(str));

/**
 * Title case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example titleCase("this is my sample"); // => "This Is My Sample"
 */
export const titleCase = (str) => upperCaseWords(stripCase(str));

/**
 * Pascal case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example pascalCase("this is my sample"); // => "ThisIsMySample"
 */
export const pascalCase = (str) => titleCase(str).replace(" ", "");

/**
 * Snake case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example snakeCase("This is my sample"); // => "this_is_my_sample"
 */
export const snakeCase = (str) => stripCase(str).replace(" ", "_");

/**
 * Kebab case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example kebabCase("This is my sample"); // => "this-is-my-sample"
 */
export const kebabCase = (str) => stripCase(str).replace(" ", "-");

/**
 * Camel case a string.
 * @function
 * @arg {string} str
 * @returns {string}
 * @example camelCase("This is my sample"); // => "thisIsMySample"
 */
export const camelCase = (str) => lowerCaseFirst(pascalCase(str));

/**
 * Add left padding to a string. Only validation is converting non-zero falsey
 * values for `char` to a single space.
 * @summary Add left padding to a string.
 * @function
 * @arg {string} str - String to pad, value is cast to string.
 * @arg {number} length - Desired minimum string length.
 * @arg {string} [char] - Padding character, default single space.
 * @returns {string}
 * @example
 * leftPad("hello", 8); // => "   hello"
 * leftPad(24, 4, 0); // => "0024"
 */
export const leftPad = (str, length, char = " ") => {
	str = String(str);
	if (!char && char !== 0) char = " ";
	while (str.length < length) {
		str = char + str;
	}
	return str;
};

/**
 * Get a formatted string representation of time in seconds.
 * @function
 * @arg {number} seconds - Time in seconds.
 * @arg {boolean} [forceHours=false] - Whether to include hours in the output when time is less than 1 hour.
 * @returns {string} Formatted time string.
 * @example
 * formatSeconds(27); // => "0:27"
 * formatSeconds(3822); // => "1:03:42"
 */
export const formatSeconds = (seconds, forceHours = false) => {
	const hours = Math.floor(seconds / 3600);
	let output = `${Math.floor((seconds % 3600) / 60)}:${leftPad(Math.floor(seconds % 60), 2, 0)}`;
	if (hours || forceHours) {
		output = `${hours}:${leftPad(output, 5, 0)}`;
	}
	return output;
};
