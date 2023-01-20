import { isString } from "./isString";
import { toInteger } from "./toInteger";
import { isInDom } from "./isInDom";

/**
 * Scroll the window to the vertical position of an element.
 * @category Node & Element
 * @arg {Element|string} el - Element or selector to scroll into view.
 * @arg {number} [offset=0] - Cast to int, vertical pixel offset from element.
 */
export function scrollIntoView(el, offset) {
	if (isString(el)) {
		el = document.querySelector(el);
	}
	if (!isInDom(el)) {
		return;
	}
	offset = toInteger(offset) || 0;
	scrollIntoView.prototype._smooth =
		scrollIntoView.prototype._smooth !== undefined
			? scrollIntoView.prototype._smooth
			: "scrollBehavior" in document.documentElement.style;
	if (scrollIntoView.prototype._smooth) {
		try {
			window.scrollBy({
				top: el.getBoundingClientRect().top + offset,
				behavior: "smooth",
			});
		} catch (_error) {
			window.scrollBy(0, el.getBoundingClientRect().top + offset);
		}
	} else {
		window.scrollBy(0, el.getBoundingClientRect().top + offset);
	}
}
