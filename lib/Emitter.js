/**
 * Browser-friendly Emitter class.
 * @category Event
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
