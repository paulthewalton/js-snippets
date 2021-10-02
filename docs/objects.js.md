

<br><a name="objects.js"></a>

# objects.js
> Utilities for working with objects and their properties.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/hasAllProps.md">hasAllProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has all of the supplied properties.</p>
</dd>
<dt><a href="docs/hasAnyProps.md">hasAnyProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has at least one of the supplied properties.</p>
</dd>
<dt><a href="docs/matchProps.md">matchProps(prop, subjectA, subjectB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check a property of 2 objects to see if the values match.</p>
</dd>
<dt><a href="docs/extend.md">extend(target, extensions, [depth])</a> ⇒ <code>Object</code></dt>
<dd><p>Copy properties from one object to another recursively.</p>
</dd>
<dt><a href="docs/diff.md">diff(source, compareTo, [depth])</a> ⇒ <code>Object</code></dt>
<dd><p>Get the difference between one object and another recursively.</p>
</dd>
<dt><a href="docs/snapshot.md">snapshot(obj)</a> ⇒ <code>Object</code></dt>
<dd><p>Snapshot the properties of an object.</p>
</dd>
<dt><a href="docs/allowProps.md">allowProps(allowedProps, subject)</a> ⇒ <code>Object</code></dt>
<dd><p>Remove unknown properties from a given object (DESTRUCTIVE).</p>
</dd>
<dt><a href="docs/denyProps.md">denyProps(deniedProps, subject)</a> ⇒ <code>Object</code></dt>
<dd><p>Remove known properties from a given object (DESTRUCTIVE).</p>
</dd>
</dl>


<br><a name="hasAllProps"></a>

## hasAllProps(proplist, subject) ⇒ <code>boolean</code>
Verify that an object has all of the supplied properties.


| Param | Type | Description |
| --- | --- | --- |
| proplist | <code>Array.&lt;string&gt;</code> | List of property keys to check. |
| subject | <code>Object</code> | Object to check. |


<br><a name="hasAnyProps"></a>

## hasAnyProps(proplist, subject) ⇒ <code>boolean</code>
Verify that an object has at least one of the supplied properties.


| Param | Type | Description |
| --- | --- | --- |
| proplist | <code>Array.&lt;string&gt;</code> | List of property keys to check. |
| subject | <code>Object</code> | Object to check. |


<br><a name="matchProps"></a>

## matchProps(prop, subjectA, subjectB) ⇒ <code>boolean</code>
Check a property of 2 objects to see if the values match.


| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | The property by which to evaluate. |
| subjectA | <code>Object</code> | An object to evaluate. |
| subjectB | <code>Object</code> | Another object to evaluate. |


<br><a name="extend"></a>

## extend(target, extensions, [depth]) ⇒ <code>Object</code>
Copy properties from one object to another recursively.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | <code>Object</code> |  | Target object. |
| extensions | <code>Object</code> |  | Object with properties to copy. |
| [depth] | <code>number</code> | <code>-1</code> | Max depth for recursion. Negative value -> no limit. |


<br><a name="diff"></a>

## diff(source, compareTo, [depth]) ⇒ <code>Object</code>
Get the difference between one object and another recursively.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>Object</code> |  | Object to get differences from. |
| compareTo | <code>Object</code> |  | Object to compare values to. |
| [depth] | <code>number</code> | <code>-1</code> | Max depth for recursion. Negative value -> no limit. |


<br><a name="snapshot"></a>

## snapshot(obj) ⇒ <code>Object</code>
Snapshot the properties of an object.


| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 


<br><a name="allowProps"></a>

## allowProps(allowedProps, subject) ⇒ <code>Object</code>
Remove unknown properties from a given object (DESTRUCTIVE).


| Param | Type | Description |
| --- | --- | --- |
| allowedProps | <code>Array.&lt;string&gt;</code> | Array of allowed property keys. |
| subject | <code>Object</code> | Object to be processed. |

**Example**  
```js
var o = {foo: 'bar', hello: 'world', sieze: 'today'};
allowProps(['foo', 'hello'], o); // o == {foo: 'bar', hello: 'world'}
```

<br><a name="denyProps"></a>

## denyProps(deniedProps, subject) ⇒ <code>Object</code>
Remove known properties from a given object (DESTRUCTIVE).


| Param | Type | Description |
| --- | --- | --- |
| deniedProps | <code>Array.&lt;string&gt;</code> | Array of denied property keys. |
| subject | <code>Object</code> | Object to be processed. |

**Example**  
```js
var o = {foo: 'bar', hello: 'world', sieze: 'today'};
denyProps(['foo', 'hello'], o); // o == {sieze: 'today'}
```
