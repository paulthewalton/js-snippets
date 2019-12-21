/**
 * Utility functions for checking types
 */

/**
 * Determine whether a value is a callable function
 * @function
 * @param {*} fn
 * @returns {Boolean}
 */
export const isCallable = value =>
	typeof value == "function" ||
	Object.prototype.toString.call(value) === "[object Function]";

/**
 * Reliable method of determining if int
 * @param {*} value
 * @returns {Boolean}
 */
export const isInt = value => {
	if (isNaN(value)) {
		return false;
	}
	const x = parseFloat(value);
	return (x | 0) === x; // eslint-disable-line no-bitwise
};

/**
 * Check if value is numeric
 * @param {*} value
 * @returns {Boolean}
 */
export const isNumeric = value => !isNaN(value);

/**
 * Check if a value is a string
 * @param {*} value
 * @returns {Boolean}
 */
export const isString = value => typeof value == "string" || value instanceof String;

/**
 * Determine whether a value is an Object
 * @param {*} - obj value to test
 * @returns {Boolean}
 */
export const isObject = value => value !== null && typeof value == "object";

/**
 * Determine whether a value is a Plain Old Javascript Object (POJO)
 * @param {*} value - obj value to test
 * @returns {Boolean}
 */
export const isPojo = value =>
	isObject(value) && Object.getPrototypeOf(value) === Object.prototype;

/**
 * Check if a value is a DOM object, a.k.a. Node
 * @param {*} value
 * @returns {Boolean}
 */
export const isDomObject = value => value instanceof Node;

/**
 * Parse for boolean.
 * Checks for numeric strings, and "true", else casting to boolean.
 * @param {String} value
 * @returns {Boolean}
 */
export function parseBool(value) {
	if (isNumeric(value)) {
		return !!Number(value);
	} else if (isString(value)) {
		return value.toLowerCase().trim() === "true";
	}
	return !!value;
}
