/**
 * React specific utility functions.
 * TODO: Component type documentation
 */

/**
 * Merge React refs.
 * * If only one potential ref is passed in, returns that ref.
 * @arg {Array.<Function|Object>} refs
 * @returns {Function|Object}
 */
export const mergeRefs = (...refs) => {
	const filteredRefs = refs.filter(Boolean);
	if (!filteredRefs.length) return null;
	if (filteredRefs.length === 1) return filteredRefs[0];
	return (inst) => {
		for (const ref of filteredRefs) {
			if (typeof ref === "function") {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
};

/**
 * Display name helper for HOCs.
 * @returns {string}
 */
export const getDisplayName = (WrappedComponent) =>
	WrappedComponent.displayName || WrappedComponent.name || "Component";

/**
 * Test if component is functional.
 * eg. for when checking if you should forward refs when creating HOCs.
 * @arg {Object} Component
 * @returns {boolean}
 */
export function isFunctionalComponent(Component) {
	return typeof Component === "function" && !(Component.prototype && Component.prototype.isReactComponent);
}

/**
 * Test if component is a class component.
 * eg. for when checking if you should forward refs when creating HOCs.
 * @arg {Object} Component
 * @returns {boolean}
 */
export function isClassComponent(Component) {
	return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}
