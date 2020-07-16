/**
 * Rect properties
 * @readonly
 * @enum {string}
 */
export const RECT = Object.freeze({
	X: "x",
	Y: "y",
	TOP: "top",
	RIGHT: "right",
	BOTTOM: "bottom",
	LEFT: "left",
	WIDTH: "width",
	HEIGHT: "height",
});

/**
 * Time constants.
 * @readonly
 * @enum {number}
 * @property SECOND 1 second in milliseconds.
 * @property MINUTE 1 minute in milliseconds.
 * @property HOUR 1 hour in milliseconds.
 * @property DAY 1 day in milliseconds.
 * @property WEEK 1 week in milliseconds.
 * @property MONTH 1 month in milliseconds.
 * @property YEAR 1 year in milliseconds.
 * @property SECONDS_PER_HOUR
 * @property SECONDS_PER_DAY
 */
export const TIME = Object.freeze({
	SECOND: 1000,
	MINUTE: 1000 * 60,
	HOUR: 1000 * 60 * 60,
	DAY: 1000 * 60 * 60 * 24,
	WEEK: 1000 * 60 * 60 * 24 * 7,
	MONTH: 1000 * 60 * 60 * 24 * 30.4,
	YEAR: 1000 * 60 * 60 * 24 * 365,
	SECONDS_PER_HOUR: 3600,
	SECONDS_PER_DAY: 86400,
});

/**
 * Common frequency periods (time from peak to peak).
 * @readonly
 * @enum {number}
 * @property HZ_15 Period for frequency of 15Hz. Visual updates throttled to 15Hz will feel slow. Not recommended for anything visual. Aliased by FREQ.FPS_15.
 * @property HZ_30 Period for frequency of 30Hz. Visual updates throttled to 30Hz may be noticed by users, but should be acceptable. Aliased by FREQ.FPS_30.
 * @property HZ_60 Period for frequency of 60Hz. Users shouldn't be able to detect visual updates throttled to 60Hz. Aliased by FREQ.FPS_60.
 */
export const FREQ = Object.freeze({
	HZ_15: TIME.SECOND / 15,
	FPS_15: TIME.SECOND / 15,
	HZ_30: TIME.SECOND / 30,
	FPS_30: TIME.SECOND / 30,
	HZ_60: TIME.SECOND / 60,
	FPS_60: TIME.SECOND / 60,
});
