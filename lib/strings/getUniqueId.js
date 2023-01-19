/**
 * Get a unique id string.
 * @function
 * @category String
 * @returns {string}
 */
export const getUniqueId = () => `${Date.now()}-${("" + Math.random()).substring(2)}`;
