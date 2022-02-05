

<br><a name="constants.js"></a>

# constants.js
> Common constants & enums.

**Author**: Paul Walton  


<br><a name="RECT"></a>

## RECT : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Rect properties


<br><a name="TIME"></a>

## TIME : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Time constants.

**Properties**

| Name | Description |
| --- | --- |
| SECOND | 1 second in milliseconds. |
| MINUTE | 1 minute in milliseconds. |
| HOUR | 1 hour in milliseconds. |
| DAY | 1 day in milliseconds. |
| WEEK | 1 week in milliseconds. |
| MONTH | 1 month in milliseconds. |
| YEAR | 1 year in milliseconds. |
| SECONDS_PER_HOUR |  |
| SECONDS_PER_DAY |  |


<br><a name="FREQ"></a>

## FREQ : <code>enum</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

Common frequency periods (time from peak to peak).

**Properties**

| Name | Description |
| --- | --- |
| HZ_15 | Period for frequency of 15Hz. Visual updates throttled to 15Hz will feel slow. |
| HZ_30 | Period for frequency of 30Hz. Visual updates throttled to 30Hz may be noticed by users, but should be acceptable. |
| HZ_60 | Period for frequency of 60Hz. Users shouldn't be able to detect visual updates throttled to 60Hz. |
| FPS_15 | Alias of FREQ.HZ_15. |
| FPS_30 | Alias of FREQ.HZ_30. |
| FPS_60 | Alias of FREQ.HZ_60. |

