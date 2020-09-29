/**
 * @file
 * @kind overview
 * @summary Utilities for working with objects and their properties.
 * @author Paul Walton
 */

import { isObject, isPojo, areSameType } from "./type";
import { sequence } from "./functions";

/**
 * Verify that an object has all of the supplied properties.
 * @arg {string[]} proplist - List of property keys to check.
 * @arg {Object} subject - Object to check.
 * @returns {boolean}
 */
export function hasAllProps(proplist, subject) {
	return proplist.every((prop) => subject.hasOwnProperty(prop));
}

/**
 * Verify that an object has at least one of the supplied properties.
 * @arg {string[]} proplist - List of property keys to check.
 * @arg {Object} subject - Object to check.
 * @returns {boolean}
 */
export function hasAnyProps(proplist, subject) {
	return proplist.some((prop) => subject.hasOwnProperty(prop));
}

/**
 * Check a property of 2 objects to see if the values match.
 * @arg {string} prop - The property by which to evaluate.
 * @arg {Object} subjectA - An object to evaluate.
 * @arg {Object} subjectB - Another object to evaluate.
 * @returns {boolean}
 */
export function matchProps(prop, subjectA, subjectB) {
	return subjectA[prop] === subjectB[prop];
}

/**
 * Copy properties from one object to another recursively.
 * @arg {Object} target - Target object.
 * @arg {Object} extensions - Object with properties to copy.
 * @arg {number} [depth=-1] - Max depth for recursion. Negative value -> no limit.
 * @returns {Object}
 */
export function extend(target, extensions, depth = -1) {
	depth = depth >= 0 ? depth : -1;
	for (const key in extensions) {
		if (!extensions.hasOwnProperty(key)) {
			continue;
		}
		const value = extensions[key];
		if (depth !== 0 && isObject(target[key]) && (isPojo(value) || areSameType(value, target[key]))) {
			extend(target[key], value, depth - 1);
		} else {
			target[key] = value;
		}
	}
	return target;
}

/**
 * Get the difference between one object and another recursively.
 * @arg {Object} source - Object to get differences from.
 * @arg {Object} compareTo - Object to compare values to.
 * @arg {number} [depth=-1] - Max depth for recursion. Negative value -> no limit.
 * @returns {Object}
 */
export function diff(source, compareTo, depth = -1) {
	depth = depth >= 0 ? depth : -1;
	const output = {};
	for (const key in source) {
		if (!source.hasOwnProperty(key)) {
			continue;
		}
		const value = source[key];
		const compareValue = compareTo[key];
		if (depth !== 0 && isObject(compareValue) && (isPojo(value) || areSameType(value, compareValue))) {
			output[key] = diff(value, compareValue, depth - 1);
		} else if (value !== compareValue) {
			output[key] = value;
		}
	}
	return output;
}

/**
 * Snapshot the properties of an object.
 * @function
 * @arg {Object} obj
 * @returns {Object}
 */
export const snapshot = sequence(JSON.stringify, JSON.parse);

/**
 * Remove unknown properties from a given object (DESTRUCTIVE).
 * @arg {string[]} allowedProps - Array of allowed property keys.
 * @arg {Object} subject - Object to be processed.
 * @returns {Object}
 * @example
 * var o = {foo: 'bar', hello: 'world', sieze: 'today'};
 * allowProps(['foo', 'hello'], o); // o == {foo: 'bar', hello: 'world'}
 */
export function allowProps(allowedProps, subject) {
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
 * Remove known properties from a given object (DESTRUCTIVE).
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
