import { upperCaseWords } from "./upperCaseWords";
import { stripCase } from "./stripCase";

/**
 * Title case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example titleCase("this is my sample"); // => "This Is My Sample"
 */
export function titleCase(str) {
	return upperCaseWords(stripCase(str));
}
