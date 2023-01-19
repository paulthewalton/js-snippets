/**
 * Verify that an object has at least one of the supplied properties.
 * @category Object
 * @arg {string[]} proplist - List of property keys to check.
 * @arg {Object} subject - Object to check.
 * @returns {boolean}
 */
export function hasAnyProps(proplist, subject) {
	return proplist.some((prop) => subject.hasOwnProperty(prop));
}
