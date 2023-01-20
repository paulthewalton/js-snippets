/**
 * Check a property of 2 objects to see if the values match.
 * @category Object
 * @arg {string} prop - The property by which to evaluate.
 * @arg {Object} subjectA - An object to evaluate.
 * @arg {Object} subjectB - Another object to evaluate.
 * @returns {boolean}
 */
export function matchProps(prop, subjectA, subjectB) {
	return subjectA[prop] === subjectB[prop];
}
