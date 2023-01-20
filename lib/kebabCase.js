import { stripCase } from "./stripCase";

/**
 * Kebab case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example kebabCase("This is my sample"); // => "this-is-my-sample"
 */
export function kebabCase(str) {
	return stripCase(str).replace(/\s+/g, "-");
}
