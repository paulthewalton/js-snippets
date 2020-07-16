<br>

## Constants

<dl>
<dt><a href="#listenerOptions">listenerOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="#setUpInterfaceDetection">setUpInterfaceDetection(win, doc)</a></dt>
<dd><p>Adds <code>hover</code> and <code>touch</code> classes to the documentElement when mouse/stylus &amp; touch events detected.</p>
</dd>
<dt><a href="#setUpTabFocus">setUpTabFocus()</a></dt>
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
Adds `hover` and `touch` classes to the documentElement when mouse/stylus & touch events detected.


| Param | Type | Description |
| --- | --- | --- |
| win | <code>Window</code> | Window to listen for events. |
| doc | <code>Document</code> | Document to recieve classes. |


* [setUpInterfaceDetection(win, doc)](#setUpInterfaceDetection)
    * [~onDetectTouchInput()](#setUpInterfaceDetection..onDetectTouchInput)
    * [~onDetectHover()](#setUpInterfaceDetection..onDetectHover)


<br><a name="setUpInterfaceDetection..onDetectTouchInput"></a>

### setUpInterfaceDetection~onDetectTouchInput()
Add the `touch` class to the document element when the next touch event is detected.


<br><a name="setUpInterfaceDetection..onDetectHover"></a>

### setUpInterfaceDetection~onDetectHover()
Add the `hover` class to the document element on the next mouseover event


<br><a name="setUpTabFocus"></a>

## setUpTabFocus()
Adds event listeners to window, setting `tab-focus` and `tab-focus-within` classes on focused elements.


* [setUpTabFocus()](#setUpTabFocus)
    * [~removeTabFocusClasses(focusEvent)](#setUpTabFocus..removeTabFocusClasses)
    * [~addTabFocusClasses(focusEvent)](#setUpTabFocus..addTabFocusClasses)
    * [~primeTabFocus(keyEvent)](#setUpTabFocus..primeTabFocus)


<br><a name="setUpTabFocus..removeTabFocusClasses"></a>

### setUpTabFocus~removeTabFocusClasses(focusEvent)
Remove classes on focusout.

**See**: getEventPath  

| Param | Type |
| --- | --- |
| focusEvent | <code>FocusEvent</code> | 


<br><a name="setUpTabFocus..addTabFocusClasses"></a>

### setUpTabFocus~addTabFocusClasses(focusEvent)
Add classes on focusin.
Removes classes from elements not in event path.

**See**: getEventPath  

| Param | Type |
| --- | --- |
| focusEvent | <code>FocusEvent</code> | 


<br><a name="setUpTabFocus..primeTabFocus"></a>

### setUpTabFocus~primeTabFocus(keyEvent)
Primes tab focus listeners by capturing keydown events for the Tab key.


| Param | Type |
| --- | --- |
| keyEvent | <code>KeyboardEvent</code> | 

