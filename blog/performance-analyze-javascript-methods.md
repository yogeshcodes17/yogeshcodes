---
title: Analyzing the performance of Javascript Methods
tags: [javascript, optimization]
---

Let's discuss the performance of Javascript built-in methods.


## *Things we are going to discuss in this blog:*
1. Understand how objects and arrays work, through the lens of Big O.
2. Understand why adding elements to the start is slow.
3. Compare and contrast the runtime for arrays and objects, as well as built-in methods


## **Objects**

Objects are unordered key-value pairs. Means these object values not indexed like arrays. You giving a key name and key-value, it's stored that's it it will not be indexed. 

### **Where can we use Objects?** 
1. When you don't need to order the elements with the index value. 
2. When you want to access/insert/remove the elements fastly.

When you accessing the elements means you don't need to search through all the elements of the objects like arrays unless you already know what the exact key name!

### **What is the Big O of objects?**
1. Insertion => O(1) - Ex: obj["name"] = "John";
2. Removal => O(1)
3. Searching => O(n) - Ex: Object.keys(obj);
4. Access => O(1) - Ex: obj["name"];

> When you don't want to order elements Objects are well performant.

### **Big O Object Methods** 
* Object.keys -   O(N)
* Object.values -   O(N)
* Object.entries -   O(N)
* hasOwnProperty -   O(1)


## **Arrays**
Arrays are ordered list. By default, arrays will order the elements with ascending order when inserting anything.

Ex: let values = [true, {}, [], 2, "awesome"];

### **Where can we use Arrays?** 
1. When you want to list elements in the order. 
2. When you want fast access/insertion and removal (with some limitations)

### **What is the Big O of arrays?**
1. Inserting
     * The performance of the arrays depends on how you inserting the value. 
     * If you insert at the end of the array. The Big O is O(1). Since it's not changing the order of the array. **Ex: [3, 4].push(2)**
     * If you insert at the beginning of the array. The Big O is O(n). Since it's changing the order of the whole array. Changing the order of the whole array means you can say I'm just inserting the value in arr[0]. But what really happens is the previous value stored in arr[0] will move arr[1] similar to all the values. **Ex: [1, 3, 4].shift(2)**

2. Removal 
* Same as inserting.
* Remove the end of the array value is O(1). **Ex: [3,4].pop()**
* Remove the beginning value is costliest O(n). **Ex: [3,4].unShift()**

3. Searching 
* Searching an element is O(n). Since we should loop through all the elements of the array to search a particular. No matter we found the element at the beginning or middle. Cumulatively we can consider it as an O(n). **Ex: [2,3,4].find(value => value === 3)**

4. Accessing
* Accessing an element is O(n). You should know the exact index value of the element to access. **Ex: arr[3]**


The basic array operations we are using daily still there are so many operations we not covering those in this blog. 

concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)

> Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that! We'll discuss in coming articles. 


Thanks for reading. See you in the next blog soon.
