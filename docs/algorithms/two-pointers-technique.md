---
id: two-pointer-technique
title: Two Pointer Technique
---

Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.
Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

```
A[] = {10, 20, 35, 50, 75, 80}
X = =70
i = 0
j = 5

A[i] + A[j] = 10 + 80 = 90
Since A[i] + A[j] > X, j--
i = 0
j = 4

A[i] + A[j] = 10 + 75 = 85
Since A[i] + A[j] > X, j--
i = 0
j = 3

A[i] + A[j] = 10 + 50 = 60
Since A[i] + A[j] < X, i++
i = 1
j = 3
m
A[i] + A[j] = 20 + 50 = 70
Thus this signifies that Pair is Found.
```

Let us do discuss the working of two pointer algorithm in brief which is as follows. The algorithm basically uses the fact that the input array is sorted. We start the sum of extreme values (smallest and largest) and conditionally move both pointers. We move left pointer ‘i’ when the sum of A[i] and A[j] is less than X. We do not miss any pair because the sum is already smaller than X. Same logic applies for right pointer j.

### Methods:
Here we will be proposing a two-pointer algorithm by starting off with the naïve approach only in order to showcase the execution of operations going on in both methods and secondary to justify how two-pointer algorithm optimizes code via time complexities across all dynamic programming languages such as C+, Java, Python, and even JavaScript

1. Naïve Approach using loops

```js
function isPairSum(A, N, X)
{
    for (var i = 0; i < N-1; i++)
    {
        for (var j = i+1; j < N; j++)
        {
            // as equal i and j means same element
            if (i == j)
                continue;

            // pair exists
            if (A[i] + A[j] == X)
                return 1;

            // as the array is sorted
            if (A[i] + A[j] > X)
                break;
        }
    }

    // No pair found with given sum.
    return 0;
}
```

Time Complexity:  O(n2).

2. Optimal approach using two pointer algorithm

Now let’s see how the two-pointer technique works. We take two pointers, one representing the first element and other representing the last element of the array, and then we add the values kept at both the pointers. If their sum is smaller than X then we shift the left pointer to right or if their sum is greater than X then we shift the right pointer to left, in order to get closer to the sum. We keep moving the pointers until we get the sum as X. 

```js
function isPairSum(A, N, X)
{
 
    // represents first pointer
    var i = 0;
 
    // represents second pointer
    var j = N - 1;
 
    while (i < j) {
 
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
 
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
 
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}
```

Time Complexity:  O(n)