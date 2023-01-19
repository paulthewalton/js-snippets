import { hasAllProps, hasAnyProps, matchProps, extend, diff, allowProps, denyProps } from "../lib/objects";

test("testing hasAllProps", () => {
	const testObj = { a: 1, b: 2, c: 3, foo: false, bar: NaN };
	expect(hasAllProps(["a", "b", "foo"], testObj)).toBe(true);
	expect(hasAllProps(["a", "b", "fizz"], testObj)).toBe(false);
	expect(hasAllProps([], testObj)).toBe(true);
});

test("testing hasAnyProps", () => {
	const testObj = { a: 1, b: 2, c: 3, foo: false, bar: NaN };
	expect(hasAnyProps(["a", "b", "foo"], testObj)).toBe(true);
	expect(hasAnyProps(["a", "b", "fizz"], testObj)).toBe(true);
	expect(hasAnyProps(["fizz"], testObj)).toBe(false);
	expect(hasAnyProps([], testObj)).toBe(false);
});

test("testing extend", () => {
	const obj1 = { a: 1, b: 2, c: 3 };
	const obj2 = extend(obj1, { d: 4 });
	expect(obj2).toEqual({ a: 1, b: 2, c: 3, d: 4 });
	expect(obj1).toEqual({ a: 1, b: 2, c: 3, d: 4 });
	expect(obj2).toBe(obj1);
	expect(extend({ a: "foobar", b: { foo: true, bar: false } }, { b: false })).toEqual({ a: "foobar", b: false });

	const img = new Image();
	extend(img.style, { background: "red" });
	expect(getComputedStyle(img).backgroundColor).toBe("red");
});
