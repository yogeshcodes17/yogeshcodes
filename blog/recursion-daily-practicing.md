---
title: Recursion in daily programming!
tags: []
---

We may use recursion in daily programming without knowing.
I will explain what recursion is and where can we use it. Keep reading!

## **What is recursion?** 
In layman terms, when we doing the same task repeatedly we can call it a recursive task. In programming terms, when a function calls a function itself to do the task and it's going iteratively to complete. It's called recursion.

### Still confused?

Okay, take one example.

```javascript
function findCorrectObject(arr, id) {
   if(arr[arr.length].id === id) {
     return arr[arr.legth];
   } else if(arr.length === 0) {
     return "Not found!";
   } else {
     arr.pop();
     findCorrectObject(arr, id);
   }
}
findCorrectObject([{id: "3434343", title: "title 1"}, {id: "45454565", title: "title 2"}], "3434343");
```

In this example, we finding the correct element from the array. As you see we called the same function with the required params. This is recursion. It'll run till it finds the correct object or the till the array will empty. 

Simple right?

## **Where we can use it?**
In javascript, recursion taking a huge place. In so many scenarios we can use the recursion. Example: JSON.parse / JSON.stringify

If you look inside the code of __deep() in lodash library it uses the same recursion. I'm telling deep cloning means in javascript if assign an object to a variable it'll shallow copy it'll not a deep copy. This means when you changed the new object created with the existing one it'll also change the existing one. 

We can use recursion to solve that problem. 

Here is the code for deep copy of an object! Don't get fear about huge code. I'll explain what it actually will do. Read the code carefully!

```javascript
function clone(item) {
  if (!item) {
    return item;
  } // null, undefined values check

  var types = [Number, String, Boolean],
    result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function(type) {
    if (item instanceof type) {
      result = type(item); // Yeah, we used recursion here! To find the exact primitive
    }
  });
  
  // If the result is still undefined. The item should be an Object or Array
  if (typeof result == "undefined") { 
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      // If the item is array, we call the same function to deep clone each values. Yes it is recursion.
      item.forEach(function(child, index, array) {
        result[index] = clone(child);
      });
    } else if (typeof item == "object") {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == "function") {
        result = item.cloneNode(true);
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = clone(item[i]);
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
}

var copy = clone({
  one: {
    "one-one": new String("hello"),
    "one-two": ["one", "two", true, "four"]
  },
  two: document.createElement("div"),
  three: [
    {
      name: "three-one",
      number: new Number("100"),
      obj: new (function() {
        this.name = "Object test";
      })()
    }
  ]
});
```

### **Another Example**
If you think the previous example is too much, here I took one famous problem to explain recursion. 
```javascript
function calculateFactorial(num) {
  if(num === 1) return 1;
  return num * calculateFactorial(num - 1);
}

calculateFactorial(5);
```
In this function, the calculateFactorial will call a total of 5 times to complete the problem. Whenever the calculateFactorial(num - 1) function call it'll create the separate function stack and the previous function will wait till the current function resolves. Likewise, the new function will be called in runtime until it returns 1. 


I recently used recursion in my project. I currently working with reactJS. So it'll better if explain the real-life scenario. We had one problem, the user need to select the children of the parent in the dropdown. And the children might have another child. Likewise the data will grove. I used this [library](https://dowjones.github.io/react-dropdown-tree-select/#/story/with-material-design-styles) to solve the particular problem.

![](https://s5.gifyu.com/images/recursion-example.gif)

I immensely used recursion inside. Because each object might have another set of object and I need to go through all the phases until I reach the final object without another child. 

Recursion solving so many problems that loops cannot solve. And also the code will be cleaner and optimized. 

Thanks for reading!!

 





