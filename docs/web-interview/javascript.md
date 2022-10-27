---
id: web-interview-javascript
title: Javascript
---

#### 1. Explain event delegation?

<details>
<summary markdown="span">Answer</summary>
<p>
Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:

- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

</p>
</details>
