export class RequestUtilResponse {
	/**
	 * @type {string|ArrayBuffer|Blob|Document|Object}
	 */
	response;
	/**
	 * @type {number}
	 */
	status;
	/**
	 * Original XHR object
	 * @type {XMLHttpRequest}
	 */
	xhr;

	/**
	 * @param {XMLHttpRequest} xhr
	 */
	constructor(xhr) {
		if (!(xhr instanceof XMLHttpRequest)) {
			throw new TypeError("RequestUtilResponse can only be created from an XMLHttpRequest");
		}
		this.xhr = xhr;
		this.response = xhr.response;
		this.status = xhr.status;
	}
}
