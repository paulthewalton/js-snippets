import { CompatResolver } from "./CompatResolver";
import { compatNow } from "./compatNow";

/**
 * @callback CompatRequestAnimationFrame
 * @arg {FrameRequestCallback} callback
 * @returns {number}
 * @category Compatibility
 */

/**
 * @type {CompatResolver<CompatRequestAnimationFrame>}
 * @category Compatibility
 */
export const compatRequestAnimationFrame = new CompatResolver([
	{ scope: window, fn: "requestAnimationFrame" },
	{ scope: window, fn: "webkitRequestAnimationFrame" },
	{ scope: window, fn: "mozRequestAnimationFrame" },
	{ scope: window, fn: "oRequestAnimationFrame" },
	{ scope: window, fn: "msRequestAnimationFrame" },
	{
		fn: function () {
			const now = compatNow.resolve();
			return function (callback) {
				return window.setTimeout(function () {
					callback(now());
				}, 1000 / 60);
			};
		},
	},
]);
