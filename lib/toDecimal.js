import { isInt } from "./type";
import { toNumber } from "./toNumber";
import { toInteger } from "./toInteger";

/**
 * Cast a single value to decimal of specified precision.
 * * Returns 0 if an array with length < 1 or string with non-numeral characters.
 * @summary Cast a single value to decimal of specified precision.
 * @category Math
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
