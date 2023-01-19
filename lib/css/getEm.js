/**
 * Get the em (font size) of an element.
 * @category CSS
 * @arg {Element} el - Element to get em value from.
 * @returns {number}
 */
export function getEm(el) {
	return parseFloat(getComputedStyle(el).fontSize);
}
