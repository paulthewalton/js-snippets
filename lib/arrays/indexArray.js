import { partial } from "../functions";
import { getIndexedValue } from "./getIndexedValue";

/**
 * @callback IndexedArrayAccessor
 * @template T, K
 * @arg {K} key
 * @returns {T|undefined} From associated array
 */

/**
 * Index an array of objects to quickly access its entries by a unique key.
 * @category Arrays
 * @template T, K
 * @arg {Array.<T>} arr
 * @arg {string} uniqueKey - Key for a property that will be unique for each member of the array.
 * @returns {[Map<K, number>, IndexedArrayAccessor<T, K>]} Index object and prefilled accessor function
 * @example
 * const fruitsInKitchen = [
 * 	{ name: "banana" },
 * 	{ name: "kiwi" },
 * 	{ name: "mango" },
 * ];
 * const [fruitsByName, getFruitsByName] = indexArray(fruitsInKitchen, "name");
 * fruitsByName.get("kiwi"); // => { name: "kiwi" }
 * getFruitsByName("mango"); // => { name: "mango" }
 * getFruitsByName("banana") === fruitsInKitchen[0]; // => true
 */
export function indexArray(arr, uniqueKey) {
	/** @type {ArrayIndex<T>} */
	const idx = new Map();
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		idx.set(value[uniqueKey], i);
	}
	return [idx, partial(getIndexedValue, arr, idx)];
}
