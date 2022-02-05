

<br><a name="compat.js"></a>

# compat.js
> Resolve some cross-browser incompatibilities.

**Author**: Paul Walton  

<br>

## Classes

<dl>
<dt><a href="docs/CompatResolver.md">CompatResolver</a></dt>
<dd><p>Framework for resolving functions with different names &amp; availabilities across browsers.</p>
</dd>
</dl>

<br>

## Constants

<dl>
<dt><a href="docs/compatNow.md">compatNow</a> : <code><a href="#CompatNow">CompatResolver.&lt;CompatNow&gt;</a></code></dt>
<dd><p>@</p>
</dd>
<dt><a href="docs/compatRequestAnimationFrame.md">compatRequestAnimationFrame</a> : <code><a href="#CompatRequestAnimationFrame">CompatResolver.&lt;CompatRequestAnimationFrame&gt;</a></code></dt>
<dd></dd>
<dt><a href="docs/compatCancelAnimationFrame.md">compatCancelAnimationFrame</a> : <code><a href="#CompatCancelAnimationFrame">CompatResolver.&lt;CompatCancelAnimationFrame&gt;</a></code></dt>
<dd></dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/polyfill.md">polyfill(scope, methodName, resolver)</a> ⇒ <code>void</code></dt>
<dd></dd>
</dl>


<br><a name="CompatResolver"></a>

## CompatResolver
> Framework for resolving functions with different names & availabilities across browsers.

**Properties**

| Name | Type |
| --- | --- |
| candidates | [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) | 
| scope | <code>Object</code> | 


* [CompatResolver](#CompatResolver)
    * [.CompatResolver](#CompatResolver+CompatResolver)
        * [new exports.CompatResolver(candidates, [scope])](#new_CompatResolver+CompatResolver_new)
    * [.add(fn, [scope], [prepend])](#CompatResolver+add) ⇒ <code>void</code>
    * [.resolve([forceEvaluation])](#CompatResolver+resolve) ⇒ <code>T</code>


<br><a name="CompatResolver+CompatResolver"></a>

### compatResolver.CompatResolver

<br><a name="new_CompatResolver+CompatResolver_new"></a>

#### new exports.CompatResolver(candidates, [scope])

| Param | Type |
| --- | --- |
| candidates | [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) | 
| [scope] | <code>Object</code> | 


<br><a name="CompatResolver+add"></a>

### compatResolver.add(fn, [scope], [prepend]) ⇒ <code>void</code>
> Add additional candidates to an existing CompatResolver instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>string</code>, <code>function</code> |  | Either the member name of a candidate function within the `scope`, or a function that returns a candidate function. |
| [scope] | <code>Object</code> |  | An optional scope object to check for the candidate function, defaults to scope of the CompatResolver instance. |
| [prepend] | <code>boolean</code> | <code>false</code> | Whether to prepend the candidate to the list, default `false`. |


<br><a name="CompatResolver+resolve"></a>

### compatResolver.resolve([forceEvaluation]) ⇒ <code>T</code>
> Resolve the candidates to a usable implementation.

**Returns**: <code>T</code> - Resolved compat function.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [forceEvaluation] | <code>boolean</code> | <code>false</code> | Force (re)evaluation of candidates. |


<br><a name="compatNow"></a>

## compatNow : [<code>CompatResolver.&lt;CompatNow&gt;</code>](#CompatNow)
@


<br><a name="compatRequestAnimationFrame"></a>

## compatRequestAnimationFrame : [<code>CompatResolver.&lt;CompatRequestAnimationFrame&gt;</code>](#CompatRequestAnimationFrame)

<br><a name="compatCancelAnimationFrame"></a>

## compatCancelAnimationFrame : [<code>CompatResolver.&lt;CompatCancelAnimationFrame&gt;</code>](#CompatCancelAnimationFrame)

<br><a name="polyfill"></a>

## polyfill(scope, methodName, resolver) ⇒ <code>void</code>

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>Object</code> | Method/function scope. |
| methodName | <code>string</code> | Method name. |
| resolver | [<code>CompatResolver</code>](#CompatResolver), [<code>Array.&lt;CompatResolverCandidate&gt;</code>](#CompatResolverCandidate) |  |


<br><a name="CompatResolverCandidate"></a>

## CompatResolverCandidate : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fn | <code>string</code> \| <code>function</code> | Either the member name of a candidate function within the `scope`, or a function that returns a candidate function. |
| scope | <code>Object</code> | An optional scope object to check for the candidate function, defaults to the global object (`window` in browsers, `global` for node) |


<br><a name="CompatNow"></a>

## CompatNow ⇒ <code>DOMHighResTimeStamp</code> \| <code>number</code>
> A cross-browser function for calculating timings.

Defaults to `performance.now`, falling back to `Date.now`.


<br><a name="CompatRequestAnimationFrame"></a>

## CompatRequestAnimationFrame ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| callback | <code>FrameRequestCallback</code> | 


<br><a name="CompatCancelAnimationFrame"></a>

## CompatCancelAnimationFrame ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| handle | <code>number</code> | 

