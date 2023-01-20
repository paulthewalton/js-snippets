import { titleCase } from "./titleCase";

/**
 * Pascal case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example pascalCase("this is my sample"); // => "ThisIsMySample"
 */
export function pascalCase(str) {
	return titleCase(str).replace(/\s+/g, "");
}
