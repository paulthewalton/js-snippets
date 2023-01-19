import { leftPad } from "./leftPad";

/**
 * Get a formatted string representation of time in seconds.
 * @category String
 * @arg {number} seconds - Time in seconds.
 * @arg {boolean} [forceHours=false] - Whether to include hours in the output when time is less than 1 hour.
 * @returns {string} Formatted time string.
 * @example
 * formatSeconds(27); // => "0:27"
 * formatSeconds(3822); // => "1:03:42"
 */
export function formatSeconds(seconds, forceHours = false) {
	const hours = Math.floor(seconds / 3600);
	let output = `${Math.floor((seconds % 3600) / 60)}:${leftPad(Math.floor(seconds % 60), 2, 0)}`;
	if (hours || forceHours) {
		output = `${hours}:${leftPad(output, 5, 0)}`;
	}
	return output;
}
