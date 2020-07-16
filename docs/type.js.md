<br>

## Functions

<dl>
<dt><a href="#isCallable">isCallable(fn)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a callable function</p>
</dd>
<dt><a href="#isInt">isInt(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Reliable method of determining if int</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is a number</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is an Array</p>
</dd>
<dt><a href="#isNumeric">isNumeric(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value is numeric</p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a string</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is an Object</p>
</dd>
<dt><a href="#isPojo">isPojo(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine whether a value is a Plain Old Javascript Object (POJO)</p>
</dd>
<dt><a href="#isDomObject">isDomObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a value is a DOM object, a.k.a. Node</p>
</dd>
<dt><a href="#parseBool">parseBool(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Parse for boolean.
Checks for numeric strings, and &quot;true&quot;, else casting to boolean.</p>
</dd>
<dt><a href="#areSameType">areSameType(value, ...values)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether any number of values are of the same type</p>
<ul>
<li>checks typeof and object/function constructors</li>
</ul>
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
Parse for boolean.
Checks for numeric strings, and "true", else casting to boolean.


| Param | Type |
| --- | --- |
| value | <code>string</code> | 


<br><a name="areSameType"></a>

## areSameType(value, ...values) ⇒ <code>boolean</code>
Check whether any number of values are of the same type
* checks typeof and object/function constructors


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | All other values are tested agains this value. |
| ...values | <code>\*</code> |  |

