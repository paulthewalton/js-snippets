<br>

## Functions

<dl>
<dt><a href="#parseCSSColor">parseCSSColor(color)</a> ⇒ <code><a href="#ParsedCSSColor">ParsedCSSColor</a></code></dt>
<dd><p>Parse a CSS color string into red, green, blue, and alpha components.</p>
</dd>
<dt><a href="#parseCSSTime">parseCSSTime(cssTimeStr)</a> ⇒ <code>number</code></dt>
<dd><p>Parse a CSS time string into ms.</p>
</dd>
<dt><a href="#ensureCSSUnits">ensureCSSUnits(value, units, fallback)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<br>

## Typedefs

<dl>
<dt><a href="#ParsedCSSColor">ParsedCSSColor</a> : <code>Object</code></dt>
<dd></dd>
</dl>


<br><a name="parseCSSColor"></a>

## parseCSSColor(color) ⇒ [<code>ParsedCSSColor</code>](#ParsedCSSColor)
Parse a CSS color string into red, green, blue, and alpha components.


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | CSS color value. |


<br><a name="parseCSSTime"></a>

## parseCSSTime(cssTimeStr) ⇒ <code>number</code>
Parse a CSS time string into ms.


| Param | Type | Description |
| --- | --- | --- |
| cssTimeStr | <code>string</code> | Valid CSS time in seconds or milliseconds |


<br><a name="ensureCSSUnits"></a>

## ensureCSSUnits(value, units, fallback) ⇒ <code>string</code>

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS value as string. |
| units | <code>Array.&lt;string&gt;</code> | Units to check for at the end of the value string. |
| fallback | <code>string</code> | Unit to add if no matching unit detected. |


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

