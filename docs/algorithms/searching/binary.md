---
id: binary-searching
title: Binary Searching
---

```jsx
function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	while(left <= right) {
		const middle = Math.floor((left + right) / 2);
		const match = array[middle];
		if(match === target) {
			return middle
		} else if (target < match) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1
}
```
