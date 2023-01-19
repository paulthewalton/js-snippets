import { CompatResolver } from "./CompatResolver";

/**
 * @callback CompatNow
 * @returns {DOMHighResTimeStamp|number}
 * @summary A cross-browser function for calculating timings.
 * @desc Defaults to `performance.now`, falling back to `Date.now`.
 * @category Compatibility
 */

/**
 * @type {CompatResolver<CompatNow>}
 * @category Compatibility
 */
export const compatNow = new CompatResolver([
	{ scope: performance, fn: "now" },
	{ scope: Date, fn: "now" },
]);
