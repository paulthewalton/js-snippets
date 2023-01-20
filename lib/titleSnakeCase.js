import { titleCase } from "./titleCase";

/**
 * Title snake case a string (aka PHP class case).
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example upperSnakeCase("This is my sample"); // => "This_Is_My_Sample"
 */
export function titleSnakeCase(str) {
	return titleCase(str).replace(/\s+/g, "_");
}
