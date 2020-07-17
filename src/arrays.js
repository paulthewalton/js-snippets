/**
 * @file
 * @kind overview
 * @summary Array utility functions.
 * @author Paul Walton
 */

import { isCallable } from "./type";

/**
 * Make sure that a value is an array.
 * @arg {*} value - Value to check.
 * @arg {number} [minLength=0] - Minimum length for returned array.
 * @arg {*} [fill] - Value to insert when filling. If function, will be called with the current index, inserting the returned value.
 * @returns {Array}
 */
export function assertArray(value, minLength = 0, fill = undefined) {
	let arr;
	if (Array.isArray(value)) {
		arr = value;
	} else if (value instanceof HTMLCollection || value instanceof NodeList) {
		arr = Array.from(value);
	} else if (value === undefined) {
		arr = [];
	} else {
		arr = [value]; // else wrap in array
	}
	while (arr.length < minLength) {
		arr.push(isCallable(fill) ? fill(arr.length) : fill);
	}
	return arr;
}

/**
 * Check whether 2 arrays are equal.
 * @arg {Array} a - First array.
 * @arg {Array} b - Second array.
 * @returns {boolean}
 */
export function arraysAreEqual(a, b) {
	if (
		a == undefined || // eslint-disable-line eqeqeq
		b == undefined || // eslint-disable-line eqeqeq
		!Array.isArray(a) ||
		!Array.isArray(b) ||
		a.length !== b.length
	) {
		return false;
	}
	for (let i = a.length - 1; i >= 0; i--) {
		if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

/**
 * Strip array to unique values.
 * @arg {Array} arr - An array.
 * @returns {Array} Array of unique values.
 * @example
 * uniq([1, 1, 3, 'cat', 1, 'cat']); // -> [1, 3, 'cat']
 */
export function uniq(arr) {
	const primatives = {
			Boolean: Object.create(null),
			number: Object.create(null),
			string: Object.create(null),
		},
		objects = [];

	return arr.filter(function (item) {
		const type = typeof item;
		if (primatives.hasOwnProperty(type)) {
			return primatives[type].hasOwnProperty(item) ? false : (primatives[type][item] = true);
		}
		return objects.indexOf(item) >= 0 ? false : objects.push(item);
	});
}

/**
 * Flatten an array up to a set number of levels.
 * @arg {Array} arr - Array to flatten.
 * @arg {number} [depth=1] - Max depth of flattening.
 * @returns {Array}
 * @example
 * flatten([1,2,[3,4],5]); // -> [1,2,3,4,5]
 * flatten([1,2,[3,[4]],5], 1); // -> [1,2,3,[4],5]
 * flatten([1,2,[3,[[[[4]]]]],5], Infinity); // -> [1,2,3,4,5]
 */
export function flatten(arr, depth = 1) {
	return depth > 0
		? arr.reduce((acc, val) => {
				return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
		  }, [])
		: arr.slice();
}
/**
 * Filter unknown values out of a given array.
 * @arg {Array} allowedValues - Array of allowed values/objects.
 * @arg {Array} subject - Array to filter.
 * @returns {Array} Filtered array.
 * @example
 * allow([2,4], [1,1,2,3,4,4,4,5,9]); // -> [2,4,4,4]
 */
export function allowValues(allowedValues, subject) {
	return subject.filter((value) => allowedValues.includes(value));
}

/**
 * Filter known values out of a given array.
 * @arg {Array} deniedValues - Array of denyed values/objects.
 * @arg {Array} subject - Array to filter.
 * @returns {Array} Filtered array.
 * @example
 * var nums = [1,1,2,3,4,4,4,5,9];
 * nums = denyValues([2,4], nums); // -> [1,1,3,5,9]
 */
export function denyValues(deniedValues, subject) {
	return subject.filter((value) => !deniedValues.includes(value));
}
