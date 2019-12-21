import { isObject } from "./type";

/**
 * Verify that an object has all of the supplied properties
 * @param {String[]} proplist - list of property keys to check
 * @param {Object} subject - object to check
 * @returns {Boolean}
 */
export function hasAllProps(proplist, subject) {
	return proplist.every(prop => subject.hasOwnProperty(prop));
}

/**
 * Verify that an object has at least one of the supplied properties
 * @param {String[]} proplist - list of property keys to check
 * @param {Object} subject - object to check
 * @returns {Boolean}
 */
export function hasAnyProps(proplist, subject) {
	return proplist.some(prop => subject.hasOwnProperty(prop));
}

/**
 * Check a property of 2 objects to see if the values match
 * @param {String} prop - the property by which to evaluate
 * @param {Object} subjectA - an object to evaluate
 * @param {Object} subjectB - another object to evaluate
 * @returns {Boolean}
 */
export function matchProps(prop, subjectA, subjectB) {
	return subjectA[prop] === subjectB[prop];
}

/**
 * Compare a property of 2 objects
 * @param {String} prop - the property by which to evaluate
 * @param {Object} subjectA - the object to evaluate
 * @param {Object} subjectB - another object to evaluate
 * @returns {Number} - 0 if equal, 1 if more, -1 if less
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

/**
 * Remove unknown properties from a given object - DESTRUCTIVE
 * @param {string[]} allowedProps - array of whitelisted property keys
 * @param {Object} subject - object to be processed
 * @example
 * var o = {foo: 'bar', hello: 'world', sieze: 'today'};
 * whitelistProps(['foo', 'hello'], o); // o == {foo: 'bar', hello: 'world'}
 */
export function whitelistProps(allowedProps, subject) {
	if (!isObject(subject)) {
		return subject;
	}
	for (const prop in subject) {
		if (subject.hasOwnProperty(prop) && !allowedProps.includes(prop)) {
			delete subject[prop];
		}
	}
	return subject;
}

/**
 * Remove known properties from a given object - DESTRUCTIVE
 * @param {string[]|string} disallowedProps - array of blacklisted property keys
 * @param {Object} subject - object to be processed
 * @example
 * var o = {foo: 'bar', hello: 'world', sieze: 'today'};
 * blacklistProps(['foo', 'hello'], o); // o == {sieze: 'today'}
 */
export function blacklistProps(disallowedProps, subject) {
	if (!isObject(subject)) {
		return subject;
	}
	for (const prop in subject) {
		if (subject.hasOwnProperty(prop) && disallowedProps.includes(prop)) {
			delete subject[prop];
		}
	}
	return subject;
}
