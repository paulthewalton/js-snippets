/**
 * Verify that an object has all of the supplied properties.
 * @category Object
 * @arg {string[]} proplist - List of property keys to check.
 * @arg {Object} subject - Object to check.
 * @returns {boolean}
 */
export function hasAllProps(proplist, subject) {
	return proplist.every((prop) => subject.hasOwnProperty(prop));
}
