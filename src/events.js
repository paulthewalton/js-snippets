import { isPojo, isString } from "./type";
import { getParents } from "./elements";

/**
 * Vanilla JS replacement for jQuery document ready.
 * @arg {Function} fn Callback for on document ready.
 */
export function onDocReady(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

/**
 * Dispatch a custom event of type `eventType` on `target`, defaults to document.
 * @arg {string} eventType The event type.
 * @arg {EventTarget} target Optional. The element to dispatch the event. Default `document`.
 * @arg {Object} options Optional. Event options.
 * @arg {boolean} [options.bubbles=false] Optional. Whether the event will bubble. Default `false`.
 * @arg {boolean} [options.cancelable=false] Optional. Whether the event is cancelable. Default `false`.
 * @arg {boolean} [options.composed=false] Optional. Whether the event is composed. Default `false`.
 * @arg {*} [options.detail=undefined] Optional. Any data to pass to the event handler. Default `undefined`.
 * @returns {boolean} true on success, false on fail.
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

/**
 * Get the bubble path of an event.
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

/**
 * Browser-friendly Emitter class.
 */
export class Emitter {
	constructor() {
		const delegate = document.createDocumentFragment();
		Object.defineProperty(this, "_delegate", {
			get: () => delegate,
		});
	}

	/**
	 * @arg {string} type
	 * @arg {EventListenerOrEventListenerObject} listener
	 * @arg {boolean|EventListenerOptions} options
	 */
	addEventListener(type, listener, options) {
		return this._delegate.addEventListener(type, listener, options);
	}

	/**
	 * @arg {Event|CustomEvent} event
	 * @returns {boolean}
	 */
	dispatchEvent(event) {
		return this._delegate.dispatchEvent(event);
	}

	/**
	 * @arg {string} type
	 * @arg {EventListenerOrEventListenerObject} listener
	 * @arg {boolean|EventListenerOptions} options
	 */
	removeEventListener(type, listener, options) {
		return this._delegate.removeEventListener(type, listener, options);
	}
}

// export class Emitter {
// 	private delegate: DocumentFragment = document.createDocumentFragment();

// 	public addEventListener(
// 		type: string,
// 		listener: EventListenerOrEventListenerObject,
// 		options?: boolean | EventListenerOptions
// 	): void {
// 		return this.delegate.addEventListener(type, listener, options);
// 	}

// 	public dispatchEvent(event: Event | CustomEvent): boolean {
// 		return this.delegate.dispatchEvent(event);
// 	}

// 	public removeEventListener(
// 		type: string,
// 		listener: EventListenerOrEventListenerObject,
// 		options?: boolean | EventListenerOptions
// 	): void {
// 		return this.delegate.removeEventListener(type, listener, options);
// 	}
// }
