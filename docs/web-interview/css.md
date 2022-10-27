---
id: web-interview-css
title: CSS
---

#### 1. What is CSS selector specificity and how does it work?

<details>
<summary markdown="span">Answer</summary>
<p>
The browser determines what styles to show on an element depending on the specificity of CSS rules. We assume that the browser has already determined the rules that match a particular element. Among the matching rules, the specificity, four comma-separate values, `a, b, c, d` are calculated for each rule based on the following:

a is whether inline styles are being used. If the property declaration is an inline style on the element, a is 1, else 0.
b is the number of ID selectors.
c is the number of classes, attributes and pseudo-classes selectors.
d is the number of tags and pseudo-elements selectors.
The resulting specificity is not a score, but a matrix of values that can be compared column by column. When comparing selectors to determine which has the highest specificity, look from left to right, and compare the highest value in each column. So a value in column b will override values in columns c and d, no matter what they might be. As such, specificity of 0,1,0,0 would be greater than one of 0,0,10,10.

In the cases of equal specificity: the latest rule is the one that counts. If you have written the same rule into your stylesheet (regardless of internal or external) twice, then the lower rule in your style sheet is closer to the element to be styled, it is deemed to be more specific and therefore will be applied.

I would write CSS rules with low specificity so that they can be easily overridden if necessary. When writing CSS UI component library code, it is important that they have low specificities so that users of the library can override them without using too complicated CSS rules just for the sake of increasing specificity or resorting to !important.

</p>
</details>
