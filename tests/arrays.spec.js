import { rotateArray } from "../src/arrays";

test("testing rotateArray", () => {
	let testArray = [1, 2, 3, 4, 5];
	expect(rotateArray(testArray)).toStrictEqual([2, 3, 4, 5, 1]);
	expect(rotateArray(testArray, 3)).toStrictEqual([4, 5, 1, 2, 3]);
	expect(rotateArray(testArray, -2)).toStrictEqual([4, 5, 1, 2, 3]);
	expect(rotateArray(testArray, 0)).toStrictEqual(testArray);
	expect(rotateArray(testArray, testArray.length)).toBe(testArray);
	expect(rotateArray(testArray)).toStrictEqual(rotateArray(testArray));
});
