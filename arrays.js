/**
 * Make sure that a value is an array
 * @param {*} value - value to check
 * @returns {Array}
 */
export function assertArray(value) {
	if (Array.isArray(value)) {
		return value;
	}
	if (value instanceof HTMLCollection || value instanceof NodeList) {
		return Array.from(value);
	}
	return [value]; // else wrap in array
}
/**
 * Check whether 2 arrays are equal
 * @param {Array} a - first array
 * @param {Array} b - second array
 * @returns {Boolean}
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
 * strip array to unique values
 * @param {Array} arr - an array
 * @returns {Array} array of unique values
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

	return arr.filter(function(item) {
		const type = typeof item;
		if (primatives.hasOwnProperty(type)) {
			return primatives[type].hasOwnProperty(item)
				? false
				: (primatives[type][item] = true);
		}
		return objects.indexOf(item) >= 0 ? false : objects.push(item);
	});
}

/**
 * Filter unknown values out of a given array
 * @param {Array} whitelist - array of whitelisted values/objects
 * @param {Array} subject - array to filter
 * @returns {Array} Filtered array
 * @example
 * whitelist([2,4], [1,1,2,3,4,4,4,5,9]); // -> [2,4,4,4]
 */
export function whitelist(allowedValues, subject) {
	return subject.filter(value => allowedValues.includes(value));
}

/**
 * Filter known values out of a given array
 * @param {Array} blacklist - array of blacklisted values/objects
 * @param {Array} subject - array to filter
 * @returns {Array} Filtered array
 * @example
 * var nums = [1,1,2,3,4,4,4,5,9];
 * nums = blacklist([2,4], nums); // -> [1,1,3,5,9]
 */
export function blacklist(prohibitedValues, subject) {
	return subject.filter(value => !prohibitedValues.includes(value));
}
