

<br><a name="addons.js"></a>

# addons.js
> Non-functional addon helpers

**Author**: Paul Walton  

<br>

## Constants

<dl>
<dt><a href="docs/listenerOptions.md">listenerOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/setUpInterfaceDetection.md">setUpInterfaceDetection(win, doc)</a></dt>
<dd><p>Adds <code>hover</code> and <code>touch</code> classes once to the documentElement when mouse/stylus &amp; touch events detected.</p>
</dd>
<dt><a href="docs/setUpTabFocus.md">setUpTabFocus()</a> ⇒ <code>function</code></dt>
<dd><p>Adds event listeners to window, setting <code>tab-focus</code> and <code>tab-focus-within</code> classes on focused elements.</p>
</dd>
</dl>


<br><a name="listenerOptions"></a>

## listenerOptions : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| normal | <code>Object</code> \| <code>boolean</code> | Listener will behave as default. |
| passive | <code>Object</code> \| <code>boolean</code> | Listener will be passive if supported. |
| capture | <code>Object</code> \| <code>boolean</code> | Listener will dispatched as the event bubbles down. |
| passiveCapture | <code>Object</code> \| <code>boolean</code> | Listener will capture and be passive if supported. |


<br><a name="setUpInterfaceDetection"></a>

## setUpInterfaceDetection(win, doc)
Adds `hover` and `touch` classes once to the documentElement when mouse/stylus & touch events detected.


| Param | Type | Description |
| --- | --- | --- |
| win | <code>Window</code> | Window to listen for events. |
| doc | <code>Document</code> | Document to recieve classes. |


<br><a name="setUpTabFocus"></a>

## setUpTabFocus() ⇒ <code>function</code>
Adds event listeners to window, setting `tab-focus` and `tab-focus-within` classes on focused elements.

**Returns**: <code>function</code> - Teardown function to remove listeners.  
