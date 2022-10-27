---
id: insertion-sort
title: Insertion Sort
---

```jsx
function insertionSort(array) {
	for(i = 0; i < array.length; i++) {
		let j = i;
		while(j > 0 && array[j] < array[j - 1]) {
			let temp = array[j];
			array[j] = array[j-1];
			array[j-1] = temp;
			j -= 1;
		}
	}
	return array;
}

5 3 8 1 5 9 3

i -> 0
j = 0
j > 0 no

i -> 1
j = 1
1 > 0 yes
3 < 5 yes

3 5 8 1 5 9 3

j = 0
0 > 0 no

i -> 2
j = 2
2 > 0 yes
8 < 3 no

i -> 3
j = 3;
3 > 0 yes
1 < 8 yes

3 5 1 8 5 9 3
j = 2
2 > 0 && 1 < 5

3 1 5 8 5 9 3

j = 1
1 > 0 && 1 < 3

1 3 5 8 5 9 3

j = 0

function insertionSort(array) {
	for(let i = 1; i < array.length; i++) {
		let j = i; 
		while(j > 0 && array[j] < array[j-1]) {
			let temp = array[j]
			array[j] = array[j-1]
			array[j-1] = temp
			j -= 1;
		}
	}
	return array;
}
```
