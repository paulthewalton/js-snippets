

<br><a name="math.js"></a>

# math.js
> Math & number functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/toNumber.md">toNumber(value, [fallback])</a> ⇒ <code>number</code></dt>
<dd><p>Cast value to number.</p>
</dd>
<dt><a href="docs/toInteger.md">toInteger(value)</a> ⇒ <code>number</code></dt>
<dd><p>Cast a single value to integer.
returns 0 if an array with length &lt; 1 or string with non-numeral characters</p>
</dd>
<dt><a href="docs/toDecimal.md">toDecimal(digitsAfterDecimal, value)</a> ⇒ <code>number</code></dt>
<dd><p>Cast a single value to decimal of specified precision.</p>
<ul>
<li>Returns 0 if an array with length &lt; 1 or string with non-numeral characters.</li>
</ul>
</dd>
<dt><a href="docs/capMinMax.md">capMinMax(min, max, value)</a> ⇒ <code>number</code></dt>
<dd><p>Cap a value to between minimum and maximum values.</p>
</dd>
</dl>


<br><a name="toNumber"></a>

## toNumber(value, [fallback]) ⇒ <code>number</code>
Cast value to number.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | Value to attept converting to number. |
| [fallback] | <code>number</code> | <code>0</code> | Number to return if value cannot be successfully converted to number. Default 0. |


<br><a name="toInteger"></a>

## toInteger(value) ⇒ <code>number</code>
Cast a single value to integer.
returns 0 if an array with length < 1 or string with non-numeral characters


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="toDecimal"></a>

## toDecimal(digitsAfterDecimal, value) ⇒ <code>number</code>
Cast a single value to decimal of specified precision.
* Returns 0 if an array with length < 1 or string with non-numeral characters.


| Param | Type | Description |
| --- | --- | --- |
| digitsAfterDecimal | <code>number</code> | Integer number of significant digits after decimal. |
| value | <code>\*</code> |  |


<br><a name="capMinMax"></a>

## capMinMax(min, max, value) ⇒ <code>number</code>
Cap a value to between minimum and maximum values.


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum acceptable value. |
| max | <code>number</code> | Maximum acceptable value. |
| value | <code>number</code> | Value to cap. |

