---
id: web-interview-react
title: React
---

#### 1. How does React work?

<details>
<summary markdown="span">Answer</summary>
<p>

React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

</p>
</details>

#### 2. What are the advantages of using React?

<details>
<summary markdown="span">Answer</summary>
<p>

- It is easy to know how a component is rendered, you just need to look at the render function.
- JSX makes it easy to read the code of your components. It is also really easy to see the layout, or how components are plugged/combined with each other.
- You can render React on the server-side. This improves SEO and performance.
  It is easy to test.
- You can use React with any framework you wish as it is only a view layer.

</p>
</details>
