import { upperCaseFirst } from "./upperCaseFirst";
/**
 * Apply a style to a DOM element with vendor prefixes.
 * @category Node & Element
 * @arg {Element|jQuery} elem - Element to apply styles to.
 * @arg {string} styleName - The name of a CSS style.
 * @arg {string} styleValue - String-ified CSS style value.
 * @arg {boolean} prefixValues - Whether to prefix the values as well.
 */
export function setPrefixedStyle(elem, styleName, styleValue, prefixValues) {
	if (window.jQuery && elem instanceof window.jQuery) {
		elem.each(function () {
			setPrefixedStyle(this, styleName, styleValue, prefixValues);
		});
		return;
	}
	const casedName = upperCaseFirst(styleName);
	const browsers = {
		opera: { prefix: "-o-", js: "O" + casedName },
		microsoft: { prefix: "-ms-", js: "ms" + casedName },
		mozilla: { prefix: "-moz-", js: "Moz" + casedName },
		webkit: { prefix: "-webkit-", js: "Webkit" + casedName },
		cross: { prefix: "", js: styleName },
	};

	for (const browser in browsers) {
		if (!(browsers[browser].js in elem.style)) {
			continue;
		}
		elem.style[browsers[browser].js] = (prefixValues === true ? browsers[browser].prefix : "") + styleValue;
	}
}
