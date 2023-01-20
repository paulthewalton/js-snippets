/**
 * Check whether any number of values are of the same type.
 * * checks typeof and object/function constructors.
 * @summary Check whether any number of values are of the same type.
 * @category Type
 * @arg {*} value - All other values are tested agains this value.
 * @arg {...*} values
 * @returns {boolean}
 */
export function areSameType(value, ...values) {
	const vType = typeof value,
		vCon = value != null && value.constructor;
	for (let i = 0; i < values.length; i++) {
		const val = values[i];
		if (typeof val !== vType || (vCon && (val == null || val.constructor !== vCon))) {
			return false;
		}
	}
	return true;
}
