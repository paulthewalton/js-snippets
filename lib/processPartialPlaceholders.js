/**
 * Process placeholder values for partial application of functions.
 * * Values of `_` will be replaced with `undefined` unless preceded by backslash
 * @private
 * @arg {Array} partials Array of values to partially apply to a function.
 * @returns {Object} Placeholders and processed partial arguments.
 */
export function processPartialPlaceholders(partials) {
	const placeholders = [];
	const processedPartials = partials.map((value, index) => {
		switch (value) {
			case processPartialPlaceholders.placeholder:
				placeholders.push(index);
				return undefined;
			case `\${processPartialPlaceholders.placeholder}`:
				return processPartialPlaceholders.placeholder;
			default:
				return value;
		}
	});
	return { placeholders, processedPartials };
}
Object.defineProperty(processPartialPlaceholders, "placeholder", {
	value: "_",
});
