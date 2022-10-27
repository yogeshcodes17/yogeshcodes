---
id: module-pattern
title: Module Pattern
---

As far as peculiarities go, JavaScript never ceases to amaze. Another peculiar thing to JavaScript (at least as far as object-oriented languages go) is that JavaScript does not support access modifiers. In a classical OOP language, a user defines a class and determines access rights for its members. Since JavaScript in its plain form supports neither classes nor access modifiers, JavaScript developers figured out a way to mimic this behavior when needed.

Before we go into the module pattern specifics, let’s talk about the concept of closure. A **closure** is a function with access to the parent scope, even after the parent function has closed. They help us mimic the behavior of access modifiers through scoping. Let’s show this via an example:

```jsx
// we  used an immediately invoked function expression
// to create a private variable, counter
var counterIncrementer = (function() {
    var counter = 0;

    return function() {
        return ++counter;
    };
})();

// prints out 1
console.log(counterIncrementer());
// prints out 2
console.log(counterIncrementer());
// prints out 3
console.log(counterIncrementer());
```

As you can see, by using the IIFE, we have tied the counter variable to a function which was invoked and closed but can still be accessed by the child function that increments it. Since we cannot access the counter variable from outside of the function expression, we made it private through scoping manipulation.

Using the closures, we can create objects with private and public parts. These are called **modules** and are very useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module. Let’s show this in an example:

```jsx
// through the use of a closure we expose an object
// as a public API which manages the private objects array
var collection = (function() {
    // private members
    var objects = [];

    // public members
    return {
        addObject: function(object) {
            objects.push(object);
        },
        removeObject: function(object) {
            var index = objects.indexOf(object);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function() {
            return JSON.parse(JSON.stringify(objects));
        }
    };
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects());
```

The most useful thing that this pattern introduces is the clear separation of private and public parts of an object, which is a concept very similar to developers coming from a classical object-oriented background.

However, not everything is so perfect. When you wish to change the visibility of a member, you need to modify the code wherever you have used this member because of the different nature of accessing public and private parts. Also, methods added to the object after their creation cannot access the private members of the object.