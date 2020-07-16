<br>

## Functions

<dl>
<dt><a href="#calculateScrollbarWidth">calculateScrollbarWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the width of the native scrollbars.</p>
</dd>
<dt><a href="#isDev">isDev()</a> ⇒ <code>boolean</code></dt>
<dd><p>Try to identify development environment from location host TLD.</p>
</dd>
<dt><a href="#setUpMediaQueries">setUpMediaQueries(breakpoints)</a> ⇒ <code>Object</code></dt>
<dd><p>Get an object of preset matchMedia media queries.</p>
</dd>
</dl>

<br>

## Typedefs

<dl>
<dt><a href="#Breakpoint">Breakpoint</a> : <code>Object</code></dt>
<dd></dd>
</dl>


<br><a name="calculateScrollbarWidth"></a>

## calculateScrollbarWidth() ⇒ <code>number</code>
Calculate the width of the native scrollbars.

**Returns**: <code>number</code> - Width of native browser scrollbars in px.  

<br><a name="isDev"></a>

## isDev() ⇒ <code>boolean</code>
Try to identify development environment from location host TLD.

**Returns**: <code>boolean</code> - Whether it was able to detect current environment as 'dev'.  

<br><a name="setUpMediaQueries"></a>

## setUpMediaQueries(breakpoints) ⇒ <code>Object</code>
Get an object of preset matchMedia media queries.


| Param | Type | Description |
| --- | --- | --- |
| breakpoints | [<code>Array.&lt;Breakpoint&gt;</code>](#Breakpoint) | Array of Breakpoint objects. |


<br><a name="Breakpoint"></a>

## Breakpoint : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum screenwidth for a breakpoint. |
| id | <code>string</code> | Breakpoint identifier. |

