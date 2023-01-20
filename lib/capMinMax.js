/**
 * Cap a value to between minimum and maximum values.
 * @category Math
 * @arg {number} min Minimum acceptable value.
 * @arg {number} max Maximum acceptable value.
 * @arg {number} value Value to cap.
 * @returns {number}
 */
export function capMinMax(min, max, value) {
	return Math.max(min, Math.min(max, value));
}
