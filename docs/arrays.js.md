<br>

## Functions

<dl>
<dt><a href="#assertArray">assertArray(value, minLength, fill)</a> ⇒ <code>Array</code></dt>
<dd><p>Make sure that a value is an array.</p>
</dd>
<dt><a href="#arraysAreEqual">arraysAreEqual(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether 2 arrays are equal.</p>
</dd>
<dt><a href="#uniq">uniq(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Strip array to unique values.</p>
</dd>
<dt><a href="#flatten">flatten(arr, depth)</a> ⇒ <code>Array</code></dt>
<dd><p>Flatten an array up to a set number of levels.</p>
</dd>
<dt><a href="#allowValues">allowValues(allowedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter unknown values out of a given array.</p>
</dd>
<dt><a href="#denyValues">denyValues(deniedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter known values out of a given array.</p>
</dd>
</dl>


<br><a name="assertArray"></a>

## assertArray(value, minLength, fill) ⇒ <code>Array</code>
Make sure that a value is an array.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value to check. |
| minLength | <code>number</code> | Minimum length for returned array. |
| fill | <code>\*</code> | Value to insert when filling. If function, will be called with the current index, inserting the returned value. |


<br><a name="arraysAreEqual"></a>

## arraysAreEqual(a, b) ⇒ <code>boolean</code>
Check whether 2 arrays are equal.


| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | First array. |
| b | <code>Array</code> | Second array. |


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

<br><a name="flatten"></a>

## flatten(arr, depth) ⇒ <code>Array</code>
Flatten an array up to a set number of levels.


| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Array to flatten. |
| depth | <code>number</code> | Max depth of flattening. |

**Example**  
```js
flatten([1,2,[3,4],5]); // -> [1,2,3,4,5]
	flatten([1,2,[3,[4]],5], 1); // -> [1,2,3,[4],5]
	flatten([1,2,[3,[[[[4]]]]],5], Infinity); // -> [1,2,3,4,5]
```

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

<br><a name="denyValues"></a>

## denyValues(deniedValues, subject) ⇒ <code>Array</code>
Filter known values out of a given array.

**Returns**: <code>Array</code> - Filtered array.  

| Param | Type | Description |
| --- | --- | --- |
| deniedValues | <code>Array</code> | Array of denyed values/objects. |
| subject | <code>Array</code> | Array to filter. |

**Example**  
```js
var nums = [1,1,2,3,4,4,4,5,9];
nums = denyValues([2,4], nums); // -> [1,1,3,5,9]
```
