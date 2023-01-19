/**
 * @typedef {Promise} VerbosePromise
 * @global
 * @category Async
 * @property {boolean} isFulfilled Promise has been resolved.
 * @property {boolean} isRejected Promise has been rejected.
 * @property {boolean} isPending Promise is not yet settled.
 */

/**
 * This function allow you to modify a JS Promise by adding some status properties.
 *
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 *
 * But modified according to the specs of promises : https://promisesaplus.com/
 * @summary Add status props to a Promise.
 * @category Async
 * @arg {Promise<T>} promise
 * @returns {VerbosePromise<T>}
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
