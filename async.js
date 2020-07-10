/**
 * Make simple AJAX requests
 * @param {String} method - 'GET' or 'POST', defaults to 'GET', case insensitive
 * @param {String} type - see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
 * @param {String} url - the URL to request
 * @returns {Promise}
 */
export function request(method, type, url) {
	method = method.toUpperCase() === "POST" ? "POST" : "GET";
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest(),
			json = !type || type.toLowerCase() === "json";
		xhr.responseType = json ? "text" : type;
		xhr.open(method, url, true);
		xhr.onload = function() {
			resolve(json ? JSON.parse(xhr.responseText) : xhr.response, xhr.status, xhr);
		};
		xhr.onerror = function() {
			reject(xhr);
		};
		xhr.send();
	});
}

/**
 * Get HTML via AJAX
 * @memberof! utils
 * @alias ajax.getHTML
 * @function
 * @param {String} url
 * @returns {Promise}
 */
/* eslint-disable-next-line prefer-const */
export function getHTML(url) {
	request("GET", "document", url);
}

/**
 * Get JSON via AJAX
 * @function getJSON
 * @param {String} url
 * @returns {Promise}
 */
/* eslint-disable-next-line prefer-const */
export function getJSON(url) {
	request("GET", "json", url);
}
