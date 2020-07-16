<br>

## Functions

<dl>
<dt><a href="#hasAllProps">hasAllProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has all of the supplied properties.</p>
</dd>
<dt><a href="#hasAnyProps">hasAnyProps(proplist, subject)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify that an object has at least one of the supplied properties.</p>
</dd>
<dt><a href="#matchProps">matchProps(prop, subjectA, subjectB)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check a property of 2 objects to see if the values match.</p>
</dd>
<dt><a href="#compareProps">compareProps(prop, subjectA, subjectB)</a> ⇒ <code>number</code></dt>
<dd><p>Compare a property of 2 objects.</p>
</dd>
<dt><a href="#extend">extend(target, extensions, [limit])</a> ⇒ <code>Object</code></dt>
<dd><p>Copy properties from one object to another recursively.</p>
</dd>
<dt><a href="#snapshot">snapshot(obj)</a> ⇒ <code>Object</code></dt>
<dd><p>Snapshot the properties of an object.</p>
</dd>
<dt><a href="#allowProps">allowProps(allowedProps, subject)</a> ⇒ <code>Object</code></dt>
<dd><p>Remove unknown properties from a given object (DESTRUCTIVE).</p>
</dd>
<dt><a href="#denyProps">denyProps(deniedProps, subject)</a> ⇒ <code>Object</code></dt>
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


<br><a name="compareProps"></a>

## compareProps(prop, subjectA, subjectB) ⇒ <code>number</code>
Compare a property of 2 objects.

**Returns**: <code>number</code> - 0 if equal, 1 if more, -1 if less.  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | The property by which to evaluate. |
| subjectA | <code>Object</code> | The object to evaluate. |
| subjectB | <code>Object</code> | Another object to evaluate. |


<br><a name="extend"></a>

## extend(target, extensions, [limit]) ⇒ <code>Object</code>
Copy properties from one object to another recursively.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| target | <code>Object</code> |  | Target object. |
| extensions | <code>Object</code> |  | Object with properties to copy. |
| [limit] | <code>number</code> | <code>-1</code> | Max depth for recursion. Negative value -> no limit. |


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
| deniedProps | <code>Array.&lt;string&gt;</code> | Array of denyed property keys. |
| subject | <code>Object</code> | Object to be processed. |

**Example**  
```js
var o = {foo: 'bar', hello: 'world', sieze: 'today'};
denyProps(['foo', 'hello'], o); // o == {sieze: 'today'}
```
