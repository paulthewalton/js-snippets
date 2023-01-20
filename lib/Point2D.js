import { isNumber } from "./isNumber";

/**
 * @class Point2D
 * @summary Represents a point in 2D space.
 * @category Data Types
 */
export class Point2D {
	/**
	 * The X coordinate.
	 * @type {number}
	 */
	x = 0;
	/**
	 * The Y coordinate.
	 * @type {number}
	 */
	y = 0;

	/**
	 * @param {Object} coordinates
	 * @param {number} coordinates.x
	 * @param {number} coordinates.y
	 * @throws {TypeError}
	 */
	constructor({ x = 0, y = 0 }) {
		if (!isNumber(x) || !isNumber(y)) {
			throw new TypeError("Point2D coordinates must be numbers");
		}
		this.x = x;
		this.y = y;
	}
}
