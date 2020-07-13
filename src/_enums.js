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

export const FREQ = Object.freeze({
	HZ_15: TIME.SECOND / 15,
	FPS_15: TIME.SECOND / 15,
	HZ_30: TIME.SECOND / 30,
	FPS_30: TIME.SECOND / 30,
	HZ_60: TIME.SECOND / 60,
	FPS_60: TIME.SECOND / 60,
	HZ_120: TIME.SECOND / 120,
	FPS_120: TIME.SECOND / 120,
});
