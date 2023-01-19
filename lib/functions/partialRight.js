import { processPartialPlaceholders } from "./processPartialPlaceholders";

/**
 * Partially apply arguments to a function from right-to-left without setting `this`.
 * * Use `_` as a placeholder value, final arguments will replace those positions from right-to-left, prepending any remaining arguments.
 * @summary Partially apply arguments to a function from right-to-left without setting `this`.
 * @category Functional Programming
 * @arg {function} fn Function to partially apply.
 * @arg {...*} partials Arguments to partially apply to `fn`.
 * @returns {function}
 * @property {string} placeholder "_", can be used as placeholder instead of the string literal.
 * @example
 * let divide = (a, b) => a / b;
 * let divideBy2 = partialRight(divide, 2);
 * divideBy2(myNum) // ~= divide(myNum, 2)
 * @example
 * let addThenMultiply = (a, b, c) => (a + b) * c;
 * let add2ThenMultiply = partialRight(divide, 2, partialRight.placeholder);
 * add2ThenMultiply(1, 3) // === addThenMultiply(1, 2, 3) === 9
 */
export function partialRight(fn, ...partials) {
	const { placeholders, processedPartials } = processPartialPlaceholders(partials);
	return function (...args) {
		placeholders.forEach((placeholder) => {
			processedPartials[placeholder] = args.pop();
		});
		return fn.apply(this, args.concat(processedPartials));
	};
}
Object.defineProperty(partialRight, "placeholder", {
	get: () => processPartialPlaceholders.placeholder,
});
