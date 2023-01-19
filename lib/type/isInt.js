/**
 * Reliable method of determining if int
 * @category Type
 * @arg {*} value
 * @returns {boolean}
 */
export function isInt(value) {
	if (isNaN(value)) {
		return false;
	}
	const x = parseFloat(value);
	return (x | 0) === x; // eslint-disable-line no-bitwise
}
