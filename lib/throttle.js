/**
 * Throttle a high-frequecy and/or resource intensive function.
 * @category Functional Programming
 * @arg {function} fn Function to throttle.
 * @arg {number} wait Minimum number of millseconds to wait between calls.
 * @returns {function} Throttled function.
 */
export function throttle(fn, wait) {
	let context, args, result;
	let timeout = null;
	let previous = 0;
	const later = function () {
		previous = Date.now();
		timeout = null;
		result = fn.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function () {
		const now = Date.now();
		const remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = fn.apply(context, args);
			if (!timeout) {
				context = args = null;
			}
		} else if (!timeout) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
}
