---
id: radix-sort
title: Radix Sort
---

[Radix sort - Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)

![radix sort](/images/radix-sort.png)

[Understanding Radix Sort Through JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/js-radix-sort)

```jsx
const radixSort = arr => {
  let maxLength = largestNum(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);

      if (num !== undefined) buckets[num].push(arr[j]);
    };
    arr = buckets.flat();
  };
  return arr;
};

const largestNum = arr => {
  let largest = "0";

  arr.forEach(num => {
    const strNum = String(num);

    if (strNum.length > largest.length) largest = strNum;
  });

  return largest.length;
};
```