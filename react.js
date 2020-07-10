export const mergeRefs = (...refs) => {
	const filteredRefs = refs.filter(Boolean);
	if (!filteredRefs.length) return null;
	if (filteredRefs.length === 1) return filteredRefs[0];
	return inst => {
		for (const ref of filteredRefs) {
			if (typeof ref === "function") {
				ref(inst);
			} else if (ref) {
				ref.current = inst;
			}
		}
	};
};

export const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";

export function isFunctionalComponent(Component) {
	return typeof Component === "function" && !(Component.prototype && Component.prototype.isReactComponent);
}

export function isClassComponent(Component) {
	return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}
