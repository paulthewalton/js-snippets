import { ScrollbarStatus } from "./ScrollbarStatus";

/**
 * Check whether a node has currently scrollable overflow.
 * @category Node & Element
 * @arg {Node} node
 * @returns {ScrollbarStatus}
 */
export function isScrollable(node) {
	const x = node.scrollWidth > node.clientWidth;
	const y = node.scrollHeight > node.clientHeight;
	return new ScrollbarStatus({ any: x || y, both: x && y, x, y });
}
