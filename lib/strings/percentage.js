/**
 * Turn a fractional number into a percentage string.
 * @function
 * @category String
 * @arg {number} fraction
 * @returns {string}
 * @example percentage(0.725); // "72.5%"
 */
export const percentage = (fraction) => `${fraction * 100}%`;
