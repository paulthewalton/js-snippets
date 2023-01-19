/**
 * @category CSS
 * @arg {string} value - CSS value as string.
 * @arg {string[]} units - Units to check for at the end of the value string.
 * @arg {string} fallback - Unit to add if no matching unit detected.
 * @returns {string}
 */
export function ensureCSSUnits(value, units = ["px", "%"], fallback = "px") {
	value = ("" + value).trim();
	for (const unit of units) {
		if (value.endsWith(unit)) {
			return value;
		}
	}
	return value + fallback;
}
