import { isObject } from "./isObject";

/**
 * Determine whether a value is a Plain Old Javascript Object (POJO)
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isPojo(value) {
	return isObject(value) && Object.getPrototypeOf(value) === Object.prototype;
}
