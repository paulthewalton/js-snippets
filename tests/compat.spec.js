import { CompatResolver, compatNow } from "../src/compat";
import { isCallable, isNumber } from "../src/type";

test("testing CompatResolver", () => {
	const resolver = new CompatResolver();
	// eslint-disable-next-line no-undef
	expect(resolver.scope).toEqual(window || global);
});
