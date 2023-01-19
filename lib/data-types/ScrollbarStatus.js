/**
 * @class ScrollbarStatus
 * @summary Describes the scrollability of an element on its axes.
 * @category Data Types
 */
export class ScrollbarStatus {
	/**
	 * Element can scroll vertically or horizontally.
	 * @type {boolean}
	 */
	any = false;
	/**
	 * Element can scroll vertically and horizontally.
	 * @type {boolean}
	 */
	both = false;
	/**
	 * Element can scroll horizontally.
	 * @type {boolean}
	 */
	x = false;
	/**
	 * Element can scroll vertically.
	 * @type {boolean}
	 */
	y = false;

	/**
	 * @param {Object} status
	 * @param {boolean} status.any Element can scroll vertically or horizontally.
	 * @param {boolean} status.both Element can scroll vertically and horizontally.
	 * @param {boolean} status.x Element can scroll horizontally.
	 * @param {boolean} status.y Element can scroll vertically.
	 */
	constructor({ any = false, both = false, x = false, y = false }) {
		this.any = !!any;
		this.both = !!both;
		this.x = !!x;
		this.y = !!y;
	}
}
