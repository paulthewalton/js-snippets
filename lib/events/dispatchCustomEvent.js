import { isPojo, isString } from "../type";

/**
 * Dispatch a custom event of type `eventType` on `target`, defaults to document.
 * * Returns true on success, false on failure.
 * @summary Dispatch a custom event.
 * @category Event
 * @arg {string} eventType The event type.
 * @arg {EventTarget} [target=document] - The element to dispatch the event.
 * @arg {Object} [options] - Event options.
 * @arg {boolean} [options.bubbles=false] - Whether the event will bubble.
 * @arg {boolean} [options.cancelable=false] - Whether the event is cancelable.
 * @arg {boolean} [options.composed=false] - Whether the event is composed.
 * @arg {*} [options.detail] - Any data to pass to the event handler.
 * @returns {boolean}
 */
export function dispatchCustomEvent(eventType, target, options) {
	let event;
	if (!isString(eventType)) {
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
			event.initCustomEvent(eventType, options.bubbles, options.cancelable, options.detail);
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
