---
id: merge-sort
title: Merge Sort
---

![merge sort](/images/merge-sort.png)

```jsx
function merge(arr1, arr2) {
	let sorted = [];
	while(arr1.length && arr2.length) {
		if(arr1[0] < arr2[0]) {
			sorted.push(arr1.shift());
		} else {
			sorted.push(arr2.shift());
		}
	}
	return [...sorted, ...arr1, ...arr2];
}

function mergeSort(array) {
	if(array.length <= 1) return array;
	const mid = Math.floor(array.length/2);
	const left = mergeSort(array.slice(0, mid));
	const right = mergeSort(array.slice(mid));
	
	return merge(left, right);
}
```