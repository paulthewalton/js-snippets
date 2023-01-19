import { stripCase } from "./stripCase";

/**
 * Snake case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example snakeCase("This is my sample"); // => "this_is_my_sample"
 */
export function snakeCase(str) {
	return stripCase(str).replace(/\s+/g, "_");
}
