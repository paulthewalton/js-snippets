/**
 * Strip array to unique values.
 * @category Arrays
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
