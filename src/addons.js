/**
 * @file
 * @kind overview
 * @summary Non-functional addon helpers
 * @author Paul Walton
 */

import { getEventPath } from "./events";

/**
 * @typedef {Object} EventListenerOptionsCompat
 * @property {boolean|EventListenerOptions} normal - Listener will behave as default.
 * @property {boolean|EventListenerOptions} passive - Listener will be passive if supported.
 * @property {boolean|EventListenerOptions} capture - Listener will dispatched as the event bubbles down.
 * @property {boolean|EventListenerOptions} passiveCapture - Listener will capture and be passive if supported.
 */

/**
 * @type {EventListenerOptionsCompat}
 * @readonly
 */
export const listenerOptions = Object.freeze(
	(function detectListenerOptions() {
		let passiveSupported = false;
		const LEGACY_OPTS = {
				normal: false,
				passive: false,
				capture: true,
				passiveCapture: true,
			},
			DEFAULT_OPTS = {
				normal: {
					capture: false,
					passive: false,
				},
				passive: {
					capture: false,
					passive: true,
				},
				capture: {
					capture: true,
					passive: false,
				},
				passiveCapture: {
					capture: true,
					passive: true,
				},
			};
		try {
			const options = Object.defineProperty({}, "passive", {
				get: function () {
					passiveSupported = true;
				},
			});
			window.addEventListener("test", options, options);
			window.removeEventListener("test", options, options);
		} catch (_) {
			passiveSupported = false;
		}
		const opts = passiveSupported ? DEFAULT_OPTS : LEGACY_OPTS;
		return Object.defineProperty(opts, "default", {
			get: function () {
				return this.normal;
			},
		});
	})()
);

/**
 * Adds `hover` and `touch` classes once to the documentElement when mouse/stylus & touch events detected.
 * @arg {Window} win - Window to listen for events.
 * @arg {Document} doc - Document to recieve classes.
 */
export function setUpInterfaceDetection(win = window, doc = document) {
	const lOpts = listenerOptions.passiveCapture;
	/**
	 * Add the `touch` class to the document element when the next touch event is detected.
	 * @private
	 * @listens Window#touchstart
	 * @listens Window#touchmove
	 * @listens Window#touchend
	 */
	function onDetectTouchInput() {
		doc.documentElement.classList.add("touch");
		win.removeEventListener("touchstart", onDetectTouchInput, lOpts);
		win.removeEventListener("touchmove", onDetectTouchInput, lOpts);
		win.removeEventListener("touchend", onDetectTouchInput, lOpts);
	}
	win.addEventListener("touchstart", onDetectTouchInput, lOpts);
	win.addEventListener("touchmove", onDetectTouchInput, lOpts);
	win.addEventListener("touchend", onDetectTouchInput, lOpts);

	/**
	 * Add the `hover` class to the document element on the next mouseover event
	 * @private
	 * @listens Window#mouseover
	 */
	function onDetectHover() {
		doc.documentElement.classList.add("hover");
		win.removeEventListener("mouseover", onDetectHover, lOpts);
	}
	win.addEventListener("mouseover", onDetectHover, lOpts);
}

/**
 * Adds event listeners to window, setting `tab-focus` and `tab-focus-within` classes on focused elements.
 * @listens Window#focusout
 * @listens Window#focusin
 * @listens Window#keydown
 * @returns {Function} Teardown function to remove listeners.
 */
export function setUpTabFocus(win = window, doc = document) {
	const focusClass = "tab-focus",
		focusWithinClass = "tab-focus-within";
	let tabDown = false;
	const tabFocused = doc.getElementsByClassName(focusClass);
	const tabFocusedWithin = doc.getElementsByClassName(focusWithinClass);

	/**
	 * Remove classes on focusout.
	 * @private
	 * @listens Window#focusout
	 * @see getEventPath
	 * @arg {FocusEvent} focusEvent
	 */
	function removeTabFocusClasses(focusEvent) {
		focusEvent.target.classList.remove(focusClass);
		const path = getEventPath(focusEvent);
		for (let i = 0; i < path.length; i++) {
			if (path[i].classList) {
				path[i].classList.remove(focusWithinClass);
			}
		}
	}

	/**
	 * Add classes on focusin.
	 * Removes classes from elements not in event path.
	 * @private
	 * @listens Window#focusin
	 * @see getEventPath
	 * @arg {FocusEvent} focusEvent
	 */
	function addTabFocusClasses(focusEvent) {
		while (tabFocused.length) {
			tabFocused[0].classList.remove(focusClass);
		}
		while (tabFocusedWithin.length) {
			tabFocusedWithin[0].classList.remove(focusWithinClass);
		}
		if (tabDown) {
			focusEvent.target.classList.add(focusClass);
			const path = getEventPath(focusEvent);
			for (let i = 0; i < path.length; i++) {
				if (path[i].classList) {
					path[i].classList.add(focusWithinClass);
				}
			}
			tabDown = false;
		}
	}

	/**
	 * Primes tab focus listeners by capturing keydown events for the Tab key.
	 * @private
	 * @listens Window#keydown
	 * @arg {KeyboardEvent} keyEvent
	 */
	function primeTabFocus(keyEvent) {
		tabDown = keyEvent.key === "Tab";
	}

	win.addEventListener("focusout", removeTabFocusClasses, listenerOptions.passive);
	win.addEventListener("focusin", addTabFocusClasses, listenerOptions.passive);
	win.addEventListener("keydown", primeTabFocus, listenerOptions.passiveCapture);

	return function teardownTabFocus() {
		win.removeEventListener("focusout", removeTabFocusClasses, listenerOptions.passive);
		win.removeEventListener("focusin", addTabFocusClasses, listenerOptions.passive);
		win.removeEventListener("keydown", primeTabFocus, listenerOptions.passiveCapture);
	};
}
