import { listenerOptions } from "./listenerOptions";

/**
 * Adds `hover` and `touch` classes once to the documentElement when mouse/stylus & touch events detected.
 * @category Addons
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
