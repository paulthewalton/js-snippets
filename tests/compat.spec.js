import { CompatResolver, compatNow } from "../lib/compat";
import { isCallable, isNumber } from "../lib/type";

test("testing CompatResolver", () => {
	const resolver = new CompatResolver();
	// eslint-disable-next-line no-undef
	expect(resolver.scope).toEqual(window || global);
});
