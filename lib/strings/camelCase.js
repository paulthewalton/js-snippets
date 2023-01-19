import { lowerCaseFirst } from "./lowerCaseFirst";
import { pascalCase } from "./pascalCase";

/**
 * Camel case a string.
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example camelCase("This is my sample"); // => "thisIsMySample"
 */
export function camelCase(str) {
	return lowerCaseFirst(pascalCase(str));
}
