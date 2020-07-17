/**
 * @file
 * @kind overview
 * @summary Utility functions for checking types.
 * @author Paul Walton
 */

function isES6ClassFunction(value) {
	try {
		var fnStr = Function.prototype.toString.call(value);
		return /^\s*class\b/.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
}

function tryFunctionToStr(value) {
	try {
		if (isES6ClassFunction(value)) return false;
		Function.prototype.toString.call(value);
		return true;
	} catch (e) {
		return false;
	}
}

/* eslint-disable-next-line no-undef */
const hasToStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

/**
 * Determine whether a value is a callable function
 * @arg {*} fn
 * @returns {boolean}
 */
export function isCallable(value) {
	switch (true) {
		case !value:
		case typeof value !== "function" && typeof value !== "object":
			return false;
		case typeof value === "function" && !value.prototype:
			return true;
		case hasToStringTag:
			return tryFunctionToStr(value);
		case isES6ClassFunction(value):
			return false;
		default:
			var strClass = Object.prototype.toString.call(value);
			return strClass === "[object Function]" || strClass === "[object GeneratorFunction]";
	}
}

/**
 * Reliable method of determining if int
 * @arg {*} value
 * @returns {boolean}
 */
export function isInt(value) {
	if (isNaN(value)) {
		return false;
	}
	const x = parseFloat(value);
	return (x | 0) === x; // eslint-disable-line no-bitwise
}

/**
 * Check if value is a number
 * @arg {*} value
 * @returns {boolean}
 */
export function isNumber(value) {
	return (typeof value === "number" && !isNaN(value)) || value instanceof Number;
}

/**
 * Check if value is an Array
 * @arg {*} value
 * @returns {boolean}
 */
export function isArray(value) {
	return Array.isArray(value);
}

/**
 * Check if value is numeric
 * @arg {*} value
 * @returns {boolean}
 */
export function isNumeric(value) {
	return !isNaN(value);
}

/**
 * Check if a value is a string
 * @arg {*} value
 * @returns {boolean}
 */
export function isString(value) {
	return typeof value == "string" || value instanceof String;
}

/**
 * Determine whether a value is an Object
 * @function
 * @arg {*} - obj value to test
 * @returns {boolean}
 */
export function isObject(value) {
	return value !== null && typeof value == "object";
}

/**
 * Determine whether a value is a Plain Old Javascript Object (POJO)
 * @function
 * @arg {*} value - obj value to test
 * @returns {boolean}
 */
export function isPojo(value) {
	return isObject(value) && Object.getPrototypeOf(value) === Object.prototype;
}

/**
 * Check if a value is a DOM object, a.k.a. Node
 * @function
 * @arg {*} value
 * @returns {boolean}
 */
export function isDomObject(value) {
	return value instanceof Node;
}

/**
 * Parse for boolean.
 * Checks for numeric strings, and "true", else casting to boolean.
 * @summary Parse for boolean.
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
 * Check whether any number of values are of the same type.
 * * checks typeof and object/function constructors.
 * @summary Check whether any number of values are of the same type.
 * @arg {*} value - All other values are tested agains this value.
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
