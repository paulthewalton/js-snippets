/**
 * @file
 * @kind overview
 * @summary Helpers for working with media and other assets.
 * @author Paul Walton
 */

/**
 * @typedef {Object} CollectedImageSrcAttributes
 * @property {?string} srcset A valid srcset attribute string for an image element.
 * @property {?string} sizes A valid sizes attribute string for an image element.
 * @property {?string} src A valid src attribute string for an image element.
 */

/**
 * Preload an image for the browser, resolves to success/error state.
 * @arg {ImageSrcAttributes} sources
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

/**
 * Test if an image is "good". Fails if:
 * * `url` is empty or null, OR
 * * `url` is the same as the URL of the page the user is currently on, OR
 * * the image is corrupted in some way that prevents it from being loaded, OR
 * * the image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, OR
 * * the image is in a format not supported by the user agent.
 * @arg {string} url
 * @returns {Promise.<boolean>}
 */
export function testImageURL(url) {
	return preloadImage({ src: url });
}
