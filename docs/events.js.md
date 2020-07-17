

<br><a name="events.js"></a>

# events.js
> Event utilities.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/onDocReady.md">onDocReady(fn)</a></dt>
<dd><p>Vanilla JS replacement for jQuery document ready.</p>
</dd>
<dt><a href="docs/dispatchCustomEvent.md">dispatchCustomEvent(eventType, [target], [options])</a> ⇒ <code>boolean</code></dt>
<dd><p>Dispatch a custom event.</p>
</dd>
<dt><a href="docs/getEventPath.md">getEventPath(event)</a> ⇒ <code>Array.&lt;EventTarget&gt;</code></dt>
<dd><p>Get the bubble path of an event.</p>
</dd>
</dl>


<br><a name="onDocReady"></a>

## onDocReady(fn)
Vanilla JS replacement for jQuery document ready.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback for on document ready. |


<br><a name="dispatchCustomEvent"></a>

## dispatchCustomEvent(eventType, [target], [options]) ⇒ <code>boolean</code>
> Dispatch a custom event.

Dispatch a custom event of type `eventType` on `target`, defaults to document.
* Returns true on success, false on failure.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventType | <code>string</code> |  | The event type. |
| [target] | <code>EventTarget</code> | <code>document</code> | The element to dispatch the event. |
| [options] | <code>Object</code> |  | Event options. |
| [options.bubbles] | <code>boolean</code> | <code>false</code> | Whether the event will bubble. |
| [options.cancelable] | <code>boolean</code> | <code>false</code> | Whether the event is cancelable. |
| [options.composed] | <code>boolean</code> | <code>false</code> | Whether the event is composed. |
| [options.detail] | <code>\*</code> |  | Any data to pass to the event handler. |


<br><a name="getEventPath"></a>

## getEventPath(event) ⇒ <code>Array.&lt;EventTarget&gt;</code>
Get the bubble path of an event.


| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

