import { isScrollable } from "./isScrollable";

/**
 * Get the scroll parent of an element.
 * @category Node & Element
 * @param {Node} node
 * @returns {?Node}
 */
export function getScrollParent(node) {
	if (node == null) {
		return null;
	}
	if (isScrollable(node).any) {
		return node;
	}
	return getScrollParent(node.parentNode);
}
