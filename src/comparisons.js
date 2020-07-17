/**
 * @file
 * @kind overview
 * @summary Comparison functions. Mostly for Array.prototype.sort().
 * @author Paul Walton
 */

/**
 * Compare 2 values numerically.
 * * Non-numeric values are considered "greater".
 * @summary Compare 2 values numerically.
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

/**
 * Compare a property of 2 objects.
 * @arg {string} prop The property by which to evaluate.
 * @arg {Object} subjectA The object to evaluate.
 * @arg {Object} subjectB Another object to evaluate.
 * @returns {number} 0 if equal, 1 if more, -1 if less.
 */
export function compareProps(prop, subjectA, subjectB) {
	if (subjectA[prop] < subjectB[prop]) {
		return -1;
	}
	if (subjectA[prop] > subjectB[prop]) {
		return 1;
	}
	return 0;
}
