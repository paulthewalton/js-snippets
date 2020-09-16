/**
 * @file
 * @kind overview
 * @summary Helpers for working with media and other assets.
 * @author Paul Walton
 */

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
	return new Promise((resolve) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(true));
		image.addEventListener("error", () => resolve(false));
		image.src = url;
	});
};
