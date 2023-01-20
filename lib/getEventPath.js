import { getParents } from "../elements";

/**
 * Get the bubble path of an event.
 * @category Event
 * @arg {Event} event
 * @return {EventTarget[]}
 */
export function getEventPath(event) {
	const path = (event.composedPath && event.composedPath()) || event.deepPath || event.path || false;
	if (path) {
		// Safari doesn't include Window, but it should.
		return path.indexOf(window) < 0 ? path.concat(window) : path;
	}
	if (event.target === window) {
		return [window];
	}
	return getParents(event.target, true).concat(window);
}
