import { isObject } from "./isObject";
import { kebabCase } from "./kebabCase";
import { extend } from "./extend";

/**
 * Create an HTMLElement.
 * * returns null for invalid tagName
 * @summary Create an HTMLElement.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append|ParentNode.append}
 * @category Node & Element
 * @arg {string} tagName - Element tag name.
 * @arg {Object} props - Element properties. Unrecognized props are kebab-cased and set as attributes.
 * @arg {...(Node|string)} children - Element child nodes.
 * @returns {?HTMLElement}
 */
export function createElem(tagName, props, ...children) {
	const el = document.createElement(tagName);
	if (el.toString() === "[object HTMLUnknownElement]") {
		return;
	}
	if (props && isObject(props)) {
		for (const prop in props) {
			if (!props.hasOwnProperty(prop)) {
				continue;
			}
			const propValue = props[prop];
			if (!(prop in el)) {
				el.setAttribute(kebabCase(prop), propValue);
				continue;
			}
			if (isObject(propValue) && isObject(el[prop])) {
				extend(el[prop], propValue);
			} else {
				el[prop] = propValue;
			}
		}
	}
	el.append(...children);
	return el;
}
