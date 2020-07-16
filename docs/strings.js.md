<br>

## Functions

<dl>
<dt><a href="#percentage">percentage(fraction)</a> ⇒ <code>string</code></dt>
<dd><p>Turn a fractional number into a percentage string.</p>
</dd>
<dt><a href="#getUniqueId">getUniqueId()</a> ⇒ <code>string</code></dt>
<dd><p>Get a unique id string.</p>
</dd>
<dt><a href="#copyToClipboard">copyToClipboard(str)</a></dt>
<dd><p>Copy a string to the users clipboard.</p>
</dd>
<dt><a href="#stripStart">stripStart(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the start of a string.</p>
</dd>
<dt><a href="#stripEnd">stripEnd(match, str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip substrings from the end of a string.</p>
</dd>
<dt><a href="#pathJoin">pathJoin(segments)</a> ⇒ <code>string</code></dt>
<dd><p>Join path segments.</p>
</dd>
<dt><a href="#stripCase">stripCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Strip the case of a string.</p>
</dd>
<dt><a href="#upperCaseWords">upperCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of each word in a string.</p>
</dd>
<dt><a href="#lowerCaseWords">lowerCaseWords(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of each word in a string.</p>
</dd>
<dt><a href="#upperCaseFirst">upperCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of a string.</p>
</dd>
<dt><a href="#lowerCaseFirst">lowerCaseFirst(str)</a> ⇒ <code>string</code></dt>
<dd><p>Lower case the first letter of a string.</p>
</dd>
<dt><a href="#sentenceCase">sentenceCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Sentence case a string.</p>
</dd>
<dt><a href="#titleCase">titleCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Title case a string.</p>
</dd>
<dt><a href="#pascalCase">pascalCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Pascal case a string.</p>
</dd>
<dt><a href="#snakeCase">snakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Snake case a string.</p>
</dd>
<dt><a href="#kebabCase">kebabCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Kebab case a string.</p>
</dd>
<dt><a href="#camelCase">camelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Camel case a string.</p>
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

## pathJoin(segments) ⇒ <code>string</code>
Join path segments.


| Param | Type | Description |
| --- | --- | --- |
| segments | <code>string</code>, <code>Array.&lt;string&gt;</code> | Path segments. Arrays and nested arrays will be flattened. |


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
myFunc("this is my sample"); // => "This is my sample"
```

<br><a name="titleCase"></a>

## titleCase(str) ⇒ <code>string</code>
Title case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
myFunc("this is my sample"); // => "This Is My Sample"
```

<br><a name="pascalCase"></a>

## pascalCase(str) ⇒ <code>string</code>
Pascal case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
myFunc("this is my sample"); // => "ThisIsMySample"
```

<br><a name="snakeCase"></a>

## snakeCase(str) ⇒ <code>string</code>
Snake case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
myFunc("This is my sample"); // => "this_is_my_sample"
```

<br><a name="kebabCase"></a>

## kebabCase(str) ⇒ <code>string</code>
Kebab case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
myFunc("This is my sample"); // => "this-is-my-sample"
```

<br><a name="camelCase"></a>

## camelCase(str) ⇒ <code>string</code>
Camel case a string.


| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
myFunc("This is my sample"); // => "thisIsMySample"
```
