/**
 * Utility functions for checking types
 */

/**
 * Determine whether a value is a callable function
 * @function
 * @arg {*} fn
 * @returns {boolean}
 */
export const isCallable = value =>
	typeof value == "function" ||
	Object.prototype.toString.call(value) === "[object Function]" ||
	(isObject(value) && "call" in value);

/**
 * Reliable method of determining if int
 * @arg {*} value
 * @returns {boolean}
 */
export const isInt = value => {
	if (isNaN(value)) {
		return false;
	}
	const x = parseFloat(value);
	return (x | 0) === x; // eslint-disable-line no-bitwise
};

/**
 * Check if value is a number
 * @arg {*} value
 * @returns {boolean}
 */
export const isNumber = value => typeof value === "number" || value instanceof Number;

/**
 * Check if value is a number
 * @arg {*} value
 * @returns {boolean}
 */
export const isArray = value => value instanceof Array;

/**
 * Check if value is numeric
 * @arg {*} value
 * @returns {boolean}
 */
export const isNumeric = value => !isNaN(value);

/**
 * Check if a value is a string
 * @arg {*} value
 * @returns {boolean}
 */
export const isString = value => typeof value == "string" || value instanceof String;

/**
 * Determine whether a value is an Object
 * @arg {*} - obj value to test
 * @returns {boolean}
 */
export const isObject = value => value !== null && typeof value == "object";

/**
 * Determine whether a value is a Plain Old Javascript Object (POJO)
 * @arg {*} value - obj value to test
 * @returns {boolean}
 */
export const isPojo = value => isObject(value) && Object.getPrototypeOf(value) === Object.prototype;

/**
 * Check if a value is a DOM object, a.k.a. Node
 * @arg {*} value
 * @returns {boolean}
 */
export const isDomObject = value => value instanceof Node;

/**
 * Parse for boolean.
 * Checks for numeric strings, and "true", else casting to boolean.
 * @arg {string} value
 * @returns {boolean}
 */
export function parseBool(value) {
	if (isNumeric(value)) {
		return !!Number(value);
	} else if (isString(value)) {
		return value.toLowerCase().trim() === "true";
	}
	return !!value;
}

/**
 * Check whether any number of values are of the same type
 * * checks typeof and object/function constructors
 * @arg {*} value All other values are tested agains this value.
 * @arg {...*} values
 * @returns {boolean}
 */
export function areSameType(value, ...values) {
	const vType = typeof value,
		vCon = value != null && value.constructor;
	for (let i = 0; i < values.length; i++) {
		const val = values[i];
		if (typeof val !== vType || (vCon && (val == null || val.constructor !== vCon))) {
			return false;
		}
	}
	return true;
}
