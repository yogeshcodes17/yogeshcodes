---
id: selection-sort
title: Selection Sort
---

```jsx
function selectionSort(array) {
	let counter = 0;
	
	while(counter < array.length - 1) {
		let smallestIdx = counter;
		for(let i = counter + 1; i < array.length; i++) {
			if(array[i] < array[smallestIdx]){
				smallestIdx = i
			}
		}
		let temp = array[counter];
		array[counter] = array[smallestIdx];
		array[smallestIdx] = temp;
		counter++;
	}
	return array;
}

3 5 6 2 3 1 7 9 2
counter = 0

counter < 8
smallestIdx = 0
i = 1 i < 8
5 < 3 no
6 < 3 no
2 < 3 yes
smallestidx = 3
2 5 6 3 3 1 7 9 2


```
