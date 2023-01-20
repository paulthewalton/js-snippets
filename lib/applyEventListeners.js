import { batchApply } from "./functions";

/**
 * Add listeners for multiple events to one DOM element.
 * @category Node & Element
 * @arg {Element} - eventTarget DOM element to add event listeners.
 * @arg {Array[]} - listeners Array of addEventListener argument sets.
 */
export function applyEventListeners(eventTarget, listeners) {
	batchApply(EventTarget.prototype.addEventListener, listeners, eventTarget);
}
