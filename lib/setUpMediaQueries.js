// eslint-disable-next-line no-unused-vars
import { MediaBreakpoint } from "./MediaBreakpoint";

/**
 * Get an object of preset matchMedia media queries.
 * @category Environment
 * @arg {MediaBreakpoint[]} breakpoints Array of Breakpoint objects.
 * @returns {Object}
 */
export function setUpMediaQueries(breakpoints) {
	const mq = {};
	breakpoints.forEach(function (breakpoint, index, arr) {
		if (arr[index + 1]) {
			breakpoint.next = arr[index + 1];
		}
		mq[breakpoint.id] = breakpoint;
	});
	mq.portrait = matchMedia("(orientation: portrait)");
	mq.landscape = matchMedia("(orientation: landscape)");
	return mq;
}
