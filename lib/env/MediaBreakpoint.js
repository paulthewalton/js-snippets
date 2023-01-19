/**
 * @class MediaBreakpoint
 * @summary A breakpoint following a mobile-first philosophy.
 * @category Environment
 */
export class MediaBreakpoint {
	/**
	 * Breakpoint identifier.
	 * @type {string}
	 */
	id;
	/**
	 * Minumum viewport width.
	 * @type {number}
	 */
	min = 0;
	/**
	 * Breakpoint unit.
	 * @type {"px"|"em"|"rem"}
	 */
	unit = "px";
	/**
	 * The breakpoint media query.
	 * @type {MediaQueryList}
	 */
	up;
	/**
	 * A link to the "next" breakpoint, assuming in order of increasing viewport widths.
	 * @type {?MediaBreakpoint}
	 */
	next = null;

	get down() {
		return this.next ? this.next.below.matches : false;
	}

	get only() {
		return this.up.matches && (this.next ? this.next.below.matches : true);
	}

	constructor(id, { min = 0, unit = "px" }) {
		if (!id) {
			throw new TypeError("MediaBreakpoint.id must be a non-empty string");
		}
		this.id = "" + id;

		if (!["px", "em", "rem"].includes(unit)) {
			throw new TypeError('MediaBreakpoint.unit must be one of "px", "em", or "rem"');
		}
		this.unit = unit;

		min = Math.max(min, 0);
		this.min = min;

		this.up = matchMedia(`(min-width: ${min + unit})`);

		if (min > 0) {
			let below = min - (unit === "px" ? 0.02 : 0.02 / 16);
			if (below > 0) {
				this.below = matchMedia(`(max-width: ${below + unit})`);
			}
		}
	}
}
