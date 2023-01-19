import { request } from "./request";

// eslint-disable-next-line no-unused-vars
import { RequestUtilResponse } from "./RequestUtilResponse";

/**
 * Get JSON via AJAX.
 * @category Async
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {string|Document|Blob|BufferSource|FormData|URLSearchParams|ReadableStream} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function getJSON(url, headers, body) {
	return request("GET", "json", url, headers, body);
}
