/**
 * @file
 * @kind overview
 * @summary Helpers for working with media and other assets.
 * @author Paul Walton
 */

/**
 * Preload an image for the browser, resolves to success/error state.
 * @arg {{srcset: ?string, sizes: ?string, src: ?string}} sources
 * @returns {Promise.<boolean>}
 */
export const preloadImage = ({ srcset = "", sizes = "", src = "" }) => {
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
};

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
export const testImageURL = (url) => {
	return preloadImage({ src: url });
};
