import { snakeCase } from "./snakeCase";

/**
 * Upper snake case a string (aka constant case).
 * @category String
 * @arg {string} str
 * @returns {string}
 * @example upperSnakeCase("This is my sample"); // => "THIS_IS_MY_SAMPLE"
 */
export function upperSnakeCase(str) {
	return snakeCase(str).toUpperCase();
}
