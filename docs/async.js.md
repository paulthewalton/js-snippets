

<br><a name="async.js"></a>

# async.js
> Async utility functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/request.md">request(method, type, url, headers, body)</a> ⇒ <code><a href="#RequestUtilResponse">Promise.&lt;RequestUtilResponse&gt;</a></code></dt>
<dd><p>Make simple AJAX requests</p>
</dd>
<dt><a href="docs/getHTML.md">getHTML(url, headers, body)</a> ⇒ <code><a href="#RequestUtilResponse">Promise.&lt;RequestUtilResponse&gt;</a></code></dt>
<dd><p>Get HTML via AJAX.</p>
</dd>
<dt><a href="docs/getJSON.md">getJSON(url, headers, body)</a> ⇒ <code><a href="#RequestUtilResponse">Promise.&lt;RequestUtilResponse&gt;</a></code></dt>
<dd><p>Get JSON via AJAX.</p>
</dd>
<dt><a href="docs/makeVerbosePromise.md">makeVerbosePromise(promise)</a> ⇒ <code><a href="#VerbosePromise">VerbosePromise</a></code></dt>
<dd><p>Add status props to a Promise.</p>
</dd>
<dt><a href="docs/unwrapPromises.md">unwrapPromises(...promises)</a> ⇒ <code>Array.&lt;*&gt;</code></dt>
<dd><p>Unwrap promises once resolved.</p>
</dd>
</dl>


<br><a name="request"></a>

## request(method, type, url, headers, body) ⇒ [<code>Promise.&lt;RequestUtilResponse&gt;</code>](#RequestUtilResponse)
Make simple AJAX requests

**See**: [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Request method, case insensitive. |
| type | <code>XMLHttpRequestResponseType</code> | Response type. |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | [<code>XMLHttpRequestBody</code>](#XMLHttpRequestBody) | Request body. |


<br><a name="getHTML"></a>

## getHTML(url, headers, body) ⇒ [<code>Promise.&lt;RequestUtilResponse&gt;</code>](#RequestUtilResponse)
Get HTML via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | [<code>XMLHttpRequestBody</code>](#XMLHttpRequestBody) | Request body. |


<br><a name="getJSON"></a>

## getJSON(url, headers, body) ⇒ [<code>Promise.&lt;RequestUtilResponse&gt;</code>](#RequestUtilResponse)
Get JSON via AJAX.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to request. |
| headers | <code>Object.&lt;string, \*&gt;</code> | Object of key:value headers. |
| body | [<code>XMLHttpRequestBody</code>](#XMLHttpRequestBody) | Request body. |


<br><a name="makeVerbosePromise"></a>

## makeVerbosePromise(promise) ⇒ [<code>VerbosePromise</code>](#VerbosePromise)
> Add status props to a Promise.

This function allow you to modify a JS Promise by adding some status properties.

Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved

But modified according to the specs of promises : https://promisesaplus.com/


| Param | Type |
| --- | --- |
| promise | <code>Promise</code> | 


<br><a name="unwrapPromises"></a>

## unwrapPromises(...promises) ⇒ <code>Array.&lt;\*&gt;</code>
> Unwrap promises once resolved.

Unwrap promises once resolved.
! Make sure all individual promises have potential rejections handled, as each will be `await`-ed without error handling.


| Param | Type |
| --- | --- |
| ...promises | <code>Promise.&lt;\*&gt;</code> | 


<br><a name="RequestUtilResponse"></a>

## RequestUtilResponse : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| response | <code>string</code> \| <code>ArrayBuffer</code> \| <code>Blob</code> \| <code>Document</code> \| <code>Object</code> | XHR response. |
| status | <code>number</code> | HTTP response code. |
| xhr | <code>XMLHttpRequest</code> | Original XHR object. |


<br><a name="XMLHttpRequestBody"></a>

## XMLHttpRequestBody : <code>string</code> \| <code>Document</code> \| <code>Blob</code> \| <code>BufferSource</code> \| <code>FormData</code> \| <code>URLSearchParams</code> \| <code>ReadableStream</code>

<br><a name="VerbosePromise"></a>

## VerbosePromise : <code>Promise</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isFulfilled | <code>boolean</code> | Promise has been resolved. |
| isRejected | <code>boolean</code> | Promise has been rejected. |
| isPending | <code>boolean</code> | Promise is not yet settled. |

