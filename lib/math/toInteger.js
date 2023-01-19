import { toNumber } from "./toNumber";

/**
 * Cast a single value to integer.
 * * returns 0 if an array with length < 1 or string with non-numeral characters
 * @summary Cast a single value to integer.
 * @category Math
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
