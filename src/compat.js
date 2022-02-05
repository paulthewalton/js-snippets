/**
 * @file
 * @kind overview
 * @summary Resolve some cross-browser incompatibilities.
 * @author Paul Walton
 */

import { isCallable } from "./type";

/**
 * @typedef {Object} CompatResolverCandidate
 * @property {string|function} fn Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
 * @property {?Object} scope An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node)
 */

/**
 * @class CompatResolver
 * @summary Framework for resolving functions with different names & availabilities across browsers.
 * @property {CompatResolverCandidate[]} candidates
 * @property {Object} scope
 * @template T
 */
export class CompatResolver {
	/**
	 * @constructor
	 * @param {CompatResolverCandidate[]} candidates
	 * @param {?Object} [scope]
	 */
	constructor(candidates, scope) {
		this.candidates = [].concat(candidates || []);
		// eslint-disable-next-line no-undef
		this.scope = scope || window || global;
	}

	/**
	 * @function
	 * @summary Add additional candidates to an existing CompatResolver instance.
	 * @param {string|function} fn Either the member name of a candidate function within the `scope`, or a function that returns a candidate function.
	 * @param {Object} [scope] An optional scope object to check for the candidate function, defaults to scope of the CompatResolver instance.
	 * @param {boolean} [prepend=false] Whether to prepend the candidate to the list, default `false`.
	 * @returns {void}
	 */
	add(fn, scope, prepend = false) {
		const addCandidate = prepend ? this.candidates.unshift : this.candidates.push;
		scope = scope || this.scope;
		if (isCallable(fn)) {
			addCandidate({ fn, scope });
			return;
		}
		addCandidate({ fn, scope });
	}

	/**
	 * @summary Resolve the candidates to a usable implementation.
	 * @param {boolean} [forceEvaluation] Force (re)evaluation of candidates.
	 * @returns {?T} Resolved compat function.
	 */
	resolve(forceEvaluation = false) {
		if (this._resolved && !forceEvaluation) {
			return this._resolved;
		}
		for (let i = 0; i < this.candidates.length; i++) {
			let { fn, scope } = this.candidates[i];
			scope = scope || this.scope;
			if (isCallable(fn)) {
				return (this._resolved = fn());
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
 * @arg {string} methodName Method name.
 * @arg {CompatResolver|CompatResolverCandidate[]} resolver
 * @returns {void}
 */
export function polyfill(scope, methodName, resolver) {
	if (scope[methodName]) return;
	if (!(resolver instanceof CompatResolver)) {
		resolver = new CompatResolver(resolver, scope);
	}
	scope[methodName] = resolver.resolve();
}

/**
 * @typedef {function} CompatNow
 * @returns {DOMHighResTimeStamp|number}
 * @summary A cross-browser function for calculating timings.
 * @desc Defaults to `performance.now`, falling back to `Date.now`.
 */

/**
 * @type {CompatResolver<CompatNow>}
 * @
 */
export const compatNow = new CompatResolver([
	{ scope: performance, fn: "now" },
	{ scope: Date, fn: "now" },
]);

/**
 * @typedef {function} CompatRequestAnimationFrame
 * @arg {FrameRequestCallback} callback
 * @returns {number}
 */

/**
 * @type {CompatResolver<CompatRequestAnimationFrame>}
 */
export const compatRequestAnimationFrame = new CompatResolver([
	{ scope: window, fn: "requestAnimationFrame" },
	{ scope: window, fn: "webkitRequestAnimationFrame" },
	{ scope: window, fn: "mozRequestAnimationFrame" },
	{ scope: window, fn: "oRequestAnimationFrame" },
	{ scope: window, fn: "msRequestAnimationFrame" },
	{
		fn: function () {
			const now = compatNow.resolve();
			return function (callback) {
				return window.setTimeout(function () {
					callback(now());
				}, 1000 / 60);
			};
		},
	},
]);

/**
 * @typedef {function} CompatCancelAnimationFrame
 * @arg {number} handle
 * @returns {void}
 */

/**
 * @type {CompatResolver<CompatCancelAnimationFrame>}
 */
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
