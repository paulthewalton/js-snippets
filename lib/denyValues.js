/**
 * Filter known values out of a given array.
 * @category Arrays
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
