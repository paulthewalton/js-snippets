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
