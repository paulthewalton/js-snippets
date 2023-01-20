/**
 * Get all parent elements for an element.
 * @category Node & Element
 * @arg {Node} node - Node to get parents of.
 * @arg {boolean} includeSelf - Whether to include starting node.
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
