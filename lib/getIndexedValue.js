/**
 * Get indexed entry of an array by the indexed property.
 * * Assumes `idx` is up to date with `arr`.
 * @summary Get indexed entry of an array by the indexed property.
 * @function
 * @category Arrays
 * @template K
 * @arg {Object[]} arr Array of indexed objects
 * @arg {Map<K, number>} idx Array index
 * @arg {K} key
 * @returns {Object|undefined}
 * @example
 * const fruitsInKitchen = [
 * 	{ name: "banana" },
 * 	{ name: "kiwi" },
 * ];
 * const [fruitsByName] = indexArray(fruitsInKitchen, "name");
 * getIndexedValue(fruitsInKitchen, fruitsByName, "kiwi"); // => { name: "kiwi" }
 */
export const getIndexedValue = (arr, idx, key) => arr[idx.get(key)];
