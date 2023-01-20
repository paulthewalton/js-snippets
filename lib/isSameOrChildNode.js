import { isDomObject } from "./isDomObject";

/**
 * Determine whether a DOM object is the same or parent of another DOM object.
 * @category Node & Element
 * @arg {Node} potentialParentNode - Parent DOM object to check lineage.
 * @arg {Node} targetNode - Child DOM object.
 * @returns {boolean}
 */
export function isSameOrChildNode(potentialParentNode, targetNode) {
	return (
		isDomObject(potentialParentNode) &&
		isDomObject(targetNode) &&
		(targetNode === potentialParentNode || potentialParentNode.contains(targetNode))
	);
}
