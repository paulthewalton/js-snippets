<br>

## Functions

<dl>
<dt><a href="#request">request(method, type, url, headers, body)</a> ⇒ <code>Promise</code></dt>
<dd><p>Make simple AJAX requests</p>
</dd>
<dt><a href="#getHTML">getHTML(url, headers)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get HTML via AJAX.</p>
</dd>
<dt><a href="#getJSON">getJSON(url, headers)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get JSON via AJAX.</p>
</dd>
<dt><a href="#makeVerbosePromise">makeVerbosePromise(promise, throws)</a> ⇒ <code>Promise</code></dt>
<dd><p>This function allow you to modify a JS Promise by adding some status properties.
Based on: <a href="http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved">http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved</a>
But modified according to the specs of promises : <a href="https://promisesaplus.com/">https://promisesaplus.com/</a></p>
</dd>
</dl>


<br><a name="request"></a>

## request(method, type, url, headers, body) ⇒ <code>Promise</code>
Make simple AJAX requests


| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Request method, case insensitive. |
| type | <code>string</code> | See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType. |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object</code> | Object of key:value headers. |
| body | <code>string</code>, <code>Document</code>, <code>Blob</code>, <code>BufferSource</code>, <code>FormData</code>, <code>URLSearchParams</code>, <code>ReadableStream</code> | request body |


<br><a name="getHTML"></a>

## getHTML(url, headers) ⇒ <code>Promise</code>
Get HTML via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| headers | <code>Object</code> | key:value headers |


<br><a name="getJSON"></a>

## getJSON(url, headers) ⇒ <code>Promise</code>
Get JSON via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| headers | <code>Object</code> | key:value headers |


<br><a name="makeVerbosePromise"></a>

## makeVerbosePromise(promise, throws) ⇒ <code>Promise</code>
This function allow you to modify a JS Promise by adding some status properties.
Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
But modified according to the specs of promises : https://promisesaplus.com/


| Param | Type |
| --- | --- |
| promise | <code>Promise</code> | 
| throws | <code>boolean</code> | 

