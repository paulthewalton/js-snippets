

<br><a name="fallbacks.js"></a>

# fallbacks.js
> Utilities for fallback and default values.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/fallbackUntil.md">fallbackUntil(validate, ...values)</a> ⇒ <code>*</code></dt>
<dd><p>Return the first argument that satisfies a validation callback.</p>
</dd>
<dt><a href="docs/fallbackUntilAsync.md">fallbackUntilAsync(validate, ...values)</a> ⇒ <code>Promise.&lt;?*&gt;</code></dt>
<dd><p>Resolve to the first argument that satisfies an async validation callback.</p>
</dd>
</dl>


<br><a name="fallbackUntil"></a>

## fallbackUntil(validate, ...values) ⇒ <code>\*</code>
> Return the first argument that satisfies a validation callback.

Return the first argument that satisfies a validation callback, or the last value provided.
* Returns `undefined` if no values are passed.

**Throws**:

- <code>TypeError</code> If the callback isn't callable.


| Param | Type | Description |
| --- | --- | --- |
| validate | <code>function</code> | Validation callback. |
| ...values | <code>\*</code> | Variable number of candidate values. |


<br><a name="fallbackUntilAsync"></a>

## fallbackUntilAsync(validate, ...values) ⇒ <code>Promise.&lt;?\*&gt;</code>
> Resolve to the first argument that satisfies an async validation callback.

Resolve to the first argument that satisfies an async validation callback, or the last value provided.
* Resolves to `undefined` if no values are passed.

**Throws**:

- <code>TypeError</code> If the callback isn't callable.

**See**: fallbackUntil  

| Param | Type | Description |
| --- | --- | --- |
| validate | <code>function</code> | Validation callback. |
| ...values | <code>\*</code> | Variable number of candidate values. |

