

<br><a name="type.js"></a>

# type.js
> Utility functions for checking types.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/isCallable.md">isCallable(fn)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a callable function</p>
</dd>
<dt><a href="docs/isInt.md">isInt(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Reliable method of determining if int</p>
</dd>
<dt><a href="docs/isNumber.md">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is a number</p>
</dd>
<dt><a href="docs/isArray.md">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is an Array</p>
</dd>
<dt><a href="docs/isNumeric.md">isNumeric(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is numeric</p>
</dd>
<dt><a href="docs/isString.md">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a string</p>
</dd>
<dt><a href="docs/isObject.md">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is an Object</p>
</dd>
<dt><a href="docs/isPojo.md">isPojo(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a Plain Old Javascript Object (POJO)</p>
</dd>
<dt><a href="docs/isDomObject.md">isDomObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a DOM object, a.k.a. Node</p>
</dd>
<dt><a href="docs/parseBool.md">parseBool(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Parse for boolean.</p>
</dd>
<dt><a href="docs/areSameType.md">areSameType(value, ...values)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether any number of values are of the same type.</p>
</dd>
</dl>


<br><a name="isCallable"></a>

## isCallable(fn) ⇒ <code>boolean</code>
Determine whether a value is a callable function


| Param | Type |
| --- | --- |
| fn | <code>\*</code> | 


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


<br><a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
Check if value is an Array


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isNumeric"></a>

## isNumeric(value) ⇒ <code>boolean</code>
Check if value is numeric


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
Check if a value is a string


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


<br><a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determine whether a value is an Object


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | obj value to test |


<br><a name="isPojo"></a>

## isPojo(value) ⇒ <code>boolean</code>
Determine whether a value is a Plain Old Javascript Object (POJO)


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | obj value to test |


<br><a name="isDomObject"></a>

## isDomObject(value) ⇒ <code>boolean</code>
Check if a value is a DOM object, a.k.a. Node


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


<br><a name="areSameType"></a>

## areSameType(value, ...values) ⇒ <code>boolean</code>
> Check whether any number of values are of the same type.

Check whether any number of values are of the same type.
* checks typeof and object/function constructors.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | All other values are tested agains this value. |
| ...values | <code>\*</code> |  |

