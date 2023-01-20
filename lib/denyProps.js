import { isObject } from "../type";

/**
 * Remove known properties from a given object (DESTRUCTIVE).
 * @category Object
 * @arg {string[]} deniedProps - Array of denied property keys.
 * @arg {Object} subject - Object to be processed.
 * @returns {Object}
 * @example
 * var o = {foo: 'bar', hello: 'world', sieze: 'today'};
 * denyProps(['foo', 'hello'], o); // o == {sieze: 'today'}
 */
export function denyProps(deniedProps, subject) {
	if (!isObject(subject)) {
		return subject;
	}
	for (const prop in subject) {
		if (subject.hasOwnProperty(prop) && deniedProps.includes(prop)) {
			delete subject[prop];
		}
	}
	return subject;
}
