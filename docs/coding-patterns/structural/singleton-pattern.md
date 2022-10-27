---
id: singleton-pattern
title: Singleton Pattern
---

The singleton pattern is used in scenarios when we need exactly one instance of a class. For example, we need to have an object which contains some configuration for something. In these cases, it is not necessary to create a new object whenever the configuration object is required somewhere in the system.

```jsx
var singleton = (function() {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values){
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();

var configObject = singleton.getConfig({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
var configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);
```

As you can see in the example, the random number generated is always the same, as well as the config values sent in.

It is important to note that the access point for retrieving the singleton value needs to be only one and very well known. A downside to using this pattern is that it is rather difficult to test.