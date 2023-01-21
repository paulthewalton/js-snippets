
<br>

## Classes

<dl>

#### Compatibility Classes

<dt><a href="#CompatResolver">CompatResolver</a></dt>
<dd><p>Framework for resolving functions with different names &amp; availabilities across browsers.</p>
</dd>

#### Data Types Classes

<dt><a href="#Point2D">Point2D</a></dt>
<dd><p>Represents a point in 2D space.</p>
</dd>
<dt><a href="#ScrollbarStatus">ScrollbarStatus</a></dt>
<dd><p>Describes the scrollability of an element on its axes.</p>
</dd>

#### Environment Classes

<dt><a href="#MediaBreakpoint">MediaBreakpoint</a></dt>
<dd><p>A breakpoint following a mobile-first philosophy.</p>
</dd>

#### Event Classes

<dt><a href="#Emitter">Emitter</a></dt>
<dd><p>Browser-friendly Emitter class.</p>
</dd>
</dl>

<br>

## Constants

<dl>

#### Addons Constants

<dt><a href="#listenerOptions">listenerOptions</a> : <code><a href="#EventListenerOptionsCompat">EventListenerOptionsCompat</a></code></dt>
<dd></dd>

#### Compatibility Constants

<dt><a href="#compatCancelAnimationFrame">compatCancelAnimationFrame</a> : <code><a href="#CompatCancelAnimationFrame">CompatResolver.&lt;CompatCancelAnimationFrame&gt;</a></code></dt>
<dd></dd>
<dt><a href="#compatNow">compatNow</a> : <code><a href="#CompatNow">CompatResolver.&lt;CompatNow&gt;</a></code></dt>
<dd></dd>
<dt><a href="#compatRequestAnimationFrame">compatRequestAnimationFrame</a> : <code><a href="#CompatRequestAnimationFrame">CompatResolver.&lt;CompatRequestAnimationFrame&gt;</a></code></dt>
<dd></dd>
</dl>

<br>

## Functions

<dl>

#### Addons Functions

<dt><a href="#setUpInterfaceDetection">setUpInterfaceDetection(win, doc)</a></dt>
<dd><p>Adds <code>hover</code> and <code>touch</code> classes once to the documentElement when mouse/stylus &amp; touch events detected.</p>
</dd>
<dt><a href="#setUpTabFocus">setUpTabFocus()</a> ⇒ <code>function</code></dt>
<dd><p>Adds event listeners to window, setting <code>tab-focus</code> and <code>tab-focus-within</code> classes on focused elements.</p>
</dd>

#### Arrays Functions

<dt><a href="#allowValues">allowValues(allowedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter unknown values out of a given array.</p>
</dd>
<dt><a href="#arraysAreEqual">arraysAreEqual(a, b, strict)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether 2 arrays are equal.</p>
</dd>
<dt><a href="#assertArray">assertArray(value, [minLength], [fill])</a> ⇒ <code>Array</code></dt>
<dd><p>Make sure that a value is an array.</p>
</dd>
<dt><a href="#copyArray">copyArray(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Get a copy of an array.</p>
</dd>
<dt><a href="#denyValues">denyValues(deniedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter known values out of a given array.</p>
</dd>
<dt><a href="#flatten">flatten(arr, [depth])</a> ⇒ <code>Array</code></dt>
<dd><p>Flatten an array up to a set number of levels.</p>
</dd>
<dt><a href="#getIndexedValue">getIndexedValue(arr, idx, key)</a> ⇒ <code>Object</code> | <code>undefined</code></dt>
<dd><p>Get indexed entry of an array by the indexed property.</p>
</dd>
<dt><a href="#indexArray">indexArray(arr, uniqueKey)</a> ⇒</dt>
<dd><p>Index an array of objects to quickly access its entries by a unique key.</p>
</dd>
<dt><a href="#rotateArray">rotateArray(arr, [rotation])</a> ⇒ <code>Array</code></dt>
<dd><p>Get a rotated copy of an array.</p>
</dd>
<dt><a href="#shuffleArray">shuffleArray(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Shuffle the elements of an array.</p>
</dd>
<dt><a href="#uniq">uniq(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Strip array to unique values.</p>
</dd>

#### Async Functions

<dt><a href="#getHTML">getHTML(url, headers, body)</a> ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code></dt>
<dd><p>Get HTML via AJAX.</p>
</dd>
<dt><a href="#getJSON">getJSON(url, headers, body)</a> ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code></dt>
<dd><p>Get JSON via AJAX.</p>
</dd>
<dt><a href="#makeVerbosePromise">makeVerbosePromise(promise)</a> ⇒ <code>VerbosePromise.&lt;T&gt;</code></dt>
<dd><p>Add status props to a Promise.</p>
</dd>
<dt><a href="#request">request(method, type, url, headers, body)</a> ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code></dt>
<dd><p>Make simple AJAX requests</p>
</dd>
<dt><a href="#unwrapPromises">unwrapPromises(...promises)</a> ⇒ <code>Array.&lt;*&gt;</code></dt>
<dd><p>Unwrap promises once resolved.</p>
</dd>

#### CSS Functions

<dt><a href="#convertPxToRem">convertPxToRem(px, useRealValue)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a pixel value to the equivalent rem value.</p>
</dd>
<dt><a href="#convertRemToPx">convertRemToPx(rem, useRealValue)</a> ⇒ <code>number</code></dt>
<dd><p>Convert a rem value to a pixel value</p>
</dd>
<dt><a href="#ensureCSSUnits">ensureCSSUnits(value, units, fallback)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getEm">getEm(el)</a> ⇒ <code>number</code></dt>
<dd><p>Get the em (font size) of an element.</p>
</dd>
<dt><a href="#getRem">getRem()</a> ⇒ <code>number</code></dt>
<dd><p>Get the em (font size) of an element.</p>
</dd>
<dt><a href="#parseCSSColor">parseCSSColor(color)</a> ⇒ <code><a href="#ParsedCSSColor">ParsedCSSColor</a></code></dt>
<dd><p>Parse a CSS color string into red, green, blue, and alpha components.</p>
</dd>
<dt><a href="#parseCSSTime">parseCSSTime(cssTimeStr)</a> ⇒ <code>number</code></dt>
<dd><p>Parse a CSS time string into ms.</p>
</dd>

#### Comparisons Functions

<dt><a href="#byNumericValue">byNumericValue(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Compare 2 values numerically.</p>
</dd>
<dt><a href="#compareProps">compareProps(prop, subjectA, subjectB)</a> ⇒ <code>number</code></dt>
<dd><p>Compare a property of 2 objects.</p>
</dd>

#### Compatibility Functions

<dt><a href="#polyfill">polyfill(scope, methodName, resolver)</a> ⇒ <code>void</code></dt>
<dd></dd>

#### Environment Functions

<dt><a href="#calculateScrollbarWidth">calculateScrollbarWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the width of the native scrollbars.</p>
</dd>
<dt><del><a href="#detectBrowser">detectBrowser()</a> ⇒ <code>string</code></del></dt>
<dd><p>Try to determine the client browser.</p>
</dd>
<dt><del><a href="#isDev">isDev()</a> ⇒ <code>boolean</code></del></dt>
<dd><p>Try to identify development environment from location host TLD.</p>
</dd>
<dt><a href="#setUpMediaQueries">setUpMediaQueries(breakpoints)</a> ⇒ <code>Object</code></dt>
<dd><p>Get an object of preset matchMedia media queries.</p>
</dd>

#### Event Functions

<dt><a href="#dispatchCustomEvent">dispatchCustomEvent(eventType, [target], [options])</a> ⇒ <code>boolean</code></dt>
<dd><p>Dispatch a custom event.</p>
</dd>
<dt><a href="#getEventPath">getEventPath(event)</a> ⇒ <code>Array.&lt;EventTarget&gt;</code></dt>
<dd><p>Get the bubble path of an event.</p>
</dd>
<dt><a href="#onDocReady">onDocReady(fn)</a></dt>
<dd><p>Vanilla JS replacement for jQuery document ready.</p>
</dd>

#### Fallback Functions

<dt><a href="#fallbackUntil">fallbackUntil(validate, ...values)</a> ⇒ <code>*</code></dt>
<dd><p>Return the first argument that satisfies a validation callback.</p>
</dd>
<dt><a href="#fallbackUntilAsync">fallbackUntilAsync(validate, ...values)</a> ⇒ <code>Promise.&lt;?*&gt;</code></dt>
<dd><p>Resolve to the first argument that satisfies an async validation callback.</p>
</dd>

#### Functional Programming Functions

<dt><a href="#batch">batch(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Create one function that runs multiple functions on the same arguments.</p>
</dd>
<dt><a href="#batchApply">batchApply(fn, argsArray, thisArg)</a> ⇒ <code>Array</code></dt>
<dd><p>Call one function multiple times with an array of values/value arrays to pass to each call.</p>
</dd>
<dt><a href="#compose">compose(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Compose multiple functions into one function.</p>
</dd>
<dt><a href="#debounce">debounce(fn, wait, [leading])</a> ⇒</dt>
<dd><p>Debounce a function by setting a minimum elapsed time between invocations.</p>
</dd>
<dt><a href="#makeValidator">makeValidator(fns, strictMode)</a> ⇒ <code>function</code></dt>
<dd><p>Turn a series of functions into a testing function.</p>
</dd>
<dt><a href="#partial">partial(fn, ...partials)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function without setting <code>this</code>.</p>
</dd>
<dt><a href="#partialRight">partialRight(fn, ...partials)</a> ⇒ <code>function</code></dt>
<dd><p>Partially apply arguments to a function from right-to-left without setting <code>this</code>.</p>
</dd>
<dt><a href="#sequence">sequence(...fns)</a> ⇒ <code>function</code></dt>
<dd><p>Sequence multiple functions into one function.</p>
</dd>
<dt><a href="#throttle">throttle(fn, wait)</a> ⇒ <code>function</code></dt>
<dd><p>Throttle a high-frequecy and/or resource intensive function.</p>
</dd>

#### Math Functions

<dt><a href="#capMinMax">capMinMax(min, max, value)</a> ⇒ <code>number</code></dt>
<dd><p>Cap a value to between minimum and maximum values.</p>
</dd>
<dt><a href="#toDecimal">toDecimal(digitsAfterDecimal, value)</a> ⇒ <code>number</code></dt>
<dd><p>Cast a single value to decimal of specified precision.</p>
</dd>
<dt><a href="#toInteger">toInteger(value)</a> ⇒ <code>number</code></dt>
<dd><p>Cast a single value to integer.</p>
</dd>
<dt><a href="#toNumber">toNumber(value, [fallback])</a> ⇒ <code>number</code></dt>
<dd><p>Cast value to number.</p>
</dd>

#### Media Functions

<dt><a href="#preloadImage">preloadImage(sources)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Preload an image for the browser, resolves to success/error state.</p>
</dd>
<dt><a href="#testImageURL">testImageURL(url)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Test if an image URL is valid.</p>
</dd>

#### Node &amp; Element Functions

<dt><a href="#applyEventListeners">applyEventListeners(eventTarget, listeners)</a></dt>
<dd><p>Add listeners for multiple events to one DOM element.</p>
</dd>
<dt><a href="#createElem">createElem(tagName, props, ...children)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Create an HTMLElement.</p>
</dd>
<dt><a href="#getPageOffset">getPageOffset(el)</a> ⇒ <code><a href="#Point2D">Point2D</a></code></dt>
<dd><p>Get the full page offset for an element.</p>
</dd>
<dt><a href="#getParents">getParents(node, includeSelf)</a> ⇒ <code>Array.&lt;Node&gt;</code></dt>
<dd><p>Get all parent elements for an element.</p>
</dd>
<dt><a href="#getScrollParent">getScrollParent(node)</a> ⇒ <code>Node</code></dt>
<dd><p>Get the scroll parent of an element.</p>
</dd>
<dt><a href="#isInDom">isInDom(targetNode)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a DOM object is in the current DOM.</p>
</dd>
<dt><a href="#isInViewport">isInViewport(el)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if any part of an element is within the viewport.</p>
</dd>
<dt><a href="#isSameOrChildNode">isSameOrChildNode(potentialParentNode, targetNode)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a DOM object is the same or parent of another DOM object.</p>
</dd>
<dt><a href="#isScrollable">isScrollable(node)</a> ⇒ <code><a href="#ScrollbarStatus">ScrollbarStatus</a></code></dt>
<dd><p>Check whether a node has currently scrollable overflow.</p>
</dd>
<dt><a href="#scrollIntoView">scrollIntoView(el, [offset])</a></dt>
<dd><p>Scroll the window to the vertical position of an element.</p>
</dd>
<dt><a href="#setPrefixedStyle">setPrefixedStyle(elem, styleName, styleValue, prefixValues)</a></dt>
<dd><p>Apply a style to a DOM element with vendor prefixes.</p>
</dd>

#### Object Functions

<dt><a href="#allowProps">allowProps(allowedProps, subject)</a> ⇒ <code>Object</code></dt>
<dd><p>Remove unknown properties from a given object (DESTRUCTIVE).</p>
</dd>
<dt><a href="#denyProps">denyProps(deniedProps, subject)</a> ⇒ <code>Object</code></dt>
<dd><p>Remove known properties from a given object (DESTRUCTIVE).</p>
</dd>
<dt><a href="#diff">diff(source, compareTo, [depth])</a> ⇒ <code>Object</code></dt>
<dd><p>Get the difference between one object and another recursively.</p>
</dd>
<dt><a href="#extend">extend(target, extensions, [depth])</a> ⇒ <code>Object</code></dt>
<dd><p>Copy properties from one object to another recursively.</p>
</dd>
<dt><a href="#hasAllProps">hasAllProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has all of the supplied properties.</p>
</dd>
<dt><a href="#hasAnyProps">hasAnyProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has at least one of the supplied properties.</p>
</dd>
<dt><a href="#matchProps">matchProps(prop, subjectA, subjectB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check a property of 2 objects to see if the values match.</p>
</dd>
<dt><a href="#snapshot">snapshot(obj)</a> ⇒ <code>Object</code></dt>
<dd><p>Snapshot the properties of an object.</p>
</dd>

#### String Functions

<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Camel case a string.</p>
</dd>
<dt><a href="#copyToClipboard">copyToClipboard(str)</a></dt>
<dd><p>Copy a string to the users clipboard.</p>
</dd>
<dt><a href="#formatSeconds">formatSeconds(seconds, [forceHours])</a> ⇒ <code>string</code></dt>
<dd><p>Get a formatted string representation of time in seconds.</p>
</dd>
<dt><a href="#getUniqueId">getUniqueId()</a> ⇒ <code>string</code></dt>
<dd><p>Get a unique id string.</p>
</dd>
<dt><a href="#kebabCase">kebabCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Kebab case a string.</p>
</dd>
<dt><a href="#leftPad">leftPad(str, length, [char])</a> ⇒ <code>string</code></dt>
<dd><p>Add left padding to a string.</p>
</dd>
<dt><a href="#lowerCaseFirst">lowerCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of a string.</p>
</dd>
<dt><a href="#lowerCaseWords">lowerCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of each word in a string.</p>
</dd>
<dt><a href="#pascalCase">pascalCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Pascal case a string.</p>
</dd>
<dt><a href="#pathJoin">pathJoin(...segments)</a> ⇒ <code>string</code></dt>
<dd><p>Join path segments.</p>
</dd>
<dt><a href="#percentage">percentage(fraction)</a> ⇒ <code>string</code></dt>
<dd><p>Turn a fractional number into a percentage string.</p>
</dd>
<dt><a href="#sentenceCase">sentenceCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Sentence case a string.</p>
</dd>
<dt><a href="#snakeCase">snakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Snake case a string.</p>
</dd>
<dt><a href="#stripCase">stripCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip the case of a string.</p>
</dd>
<dt><a href="#stripEnd">stripEnd(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the end of a string.</p>
</dd>
<dt><a href="#stripStart">stripStart(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the start of a string.</p>
</dd>
<dt><a href="#titleCase">titleCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Title case a string.</p>
</dd>
<dt><a href="#titleSnakeCase">titleSnakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Title snake case a string (aka PHP class case).</p>
</dd>
<dt><a href="#upperCaseFirst">upperCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of a string.</p>
</dd>
<dt><a href="#upperCaseWords">upperCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of each word in a string.</p>
</dd>
<dt><a href="#upperSnakeCase">upperSnakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper snake case a string (aka constant case).</p>
</dd>

#### Type Functions

<dt><a href="#areSameType">areSameType(value, ...values)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether any number of values are of the same type.</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is an Array</p>
</dd>
<dt><a href="#isCallable">isCallable(fn)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a callable function</p>
</dd>
<dt><a href="#isDomObject">isDomObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a DOM object, a.k.a. Node</p>
</dd>
<dt><a href="#isInt">isInt(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Reliable method of determining if int</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is a number</p>
</dd>
<dt><a href="#isNumeric">isNumeric(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is numeric</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is an Object</p>
</dd>
<dt><a href="#isPojo">isPojo(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a Plain Old Javascript Object (POJO)</p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a string</p>
</dd>
<dt><a href="#parseBool">parseBool(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Parse for boolean.</p>
</dd>
</dl>


<br><a name="RECT"></a>

## RECT : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Rect properties


<br><a name="TIME"></a>

## TIME : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Time constants.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| SECOND | <code>number</code> | 1 second in milliseconds. |
| MINUTE | <code>number</code> | 1 minute in milliseconds. |
| HOUR | <code>number</code> | 1 hour in milliseconds. |
| DAY | <code>number</code> | 1 day in milliseconds. |
| WEEK | <code>number</code> | 1 week in milliseconds. |
| MONTH | <code>number</code> | 1 month in milliseconds. |
| YEAR | <code>number</code> | 1 year in milliseconds. |
| SECONDS_PER_HOUR | <code>number</code> |  |
| SECONDS_PER_DAY | <code>number</code> |  |


<br><a name="FREQ"></a>

## FREQ : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Common frequency periods (time from peak to peak).

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| HZ_15 | <code>number</code> | Period for frequency of 15Hz. Visual updates throttled to 15Hz will feel slow. |
| HZ_30 | <code>number</code> | Period for frequency of 30Hz. Visual updates throttled to 30Hz may be noticed by users, but should be acceptable. |
| HZ_60 | <code>number</code> | Period for frequency of 60Hz. Users shouldn't be able to detect visual updates throttled to 60Hz. |
| FPS_15 | <code>number</code> | Alias of FREQ.HZ_15. |
| FPS_30 | <code>number</code> | Alias of FREQ.HZ_30. |
| FPS_60 | <code>number</code> | Alias of FREQ.HZ_60. |


<br><a name="ParsedCSSColor"></a>

## ParsedCSSColor : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red value of parsed color. |
| green | <code>number</code> | Green value of parsed color. |
| blue | <code>number</code> | Blue value of parsed color. |
| alpha | <code>number</code> | Alpha value of parsed color. |
| value | <code>string</code> | The CSS color string for the parsed color. |


<br><a name="listenerOptions"></a>

## listenerOptions : [<code>EventListenerOptionsCompat</code>](#EventListenerOptionsCompat)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_


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

<br><a name="EventListenerOptionsCompat"></a>

## EventListenerOptionsCompat : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| normal | <code>boolean</code> \| <code>EventListenerOptions</code> | Listener will behave as default. |
| passive | <code>boolean</code> \| <code>EventListenerOptions</code> | Listener will be passive if supported. |
| capture | <code>boolean</code> \| <code>EventListenerOptions</code> | Listener will dispatched as the event bubbles down. |
| passiveCapture | <code>boolean</code> \| <code>EventListenerOptions</code> | Listener will capture and be passive if supported. |


<br><a name="allowValues"></a>

## allowValues(allowedValues, subject) ⇒ <code>Array</code>
Filter unknown values out of a given array.

**Returns**: <code>Array</code> - Filtered array.  

| Param | Type | Description |
| --- | --- | --- |
| allowedValues | <code>Array</code> | Array of allowed values/objects. |
| subject | <code>Array</code> | Array to filter. |

**Example**  
```js
allow([2,4], [1,1,2,3,4,4,4,5,9]); // -> [2,4,4,4]
```

<br><a name="arraysAreEqual"></a>

## arraysAreEqual(a, b, strict) ⇒ <code>boolean</code>
Check whether 2 arrays are equal.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | First array. |
| b | <code>Array</code> | Second array. |
| strict | <code>boolean</code> | Whether to evaluate each item, or just compare JSON strings. |


<br><a name="assertArray"></a>

## assertArray(value, [minLength], [fill]) ⇒ <code>Array</code>
Make sure that a value is an array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | Value to check. |
| [minLength] | <code>number</code> | <code>0</code> | Minimum length for returned array. |
| [fill] | <code>\*</code> |  | Value to insert when filling. If function, will be called with the current index, inserting the returned value. |


<br><a name="copyArray"></a>

## copyArray(arr) ⇒ <code>Array</code>
> Get a copy of an array.

Get a copy of an array. Just aliases Array.prototype.slice to better communicate intent.


| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
let a = [1,2,3];
let b = copyArray(a);
a == b; // -> false
arraysAreEqual(a,b); // -> true
```

<br><a name="denyValues"></a>

## denyValues(deniedValues, subject) ⇒ <code>Array</code>
Filter known values out of a given array.

**Returns**: <code>Array</code> - Filtered array.  

| Param | Type | Description |
| --- | --- | --- |
| deniedValues | <code>Array</code> | Array of denied values/objects. |
| subject | <code>Array</code> | Array to filter. |

**Example**  
```js
var nums = [1,1,2,3,4,4,4,5,9];
nums = denyValues([2,4], nums); // -> [1,1,3,5,9]
```

<br><a name="flatten"></a>

## flatten(arr, [depth]) ⇒ <code>Array</code>
Flatten an array up to a set number of levels.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | Array to flatten. |
| [depth] | <code>number</code> | <code>1</code> | Max depth of flattening. |

**Example**  
```js
flatten([1,2,[3,4],5]); // -> [1,2,3,4,5]
flatten([1,2,[3,[4]],5], 1); // -> [1,2,3,[4],5]
flatten([1,2,[3,[[[[4]]]]],5], Infinity); // -> [1,2,3,4,5]
```

<br><a name="getIndexedValue"></a>

## getIndexedValue(arr, idx, key) ⇒ <code>Object</code> \| <code>undefined</code>
> Get indexed entry of an array by the indexed property.

Get indexed entry of an array by the indexed property.
* Assumes `idx` is up to date with `arr`.


| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | Array of indexed objects |
| idx | <code>Map.&lt;K, number&gt;</code> | Array index |
| key | <code>K</code> |  |

**Example**  
```js
const fruitsInKitchen = [
	{ name: "banana" },
	{ name: "kiwi" },
];
const [fruitsByName] = indexArray(fruitsInKitchen, "name");
getIndexedValue(fruitsInKitchen, fruitsByName, "kiwi"); // => { name: "kiwi" }
```

<br><a name="indexArray"></a>

## indexArray(arr, uniqueKey) ⇒
Index an array of objects to quickly access its entries by a unique key.

**Returns**: Index object and prefilled accessor function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;T&gt;</code> |  |
| uniqueKey | <code>string</code> | Key for a property that will be unique for each member of the array. |

**Example**  
```js
const fruitsInKitchen = [
	{ name: "banana" },
	{ name: "kiwi" },
	{ name: "mango" },
];
const [fruitsByName, getFruitsByName] = indexArray(fruitsInKitchen, "name");
fruitsByName.get("kiwi"); // => { name: "kiwi" }
getFruitsByName("mango"); // => { name: "mango" }
getFruitsByName("banana") === fruitsInKitchen[0]; // => true
```

<br><a name="indexArray..idx"></a>

### indexArray~idx : <code>ArrayIndex.&lt;T&gt;</code>

<br><a name="rotateArray"></a>

## rotateArray(arr, [rotation]) ⇒ <code>Array</code>
Get a rotated copy of an array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  |  |
| [rotation] | <code>number</code> | <code>1</code> | Index to rotate to / Number of places to rotate by. |

**Example**  
```js
let arr = [1,2,3,4];
rotateArray(arr); // -> [2,3,4,1]
rotateArray(arr, 3); // -> [4,1,2,3]
rotateArray(arr, -2); // -> [3,4,1,2]
```

<br><a name="shuffleArray"></a>

## shuffleArray(arr) ⇒ <code>Array</code>
> Shuffle the elements of an array.

Shuffle the elements of an array. Uses the Durstenfeld shuffle.
* Shuffles in place, use `arr.slice(0)` to get a copy of the array to shuffle.


| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```js
const numbers = [1,2,3,4,5];
shuffleArray(numbers); // -> [1,4,2,5,3]
```

<br><a name="uniq"></a>

## uniq(arr) ⇒ <code>Array</code>
Strip array to unique values.

**Returns**: <code>Array</code> - Array of unique values.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | An array. |

**Example**  
```js
uniq([1, 1, 3, 'cat', 1, 'cat']); // -> [1, 3, 'cat']
```

<br><a name="getHTML"></a>

## getHTML(url, headers, body) ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code>
Get HTML via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | <code>string</code>, <code>Document</code>, <code>Blob</code>, <code>BufferSource</code>, <code>FormData</code>, <code>URLSearchParams</code>, <code>ReadableStream</code> | Request body. |


<br><a name="getJSON"></a>

## getJSON(url, headers, body) ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code>
Get JSON via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | <code>string</code>, <code>Document</code>, <code>Blob</code>, <code>BufferSource</code>, <code>FormData</code>, <code>URLSearchParams</code>, <code>ReadableStream</code> | Request body. |


<br><a name="makeVerbosePromise"></a>

## makeVerbosePromise(promise) ⇒ <code>VerbosePromise.&lt;T&gt;</code>
> Add status props to a Promise.

This function allow you to modify a JS Promise by adding some status properties.

Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved

But modified according to the specs of promises : https://promisesaplus.com/


| Param | Type |
| --- | --- |
| promise | <code>Promise.&lt;T&gt;</code> | 


<br><a name="request"></a>

## request(method, type, url, headers, body) ⇒ <code>Promise.&lt;RequestUtilResponse&gt;</code>
Make simple AJAX requests

**Link**: [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Request method, case insensitive. |
| type | <code>XMLHttpRequestResponseType</code> | Response type. |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | <code>string</code>, <code>Document</code>, <code>Blob</code>, <code>BufferSource</code>, <code>FormData</code>, <code>URLSearchParams</code>, <code>ReadableStream</code> | Request body. |


<br><a name="unwrapPromises"></a>

## unwrapPromises(...promises) ⇒ <code>Array.&lt;\*&gt;</code>
> Unwrap promises once resolved.

Unwrap promises once resolved.
! Make sure all individual promises have potential rejections handled, as each will be `await`-ed without error handling.


| Param | Type |
| --- | --- |
| ...promises | <code>Promise.&lt;\*&gt;</code> | 


<br><a name="VerbosePromise"></a>

## VerbosePromise : <code>Promise</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isFulfilled | <code>boolean</code> | Promise has been resolved. |
| isRejected | <code>boolean</code> | Promise has been rejected. |
| isPending | <code>boolean</code> | Promise is not yet settled. |


<br><a name="convertPxToRem"></a>

## convertPxToRem(px, useRealValue) ⇒ <code>number</code>
Convert a pixel value to the equivalent rem value.


| Param | Type |
| --- | --- |
| px | <code>number</code> | 
| useRealValue | <code>boolean</code> | 


<br><a name="convertRemToPx"></a>

## convertRemToPx(rem, useRealValue) ⇒ <code>number</code>
Convert a rem value to a pixel value


| Param | Type |
| --- | --- |
| rem | <code>number</code> | 
| useRealValue | <code>boolean</code> | 


<br><a name="ensureCSSUnits"></a>

## ensureCSSUnits(value, units, fallback) ⇒ <code>string</code>

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS value as string. |
| units | <code>Array.&lt;string&gt;</code> | Units to check for at the end of the value string. |
| fallback | <code>string</code> | Unit to add if no matching unit detected. |


<br><a name="getEm"></a>

## getEm(el) ⇒ <code>number</code>
Get the em (font size) of an element.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | Element to get em value from. |


<br><a name="getRem"></a>

## getRem() ⇒ <code>number</code>
Get the em (font size) of an element.


<br><a name="parseCSSColor"></a>

## parseCSSColor(color) ⇒ [<code>ParsedCSSColor</code>](#ParsedCSSColor)
> Parse a CSS color string into red, green, blue, and alpha components.

Parse a CSS color string into red, green, blue, and alpha components.
* Passing an invalid color will return the components for transparent black, with an empty string as the `value` property.


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | CSS color value, case-insensitive. |


<br><a name="parseCSSTime"></a>

## parseCSSTime(cssTimeStr) ⇒ <code>number</code>
Parse a CSS time string into ms.


| Param | Type | Description |
| --- | --- | --- |
| cssTimeStr | <code>string</code> | Valid CSS time in seconds or milliseconds |


<br><a name="byNumericValue"></a>

## byNumericValue(a, b) ⇒ <code>number</code>
> Compare 2 values numerically.

Compare 2 values numerically.
* Non-numeric values are considered "greater".


| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 


<br><a name="compareProps"></a>

## compareProps(prop, subjectA, subjectB) ⇒ <code>number</code>
Compare a property of 2 objects.

**Returns**: <code>number</code> - 0 if equal, 1 if more, -1 if less.  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | The property by which to evaluate. |
| subjectA | <code>Object</code> | The object to evaluate. |
| subjectB | <code>Object</code> | Another object to evaluate. |


<br><a name="CompatResolver"></a>

## CompatResolver
> Framework for resolving functions with different names & availabilities across browsers.

**Properties**

| Name | Type |
| --- | --- |
| candidates | [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) | 
| scope | <code>Object</code> | 


* [CompatResolver](#CompatResolver)
    * [.CompatResolver](#CompatResolver+CompatResolver)
        * [new exports.CompatResolver(candidates, [scope])](#new_CompatResolver+CompatResolver_new)
    * [.add(fn, [scope], [prepend])](#CompatResolver+add) ⇒ <code>void</code>
    * [.resolve([forceEvaluation])](#CompatResolver+resolve) ⇒ <code>T</code>


<br><a name="CompatResolver+CompatResolver"></a>

### compatResolver.CompatResolver

<br><a name="new_CompatResolver+CompatResolver_new"></a>

#### new exports.CompatResolver(candidates, [scope])

| Param | Type |
| --- | --- |
| candidates | [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) | 
| [scope] | <code>Object</code> | 


<br><a name="CompatResolver+add"></a>

### compatResolver.add(fn, [scope], [prepend]) ⇒ <code>void</code>
> Add additional candidates to an existing CompatResolver instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>string</code>, <code>function</code> |  | Either the member name of a candidate function within the `scope`, or a function that returns a candidate function. |
| [scope] | <code>Object</code> |  | An optional scope object to check for the candidate function, defaults to scope of the CompatResolver instance. |
| [prepend] | <code>boolean</code> | <code>false</code> | Whether to prepend the candidate to the list, default `false`. |


<br><a name="CompatResolver+resolve"></a>

### compatResolver.resolve([forceEvaluation]) ⇒ <code>T</code>
> Resolve the candidates to a usable implementation.

**Returns**: <code>T</code> - Resolved compat function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [forceEvaluation] | <code>boolean</code> | <code>false</code> | Force (re)evaluation of candidates. |


<br><a name="compatCancelAnimationFrame"></a>

## compatCancelAnimationFrame : [<code>CompatResolver.&lt;CompatCancelAnimationFrame&gt;</code>](#CompatCancelAnimationFrame)

<br><a name="compatNow"></a>

## compatNow : [<code>CompatResolver.&lt;CompatNow&gt;</code>](#CompatNow)

<br><a name="compatRequestAnimationFrame"></a>

## compatRequestAnimationFrame : [<code>CompatResolver.&lt;CompatRequestAnimationFrame&gt;</code>](#CompatRequestAnimationFrame)

<br><a name="polyfill"></a>

## polyfill(scope, methodName, resolver) ⇒ <code>void</code>

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>Object</code> | Method/function scope. |
| methodName | <code>string</code> | Method name. |
| resolver | [<code>CompatResolver</code>](#CompatResolver), [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) |  |


<br><a name="CompatCancelAnimationFrame"></a>

## CompatCancelAnimationFrame ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| handle | <code>number</code> | 


<br><a name="CompatNow"></a>

## CompatNow ⇒ <code>DOMHighResTimeStamp</code> \| <code>number</code>
> A cross-browser function for calculating timings.

Defaults to `performance.now`, falling back to `Date.now`.


<br><a name="CompatRequestAnimationFrame"></a>

## CompatRequestAnimationFrame ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| callback | <code>FrameRequestCallback</code> | 


<br><a name="CompatResolverCandidate"></a>

## CompatResolverCandidate : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fn | <code>string</code> \| <code>function</code> | Either the member name of a candidate function within the `scope`, or a function that returns a candidate function. |
| scope | <code>Object</code> | An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node) |


<br><a name="Point2D"></a>

## Point2D
> Represents a point in 2D space.


* [Point2D](#Point2D)
    * [.Point2D](#Point2D+Point2D)
        * [new exports.Point2D(coordinates)](#new_Point2D+Point2D_new)
    * [.x](#Point2D+x) : <code>number</code>
    * [.y](#Point2D+y) : <code>number</code>


<br><a name="Point2D+Point2D"></a>

### point2D.Point2D

<br><a name="new_Point2D+Point2D_new"></a>

#### new exports.Point2D(coordinates)
**Throws**:

- <code>TypeError</code> 


| Param | Type |
| --- | --- |
| coordinates | <code>Object</code> | 
| coordinates.x | <code>number</code> | 
| coordinates.y | <code>number</code> | 


<br><a name="Point2D+x"></a>

### point2D.x : <code>number</code>
The X coordinate.


<br><a name="Point2D+y"></a>

### point2D.y : <code>number</code>
The Y coordinate.


<br><a name="ScrollbarStatus"></a>

## ScrollbarStatus
> Describes the scrollability of an element on its axes.


* [ScrollbarStatus](#ScrollbarStatus)
    * [.ScrollbarStatus](#ScrollbarStatus+ScrollbarStatus)
        * [new exports.ScrollbarStatus(status)](#new_ScrollbarStatus+ScrollbarStatus_new)
    * [.any](#ScrollbarStatus+any) : <code>boolean</code>
    * [.both](#ScrollbarStatus+both) : <code>boolean</code>
    * [.x](#ScrollbarStatus+x) : <code>boolean</code>
    * [.y](#ScrollbarStatus+y) : <code>boolean</code>


<br><a name="ScrollbarStatus+ScrollbarStatus"></a>

### scrollbarStatus.ScrollbarStatus

<br><a name="new_ScrollbarStatus+ScrollbarStatus_new"></a>

#### new exports.ScrollbarStatus(status)

| Param | Type | Description |
| --- | --- | --- |
| status | <code>Object</code> |  |
| status.any | <code>boolean</code> | Element can scroll vertically or horizontally. |
| status.both | <code>boolean</code> | Element can scroll vertically and horizontally. |
| status.x | <code>boolean</code> | Element can scroll horizontally. |
| status.y | <code>boolean</code> | Element can scroll vertically. |


<br><a name="ScrollbarStatus+any"></a>

### scrollbarStatus.any : <code>boolean</code>
Element can scroll vertically or horizontally.


<br><a name="ScrollbarStatus+both"></a>

### scrollbarStatus.both : <code>boolean</code>
Element can scroll vertically and horizontally.


<br><a name="ScrollbarStatus+x"></a>

### scrollbarStatus.x : <code>boolean</code>
Element can scroll horizontally.


<br><a name="ScrollbarStatus+y"></a>

### scrollbarStatus.y : <code>boolean</code>
Element can scroll vertically.


<br><a name="MediaBreakpoint"></a>

## MediaBreakpoint
> A breakpoint following a mobile-first philosophy.


* [MediaBreakpoint](#MediaBreakpoint)
    * [.id](#MediaBreakpoint+id) : <code>string</code>
    * [.min](#MediaBreakpoint+min) : <code>number</code>
    * [.unit](#MediaBreakpoint+unit) : <code>&quot;px&quot;</code> \| <code>&quot;em&quot;</code> \| <code>&quot;rem&quot;</code>
    * [.up](#MediaBreakpoint+up) : <code>MediaQueryList</code>
    * [.next](#MediaBreakpoint+next) : [<code>MediaBreakpoint</code>](#MediaBreakpoint)


<br><a name="MediaBreakpoint+id"></a>

### mediaBreakpoint.id : <code>string</code>
Breakpoint identifier.


<br><a name="MediaBreakpoint+min"></a>

### mediaBreakpoint.min : <code>number</code>
Minumum viewport width.


<br><a name="MediaBreakpoint+unit"></a>

### mediaBreakpoint.unit : <code>&quot;px&quot;</code> \| <code>&quot;em&quot;</code> \| <code>&quot;rem&quot;</code>
Breakpoint unit.


<br><a name="MediaBreakpoint+up"></a>

### mediaBreakpoint.up : <code>MediaQueryList</code>
The breakpoint media query.


<br><a name="MediaBreakpoint+next"></a>

### mediaBreakpoint.next : [<code>MediaBreakpoint</code>](#MediaBreakpoint)
A link to the "next" breakpoint, assuming in order of increasing viewport widths.


<br><a name="calculateScrollbarWidth"></a>

## calculateScrollbarWidth() ⇒ <code>number</code>
Calculate the width of the native scrollbars.

**Returns**: <code>number</code> - Width of native browser scrollbars in px.  

<br><a name="detectBrowser"></a>

## ~~detectBrowser() ⇒ <code>string</code>~~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🚫 Deprecated`_

Try to determine the client browser.

**Returns**: <code>string</code> - Detected browser.  

<br><a name="isDev"></a>

## ~~isDev() ⇒ <code>boolean</code>~~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🚫 Deprecated`_

Try to identify development environment from location host TLD.

**Returns**: <code>boolean</code> - Whether it was able to detect current environment as 'dev'.  

<br><a name="setUpMediaQueries"></a>

## setUpMediaQueries(breakpoints) ⇒ <code>Object</code>
Get an object of preset matchMedia media queries.


| Param | Type | Description |
| --- | --- | --- |
| breakpoints | [<code>Array.&lt;MediaBreakpoint&gt;</code>](#MediaBreakpoint) | Array of Breakpoint objects. |


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


<br><a name="onDocReady"></a>

## onDocReady(fn)
Vanilla JS replacement for jQuery document ready.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Callback for on document ready. |


<br><a name="fallbackUntil"></a>

## fallbackUntil(validate, ...values) ⇒ <code>\*</code>
> Return the first argument that satisfies a validation callback.

Return the first argument that satisfies a validation callback, or the last value provided.
* Returns `undefined` if no values are passed.

**Throws**:

- <code>TypeError</code> If the callback isn't callable.


| Param | Type | Description |
| --- | --- | --- |
| validate | <code>function</code> | Validation callback. |
| ...values | <code>\*</code> | Variable number of candidate values. |


<br><a name="fallbackUntilAsync"></a>

## fallbackUntilAsync(validate, ...values) ⇒ <code>Promise.&lt;?\*&gt;</code>
> Resolve to the first argument that satisfies an async validation callback.

Resolve to the first argument that satisfies an async validation callback, or the last value provided.
* Resolves to `undefined` if no values are passed.

**Throws**:

- <code>TypeError</code> If the callback isn't callable.

**See**: fallbackUntil  

| Param | Type | Description |
| --- | --- | --- |
| validate | <code>function</code> | Validation callback. |
| ...values | <code>\*</code> | Variable number of candidate values. |


<br><a name="batch"></a>

## batch(...fns) ⇒ <code>function</code>
> Create one function that runs multiple functions on the same arguments.

Create one function that runs multiple functions on the same arguments.
* Returned function returns array of results in order of original args.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = batch(a, b, c);
abc(x); // -> [a(x), b(x), c(x)];
```

<br><a name="batchApply"></a>

## batchApply(fn, argsArray, thisArg) ⇒ <code>Array</code>
Call one function multiple times with an array of values/value arrays to pass to each call.

**Returns**: <code>Array</code> - Array of returns from each call of fn.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to call. |
| argsArray | <code>Array.&lt;Array&gt;</code> | Array of arguments for function. |
| thisArg | <code>\*</code> | Value to set as `this` for the function. |

**Example**  
```js
batchApply(Math.pow, [[2, 2], [10, 3]]) // -> [4, 1000]
```

<br><a name="compose"></a>

## compose(...fns) ⇒ <code>function</code>
Compose multiple functions into one function.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = compose(a, b, c);
abc(x); // -> a(b(c(x)))
```

<br><a name="debounce"></a>

## debounce(fn, wait, [leading]) ⇒
> Debounce a function by setting a minimum elapsed time between invocations.

Debounce a function by setting a minimum elapsed time between invocations.
* When called before the elapsed time, will return the last result
* Debounced function has 2 methods:
  - flush(), which cancels the timer and immediately returns the result of the invoked function, and
  - cancel(), which just cancels the timer.

**Returns**: Debounced function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>function</code> |  | Function to debounce. |
| wait | <code>number</code> |  | Minimum elapsed time between invoking `fn`. |
| [leading] | <code>boolean</code> | <code>false</code> | Optional. Whether to invoke the function the first time is is called before waiting. Default false. |


<br><a name="debounce..invokeFunc"></a>

### debounce~invokeFunc() ⇒ <code>T</code>

<br><a name="makeValidator"></a>

## makeValidator(fns, strictMode) ⇒ <code>function</code>
Turn a series of functions into a testing function.


| Param | Type | Description |
| --- | --- | --- |
| fns | <code>Array.&lt;function()&gt;</code> | Array of functions to test arguments. |
| strictMode | <code>\*</code>, <code>boolean</code> | Whether tested arguments have to pass all.      tests (true/false -> AND/OR) |


<br><a name="partial"></a>

## partial(fn, ...partials) ⇒ <code>function</code>
> Partially apply arguments to a function without setting `this`.

Partially apply arguments to a function without setting `this`.
* Use `_` as a placeholder value, final arguments will fill those positions from left-to-right, appending any remaining arguments.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to partially apply. |
| ...partials | <code>\*</code> | Arguments to partially apply to `fn`. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | "_", can be used as placeholder instead of the string literal. |

**Example**  
```js
let forceGreaterThanZero = partial(Math.max, 0);
forceGreaterThanZero(myNum) // ~= Math.max(0, myNum)
```

<br><a name="partialRight"></a>

## partialRight(fn, ...partials) ⇒ <code>function</code>
> Partially apply arguments to a function from right-to-left without setting `this`.

Partially apply arguments to a function from right-to-left without setting `this`.
* Use `_` as a placeholder value, final arguments will replace those positions from right-to-left, prepending any remaining arguments.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to partially apply. |
| ...partials | <code>\*</code> | Arguments to partially apply to `fn`. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| placeholder | <code>string</code> | "_", can be used as placeholder instead of the string literal. |

**Example**  
```js
let divide = (a, b) => a / b;
let divideBy2 = partialRight(divide, 2);
divideBy2(myNum) // ~= divide(myNum, 2)
```
**Example**  
```js
let addThenMultiply = (a, b, c) => (a + b) * c;
let add2ThenMultiply = partialRight(divide, 2, partialRight.placeholder);
add2ThenMultiply(1, 3) // === addThenMultiply(1, 2, 3) === 9
```

<br><a name="sequence"></a>

## sequence(...fns) ⇒ <code>function</code>
Sequence multiple functions into one function.


| Param | Type | Description |
| --- | --- | --- |
| ...fns | <code>function</code> | Callable functions. |

**Example**  
```js
var abc = sequence(a, b, c);
abc(x); // -> c(b(a(x)))
```

<br><a name="throttle"></a>

## throttle(fn, wait) ⇒ <code>function</code>
Throttle a high-frequecy and/or resource intensive function.

**Returns**: <code>function</code> - Throttled function.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to throttle. |
| wait | <code>number</code> | Minimum number of millseconds to wait between calls. |


<br><a name="capMinMax"></a>

## capMinMax(min, max, value) ⇒ <code>number</code>
Cap a value to between minimum and maximum values.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum acceptable value. |
| max | <code>number</code> | Maximum acceptable value. |
| value | <code>number</code> | Value to cap. |


<br><a name="toDecimal"></a>

## toDecimal(digitsAfterDecimal, value) ⇒ <code>number</code>
> Cast a single value to decimal of specified precision.

Cast a single value to decimal of specified precision.
* Returns 0 if an array with length < 1 or string with non-numeral characters.


| Param | Type | Description |
| --- | --- | --- |
| digitsAfterDecimal | <code>number</code> | Integer number of significant digits after decimal. |
| value | <code>\*</code> |  |


<br><a name="toInteger"></a>

## toInteger(value) ⇒ <code>number</code>
> Cast a single value to integer.

Cast a single value to integer.
* returns 0 if an array with length < 1 or string with non-numeral characters


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="toNumber"></a>

## toNumber(value, [fallback]) ⇒ <code>number</code>
Cast value to number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | Value to attept converting to number. |
| [fallback] | <code>number</code> | <code>0</code> | Number to return if value cannot be successfully converted to number. Default 0. |


<br><a name="preloadImage"></a>

## preloadImage(sources) ⇒ <code>Promise.&lt;boolean&gt;</code>
Preload an image for the browser, resolves to success/error state.


| Param | Type | Description |
| --- | --- | --- |
| sources | <code>Object</code> |  |
| sources.srcset | <code>string</code> | A valid srcset attribute string for an image element. |
| sources.sizes | <code>string</code> | A valid sizes attribute string for an image element. |
| sources.src | <code>string</code> | A valid src attribute string for an image element. |


<br><a name="testImageURL"></a>

## testImageURL(url) ⇒ <code>Promise.&lt;boolean&gt;</code>
> Test if an image URL is valid.

Test if an image is "good". Fails if:
* `url` is empty or null, OR
* `url` is the same as the URL of the page the user is currently on, OR
* the image is corrupted in some way that prevents it from being loaded, OR
* the image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, OR
* the image is in a format not supported by the user agent.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | An image src URL. |


<br><a name="applyEventListeners"></a>

## applyEventListeners(eventTarget, listeners)
Add listeners for multiple events to one DOM element.


| Param | Type | Description |
| --- | --- | --- |
| eventTarget | <code>Element</code> | eventTarget DOM element to add event listeners. |
| listeners | <code>Array.&lt;Array&gt;</code> | listeners Array of addEventListener argument sets. |


<br><a name="createElem"></a>

## createElem(tagName, props, ...children) ⇒ <code>HTMLElement</code>
> Create an HTMLElement.

Create an HTMLElement.
* returns null for invalid tagName

**See**: [ParentNode.append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | Element tag name. |
| props | <code>Object</code> | Element properties. Unrecognized props are kebab-cased and set as attributes. |
| ...children | <code>Node</code>, <code>string</code> | Element child nodes. |


<br><a name="getPageOffset"></a>

## getPageOffset(el) ⇒ [<code>Point2D</code>](#Point2D)
Get the full page offset for an element.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | Element of which to find offset. |


<br><a name="getParents"></a>

## getParents(node, includeSelf) ⇒ <code>Array.&lt;Node&gt;</code>
Get all parent elements for an element.


| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | Node to get parents of. |
| includeSelf | <code>boolean</code> | Whether to include starting node. |


<br><a name="getScrollParent"></a>

## getScrollParent(node) ⇒ <code>Node</code>
Get the scroll parent of an element.


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="isInDom"></a>

## isInDom(targetNode) ⇒ <code>boolean</code>
Determine whether a DOM object is in the current DOM.


| Param | Type | Description |
| --- | --- | --- |
| targetNode | <code>Node</code> | DOM object to check. |


<br><a name="isInViewport"></a>

## isInViewport(el) ⇒ <code>boolean</code>
Check if any part of an element is within the viewport.


| Param | Type |
| --- | --- |
| el | <code>HTMLElement</code> | 


<br><a name="isSameOrChildNode"></a>

## isSameOrChildNode(potentialParentNode, targetNode) ⇒ <code>boolean</code>
Determine whether a DOM object is the same or parent of another DOM object.


| Param | Type | Description |
| --- | --- | --- |
| potentialParentNode | <code>Node</code> | Parent DOM object to check lineage. |
| targetNode | <code>Node</code> | Child DOM object. |


<br><a name="isScrollable"></a>

## isScrollable(node) ⇒ [<code>ScrollbarStatus</code>](#ScrollbarStatus)
Check whether a node has currently scrollable overflow.


| Param | Type |
| --- | --- |
| node | <code>Node</code> | 


<br><a name="scrollIntoView"></a>

## scrollIntoView(el, [offset])
Scroll the window to the vertical position of an element.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code>, <code>string</code> |  | Element or selector to scroll into view. |
| [offset] | <code>number</code> | <code>0</code> | Cast to int, vertical pixel offset from element. |


<br><a name="setPrefixedStyle"></a>

## setPrefixedStyle(elem, styleName, styleValue, prefixValues)
Apply a style to a DOM element with vendor prefixes.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code>, <code>jQuery</code> | Element to apply styles to. |
| styleName | <code>string</code> | The name of a CSS style. |
| styleValue | <code>string</code> | String-ified CSS style value. |
| prefixValues | <code>boolean</code> | Whether to prefix the values as well. |


<br><a name="allowProps"></a>

## allowProps(allowedProps, subject) ⇒ <code>Object</code>
Remove unknown properties from a given object (DESTRUCTIVE).


| Param | Type | Description |
| --- | --- | --- |
| allowedProps | <code>Array.&lt;string&gt;</code> | Array of allowed property keys. |
| subject | <code>Object</code> | Object to be processed. |

**Example**  
```js
var o = {foo: 'bar', hello: 'world', sieze: 'today'};
allowProps(['foo', 'hello'], o); // o == {foo: 'bar', hello: 'world'}
```

<br><a name="denyProps"></a>

## denyProps(deniedProps, subject) ⇒ <code>Object</code>
Remove known properties from a given object (DESTRUCTIVE).


| Param | Type | Description |
| --- | --- | --- |
| deniedProps | <code>Array.&lt;string&gt;</code> | Array of denied property keys. |
| subject | <code>Object</code> | Object to be processed. |

**Example**  
```js
var o = {foo: 'bar', hello: 'world', sieze: 'today'};
denyProps(['foo', 'hello'], o); // o == {sieze: 'today'}
```

<br><a name="diff"></a>

## diff(source, compareTo, [depth]) ⇒ <code>Object</code>
Get the difference between one object and another recursively.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>Object</code> |  | Object to get differences from. |
| compareTo | <code>Object</code> |  | Object to compare values to. |
| [depth] | <code>number</code> | <code>-1</code> | Max depth for recursion. Negative value -> no limit. |


<br><a name="extend"></a>

## extend(target, extensions, [depth]) ⇒ <code>Object</code>
Copy properties from one object to another recursively.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | <code>Object</code> |  | Target object. |
| extensions | <code>Object</code> |  | Object with properties to copy. |
| [depth] | <code>number</code> | <code>-1</code> | Max depth for recursion. Negative value -> no limit. |


<br><a name="hasAllProps"></a>

## hasAllProps(proplist, subject) ⇒ <code>boolean</code>
Verify that an object has all of the supplied properties.


| Param | Type | Description |
| --- | --- | --- |
| proplist | <code>Array.&lt;string&gt;</code> | List of property keys to check. |
| subject | <code>Object</code> | Object to check. |


<br><a name="hasAnyProps"></a>

## hasAnyProps(proplist, subject) ⇒ <code>boolean</code>
Verify that an object has at least one of the supplied properties.


| Param | Type | Description |
| --- | --- | --- |
| proplist | <code>Array.&lt;string&gt;</code> | List of property keys to check. |
| subject | <code>Object</code> | Object to check. |


<br><a name="matchProps"></a>

## matchProps(prop, subjectA, subjectB) ⇒ <code>boolean</code>
Check a property of 2 objects to see if the values match.


| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | The property by which to evaluate. |
| subjectA | <code>Object</code> | An object to evaluate. |
| subjectB | <code>Object</code> | Another object to evaluate. |


<br><a name="snapshot"></a>

## snapshot(obj) ⇒ <code>Object</code>
Snapshot the properties of an object.


| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 


<br><a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
Camel case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
camelCase("This is my sample"); // => "thisIsMySample"
```

<br><a name="copyToClipboard"></a>

## copyToClipboard(str)
Copy a string to the users clipboard.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to copy to clipboard. |


<br><a name="formatSeconds"></a>

## formatSeconds(seconds, [forceHours]) ⇒ <code>string</code>
Get a formatted string representation of time in seconds.

**Returns**: <code>string</code> - Formatted time string.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| seconds | <code>number</code> |  | Time in seconds. |
| [forceHours] | <code>boolean</code> | <code>false</code> | Whether to include hours in the output when time is less than 1 hour. |

**Example**  
```js
formatSeconds(27); // => "0:27"
formatSeconds(3822); // => "1:03:42"
```

<br><a name="getUniqueId"></a>

## getUniqueId() ⇒ <code>string</code>
Get a unique id string.


<br><a name="kebabCase"></a>

## kebabCase(str) ⇒ <code>string</code>
Kebab case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
kebabCase("This is my sample"); // => "this-is-my-sample"
```

<br><a name="leftPad"></a>

## leftPad(str, length, [char]) ⇒ <code>string</code>
> Add left padding to a string.

Add left padding to a string. Only validation is converting non-zero falsey
values for `char` to a single space.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to pad, value is cast to string. |
| length | <code>number</code> | Desired minimum string length. |
| [char] | <code>string</code> | Padding character, default single space. |

**Example**  
```js
leftPad("hello", 8); // => "   hello"
leftPad(24, 4, 0); // => "0024"
```

<br><a name="lowerCaseFirst"></a>

## lowerCaseFirst(str) ⇒ <code>string</code>
Lower case the first letter of a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="lowerCaseWords"></a>

## lowerCaseWords(str) ⇒ <code>string</code>
Lower case the first letter of each word in a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="pascalCase"></a>

## pascalCase(str) ⇒ <code>string</code>
Pascal case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
pascalCase("this is my sample"); // => "ThisIsMySample"
```

<br><a name="pathJoin"></a>

## pathJoin(...segments) ⇒ <code>string</code>
Join path segments.


| Param | Type | Description |
| --- | --- | --- |
| ...segments | <code>string</code>, <code>Array.&lt;string&gt;</code> | Path segments. Arrays and nested arrays will be flattened. |


<br><a name="percentage"></a>

## percentage(fraction) ⇒ <code>string</code>
Turn a fractional number into a percentage string.


| Param | Type |
| --- | --- |
| fraction | <code>number</code> | 

**Example**  
```js
percentage(0.725); // "72.5%"
```

<br><a name="sentenceCase"></a>

## sentenceCase(str) ⇒ <code>string</code>
Sentence case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
sentenceCase("this is my sample"); // => "This is my sample"
```

<br><a name="snakeCase"></a>

## snakeCase(str) ⇒ <code>string</code>
Snake case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
snakeCase("This is my sample"); // => "this_is_my_sample"
```

<br><a name="stripCase"></a>

## stripCase(str) ⇒ <code>string</code>
> Strip the case of a string.

Strip the case of a string: no capitals, words separated by a single space.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="stripEnd"></a>

## stripEnd(match, str) ⇒ <code>string</code>
Strip substrings from the end of a string.


| Param | Type | Description |
| --- | --- | --- |
| match | <code>string</code>, <code>RegExp</code> | Substring or regex to match. |
| str | <code>string</code> |  |


<br><a name="stripStart"></a>

## stripStart(match, str) ⇒ <code>string</code>
Strip substrings from the start of a string.


| Param | Type | Description |
| --- | --- | --- |
| match | <code>string</code>, <code>RegExp</code> | Substring or regex to match. |
| str | <code>string</code> |  |


<br><a name="titleCase"></a>

## titleCase(str) ⇒ <code>string</code>
Title case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
titleCase("this is my sample"); // => "This Is My Sample"
```

<br><a name="titleSnakeCase"></a>

## titleSnakeCase(str) ⇒ <code>string</code>
Title snake case a string (aka PHP class case).


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
upperSnakeCase("This is my sample"); // => "This_Is_My_Sample"
```

<br><a name="upperCaseFirst"></a>

## upperCaseFirst(str) ⇒ <code>string</code>
Upper case the first letter of a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="upperCaseWords"></a>

## upperCaseWords(str) ⇒ <code>string</code>
Upper case the first letter of each word in a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="upperSnakeCase"></a>

## upperSnakeCase(str) ⇒ <code>string</code>
Upper snake case a string (aka constant case).


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
upperSnakeCase("This is my sample"); // => "THIS_IS_MY_SAMPLE"
```

<br><a name="areSameType"></a>

## areSameType(value, ...values) ⇒ <code>boolean</code>
> Check whether any number of values are of the same type.

Check whether any number of values are of the same type.
* checks typeof and object/function constructors.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | All other values are tested agains this value. |
| ...values | <code>\*</code> |  |


<br><a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Check if value is an Array


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isCallable"></a>

## isCallable(fn) ⇒ <code>boolean</code>
Determine whether a value is a callable function


| Param | Type |
| --- | --- |
| fn | <code>\*</code> | 


<br><a name="isDomObject"></a>

## isDomObject(value) ⇒ <code>boolean</code>
Check if a value is a DOM object, a.k.a. Node


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isInt"></a>

## isInt(value) ⇒ <code>boolean</code>
Reliable method of determining if int


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
Check if value is a number


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isNumeric"></a>

## isNumeric(value) ⇒ <code>boolean</code>
Check if value is numeric


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determine whether a value is an Object


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isPojo"></a>

## isPojo(value) ⇒ <code>boolean</code>
Determine whether a value is a Plain Old Javascript Object (POJO)


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
Check if a value is a string


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="parseBool"></a>

## parseBool(value) ⇒ <code>boolean</code>
> Parse for boolean.

Parse for boolean.
Checks for numeric strings, and "true", else casting to boolean.


| Param | Type |
| --- | --- |
| value | <code>string</code> | 

