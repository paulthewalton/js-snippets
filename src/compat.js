import { isCallable } from "./type";

export class CompatResolver {
	constructor(candidates, scope) {
		this.candidates = candidates || [];
		// eslint-disable-next-line no-undef
		this.scope = scope || window || global;
	}

	add(fn, scope) {
		if (isCallable(fn)) {
			this.candidates.push({ fn, scope });
			return;
		}
		scope = scope || this.scope;
		this.candidates.push({ fn, scope });
	}

	resolve(forceEvaluation) {
		if (this._resolved && !forceEvaluation) {
			return this._resolved;
		}
		for (let i = 0; i < this.candidates.length; i++) {
			const { fn, scope } = this.candidates[i];
			if (isCallable(fn)) {
				return (this._resolved = fn);
			}
			const candidate = scope[fn];
			if (candidate && isCallable(candidate)) {
				return (this._resolved = candidate);
			}
		}
	}
}

/**
 * @arg {Object} scope Method/function scope.
 */
export function polyfill(scope, methodName, resolver) {
	if (!(resolver instanceof CompatResolver)) {
		resolver = new CompatResolver(resolver, scope);
	}
	if (!scope[methodName]) {
		scope[methodName] = resolver.resolve();
	}
}

export const compatRequestAnimationFrame = new CompatResolver([
	{ scope: window, fn: "requestAnimationFrame" },
	{ scope: window, fn: "webkitRequestAnimationFrame" },
	{ scope: window, fn: "mozRequestAnimationFrame" },
	{ scope: window, fn: "oRequestAnimationFrame" },
	{ scope: window, fn: "msRequestAnimationFrame" },
	{
		fn: function (callback) {
			return window.setTimeout(callback, 1000 / 60);
		},
	},
]);

export const compatCancelAnimationFrame = new CompatResolver([
	{ scope: window, fn: "cancelAnimationFrame" },
	{ scope: window, fn: "webkitCancelRequestAnimationFrame" },
	{ scope: window, fn: "mozCancelRequestAnimationFrame" },
	{ scope: window, fn: "oCancelRequestAnimationFrame" },
	{ scope: window, fn: "msCancelRequestAnimationFrame" },
	{
		fn: clearTimeout,
	},
]);
