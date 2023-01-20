/**
 * Preload an image for the browser, resolves to success/error state.
 * @category Media
 * @arg {Object} sources
 * @arg {?string} sources.srcset A valid srcset attribute string for an image element.
 * @arg {?string} sources.sizes A valid sizes attribute string for an image element.
 * @arg {?string} sources.src A valid src attribute string for an image element.
 * @returns {Promise.<boolean>}
 */
export function preloadImage({ srcset = "", sizes = "", src = "" }) {
	return new Promise((resolve) => {
		const loader = new Image();
		loader.addEventListener("load", () => resolve(true));
		loader.addEventListener("error", () => resolve(false));
		if ("srcset" in loader) {
			loader.srcset = srcset;
			loader.sizes = sizes;
		}
		loader.src = src;
	});
}
