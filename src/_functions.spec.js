import {
	sequence,
	compose,
	batch,
	batchApply,
	makeTest,
	partial,
	partialRight,
	throttle,
	debounce,
} from "./_functions";

const times10 = (x) => x * 10;
const plus2 = (x) => x + 2;
const minus5 = (x) => x - 5;
const sum = (x, y) => x + y;
const bigSum = (...values) => values.reduce(sum);

test("testing sequence()", () => {
	expect(sequence(minus5, times10, plus2)(15)).toStrictEqual(plus2(times10(minus5(15))));
	expect(sequence(minus5, times10, plus2)(15)).toBe(102);
	expect(sequence(plus2, times10, minus5)(15)).toBe(165);
	expect(sequence(minus5, -5, times10)(15)).toBe(100);
});

test("testing compose()", () => {
	expect(compose(minus5, times10, plus2)(15)).toStrictEqual(minus5(times10(plus2(15))));
	expect(compose(minus5, times10, plus2)(15)).toBe(165);
	expect(compose(plus2, times10, minus5)(15)).toBe(102);
	expect(compose(minus5, -5, times10)(15)).toBe(145);
});

test("testing batch()", () => {
	expect(batch(plus2, times10, minus5)(15)).toStrictEqual([plus2(15), times10(15), minus5(15)]);
	expect(batch(plus2, times10, minus5)(15)).toStrictEqual([17, 150, 10]);
	expect(batch(times10, minus5, plus2)(15)).toStrictEqual([150, 10, 17]);
	expect(batch(times10, minus5, "String", plus2)(15)).toStrictEqual([150, 10, 17]);
	const { toUpperCase, toLowerCase, split } = String.prototype;
	expect(batch(toUpperCase, toLowerCase, split).call("HELLO world", " ")).toStrictEqual([
		"HELLO WORLD",
		"hello world",
		["HELLO", "world"],
	]);
});

test("testing batchApply()", () => {
	expect(
		batchApply(Math.pow, [
			[2, 2],
			[10, 3],
		])
	).toStrictEqual([4, 1000]);
	expect(batchApply(bigSum, [3, [2, 3], [1, 2, 3, 4]])).toStrictEqual([3, 5, 10]);
});

test("testing makeTest()", () => {
	// Should return true for any number or any truthy value
	let myAnyTest = makeTest([(x) => typeof x === "number", (x) => !!x]);
	expect(myAnyTest(0)).toBe(true);
	expect(myAnyTest(1)).toBe(true);
	expect(myAnyTest(-1)).toBe(true);
	expect(myAnyTest(Infinity)).toBe(true);
	expect(myAnyTest(NaN)).toBe(true);
	expect(myAnyTest(true)).toBe(true);
	expect(myAnyTest(false)).toBe(false);
	expect(myAnyTest({})).toBe(true);
	expect(myAnyTest("")).toBe(false);
	expect(myAnyTest("1")).toBe(true);
	expect(myAnyTest(null)).toBe(false);
	expect(myAnyTest(undefined)).toBe(false);
});

test("testing makeTest() strict mode", () => {
	// Should return true for any truthy number
	let myStrictTest = makeTest([(x) => typeof x === "number", (x) => !!x], true);
	expect(myStrictTest(0)).toBe(false);
	expect(myStrictTest(1)).toBe(true);
	expect(myStrictTest(-1)).toBe(true);
	expect(myStrictTest(Infinity)).toBe(true);
	expect(myStrictTest(NaN)).toBe(false);
	expect(myStrictTest(true)).toBe(false);
	expect(myStrictTest(false)).toBe(false);
	expect(myStrictTest({})).toBe(false);
	expect(myStrictTest("")).toBe(false);
	expect(myStrictTest("1")).toBe(false);
	expect(myStrictTest(null)).toBe(false);
	expect(myStrictTest(undefined)).toBe(false);
});

test("testing partial()", () => {
	let testFunc = (a, b, c, ...d) => ({ a, b, c, d });
	let simple = partial(testFunc, "foo", 11);
	let placeheld = partial(testFunc, "foo", partial.placeholder, 33);
	let placeheldLiteral = partial(testFunc, "foo", "_", 33);
	// Not supplying arg -> undefined
	// Extra args are treated as normal by the function
	expect(simple()).toEqual({ a: "foo", b: 11, c: undefined, d: [] });
	expect(simple(22, 33)).toEqual({ a: "foo", b: 11, c: 22, d: [33] });
	// unfilled placeholder -> undefined
	expect(placeheld().b).toBeUndefined();
	// using function property `placeholder` === using "_" string literal
	expect(placeheld()).toEqual(placeheldLiteral());
	// Filling placeholder as expected
	expect(placeheld([true, false])).toEqual({ a: "foo", b: [true, false], c: 33, d: [] });
	// Args provided to resulting function fill placeholders first, then append to argument list
	expect(partial(testFunc, partial.placeholder, 22)(11, 33, 44, 55)).toEqual({ a: 11, b: 22, c: 33, d: [44, 55] });
});

test("testing partialRight()", () => {
	let testFunc = (a, b, c) => ({ a, b, c });
	let simple = partialRight(testFunc, "foo", 11);
	// Not supplying arg -> undefined
	expect(simple()).toEqual({ a: "foo", b: 11, c: undefined });
	// Extra args are treated as normal by the function
	expect(simple(22, 33)).toEqual({ a: 22, b: 33, c: "foo" });
	// Placeholding
	let placeheld = partialRight(testFunc, partialRight.placeholder, "bar");
	let placeheldLast = partialRight(testFunc, "bar", partialRight.placeholder);
	expect(placeheld()).toEqual({ a: undefined, b: "bar", c: undefined });
	expect(placeheld(22, 33)).toEqual({ a: 22, b: 33, c: "bar" });
	expect(placeheldLast(22, 33)).toEqual({ a: 22, b: "bar", c: 33 });
	expect(placeheldLast(22, 33, 44)).toEqual({ a: 22, b: 33, c: "bar" });
	// Same placeholder, both reference same value
	expect(partial.placeholder).toEqual(partialRight.placeholder);

	let dangerZone = (a, b, ...c) => ({ a, b, c });
	let highwayToDangerZone = partialRight(dangerZone, "foo", "bar");
	expect(highwayToDangerZone()).toEqual({ a: "foo", b: "bar", c: [] });
	expect(highwayToDangerZone(1)).toEqual({ a: 1, b: "foo", c: ["bar"] });
	expect(highwayToDangerZone(1, 2)).toEqual({ a: 1, b: 2, c: ["foo", "bar"] });
});
