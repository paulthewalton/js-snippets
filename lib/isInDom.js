import { partial } from "./partial";
import { isSameOrChildNode } from "./isSameOrChildNode";

/**
 * Determine whether a DOM object is in the current DOM.
 * @function
 * @category Node & Element
 * @arg {Node} targetNode - DOM object to check.
 * @returns {boolean}
 */
export const isInDom = partial(isSameOrChildNode, document);
