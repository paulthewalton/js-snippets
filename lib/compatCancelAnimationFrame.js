import { CompatResolver } from "./CompatResolver";

/**
 * @callback CompatCancelAnimationFrame
 * @arg {number} handle
 * @returns {void}
 * @category Compatibility
 */

/**
 * @type {CompatResolver<CompatCancelAnimationFrame>}
 * @category Compatibility
 */
export const compatCancelAnimationFrame = new CompatResolver([
	{ scope: window, fn: "cancelAnimationFrame" },
	{ scope: window, fn: "webkitCancelRequestAnimationFrame" },
	{ scope: window, fn: "mozCancelRequestAnimationFrame" },
	{ scope: window, fn: "oCancelRequestAnimationFrame" },
	{ scope: window, fn: "msCancelRequestAnimationFrame" },
	{
		fn: clearTimeout,
	},
]);
