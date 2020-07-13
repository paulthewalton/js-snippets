import {
	isArray,
	isCallable,
	isDomObject,
	isInt,
	isNumber,
	isNumeric,
	isObject,
	isPojo,
	isString,
	parseBool,
	areSameType,
} from "./_type";

const testArray = ["foo", "bar", "baz"];
const testFauxArray = { 0: "foo", 1: "bar", 2: "baz", length: 3 };
const testElement = document.createElement("div");
const testPojo = { foo: "bar" };

class TestClass {
	call() {}
}

test("testing isInt() ", () => {
	// True
	expect(isInt(0)).toBe(true);
	expect(isInt(1)).toBe(true);
	expect(isInt("1")).toBe(true);
	expect(isInt(-1)).toBe(true);
	expect(isInt([1])).toBe(true);
	// False
	expect(isInt(1.5)).toBe(false);
	expect(isInt("1.5")).toBe(false);
	expect(isInt("")).toBe(false);
	expect(isInt(null)).toBe(false);
	expect(isInt(undefined)).toBe(false);
	expect(isInt([])).toBe(false);
	expect(isInt([1.5])).toBe(false);
	expect(isInt([1, 2])).toBe(false);
	expect(isInt(Infinity)).toBe(false);
	expect(isInt({})).toBe(false);
	expect(isInt(() => {})).toBe(false);
});

test("testing isCallable() ", () => {
	// True
	expect(isCallable(() => {})).toBe(true);
	expect(isCallable(function () {})).toBe(true);
	expect(isCallable(function* () {})).toBe(true);
	expect(isCallable(TestClass)).toBe(true);
	expect(isCallable(new Function("a", "b", "c"))).toBe(true);
	// False
	expect(isCallable(new TestClass())).toBe(false);
	expect(isCallable(undefined)).toBe(false);
	expect(isCallable(null)).toBe(false);
	expect(isCallable(false)).toBe(false);
	expect(isCallable(true)).toBe(false);
	expect(isCallable(5)).toBe(false);
	expect(isCallable([])).toBe(false);
	expect(isCallable({})).toBe(false);
	expect(isCallable(/a/g)).toBe(false);
	expect(isCallable(new RegExp("a", "g"))).toBe(false);
	expect(isCallable(new Date())).toBe(false);
	expect(isCallable(42)).toBe(false);
	expect(isCallable(NaN)).toBe(false);
	expect(isCallable(Infinity)).toBe(false);
	expect(isCallable(new Number(42))).toBe(false);
	expect(isCallable("foo")).toBe(false);
	expect(isCallable(Object("foo"))).toBe(false);
});

test("testing isNumber()", () => {
	// True
	expect(isNumber(0)).toBe(true);
	expect(isNumber(1)).toBe(true);
	expect(isNumber(-1)).toBe(true);
	expect(isNumber(Infinity)).toBe(true);
	expect(isNumber(1.234)).toBe(true);
	expect(isNumber(Number(1.234))).toBe(true);
	expect(isNumber(Number("1.234"))).toBe(true);
	expect(isNumber(new Number("1.234"))).toBe(true);
	// False
	expect(isNumber(NaN)).toBe(false);
	expect(isNumber(Number(1.234).toString())).toBe(false);
	expect(isNumber("1")).toBe(false);
	expect(isNumber("")).toBe(false);
	expect(isNumber(true)).toBe(false);
	expect(isNumber(false)).toBe(false);
	expect(isNumber(null)).toBe(false);
	expect(isNumber(undefined)).toBe(false);
	expect(isNumber({})).toBe(false);
});

test("testing isNumeric()", () => {
	// True
	expect(isNumeric(0)).toBe(true);
	expect(isNumeric(1)).toBe(true);
	expect(isNumeric(-1)).toBe(true);
	expect(isNumeric(Infinity)).toBe(true);
	expect(isNumeric(1.234)).toBe(true);
	expect(isNumeric(Number(1.234))).toBe(true);
	expect(isNumeric(true)).toBe(true);
	expect(isNumeric(false)).toBe(true);
	expect(isNumeric("1")).toBe(true);
	expect(isNumeric("")).toBe(true);
	expect(isNumeric(null)).toBe(true);
	expect(isNumeric([])).toBe(true);
	// False
	expect(isNumeric("23px")).toBe(false);
	expect(isNumeric(NaN)).toBe(false);
	expect(isNumeric(undefined)).toBe(false);
	expect(isNumeric({})).toBe(false);
});

test("testing isObject()", () => {
	// True
	expect(isObject({})).toBe(true);
	expect(isObject(new TestClass())).toBe(true);
	expect(isObject([])).toBe(true);
	// False
	expect(isObject(null)).toBe(false);
	expect(isObject(Infinity)).toBe(false);
	expect(isObject(NaN)).toBe(false);
	expect(isObject(undefined)).toBe(false);
	// Primatives
	expect(isObject(1)).toBe(false);
	expect(isObject(Number(1))).toBe(false);
	expect(isObject(new Number(1))).toBe(true);
	expect(isObject("Hello world")).toBe(false);
	expect(isObject(String("Hello world"))).toBe(false);
	expect(isObject(new String("Hello world"))).toBe(true);
	expect(isObject(true)).toBe(false);
	expect(isObject(Boolean(true))).toBe(false);
	expect(isObject(new Boolean(true))).toBe(true);
});

test("testing isPojo()", () => {
	// True
	expect(isPojo({})).toBe(true);
	expect(isPojo(testPojo)).toBe(true);
	// False
	expect(isPojo([])).toBe(false);
	expect(isPojo(new TestClass())).toBe(false);
	expect(isPojo(() => {})).toBe(false);
});

test("testing isArray()", () => {
	// True
	expect(isArray([])).toBe(true);
	expect(isArray(testArray)).toBe(true);
	expect(isArray(new Array())).toBe(true);
	// False
	expect(isArray({})).toBe(false);
	expect(isArray(testFauxArray)).toBe(false);
});

test("testing isString()", () => {
	// True
	expect(isString("Hello World")).toBe(true);
	expect(isString(String("Hello World"))).toBe(true);
	expect(isString(String(false))).toBe(true);
	expect(isString(new String("Hello World"))).toBe(true);
	// False
	expect(isString(["Hello World"])).toBe(false);
	expect(isString(1)).toBe(false);
	expect(isString(true)).toBe(false);
	expect(isString(null)).toBe(false);
	expect(isString(undefined)).toBe(false);
});

test("testing isDomObject()", () => {
	// True
	expect(isDomObject(testElement)).toBe(true);
	// False
	expect(isDomObject(testElement.innerText)).toBe(false);
	expect(isDomObject({})).toBe(false);
	expect(isDomObject([])).toBe(false);
});

test("testing parseBool()", () => {
	expect(parseBool(true)).toBe(true);
	expect(parseBool(false)).toBe(false);
	expect(parseBool("true")).toBe(true);
	expect(parseBool(" true")).toBe(true);
	expect(parseBool("truth")).toBe(false);
	expect(parseBool("1")).toBe(true);
	expect(parseBool("-1")).toBe(true);
	expect(parseBool("0")).toBe(false);
	expect(parseBool("1px")).toBe(false);
	expect(parseBool([])).toBe(false);
	// Boring cases
	expect(parseBool("")).toBe(false);
	expect(parseBool(1)).toBe(true);
	expect(parseBool(-1)).toBe(true);
	expect(parseBool(0)).toBe(false);
	expect(parseBool(Infinity)).toBe(true);
	expect(parseBool(null)).toBe(false);
	expect(parseBool(undefined)).toBe(false);
	expect(parseBool({})).toBe(true);
});

test("testing areSameType()", () => {
	// True
	expect(areSameType([1, 2], [3, 4], [], new Array(5))).toBe(true);
	expect(areSameType("Hello", String(12))).toBe(true);
	// False
	expect(areSameType("Hello", String(12), new String("World"))).toBe(false);
	expect(areSameType(undefined, null)).toBe(false);
	let t = new TestClass();
	Object.setPrototypeOf(t, Array.prototype);
	expect(areSameType(t, new TestClass())).toBe(false);
});
