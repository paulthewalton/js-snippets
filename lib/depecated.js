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

/**
 * Try to determine the client browser.
 * @category Environment
 * @deprecated
 * @returns {string} Detected browser.
 */
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
 * Try to identify development environment from location host TLD.
 * @category Environment
 * @deprecated
 * @returns {boolean} Whether it was able to detect current environment as 'dev'.
 */
export function isDev() {
	const devTLDs = ["localhost", "dev", "test", "local", "example", "invalid"];
	const tld = location.host.split(".").reverse()[0].split(":")[0];
	return devTLDs.includes(tld);
}
