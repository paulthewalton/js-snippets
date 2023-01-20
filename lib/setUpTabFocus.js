import { listenerOptions } from "./listenerOptions";
import { getEventPath } from "./getEventPath";

/**
 * Adds event listeners to window, setting `tab-focus` and `tab-focus-within` classes on focused elements.
 * @category Addons
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
