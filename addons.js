import { getEventPath } from "./events";

/**
 * @member listenerOptions
 * @type {Object}
 * @property {Object|boolean} normal - Listener will behave as default.
 * @property {Object|boolean} passive - Listener will be passive if supported.
 * @property {Object|boolean} capture - Listener will dispatched as the event bubbles down.
 * @property {Object|boolean} passiveCapture - Listener will capture and be passive if supported.
 */
export const listenerOptions = (function detectListenerOptions() {
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
			get: function() {
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
		get: function() {
			return this.normal;
		},
	});
})();

export function setUpInterfaceDetection(window, document) {
	function onDetectTouchInput() {
		document.documentElement.classList.add("touch");
		window.removeEventListener("touchstart", onDetectTouchInput, listenerOptions.normal);
	}
	window.addEventListener("touchstart", onDetectTouchInput, listenerOptions.normal);

	function onDetectHover() {
		document.documentElement.classList.add("hover");
		window.removeEventListener("mouseover", onDetectHover, listenerOptions.passiveCapture);
	}
	window.addEventListener("mouseover", onDetectHover, listenerOptions.passiveCapture);
}

export function setUpTabFocus(window, document) {
	const focusClass = "tab-focus",
		focusWithinClass = "tab-focus-within";
	window.tabDown = false;
	window.tabFocused = document.getElementsByClassName(focusClass);
	window.tabFocusedWithin = document.getElementsByClassName(focusWithinClass);

	function removeTabFocusClasses(focusEvent) {
		focusEvent.target.classList.remove(focusClass);
		const path = getEventPath(focusEvent);
		for (let i = 0; i < path.length; i++) {
			if (path[i].classList) {
				path[i].classList.remove(focusWithinClass);
			}
		}
	}
	window.addEventListener("focusout", removeTabFocusClasses);
	window.addEventListener(
		"focusin",
		function addTabFocusClasses(focusEvent) {
			while (window.tabFocused.length) {
				window.tabFocused[0].classList.remove(focusClass);
			}
			while (window.tabFocusedWithin.length) {
				window.tabFocusedWithin[0].classList.remove(focusWithinClass);
			}
			if (window.tabDown) {
				focusEvent.target.classList.add(focusClass);
				const path = getEventPath(focusEvent);
				for (let i = 0; i < path.length; i++) {
					if (path[i].classList) {
						path[i].classList.add(focusWithinClass);
					}
				}
				window.tabDown = false;
			}
		},
		listenerOptions.passive
	);
	window.addEventListener(
		"keydown",
		function primeTabFocus(keyEvent) {
			window.tabDown = keyEvent.key === "Tab";
		},
		listenerOptions.passiveCapture
	);
}
