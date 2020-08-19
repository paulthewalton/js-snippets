/**
 * @file
 * @kind overview
 * @summary Async utility functions.
 * @author Paul Walton
 */

/**
 * @typedef {Object} RequestUtilResponse
 * @property {string|ArrayBuffer|Blob|Document|Object} response - XHR response.
 * @property {number} status - HTTP response code.
 * @property {XMLHttpRequest} xhr - Original XHR object.
 */

/**
 * @typedef {string|Document|Blob|BufferSource|FormData|URLSearchParams|ReadableStream} XMLHttpRequestBody
 */

/**
 * Make simple AJAX requests
 * @see [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
 * @arg {string} method - Request method, case insensitive.
 * @arg {XMLHttpRequestResponseType} type - Response type.
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {XMLHttpRequestBody} body - Request body.
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
			let { response, status } = xhr;
			resolve({ response, status, xhr });
		};
		xhr.onerror = function (err) {
			reject(err);
		};
		xhr.send(body || null);
	});
}

/**
 * Get HTML via AJAX.
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {XMLHttpRequestBody} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function getHTML(url, headers, body) {
	return request("GET", "document", url, headers, body);
}

/**
 * Get JSON via AJAX.
 * @arg {string} url - The URL to request.
 * @arg {Object<string, *>} headers - Object of key:value headers.
 * @arg {XMLHttpRequestBody} body - Request body.
 * @returns {Promise.<RequestUtilResponse>}
 */
export function getJSON(url, headers, body) {
	return request("GET", "json", url, headers, body);
}

/**
 * @typedef {Promise} VerbosePromise
 * @global
 * @property {boolean} isFulfilled - Promise has been resolved.
 * @property {boolean} isRejected - Promise has been rejected.
 * @property {boolean} isPending - Promise is not yet settled.
 */

/**
 * This function allow you to modify a JS Promise by adding some status properties.
 *
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 *
 * But modified according to the specs of promises : https://promisesaplus.com/
 * @summary Add status props to a Promise.
 * @arg {Promise} promise
 * @returns {VerbosePromise}
 */
export function makeVerbosePromise(promise) {
	// Don't modify any promise that has been already modified.
	if (promise.hasOwnProperty("isPending")) return promise;

	// Set initial state
	let isPending = true;
	let isRejected = false;
	let isFulfilled = false;

	// Observe the promise, saving the fulfillment in a closure scope.
	let result = promise.then(
		(value) => {
			isFulfilled = true;
			isPending = false;
			return value;
		},
		(_error) => {
			isRejected = true;
			isPending = false;
		}
	);

	Object.defineProperty(result, "isFulfilled", {
		get: () => isFulfilled,
	});
	Object.defineProperty(result, "isPending", {
		get: () => isPending,
	});
	Object.defineProperty(result, "isRejected", {
		get: () => isRejected,
	});
	return result;
}
