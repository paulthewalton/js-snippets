<br>

## Functions

<dl>
<dt><a href="#onDocReady">onDocReady(fn)</a></dt>
<dd><p>Vanilla JS replacement for jQuery document ready.</p>
</dd>
<dt><a href="#dispatchCustomEvent">dispatchCustomEvent(eventType, target, options)</a> ⇒ <code>boolean</code></dt>
<dd><p>Dispatch a custom event of type <code>eventType</code> on <code>target</code>, defaults to document.</p>
</dd>
<dt><a href="#getEventPath">getEventPath(event)</a> ⇒ <code>Array.&lt;EventTarget&gt;</code></dt>
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

## dispatchCustomEvent(eventType, target, options) ⇒ <code>boolean</code>
Dispatch a custom event of type `eventType` on `target`, defaults to document.

**Returns**: <code>boolean</code> - true on success, false on fail.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventType | <code>string</code> |  | The event type. |
| target | <code>EventTarget</code> |  | Optional. The element to dispatch the event. Default `document`. |
| options | <code>Object</code> |  | Optional. Event options. |
| [options.bubbles] | <code>boolean</code> | <code>false</code> | Optional. Whether the event will bubble. Default `false`. |
| [options.cancelable] | <code>boolean</code> | <code>false</code> | Optional. Whether the event is cancelable. Default `false`. |
| [options.composed] | <code>boolean</code> | <code>false</code> | Optional. Whether the event is composed. Default `false`. |
| [options.detail] | <code>\*</code> |  | Optional. Any data to pass to the event handler. Default `undefined`. |


<br><a name="getEventPath"></a>

## getEventPath(event) ⇒ <code>Array.&lt;EventTarget&gt;</code>
Get the bubble path of an event.


| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

