import { stripStart } from "./stripStart";
import { stripEnd } from "./stripEnd";
import { flatten } from "./flatten";

/**
 * Join path segments.
 * @category String
 * @arg {...(string|string[])} segments - Path segments. Arrays and nested arrays will be flattened.
 * @returns {string}
 */
export function pathJoin(...segments) {
	segments = flatten(segments, Infinity);
	segments = segments.map((segment, index) => {
		if (index !== 0) {
			segment = stripStart("/", segment);
		}
		if (index !== segments.length - 1) {
			segment = stripEnd("/", segment);
		}
		return segment;
	});
	return segments.join("/");
}
