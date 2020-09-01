import { leftPad, formatSeconds } from "../src/strings";

test("testing leftPad", () => {
	expect(leftPad("hello")).toBe("hello");
	expect(leftPad("hello", 5)).toBe("hello");
	expect(leftPad("hello", 3)).toBe("hello");
	expect(leftPad("hello", 8)).toBe("   hello");
	expect(leftPad(null, 8)).toBe("    null");
	expect(leftPad("hello", 8, false)).toBe("   hello");
	expect(leftPad("hello", 8, "c")).toBe("ccchello");
	expect(leftPad("hello", 8, "ch")).toBe("chchhello");
	expect(leftPad("hello", 8, "0")).toBe("000hello");
	expect(leftPad("hello", 8, 0)).toBe("000hello");
	expect(leftPad("hello", 8, 1)).toBe("111hello");
	expect(leftPad(34, 8)).toBe("      34");
	expect(leftPad(34, 8, 0)).toBe("00000034");
});

test("testing formatSeconds", () => {
	expect(formatSeconds(0)).toBe("0:00");
	expect(formatSeconds(4)).toBe("0:04");
	expect(formatSeconds(4, true)).toBe("0:00:04");
	expect(formatSeconds(77)).toBe("1:17");
	expect(formatSeconds(3030)).toBe("50:30");
	expect(formatSeconds(4000)).toBe("1:06:40");
	expect(formatSeconds(40000)).toBe("11:06:40");
});
