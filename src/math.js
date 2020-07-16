import { isInt } from "./type";

/**
 * Cast value to number.
 * @arg {*} value Value to attept converting to number.
 * @arg {number} [fallback=0] Number to return if value cannot be successfully converted to number. Default 0.
 * @return {number}
 */
export function toNumber(value, fallback = 0) {
	const number = Number(value);
	if (isNaN(number)) {
		return toNumber(fallback);
	}
	return number;
}

/**
 * Cast a single value to integer.
 * returns 0 if an array with length < 1 or string with non-numeral characters
 * @arg {*} value
 * @return {number}
 */
export function toInteger(value) {
	const number = toNumber(value);
	if (number === 0 || !isFinite(number)) {
		return number;
	}
	return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}

/**
 * Cast a single value to decimal of specified precision.
 * * Returns 0 if an array with length < 1 or string with non-numeral characters.
 * @arg {number} digitsAfterDecimal Integer number of significant digits after decimal.
 * @arg {*} value
 * @returns {number}
 */
export function toDecimal(digitsAfterDecimal, value) {
	const number = toNumber(value);
	if (number === 0 || !isFinite(number)) {
		return number;
	}
	if (!isInt(digitsAfterDecimal)) {
		throw new TypeError("First parameter must be an integer");
	}
	const coeff = Math.pow(10, digitsAfterDecimal);
	return toInteger(number * coeff) / coeff;
}

/**
 * Cap a value to between minimum and maximum values.
 * @arg {number} min Minimum acceptable value.
 * @arg {number} max Maximum acceptable value.
 * @arg {number} value Value to cap.
 * @returns {number}
 */
export function capMinMax(min, max, value) {
	return Math.max(min, Math.min(max, value));
}
