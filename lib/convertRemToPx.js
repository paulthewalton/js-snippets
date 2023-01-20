import { getRem } from "./getRem";

/**
 * Convert a rem value to a pixel value
 * @category CSS
 * @param {number} rem
 * @param {boolean} useRealValue
 * @returns {number}
 */
export function convertRemToPx(rem, useRealValue = false) {
	const remPx = useRealValue ? getRem() : 16;
	return rem * remPx;
}
