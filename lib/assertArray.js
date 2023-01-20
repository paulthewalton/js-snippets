import { isCallable } from "../type/isCallable";

/**
 * Make sure that a value is an array.
 * @category Arrays
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
