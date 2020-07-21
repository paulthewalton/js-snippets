

<br><a name="arrays.js"></a>

# arrays.js
> Array utility functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/assertArray.md">assertArray(value, [minLength], [fill])</a> ⇒ <code>Array</code></dt>
<dd><p>Make sure that a value is an array.</p>
</dd>
<dt><a href="docs/arraysAreEqual.md">arraysAreEqual(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether 2 arrays are equal.</p>
</dd>
<dt><a href="docs/uniq.md">uniq(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>Strip array to unique values.</p>
</dd>
<dt><a href="docs/flatten.md">flatten(arr, [depth])</a> ⇒ <code>Array</code></dt>
<dd><p>Flatten an array up to a set number of levels.</p>
</dd>
<dt><a href="docs/allowValues.md">allowValues(allowedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter unknown values out of a given array.</p>
</dd>
<dt><a href="docs/denyValues.md">denyValues(deniedValues, subject)</a> ⇒ <code>Array</code></dt>
<dd><p>Filter known values out of a given array.</p>
</dd>
<dt><a href="docs/indexArray.md">indexArray(arr, uniqueKey)</a> ⇒ <code>Array.&lt;Object, function()&gt;</code></dt>
<dd><p>Index an array of objects to quickly access it&#39;s entries by a unique key.</p>
</dd>
<dt><a href="docs/getIndexedValue.md">getIndexedValue(arr, idx, key)</a> ⇒ <code>Object</code> | <code>undefined</code></dt>
<dd><p>Get indexed entry of an array by the indexed property.</p>
</dd>
</dl>


<br><a name="assertArray"></a>

## assertArray(value, [minLength], [fill]) ⇒ <code>Array</code>
Make sure that a value is an array.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | Value to check. |
| [minLength] | <code>number</code> | <code>0</code> | Minimum length for returned array. |
| [fill] | <code>\*</code> |  | Value to insert when filling. If function, will be called with the current index, inserting the returned value. |


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

<br><a name="indexArray"></a>

## indexArray(arr, uniqueKey) ⇒ <code>Array.&lt;Object, function()&gt;</code>
Index an array of objects to quickly access it's entries by a unique key.

**Returns**: <code>Array.&lt;Object, function()&gt;</code> - Index object and prefilled accessor function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> |  |
| uniqueKey | <code>string</code>, <code>number</code> | Key for a property that will be unique for each member of the array. |

**Example**  
```js
const fruitsInKitchen = [
	{ name: "banana" },
	{ name: "kiwi" },
	{ name: "mango" },
];
const [fruitsByName, getFruitsByName] = indexArray(fruitsInKitchen, "name");
fruitsByName["kiwi"]; // => { name: "kiwi" }
getFruitsByName("mango"); // => { name: "mango" }
getFruitsByName("banana") === fruitsInKitchen[0]; // => true
```

<br><a name="getIndexedValue"></a>

## getIndexedValue(arr, idx, key) ⇒ <code>Object</code> \| <code>undefined</code>
> Get indexed entry of an array by the indexed property.

Get indexed entry of an array by the indexed property.
* Assumes `idx` is up to date with `arr`.


| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | 
| idx | <code>Object.&lt;(string\|number), number&gt;</code> | 
| key | <code>string</code>, <code>number</code> | 

**Example**  
```js
const fruitsInKitchen = [
	{ name: "banana" },
	{ name: "kiwi" },
];
const [fruitsByName] = indexArray(fruitsInKitchen, "name");
getIndexedValue(fruitsInKitchen, fruitsByName, "kiwi"); // => { name: "kiwi" }
```
