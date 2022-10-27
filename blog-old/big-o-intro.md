---
title: Brief Intro to Big O
tags: [algorithms, javascript]
---

Hello Devs,

Previously I have written a dev blog on why data structures are needed in frontend development. If you didn't read yet feel free to [check it out](https://dev.to/coder554/why-data-structures-and-algorithms-are-important-for-frontend-25mn) 

In this blog, we are going to discuss what Big O is and where we can use it?

First, we will start with the official definition. 

## **What is Big O?**
Big O Notation is the language we use to describe the complexity of an algorithm. In other words, Big O Notation is the language we use for talking about how long an algorithm takes to run. It is how we compare the efficiency of different approaches to a problem. With Big O Notation we express the runtime in terms of — how quickly it grows relative to the input, as the input gets larger.

## **How Big O calculates the performance without using a computer?**
This is where Big O comes to the game. Imagine you need to solve a problem and you have 2 solutions. You need to select the optimized code.

Example 

Code: 1
<img src="https://i.ibb.co/q7zxMfR/code-1.png" alt="drawing" width="300" />

Code: 2
<img src="https://i.ibb.co/p3ST5Z1/code-2.png" alt="drawing" width="300" />

How will you choose which is efficient code?


Within the system?
Based on lines of code?
Using any tool?

### **Calculating Performance!**

When comes to calculating performance we need to consider two things.
1. Time Complexity
2. Space Complexity

### Time Complexity (Faster Processing)
Can we use timers(in Javascript) to calculate which is faster?

Why not? We'll try!

<img src="https://i.ibb.co/1djd9qT/code-3.png" width="500" />

First output is => *Time Elapsed: 0.9381299999998882 seconds.*
Second output is => *Time Elapsed: 0.9610100000000093 seconds.*

The output is differing for each run right? The output solely depends on the hardware. So we can't take this is as the final decision. We need something more. 

### Counting Operations...
Now, we'll do the optimization based on counting how many operations are making for each run.

Analyze the first program and count how many operations are making at each run. But in the second program counting is a bit hard since the operation is based on input.

> Big O calculation will be based on input.
> Big O will calculate the worst-case scenario.

Since the operation is based on input. I think we can use Big O to calculate performance. 

### *Let's back to Big O again!*

**It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow**


We have some types in Big O

1. It could be linear O(n). (Which means the runtime grows based on the input)
2. It could be quadratic O(n**2). 
3. It could be constant O(1). (Which means the runtime will be constant at any time).

<img src="https://danielmiessler.com/images/big-o-chart-tutorial-bazar-aymptotic-notations-1.png.webp" />

You can see whatever the O(1) is the more efficient solution and followed by O(n!) is the less efficient solution. 

Example for O(n)
```javascript 
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) { // Since the loop is based on input
    total += i;
  }
  return total;
}
```

Even though we have two loops in the function. We can consider this as an O(n) solution. 
```javascript
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
```

// Loop inside a loop will be considered as O(n**2)
```javascript
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

### **Shorthands for Big O**

1. O(2n) => O(n)
2. O(300) => O(1)
3. O(50n**2) => O(n**2)
4. O(n + 10) => O(n)
5. O(10n**2 + 20) => O(n**2)
6. O(n**2 + 5n + 8 ) => O(n**2) (Choose the maximum one always)

I think this is enough for time complexity.

## **Space Complexity**

Space complexity mainly focused on memory space optimization. It will calculate how much space needed for running that program. It will also rate the efficiency based on the calculations. Very similar to time complexity. 

#### *In javascript, the space complexity is based on the below rules.*

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O( n), where n is the length (for arrays) or the 
   number of keys (for objects)

Example 1:
This one is O(1) space complexity
```javascript
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // Replacing the already declared variable
  }
  return total;
}
```

Example 2: 
This one is O(n) space complexity
```javascript 
function double(arr) {
  let newArr = []; // Will not be a constant space
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // Pushing values to array dynamically
  }
  return newArr;
}
```

Finally, we came to a conclusion.

1. To analyze the performance of an algorithm, we use Big O Notation
2. Big O Notation can give us a high-level understanding of the time or space complexity of an algorithm
3. Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
4. The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
5. Big O Notation is everywhere, so get lots of practice!

Thanks for reading. See you in the next blog soon. 
