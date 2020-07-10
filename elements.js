import { isDomObject, isString, isObject } from "./type";
import { toInteger } from "./math";
import { kebabCase, upperCaseFirst } from "./strings";
import { batchApply } from "./functions";
import { extend } from "./objects";

/**
 * Create an HTMLElement.
 * * returns null for invalid tagName
 * @uses ParentNode.append
 * @arg {string} tagName Element tag name.
 * @arg {Object} props Element properties. Unrecognized props are kebab-cased and set as attributes.
 * @arg {string[]|Node[]} children Element child nodes.
 * @returns {?HTMLElement}
 */
export function createElem(tagName, props, ...children) {
	const el = document.createElement(tagName);
	if (el.toString() === "[object HTMLUnknownElement]") {
		return;
	}
	if (props && isObject(props)) {
		for (const prop in props) {
			if (!props.hasOwnProperty(prop)) {
				continue;
			}
			const propValue = props[prop];
			if (!(prop in el)) {
				el.setAttribute(kebabCase(prop), propValue);
				continue;
			}
			if (isObject(propValue) && isObject(el[prop])) {
				extend(el[prop], propValue);
			} else {
				el[prop] = propValue;
			}
		}
	}
	el.append(...children);
	return el;
}

/**
 * Determine whether a DOM object is the same or parent of another DOM object.
 * @arg {Node} potentialParentNode Parent DOM object to check lineage.
 * @arg {Node} targetNode Child DOM object.
 * @returns {boolean}
 */
export function isSameOrChildNode(potentialParentNode, targetNode) {
	return (
		isDomObject(potentialParentNode) &&
		isDomObject(targetNode) &&
		(targetNode === potentialParentNode || potentialParentNode.contains(targetNode))
	);
}

/**
 * Determine whether a DOM object is in the current DOM.
 * @arg {Node} targetNode DOM object to check.
 * @returns {boolean}
 */
export function isInDom(targetNode) {
	return isSameOrChildNode(document, targetNode);
}

/**
 * Add listeners for multiple events to one DOM element.
 * @arg {Element} eventTarget DOM element to add event listeners.
 * @arg {*[][]} listeners Array of addEventListener argument sets.
 */
export function applyEventListeners(eventTarget, listeners) {
	batchApply(EventTarget.prototype.addEventListener, listeners, eventTarget);
}

/**
 * @typedef {Object} Point
 * @property {number} x The X Coordinate.
 * @property {number} y The Y Coordinate.
 */

/**
 * Get the full page offset for an element.
 * @arg {Element} el Element of which to find offset.
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
 * @arg {Element} el Element to get em value from.
 * @returns {string}
 */
export function getEm(el) {
	return getComputedStyle(el).fontSize;
}

/**
 * Scroll the window to the vertical position of an element.
 * @arg {Element|string} el Element or selector to scroll into view.
 * @arg {number} [offset=0] Cast to int, vertical pixel offset from element.
 */
export function scrollIntoView(el, offset) {
	if (isString(el)) {
		el = document.querySelector(el);
	}
	if (!isInDom(el)) {
		return;
	}
	offset = toInteger(offset) || 0;
	scrollIntoView.prototype._smooth =
		scrollIntoView.prototype._smooth !== undefined
			? scrollIntoView.prototype._smooth
			: "scrollBehavior" in document.documentElement.style;
	if (scrollIntoView.prototype._smooth) {
		try {
			window.scrollBy({
				top: el.getBoundingClientRect().top + offset,
				behavior: "smooth",
			});
		} catch (_error) {
			window.scrollBy(0, el.getBoundingClientRect().top + offset);
		}
	} else {
		window.scrollBy(0, el.getBoundingClientRect().top + offset);
	}
}

/**
 * Check if any part of an element is within the viewport.
 * @arg {HTMLElement} el
 * @returns {boolean}
 */
export function isInViewport(el) {
	const rect = el.getBoundingClientRect();
	const viewport = { w: window.innerWidth, h: window.innerHeight };
	return !(-rect.top >= rect.height || -rect.left >= rect.width || rect.top >= viewport.h || rect.left >= viewport.w);
}

/**
 * Check whether an element has currently scrollable overflow.
 * @arg {HTMLElement} el
 * @returns {Object} scrollbarStatus
 * @property {boolean} scrollbarStatus.any Element can scroll vertically or horizontally.
 * @property {boolean} scrollbarStatus.both Element can scroll vertically and horizontally.
 * @property {boolean} scrollbarStatus.x Element can scroll horizontally.
 * @property {boolean} scrollbarStatus.y Element can scroll vertically.
 */
export function isScrollable(el) {
	const x = el.scrollWidth > el.clientWidth;
	const y = el.scrollHeight > el.clientHeight;
	return { any: x || y, both: x && y, x, y };
}

/**
 * Get all parent elements for an element.
 * @arg {Node} node Node to get parents of.
 * @arg {*|boolean} includeSelf Whether to include starting node.
 * @returns {Node[]}
 */
export function getParents(node, includeSelf) {
	const parents = includeSelf ? [node] : [];
	while (node.parentNode) {
		parents.push(node.parentNode);
		node = node.parentNode;
	}
	return parents;
}

/**
 * Apply a style to a DOM element with vendor prefixes.
 * @arg {Element} elem Element to apply styles to.
 * @arg {string} styleName The name of a CSS style.
 * @arg {string} styleValue String-ified CSS style value.
 * @arg {boolean} prefixValues Whether to prefix the values as well.
 */
export function setPrefixedStyle(elem, styleName, styleValue, prefixValues) {
	if (window.jQuery && elem instanceof window.jQuery) {
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
		elem.style[browsers[browser].js] = (prefixValues === true ? browsers[browser].prefix : "") + styleValue;
	}
}
