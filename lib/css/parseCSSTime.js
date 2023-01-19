import { TIME } from "../constants";

/**
 * Parse a CSS time string into ms.
 * @category CSS
 * @arg {string} cssTimeStr - Valid CSS time in seconds or milliseconds
 * @returns {number}
 */
export function parseCSSTime(cssTimeStr) {
	const time = parseFloat(cssTimeStr);
	if (time && cssTimeStr.endsWith("s")) {
		return time * (cssTimeStr.endsWith("ms") ? 1 : TIME.SECOND);
	}
	return 0;
}
