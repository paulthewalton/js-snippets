import { isPojo } from "./type";
import { getParents } from "./elements";

/**
 * Vanilla JS replacement for jQuery document ready
 * @param {Function} fn - callback for on document ready
 */
export function onDocReady(fn) {
	if (
		document.attachEvent
			? document.readyState === "complete"
			: document.readyState !== "loading"
	) {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

/**
 * Dispatch a custom event of type `eventType` on `target`, defaults to document
 * @param {String} eventType - the event type
 * @param {EventTarget} [target=document] - the element to dispatch the event
 * @param {*[]} [options] - event options
 * @param {*|Boolean} [options.bubbles=false] - whether the event will bubble
 * @param {*|Boolean} [options.cancelable=false] - whether the event is cancelable
 * @param {*|Boolean} [options.composed=false] - whether the event is composed
 * @param {*} [options.detail=undefined] - any data to pass to the event handler
 * @returns {Boolean} - true on success, false on fail
 */
export function dispatchCustomEvent(eventType, target, options) {
	let event;
	if (typeof eventType !== "string" && !(eventType instanceof String)) {
		return false;
	}
	target = !!target && target instanceof EventTarget ? target : document;
	options = isPojo(options) ? options : {};
	options.bubbles = !!options.bubbles;
	options.cancelable = !!options.cancelable;
	options.composed = !!options.composed;
	if (!!options.detail) {
		try {
			event = new CustomEvent(eventType, options);
		} catch (_) {
			event = document.createEvent("CustomEvent");
			event.initCustomEvent(
				eventType,
				options.bubbles,
				options.cancelable,
				options.detail
			);
		}
	} else {
		try {
			event = new Event(eventType, options);
		} catch (_) {
			event = document.createEvent("Event");
			event.initEvent(eventType, options.bubbles, options.cancelable);
		}
	}
	target.dispatchEvent(event);
	return true;
}

/**
 * Get the bubble path of an event.
 * @param {Event} event
 * @return {EventTarget[]}
 */
export function getEventPath(event) {
	const path =
		(event.composedPath && event.composedPath()) ||
		event.deepPath ||
		event.path ||
		false;
	if (path != null) {
		// Safari doesn't include Window, but it should.
		return path.indexOf(window) < 0 ? path.concat(window) : path;
	}
	if (event.target === window) {
		return [window];
	}
	return getParents(event.target, true).concat(window);
}
