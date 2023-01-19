/**
 * Compare 2 values numerically.
 * * Non-numeric values are considered "greater".
 * @summary Compare 2 values numerically.
 * @category Comparisons
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
export function byNumericValue(a, b) {
	a = Number(a);
	b = Number(b);
	switch (true) {
		case isNaN(a) && isNaN(b):
			return 0;
		case isNaN(a):
			return 1;
		case isNaN(b):
			return -1;
		default:
			return a - b;
	}
}
