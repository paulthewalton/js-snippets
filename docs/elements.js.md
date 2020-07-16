<br>

## Functions

<dl>
<dt><a href="#createElem">createElem(tagName, props, children)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Create an HTMLElement.</p>
<ul>
<li>returns null for invalid tagName</li>
</ul>
</dd>
<dt><a href="#isSameOrChildNode">isSameOrChildNode(potentialParentNode, targetNode)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a DOM object is the same or parent of another DOM object.</p>
</dd>
<dt><a href="#isInDom">isInDom(targetNode)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a DOM object is in the current DOM.</p>
</dd>
<dt><a href="#applyEventListeners">applyEventListeners(eventTarget, listeners)</a></dt>
<dd><p>Add listeners for multiple events to one DOM element.</p>
</dd>
<dt><a href="#getPageOffset">getPageOffset(el)</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get the full page offset for an element.</p>
</dd>
<dt><a href="#getEm">getEm(el)</a> ⇒ <code>string</code></dt>
<dd><p>Get the em (font size) of an element</p>
</dd>
<dt><a href="#scrollIntoView">scrollIntoView(el, [offset])</a></dt>
<dd><p>Scroll the window to the vertical position of an element.</p>
</dd>
<dt><a href="#isInViewport">isInViewport(el)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if any part of an element is within the viewport.</p>
</dd>
<dt><a href="#isScrollable">isScrollable(el)</a> ⇒ <code>Object</code></dt>
<dd><p>Check whether an element has currently scrollable overflow.</p>
</dd>
<dt><a href="#getParents">getParents(node, includeSelf)</a> ⇒ <code>Array.&lt;Node&gt;</code></dt>
<dd><p>Get all parent elements for an element.</p>
</dd>
<dt><a href="#setPrefixedStyle">setPrefixedStyle(elem, styleName, styleValue, prefixValues)</a></dt>
<dd><p>Apply a style to a DOM element with vendor prefixes.</p>
</dd>
</dl>

<br>

## Typedefs

<dl>
<dt><a href="#Point">Point</a> : <code>Object</code></dt>
<dd></dd>
</dl>


<br><a name="createElem"></a>

## createElem(tagName, props, children) ⇒ <code>HTMLElement</code>
Create an HTMLElement.
* returns null for invalid tagName

**Uses**: ParentNode.append  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | Element tag name. |
| props | <code>Object</code> | Element properties. Unrecognized props are kebab-cased and set as attributes. |
| children | <code>Array.&lt;string&gt;</code>, <code>Array.&lt;Node&gt;</code> | Element child nodes. |


<br><a name="isSameOrChildNode"></a>

## isSameOrChildNode(potentialParentNode, targetNode) ⇒ <code>boolean</code>
Determine whether a DOM object is the same or parent of another DOM object.


| Param | Type | Description |
| --- | --- | --- |
| potentialParentNode | <code>Node</code> | Parent DOM object to check lineage. |
| targetNode | <code>Node</code> | Child DOM object. |


<br><a name="isInDom"></a>

## isInDom(targetNode) ⇒ <code>boolean</code>
Determine whether a DOM object is in the current DOM.


| Param | Type | Description |
| --- | --- | --- |
| targetNode | <code>Node</code> | DOM object to check. |


<br><a name="applyEventListeners"></a>

## applyEventListeners(eventTarget, listeners)
Add listeners for multiple events to one DOM element.


| Param | Type | Description |
| --- | --- | --- |
| eventTarget | <code>Element</code> | DOM element to add event listeners. |
| listeners | <code>Array.&lt;Array&gt;</code> | Array of addEventListener argument sets. |


<br><a name="getPageOffset"></a>

## getPageOffset(el) ⇒ [<code>Point</code>](#Point)
Get the full page offset for an element.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | Element of which to find offset. |


<br><a name="getEm"></a>

## getEm(el) ⇒ <code>string</code>
Get the em (font size) of an element


| Param | Type | Description |
| --- | --- | --- |
| el | <code>Element</code> | Element to get em value from. |


<br><a name="scrollIntoView"></a>

## scrollIntoView(el, [offset])
Scroll the window to the vertical position of an element.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code>, <code>string</code> |  | Element or selector to scroll into view. |
| [offset] | <code>number</code> | <code>0</code> | Cast to int, vertical pixel offset from element. |


<br><a name="isInViewport"></a>

## isInViewport(el) ⇒ <code>boolean</code>
Check if any part of an element is within the viewport.


| Param | Type |
| --- | --- |
| el | <code>HTMLElement</code> | 


<br><a name="isScrollable"></a>

## isScrollable(el) ⇒ <code>Object</code>
Check whether an element has currently scrollable overflow.

**Returns**: <code>Object</code> - scrollbarStatus  

| Param | Type |
| --- | --- |
| el | <code>HTMLElement</code> | 

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scrollbarStatus.any | <code>boolean</code> | Element can scroll vertically or horizontally. |
| scrollbarStatus.both | <code>boolean</code> | Element can scroll vertically and horizontally. |
| scrollbarStatus.x | <code>boolean</code> | Element can scroll horizontally. |
| scrollbarStatus.y | <code>boolean</code> | Element can scroll vertically. |


<br><a name="getParents"></a>

## getParents(node, includeSelf) ⇒ <code>Array.&lt;Node&gt;</code>
Get all parent elements for an element.


| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | Node to get parents of. |
| includeSelf | <code>\*</code>, <code>boolean</code> | Whether to include starting node. |


<br><a name="setPrefixedStyle"></a>

## setPrefixedStyle(elem, styleName, styleValue, prefixValues)
Apply a style to a DOM element with vendor prefixes.


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Element</code> | Element to apply styles to. |
| styleName | <code>string</code> | The name of a CSS style. |
| styleValue | <code>string</code> | String-ified CSS style value. |
| prefixValues | <code>boolean</code> | Whether to prefix the values as well. |


<br><a name="Point"></a>

## Point : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X Coordinate. |
| y | <code>number</code> | The Y Coordinate. |

