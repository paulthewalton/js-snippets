import { isObject, isPojo, areSameType } from "../type";

/**
 * Get the difference between one object and another recursively.
 * @category Object
 * @arg {Object} source - Object to get differences from.
 * @arg {Object} compareTo - Object to compare values to.
 * @arg {number} [depth=-1] - Max depth for recursion. Negative value -> no limit.
 * @returns {Object}
 */
export function diff(source, compareTo, depth = -1) {
	depth = depth >= 0 ? depth : -1;
	const output = {};
	for (const key in source) {
		if (!source.hasOwnProperty(key)) {
			continue;
		}
		const value = source[key];
		const compareValue = compareTo[key];
		if (depth !== 0 && isObject(compareValue) && (isPojo(value) || areSameType(value, compareValue))) {
			output[key] = diff(value, compareValue, depth - 1);
		} else if (value !== compareValue) {
			output[key] = value;
		}
	}
	return output;
}
