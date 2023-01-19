/**
 * Get a copy of an array. Just aliases Array.prototype.slice to better communicate intent.
 * @summary Get a copy of an array.
 * @function
 * @category Arrays
 * @arg {Array} arr
 * @returns {Array}
 * @example
 * let a = [1,2,3];
 * let b = copyArray(a);
 * a == b; // -> false
 * arraysAreEqual(a,b); // -> true
 */
export const copyArray = (arr) => arr.slice(0);
