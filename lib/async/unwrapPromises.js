/**
 * Unwrap promises once resolved.
 * ! Make sure all individual promises have potential rejections handled, as each will be `await`-ed without error handling.
 * @summary Unwrap promises once resolved.
 * @category Async
 * @arg {...Promise.<*>} promises
 * @returns {Array.<*>}
 */
export async function unwrapPromises(...promises) {
	for (let i = 0; i < promises.length; i++) {
		promises[i] = await promises[i];
	}
	return promises;
}
