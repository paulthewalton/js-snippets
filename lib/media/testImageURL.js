import { preloadImage } from "./preloadImage";

/**
 * Test if an image is "good". Fails if:
 * * `url` is empty or null, OR
 * * `url` is the same as the URL of the page the user is currently on, OR
 * * the image is corrupted in some way that prevents it from being loaded, OR
 * * the image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, OR
 * * the image is in a format not supported by the user agent.
 * @summary Test if an image URL is valid.
 * @category Media
 * @arg {string} url An image src URL.
 * @returns {Promise.<boolean>}
 */
export function testImageURL(url) {
	return preloadImage({ src: url });
}
