// eslint-disable-next-line no-unused-vars
import { RequestUtilResponse } from "./RequestUtilResponse";

/**
 * Make simple AJAX requests
 * @category Async
 * @link [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
 * @arg {string} method - Request method, case insensitive.
 * @arg {XMLHttpRequestResponseType} type - Response type.
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {string|Document|Blob|BufferSource|FormData|URLSearchParams|ReadableStream} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function request(method, type, url, headers, body) {
	method = /get|post|put|patch|delete|head|options/i.test(method) ? method.toUpperCase() : "GET";
	return new Promise(function (resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.responseType = type && type.toLowerCase ? type.toLowerCase() : "json";
		xhr.open(method, url, true);
		switch (xhr.responseType) {
			case "json":
				xhr.setRequestHeader("Content-Type", "application/json");
				break;
		}
		if (headers) {
			for (const key in headers) {
				if (headers.hasOwnProperty(key)) {
					const value = headers[key];
					xhr.setRequestHeader(key, value);
				}
			}
		}
		xhr.onload = function () {
			resolve(new RequestUtilResponse(xhr));
		};
		xhr.onerror = function (err) {
			reject(err);
		};
		xhr.send(body || null);
	});
}
