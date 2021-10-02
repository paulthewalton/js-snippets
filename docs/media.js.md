

<br><a name="media.js"></a>

# media.js
> Helpers for working with media and other assets.

**Author**: Paul Walton  

<br>

## Constants

<dl>
<dt><a href="docs/preloadImage.md">preloadImage</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Preload an image for the browser, resolves to success/error state.</p>
</dd>
<dt><a href="docs/testImageURL.md">testImageURL</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Test if an image is &quot;good&quot;. Fails if:</p>
<ul>
<li><code>url</code> is empty or null, OR</li>
<li><code>url</code> is the same as the URL of the page the user is currently on, OR</li>
<li>the image is corrupted in some way that prevents it from being loaded, OR</li>
<li>the image&#39;s metadata is corrupted in such a way that it&#39;s impossible to retrieve its dimensions, OR</li>
<li>the image is in a format not supported by the user agent.</li>
</ul>
</dd>
</dl>


<br><a name="preloadImage"></a>

## preloadImage ⇒ <code>Promise.&lt;boolean&gt;</code>
Preload an image for the browser, resolves to success/error state.


| Param | Type |
| --- | --- |
| sources | <code>Object</code> | 


<br><a name="testImageURL"></a>

## testImageURL ⇒ <code>Promise.&lt;boolean&gt;</code>
Test if an image is "good". Fails if:
* `url` is empty or null, OR
* `url` is the same as the URL of the page the user is currently on, OR
* the image is corrupted in some way that prevents it from being loaded, OR
* the image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, OR
* the image is in a format not supported by the user agent.


| Param | Type |
| --- | --- |
| url | <code>string</code> | 

