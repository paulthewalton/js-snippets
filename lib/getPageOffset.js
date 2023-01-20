import { Point2D } from "../data-types";

/**
 * Get the full page offset for an element.
 * @category Node & Element
 * @arg {Element} el - Element of which to find offset.
 * @returns {Point2D}
 */
export function getPageOffset(el) {
	const coordinates = new Point2D();
	do {
		coordinates.x += el.offsetLeft;
		coordinates.y += el.offsetTop;
	} while ((el = el.offsetParent));
	return coordinates;
}
