/**
 * @file
 * @kind overview
 * @summary Array utility functions.
 * @author Paul Walton
 */

import { isCallable } from "./type";
import { partial } from "./functions";

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
 * @arg {boolean} strict - Whether to evaluate each item, or just compare JSON strings.
 * @returns {boolean}
 */
export function arraysAreEqual(a, b, strict = false) {
	if (a == null || b == null || !Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
		return false;
	}
	if (!strict) {
		return JSON.stringify(a) === JSON.stringify(b);
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
 * @arg {Array} deniedValues - Array of denied values/objects.
 * @arg {Array} subject - Array to filter.
 * @returns {Array} Filtered array.
 * @example
 * var nums = [1,1,2,3,4,4,4,5,9];
 * nums = denyValues([2,4], nums); // -> [1,1,3,5,9]
 */
export function denyValues(deniedValues, subject) {
	return subject.filter((value) => !deniedValues.includes(value));
}

/**
 * Index an array of objects to quickly access its entries by a unique key.
 * @arg {Object[]} arr
 * @arg {string|number} uniqueKey - Key for a property that will be unique for each member of the array.
 * @returns {Array.<Object, Function>} Index object and prefilled accessor function
 * @example
 * const fruitsInKitchen = [
 * 	{ name: "banana" },
 * 	{ name: "kiwi" },
 * 	{ name: "mango" },
 * ];
 * const [fruitsByName, getFruitsByName] = indexArray(fruitsInKitchen, "name");
 * fruitsByName["kiwi"]; // => { name: "kiwi" }
 * getFruitsByName("mango"); // => { name: "mango" }
 * getFruitsByName("banana") === fruitsInKitchen[0]; // => true
 */
export function indexArray(arr, uniqueKey) {
	const idx = {};
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		idx[value[uniqueKey]] = i;
	}
	return [idx, partial(getIndexedValue, arr, idx)];
}

/**
 * Get indexed entry of an array by the indexed property.
 * * Assumes `idx` is up to date with `arr`.
 * @summary Get indexed entry of an array by the indexed property.
 * @function
 * @arg {Object[]} arr
 * @arg {Object.<(string|number), number>} idx
 * @arg {string|number} key
 * @returns {Object|undefined}
 * @example
 * const fruitsInKitchen = [
 * 	{ name: "banana" },
 * 	{ name: "kiwi" },
 * ];
 * const [fruitsByName] = indexArray(fruitsInKitchen, "name");
 * getIndexedValue(fruitsInKitchen, fruitsByName, "kiwi"); // => { name: "kiwi" }
 */
export const getIndexedValue = (arr, idx, key) => arr[idx[key]];

/**
 * Shuffle the elements of an array. Uses the Durstenfeld shuffle.
 * * Shuffles in place, use `arr.slice(0)` to get a copy of the array to shuffle.
 * @summary Shuffle the elements of an array.
 * @arg {Array} arr
 * @returns {Array}
 * @example
 * const numbers = [1,2,3,4,5];
 * shuffleArray(numbers); // -> [1,4,2,5,3]
 */
export function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

/**
 * Get a rotated copy of an array.
 * @arg {Array} arr
 * @arg {number} [rotation=1] Index to rotate to / Number of places to rotate by.
 * @return {Array}
 * @example
 * let arr = [1,2,3,4];
 * rotateArray(arr); // -> [2,3,4,1]
 * rotateArray(arr, 3); // -> [4,1,2,3]
 * rotateArray(arr, -2); // -> [3,4,1,2]
 */
export function rotateArray(arr, rotation = 1) {
	rotation = rotation % arr.length;
	if (!rotation) {
		return arr;
	}
	return arr.slice(rotation).concat(arr.slice(0, rotation));
}

/**
 * Get a copy of an array. Just aliases Array.prototype.slice to better communicate intent.
 * @summary Get a copy of an array.
 * @arg {Array} arr
 * @returns {Array}
 * @example
 * let a = [1,2,3];
 * let b = copyArray(a);
 * a == b; // -> false
 * arraysAreEqual(a,b); // -> true
 */
export const copyArray = (arr) => arr.slice(0);
