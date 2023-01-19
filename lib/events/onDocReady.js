/**
 * Vanilla JS replacement for jQuery document ready.
 * @category Event
 * @arg {function} fn - Callback for on document ready.
 */
export function onDocReady(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}
