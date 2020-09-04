import { unwrapPromises } from "../src/async";

test("testing unwrapPromises()", async () => {
	const testObj = { a: 1, b: 2 };
	const pTrue = Promise.resolve(true);
	const pFalse = Promise.resolve(false);
	const pNum = Promise.resolve(1000);
	const pObj = Promise.resolve(testObj);
	const pReject = Promise.reject("error");
	const testError = new Error("test error");
	const pError = Promise.reject(testError);

	await expect(unwrapPromises(pNum)).resolves.toStrictEqual([1000]);
	await expect(unwrapPromises(pTrue, pFalse, pObj)).resolves.toStrictEqual([true, false, testObj]);
	await expect(unwrapPromises(pTrue, pFalse, pReject)).rejects.toBe("error");
	await expect(unwrapPromises(pTrue, pFalse, pError)).rejects.toThrow("test error");
});
