import { getRem } from "./getRem";

/**
 * Convert a pixel value to the equivalent rem value.
 * @category CSS
 * @param {number} px
 * @param {boolean} useRealValue
 * @returns {number}
 */
export function convertPxToRem(px, useRealValue = false) {
	const remPx = useRealValue ? getRem() : 16;
	return px / remPx;
}
