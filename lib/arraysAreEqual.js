/**
 * Check whether 2 arrays are equal.
 * @category Arrays
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
