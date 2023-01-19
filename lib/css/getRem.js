import { partial } from "../functions";
import { getEm } from "./getEm";

/**
 * Get the em (font size) of an element.
 * @category CSS
 * @function
 * @returns {number}
 */
export const getRem = partial(getEm, document.documentElement);
