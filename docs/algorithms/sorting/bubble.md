---
id: bubble-sort
title: Bubble Sort
---

```jsx
function bubbleSort(array) {
  // Write your code here.
	let isSorted = false;
	let counter = 0;
	while(!isSorted) {
		isSorted = true;
		for(let i = 0; i < array.length - 1 - counter; i++) {
			if(array[i] > array[i + 1]) {
				const temp = array[i + 1];
				array[i+1] = array[i];
				array[i] = temp;
				isSorted = false
			}
		}
		counter++	
	}
	return array;
}

5 2 9 3 7 2 1

isSorted = false;
counter = 0
!sorted -> yes
sorted = yes
i = 0 i < 6
5 > 2 no
i = 1
2 > 9 no
i = 2
9 > 3 yes
5 2 3 9 7 2 1
sorted = false
i = 3
9 > 7 yes
5 2 3 7 9 2 1
sorted = false
i = 4
9 > 2 yes
5 2 3 7 2 9 1
i = 5
9 > 1 yes
5 2 3 7 2 1 9
sorted = false
i = 6 

!sorted -> yes

function bubbleSort(array) {
	let sorted = false;
	let counter = 0;
	while(!sorted){
		sorted = true;
		for(let i = 0; i < array.length - 1 - counter; i++) {
			if(array[i] > array[i+1]) {
				let temp = array[i];
				array[i+1] = array[i];
				array[i] = temp;
				sorted = true;
			}
		}
		counter++
	}
}

```
