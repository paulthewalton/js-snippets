/**
 * Shuffle the elements of an array. Uses the Durstenfeld shuffle.
 * * Shuffles in place, use `arr.slice(0)` to get a copy of the array to shuffle.
 * @summary Shuffle the elements of an array.
 * @category Arrays
 * @arg {Array} arr
 * @returns {Array}
 * @example
 * const numbers = [1,2,3,4,5];
 * shuffleArray(numbers); // -> [1,4,2,5,3]
 */
export function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
