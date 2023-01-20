/**
 * Check if any part of an element is within the viewport.
 * @category Node & Element
 * @arg {HTMLElement} el
 * @returns {boolean}
 */
export function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	const viewport = { w: window.innerWidth, h: window.innerHeight };
	return !(-rect.top >= rect.height || -rect.left >= rect.width || rect.top >= viewport.h || rect.left >= viewport.w);
}
