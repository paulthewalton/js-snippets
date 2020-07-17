

<br><a name="react.js"></a>

# react.js
> React specific utility functions.

**Author**: Paul Walton  

<br>

## Functions

<dl>
<dt><a href="docs/mergeRefs.md">mergeRefs(...refs)</a> ⇒ <code>React.Ref</code></dt>
<dd><p>Merge React refs.</p>
</dd>
<dt><a href="docs/getDisplayName.md">getDisplayName(WrappedComponent)</a> ⇒ <code>string</code></dt>
<dd><p>Display name helper for HOCs.</p>
</dd>
<dt><a href="docs/isFunctionalComponent.md">isFunctionalComponent(Component)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if component is functional.</p>
</dd>
<dt><a href="docs/isClassComponent.md">isClassComponent(Component)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if component is a class component.</p>
</dd>
</dl>


<br><a name="mergeRefs"></a>

## mergeRefs(...refs) ⇒ <code>React.Ref</code>
> Merge React refs.

Merge React refs. If only one potential ref is passed in, returns that ref.


| Param | Type |
| --- | --- |
| ...refs | <code>React.Ref</code> | 


<br><a name="getDisplayName"></a>

## getDisplayName(WrappedComponent) ⇒ <code>string</code>
Display name helper for HOCs.


| Param | Type | Description |
| --- | --- | --- |
| WrappedComponent | <code>React.Component</code> | A React component. |


<br><a name="isFunctionalComponent"></a>

## isFunctionalComponent(Component) ⇒ <code>boolean</code>
> Test if component is functional.

Test if component is functional.
eg. for when checking if you should forward refs when creating HOCs.


| Param | Type | Description |
| --- | --- | --- |
| Component | <code>React.Component</code> | A React component. |


<br><a name="isClassComponent"></a>

## isClassComponent(Component) ⇒ <code>boolean</code>
> Test if component is a class component.

Test if component is a class component.
eg. for when checking if you should forward refs when creating HOCs.


| Param | Type | Description |
| --- | --- | --- |
| Component | <code>React.Component</code> | A React component. |

