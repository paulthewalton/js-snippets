/**
 * Cast value to number.
 * @category Math
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
