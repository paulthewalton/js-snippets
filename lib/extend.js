import { isObject, isPojo, areSameType } from "../type";

/**
 * Copy properties from one object to another recursively.
 * @category Object
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
