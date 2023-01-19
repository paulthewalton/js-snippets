/**
 * @typedef {Object} EventListenerOptionsCompat
 * @category Addons
 * @property {boolean|EventListenerOptions} normal - Listener will behave as default.
 * @property {boolean|EventListenerOptions} passive - Listener will be passive if supported.
 * @property {boolean|EventListenerOptions} capture - Listener will dispatched as the event bubbles down.
 * @property {boolean|EventListenerOptions} passiveCapture - Listener will capture and be passive if supported.
 */

/**
 * @type {EventListenerOptionsCompat}
 * @category Addons
 * @readonly
 */
export const listenerOptions = Object.freeze(
	(function detectListenerOptions() {
		let passiveSupported = false;
		const LEGACY_OPTS = {
				normal: false,
				passive: false,
				capture: true,
				passiveCapture: true,
			},
			DEFAULT_OPTS = {
				normal: {
					capture: false,
					passive: false,
				},
				passive: {
					capture: false,
					passive: true,
				},
				capture: {
					capture: true,
					passive: false,
				},
				passiveCapture: {
					capture: true,
					passive: true,
				},
			};
		try {
			const options = Object.defineProperty({}, "passive", {
				get: function () {
					passiveSupported = true;
				},
			});
			window.addEventListener("test", options, options);
			window.removeEventListener("test", options, options);
		} catch (_) {
			passiveSupported = false;
		}
		const opts = passiveSupported ? DEFAULT_OPTS : LEGACY_OPTS;
		return Object.defineProperty(opts, "default", {
			get: function () {
				return this.normal;
			},
		});
	})()
);
