

<br><a name="strings.js"></a>

# strings.js
> Utilities for working with strings.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/percentage.md">percentage(fraction)</a> ⇒ <code>string</code></dt>
<dd><p>Turn a fractional number into a percentage string.</p>
</dd>
<dt><a href="docs/getUniqueId.md">getUniqueId()</a> ⇒ <code>string</code></dt>
<dd><p>Get a unique id string.</p>
</dd>
<dt><a href="docs/copyToClipboard.md">copyToClipboard(str)</a></dt>
<dd><p>Copy a string to the users clipboard.</p>
</dd>
<dt><a href="docs/stripStart.md">stripStart(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the start of a string.</p>
</dd>
<dt><a href="docs/stripEnd.md">stripEnd(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the end of a string.</p>
</dd>
<dt><a href="docs/pathJoin.md">pathJoin(...segments)</a> ⇒ <code>string</code></dt>
<dd><p>Join path segments.</p>
</dd>
<dt><a href="docs/stripCase.md">stripCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip the case of a string.</p>
</dd>
<dt><a href="docs/upperCaseWords.md">upperCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of each word in a string.</p>
</dd>
<dt><a href="docs/lowerCaseWords.md">lowerCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of each word in a string.</p>
</dd>
<dt><a href="docs/upperCaseFirst.md">upperCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of a string.</p>
</dd>
<dt><a href="docs/lowerCaseFirst.md">lowerCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of a string.</p>
</dd>
<dt><a href="docs/sentenceCase.md">sentenceCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Sentence case a string.</p>
</dd>
<dt><a href="docs/titleCase.md">titleCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Title case a string.</p>
</dd>
<dt><a href="docs/pascalCase.md">pascalCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Pascal case a string.</p>
</dd>
<dt><a href="docs/snakeCase.md">snakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Snake case a string.</p>
</dd>
<dt><a href="docs/kebabCase.md">kebabCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Kebab case a string.</p>
</dd>
<dt><a href="docs/camelCase.md">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Camel case a string.</p>
</dd>
<dt><a href="docs/leftPad.md">leftPad(str, length, [char])</a> ⇒ <code>string</code></dt>
<dd><p>Add left padding to a string.</p>
</dd>
<dt><a href="docs/formatSeconds.md">formatSeconds(seconds, [forceHours])</a> ⇒ <code>string</code></dt>
<dd><p>Get a formatted string representation of time in seconds.</p>
</dd>
</dl>


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

<br><a name="getUniqueId"></a>

## getUniqueId() ⇒ <code>string</code>
Get a unique id string.


<br><a name="copyToClipboard"></a>

## copyToClipboard(str)
Copy a string to the users clipboard.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to copy to clipboard. |


<br><a name="stripStart"></a>

## stripStart(match, str) ⇒ <code>string</code>
Strip substrings from the start of a string.


| Param | Type | Description |
| --- | --- | --- |
| match | <code>string</code>, <code>RegExp</code> | Substring or regex to match. |
| str | <code>string</code> |  |


<br><a name="stripEnd"></a>

## stripEnd(match, str) ⇒ <code>string</code>
Strip substrings from the end of a string.


| Param | Type | Description |
| --- | --- | --- |
| match | <code>string</code>, <code>RegExp</code> | Substring or regex to match. |
| str | <code>string</code> |  |


<br><a name="pathJoin"></a>

## pathJoin(...segments) ⇒ <code>string</code>
Join path segments.


| Param | Type | Description |
| --- | --- | --- |
| ...segments | <code>string</code>, <code>Array.&lt;string&gt;</code> | Path segments. Arrays and nested arrays will be flattened. |


<br><a name="stripCase"></a>

## stripCase(str) ⇒ <code>string</code>
> Strip the case of a string.

Strip the case of a string: no capitals, words separated by a single space.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="upperCaseWords"></a>

## upperCaseWords(str) ⇒ <code>string</code>
Upper case the first letter of each word in a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="lowerCaseWords"></a>

## lowerCaseWords(str) ⇒ <code>string</code>
Lower case the first letter of each word in a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="upperCaseFirst"></a>

## upperCaseFirst(str) ⇒ <code>string</code>
Upper case the first letter of a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


<br><a name="lowerCaseFirst"></a>

## lowerCaseFirst(str) ⇒ <code>string</code>
Lower case the first letter of a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 


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
