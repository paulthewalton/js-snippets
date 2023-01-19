/**
 * Filter unknown values out of a given array.
 * @category Arrays
 * @arg {Array} allowedValues - Array of allowed values/objects.
 * @arg {Array} subject - Array to filter.
 * @returns {Array} Filtered array.
 * @example
 * allow([2,4], [1,1,2,3,4,4,4,5,9]); // -> [2,4,4,4]
 */
export function allowValues(allowedValues, subject) {
	return subject.filter((value) => allowedValues.includes(value));
}
