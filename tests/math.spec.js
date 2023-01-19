import { toNumber, toInteger, toDecimal, capMinMax } from "../lib/math";

test("testing toNumber() for successful conversions", () => {
	expect(toNumber(1)).toBe(1);
	expect(toNumber(0)).toBe(0);
	expect(toNumber(-2.5)).toBe(-2.5);
	expect(toNumber(true)).toBe(1);
	expect(toNumber(false)).toBe(0);
	expect(toNumber("")).toBe(0);
	expect(toNumber("2")).toBe(2);
	expect(toNumber("-2")).toBe(-2);
	expect(toNumber("2.5")).toBe(2.5);
	expect(toNumber("-2.5")).toBe(-2.5);
	expect(toNumber(" -2.5")).toBe(-2.5);
	expect(toNumber("-2.5 ")).toBe(-2.5);
	expect(toNumber([4])).toBe(4);
	expect(toNumber(["4"])).toBe(4);
	expect(toNumber(Infinity)).toBe(Infinity);
	expect(toNumber(null)).toBe(0);
});
test("testing toNumber() for failing conversions", () => {
	expect(toNumber("2px")).toBe(0);
	expect(toNumber("$2")).toBe(0);
	expect(toNumber({})).toBe(0);
	expect(toNumber(() => 1)).toBe(0);
	expect(toNumber([])).toBe(0);
	expect(toNumber([4, 5])).toBe(0);
	expect(toNumber(["4, 5"])).toBe(0);
	expect(toNumber(undefined)).toBe(0);
	expect(toNumber(NaN)).toBe(0);
});

test("testing toNumber() fallback argument for failed conversions", () => {
	expect(toNumber(1, 2)).toBe(1);
	expect(toNumber(null, 2)).toBe(0);
	expect(toNumber(undefined, 2)).toBe(2);
	expect(toNumber(NaN, 2)).toBe(2);
	expect(toNumber(2, NaN)).toBe(2);
	expect(toNumber(undefined, NaN)).toBe(0);
});

test("testing toInteger()", () => {
	expect(toInteger(1)).toBe(1);
	expect(toInteger(-1)).toBe(-1);
	expect(toInteger(0)).toBe(0);
	expect(toInteger(10)).toBe(10);
	expect(toInteger(2.25)).toBe(2);
	expect(toInteger(2.5)).toBe(2);
	expect(toInteger(2.75)).toBe(2);
	expect(toInteger(-2.75)).toBe(-2);
	expect(toInteger(Infinity)).toBe(Infinity);
});

test("testing toDecimal()", () => {
	expect(() => toDecimal(3.5, 0.12345)).toThrow();
	expect(toDecimal(2)).toBe(0);
	expect(toDecimal(2, 2)).toBe(2);
	expect(toDecimal(2, 2.12345)).toBe(2.12);
	expect(toDecimal(3, -2.12345)).toBe(-2.123);
	expect(toDecimal(0, -2.12345)).toBe(-2);
	expect(toDecimal(-1, 123)).toBe(120);
	// Unexpected, Math.pow apparently accepts numeric strings?
	expect(toDecimal("3", 0.12345)).toBe(0.123);
});

test("testing capMinMax()", () => {
	expect(capMinMax(1, 10, 5)).toBe(5);
	expect(capMinMax(1, 10, 10)).toBe(10);
	expect(capMinMax(1, 10, 0.2)).toBe(1);
	expect(capMinMax(1, 10, 20000)).toBe(10);
	expect(capMinMax(1, 10, Infinity)).toBe(10);
	expect(capMinMax(0, 1, -1)).toBe(0);
	expect(capMinMax(0, 1, 0.1234)).toBe(0.1234);
});
