import { createElem } from "../elements";
import { toNumber } from "../math";

/**
 * @typedef {Object} ParsedCSSColor
 * @property {number} red Red value of parsed color.
 * @property {number} green Green value of parsed color.
 * @property {number} blue Blue value of parsed color.
 * @property {number} alpha Alpha value of parsed color.
 * @property {string} value The CSS color string for the parsed color.
 */

/**
 * Parse a CSS color string into red, green, blue, and alpha components.
 * * Passing an invalid color will return the components for transparent black, with an empty string as the `value` property.
 * @summary Parse a CSS color string into red, green, blue, and alpha components.
 * @category CSS
 * @arg {string} color - CSS color value, case-insensitive.
 * @returns {ParsedCSSColor}
 */
export function parseCSSColor(color) {
	if (parseCSSColor.prototype[color]) {
		return parseCSSColor.prototype[color];
	}
	let temp = document.body.appendChild(createElem("div", { style: { color, display: "none" } }));
	if (!temp || !temp.style.color) {
		return { red: 0, green: 0, blue: 0, alpha: 0, value: "" };
	}
	const rgba = window.getComputedStyle(temp).color.match(/rgba?\((\d+)\,\s(\d+)\,\s(\d+)(?:\,\s([0-9.]+))?\)/);
	temp = temp.remove();
	const [red, green, blue] = rgba.slice(1, 4).map(toNumber);
	return (parseCSSColor.prototype[color] = { red, green, blue, alpha: toNumber(rgba[4], 1), value: rgba[0] });
}
