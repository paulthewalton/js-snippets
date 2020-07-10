import { createElem } from "./elements";
import { toNumber } from "./math";

/**
 * @typedef {Object} ParsedCSSColor
 * @property {number} red
 * @property {number} green
 * @property {number} blue
 * @property {number} alpha
 * @property {string} value
 */

/**
 * @arg {string} color CSS color value.
 * @returns {ParsedCSSColor}
 */
export function parseCSSColor(color) {
	if (parseCSSColor.prototype[color]) {
		return parseCSSColor.prototype[color];
	}
	let temp = document.body.appendChild(createElem("div", { style: { color, display: "none" } }));
	let rgba = window.getComputedStyle(temp).color.match(/rgba?\((\d+)\,\s(\d+)\,\s(\d+)(?:\,\s([0-9.]+))?\)/);
	temp.remove();
	const [red, green, blue] = rgba.slice(1, 4).map(toNumber);
	return (parseCSSColor.prototype[color] = { red, green, blue, alpha: toNumber(rgba[4], 1), value: rgba[0] });
}

/**
 * Parse a CSS time string into ms.
 * @arg {string} cssTimeStr
 * @returns {number}
 */
export function parseCSSTime(cssTimeStr) {
	const time = parseFloat(cssTimeStr);
	if (time && cssTimeStr.endsWith("s")) {
		return time * (cssTimeStr.endsWith("ms") ? 1 : 1000);
	}
	return 0;
}

/**
 * @arg {string} value CSS value as string.
 * @arg {string[]} [units] Units to check for at the end of the value string.
 * @arg {string} fallback Unit to add if no matching unit detected.
 * @returns {string}
 */
export function ensureCSSUnits(value, units = ["px", "%"], fallback = "px") {
	value = ("" + value).trim();
	for (const unit of units) {
		if (value.endsWith(unit)) {
			return value;
		}
	}
	return value + fallback;
}
