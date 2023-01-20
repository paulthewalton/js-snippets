import { sequence } from "./sequence";

/**
 * Snapshot the properties of an object.
 * @function
 * @category Object
 * @arg {Object} obj
 * @returns {Object}
 */
export const snapshot = sequence(JSON.stringify, JSON.parse);
