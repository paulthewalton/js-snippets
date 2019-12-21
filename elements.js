import { isDomObject, isString } from "./type";
import { toInteger } from "./math";
import { kebabCase, upperCaseFirst } from "./strings";
import { batchApply } from "./functions";

export function createElem(tagName, props, ...children) {
	const el = document.createElement(tagName);
	if (el.toString() === "[object HTMLUnknownElement]") {
		return;
	}
	if (props && props instanceof Object) {
		for (const prop in props) {
			if (props.hasOwnProperty(prop)) {
				if (prop in el) {
					el[prop] = props[prop];
				} else {
					el.setAttribute(kebabCase(prop), props[prop]);
				}
			}
		}
	}
	children.forEach(el.append);
	return el;
}

/**
 * Determine whether a DOM object is the same or parent of another DOM object
 * @param {Node} potentialParentNode - parent DOM object to check lineage
 * @param {Node} targetNode - child DOM object
 * @returns {Boolean}
 */
export function isSameOrChildNode(potentialParentNode, targetNode) {
	return (
		isDomObject(potentialParentNode) &&
		isDomObject(targetNode) &&
		(targetNode === potentialParentNode || potentialParentNode.contains(targetNode))
	);
}

/**
 * Determine whether a DOM object is in the current DOM
 * @function isInDom
 * @param {Node} targetNode - DOM object to check
 * @returns {Boolean}
 */
export function isInDom(targetNode) {
	return isSameOrChildNode(document, targetNode);
}

/**
 * Add listeners for multiple events to one DOM element
 * @param {Element} eventTarget - DOM element to add event listeners
 * @param {*[][]} listeners - array of addEventListener argument sets
 */
export function applyEventListeners(eventTarget, listeners) {
	batchApply(EventTarget.prototype.addEventListener, listeners, eventTarget);
}

/**
 * @typedef {Object} Point
 * @property {number} x - The X Coordinate
 * @property {number} y - The Y Coordinate
 */

/**
 * Get the full page offset for an element
 * @param {Element} el - element of which to find offset
 * @returns {Point}
 */
export function getPageOffset(el) {
	const coordinates = { x: 0, y: 0 };
	do {
		coordinates.x += el.offsetLeft;
		coordinates.y += el.offsetTop;
	} while ((el = el.offsetParent));
	return coordinates;
}
/**
 * Get the em (font size) of an element
 * @param {Element} el - element to get em value from
 */
export function getEm(el) {
	return getComputedStyle(el).fontSize;
}

/**
 * Scroll the window to the vertical position of an element
 * @param {Element|string} el - element or selector to scroll into view
 * @param {number} [offset=0] - cast to int, vertical pixel offset from element
 */
export function scrollIntoView(el, offset) {
	if (isString(el)) {
		el = document.querySelector(el);
	}
	if (isInDom(el)) {
		return;
	}
	offset = toInteger(offset);
	window.scrollTo({
		top: el.getBoundingClientRect().top + offset,
		behavior: "smooth",
	});
}

/**
 * Get all parent elements for an element
 * @param {Element} el - DOM element to get parents of
 * @param {*|Boolean} includeSelf - whether to include
 */
export function getParents(el, includeSelf) {
	const parents = includeSelf ? [el] : [];
	while (el.parentNode) {
		parents.push(el.parentNode);
		el = el.parentNode;
	}
	return parents;
}

/**
 * Apply a style to a DOM element with vendor prefixes
 * @param {Element} elem - element to apply styles to
 * @param {String} styleName - the name of a CSS style
 * @param {String} styleValue - string-ified CSS style value
 * @param {Boolean} prefixValues - whether to prefix the values as well
 */
export function setPrefixedStyle(elem, styleName, styleValue, prefixValues) {
	if (window.jQuery && elem instanceof jQuery) {
		elem.each(function() {
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
		elem.style[browsers[browser].js] =
			(prefixValues === true ? browsers[browser].prefix : "") + styleValue;
	}
}

/**
 * Scroll to an element with optional offset
 * @function scrollToElement
 * @param {Element|Node|string} element - element or selector for element to scroll to
 * @param {number} [offset=0] - cast to int, pixel offset from element
 */
export function scrollToElement(element, offset) {
	if (isString(element)) {
		element = document.querySelector(element);
	}
	if (!isInDom(element)) {
		return;
	}
	offset = toInteger(offset);
	window.scrollTo({
		top: element.getBoundingClientRect().top + offset,
		behavior: "smooth",
	});
}
