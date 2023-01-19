/**
 * Check if a value is a DOM object, a.k.a. Node
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isDomObject(value) {
	return value instanceof Node;
}
