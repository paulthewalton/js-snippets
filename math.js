import { isInt } from "./type";

/**
 * Cast a single value to integer
 * returns 0 if an array with length < 1 or string with non-numeral characters
 * @param {*} value
 * @return {Number}
 */
export function toInteger(value) {
	const number = Number(value);
	if (isNaN(number)) {
		return 0;
	}
	if (number === 0 || !isFinite(number)) {
		return number;
	}
	return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}

/**
 * Cast a single value to decimal of specified precision
 * returns 0 if an array with length < 1 or string with non-numeral characters
 * @param {Number} digitsAfterDecimal - integer number of significant digits after decimal
 * @param {*} value
 * @returns {Number}
 */
export function toDecimal(digitsAfterDecimal, value) {
	const number = Number(value);
	if (isNaN(number)) {
		return 0;
	} else if (number === 0 || !isFinite(number)) {
		return number;
	} else if (!isInt(digitsAfterDecimal)) {
		throw new TypeError("First parameter must be an integer");
	}
	const coeff = Math.pow(10, digitsAfterDecimal);
	return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number * coeff) / coeff);
}

/**
 * Cap a value to between minimum and maximum values
 * @param {Number} min - minimum acceptable value
 * @param {Number} max - maximum acceptable value
 * @param {Number} value - value to cap
 * @returns {Number}
 */
export function capMinMax(min, max, value) {
	return Math.max(min, Math.min(max, value));
}
