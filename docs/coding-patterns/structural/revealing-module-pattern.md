---
id: revealing-module-pattern
title: Revealing Module Pattern
---

This pattern is an improvement made to the module pattern as illustrated above. The main difference is that we write the entire object logic in the private scope of the module and then simply expose the parts we want to be public by returning an anonymous object. We can also change the naming of private members when mapping private members to their corresponding public members.

```jsx
// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
var namesCollection = (function() {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(namesCollection.getNames());
namesCollection.removeName("Alice");
// prints ["Bob", "Franck"]
console.log(namesCollection.getNames());
```

The revealing module pattern is one of at least three ways in which we can implement a module pattern. The differences between the revealing module pattern and the other variants of the module pattern are primarily in how public members are referenced. As a result, the revealing module pattern is much easier to use and modify; however, it may prove fragile in certain scenarios, like using RMP objects as prototypes in an inheritance chain. The problematic situations are the following:

1. If we have a private function which is referring to a public function, we cannot override the public function, as the private function will continue to refer to the private implementation of the function, thus introducing a bug into our system.
2. If we have a public member pointing to a private variable, and try to override the public member from outside the module, the other functions would still refer to the private value of the variable, introducing a bug into our system.