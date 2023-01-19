function isES6ClassFunction(value) {
	try {
		var fnStr = Function.prototype.toString.call(value);
		return /^\s*class\b/.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
}

function tryFunctionToStr(value) {
	try {
		if (isES6ClassFunction(value)) return false;
		Function.prototype.toString.call(value);
		return true;
	} catch (e) {
		return false;
	}
}

/* eslint-disable-next-line no-undef */
const hasToStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

/**
 * Determine whether a value is a callable function
 * @category Type
 * @arg {*} fn
 * @returns {boolean}
 */
export function isCallable(value) {
	switch (true) {
		case !value:
		case typeof value !== "function" && typeof value !== "object":
			return false;
		case typeof value === "function" && !value.prototype:
			return true;
		case hasToStringTag:
			return tryFunctionToStr(value);
		case isES6ClassFunction(value):
			return false;
		default:
			var strClass = Object.prototype.toString.call(value);
			return strClass === "[object Function]" || strClass === "[object GeneratorFunction]";
	}
}
