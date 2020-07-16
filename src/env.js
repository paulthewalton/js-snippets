export const browsers = {
	OPERA: "opera",
	FIREFOX: "firefox",
	SAFARI: "safari",
	CHROME: "chrome",
	IE: "ie",
	EDGE: "edge",
	BLINK: "blink",
};

/* eslint-disable compat/compat */
export function detectBrowser() {
	// src: https://stackoverflow.com/a/31479176
	if (detectBrowser.prototype._cachedResult) {
		return detectBrowser.prototype._cachedResult;
	}
	// Opera 8.0+
	const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
		// Firefox 1.0+
		isFirefox = typeof InstallTrigger !== "undefined",
		// Safari 3.0+ "[object HTMLElementConstructor]"
		isSafari =
			/constructor/i.test(window.HTMLElement) ||
			(function (p) {
				return p.toString() === "[object SafariRemoteNotification]";
			})(!window.safari || window.safari.pushNotification),
		// Internet Explorer 6-11
		isIE = /*@cc_on!@*/ false || !!document.documentMode, // Internet Explorer 6-11
		// Edge 20+
		isEdge = !isIE && !!window.StyleMedia,
		// Chrome 1+
		isChrome = !!window.chrome && !!window.chrome.webstore,
		// Blink engine detection
		isBlink = (isChrome || isOpera) && !!window.CSS;
	let result;
	switch (true) {
		case isOpera:
			result = browsers.OPERA;
			break;
		case isFirefox:
			result = browsers.FIREFOX;
			break;
		case isSafari:
			result = browsers.SAFARI;
			break;
		case isChrome:
			result = browsers.CHROME;
			break;
		case isIE:
			result = browsers.IE;
			break;
		case isEdge:
			result = browsers.EDGE;
			break;
		case isBlink:
			result = browsers.BLINK;
			break;
	}
	return (detectBrowser.prototype._cachedResult = result);
}
/* eslint-enable compat/compat */

/**
 * Calculate the width of the native scrollbars.
 * @returns {number} Width of native browser scrollbars in px.
 */
export function calculateScrollbarWidth() {
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
	document.body.appendChild(outer);
	const widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";
	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);
	const widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	return widthNoScroll - widthWithScroll;
}

/**
 * Try to identify development environment from location host TLD.
 * @returns {boolean} Whether it was able to detect current environment as 'dev'.
 */
export function isDev() {
	const devTLDs = ["localhost", "dev", "test", "local", "example", "invalid"];
	const tld = location.host.split(".").reverse()[0].split(":")[0];
	return devTLDs.includes(tld);
}

/**
 * @typedef {Object} Breakpoint
 * @property {number} min The minimum screenwidth for a breakpoint.
 * @property {string} id Breakpoint identifier.
 */

/**
 * Get an object of preset matchMedia media queries.
 * @arg {Breakpoint[]} breakpoints Array of Breakpoint objects.
 * @returns {Object}
 */
export function setUpMediaQueries(breakpoints) {
	const mq = {};
	breakpoints.forEach(function (breakpoint, index, arr) {
		const min = breakpoint.min,
			max = arr[index + 1] ? arr[index + 1].min - 0.02 : null;
		mq[breakpoint.id] = {
			up: matchMedia("(min-width: " + min + "px)"),
			down: max ? matchMedia("(max-width: " + max + "px)") : null,
			only: matchMedia("(min-width: " + min + "px)" + (max ? "and (max-width: " + max + "px)" : "")),
		};
	});
	mq.portrait = matchMedia("(orientation: portrait)");
	mq.landscape = matchMedia("(orientation: landscape)");
	return mq;
}
