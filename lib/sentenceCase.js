import { upperCaseFirst } from "./upperCaseFirst";
import { stripCase } from "./stripCase";

/**
 * Sentence case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example sentenceCase("this is my sample"); // => "This is my sample"
 */
export function sentenceCase(str) {
	return upperCaseFirst(stripCase(str));
}
