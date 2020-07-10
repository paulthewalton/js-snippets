/**
 * Make simple AJAX requests
 * @arg {string} method Request method, case insensitive.
 * @arg {string} type See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType.
 * @arg {string} url The URL to request.
 * @arg {Object} headers Object of key:value headers.
 * @arg {string|Document|Blob|BufferSource|FormData|URLSearchParams|ReadableStream} body request body
 * @returns {Promise}
 */
export function request(method, type, url, headers, body) {
	method = /get|post|put|patch|delete|head|options/i.test(method) ? method.toUpperCase() : "GET";
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest(),
			json = !type || type.toLowerCase() === "json";
		xhr.responseType = json ? "text" : type;
		xhr.open(method, url, true);
		if (headers) {
			for (const key in headers) {
				if (headers.hasOwnProperty(key)) {
					const value = headers[key];
					xhr.setRequestHeader(key, value);
				}
			}
		}
		xhr.onload = function() {
			let { response, status } = xhr;
			if (json) {
				try {
					const parsed = JSON.parse(xhr.responseText);
					response = parsed;
				} catch (err) {
					console.warn(err);
				}
			}
			resolve({ response, status, xhr });
		};
		xhr.onerror = function(err) {
			reject(err);
		};
		xhr.send(body || null);
	});
}

/**
 * Get HTML via AJAX.
 * @arg {string} url
 * @arg {Object} headers key:value headers
 * @returns {Promise}
 */
export function getHTML(url, headers) {
	return request("GET", "document", url, headers);
}

/**
 * Get JSON via AJAX.
 * @arg {string} url
 * @arg {Object} headers key:value headers
 * @returns {Promise}
 */
export function getJSON(url, headers) {
	return request("GET", "json", url, headers);
}

/**
 * This function allow you to modify a JS Promise by adding some status properties.
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 * But modified according to the specs of promises : https://promisesaplus.com/
 *
 * @arg {Promise} promise
 * @arg {boolean} throws
 * @returns {Promise}
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
		value => {
			isFulfilled = true;
			isPending = false;
			return value;
		},
		_error => {
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
