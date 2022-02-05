

<br><a name="comparisons.js"></a>

# comparisons.js
> Comparison functions. Mostly for Array.prototype.sort().

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/byNumericValue.md">byNumericValue(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Compare 2 values numerically.</p>
</dd>
<dt><a href="docs/compareProps.md">compareProps(prop, subjectA, subjectB)</a> ⇒ <code>number</code></dt>
<dd><p>Compare a property of 2 objects.</p>
</dd>
</dl>


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

