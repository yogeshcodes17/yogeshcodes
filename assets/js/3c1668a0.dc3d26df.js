"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[8099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),h=s,d=p["".concat(c,".").concat(h)]||p[h]||b[h]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1008:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>a,toc:()=>c,default:()=>l});var r=n(7462),s=(n(7294),n(3905));const i={id:"observer-pattern",title:"Observer Pattern"},o=void 0,a={unversionedId:"coding-patterns/structural/observer-pattern",id:"coding-patterns/structural/observer-pattern",title:"Observer Pattern",description:"The observer pattern is a very useful tool when we have a scenario where we need to improve the communication between disparate parts of our system in an optimized way. It promotes loose coupling between objects.",source:"@site/docs/coding-patterns/structural/observer-pattern.md",sourceDirName:"coding-patterns/structural",slug:"/coding-patterns/structural/observer-pattern",permalink:"/yogeshcodes/coding-patterns/structural/observer-pattern",tags:[],version:"current",frontMatter:{id:"observer-pattern",title:"Observer Pattern"},sidebar:"docs",previous:{title:"Module Pattern",permalink:"/yogeshcodes/coding-patterns/structural/module-pattern"},next:{title:"Prototype Pattern",permalink:"/yogeshcodes/coding-patterns/structural/prototype-pattern"}},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The observer pattern is a very useful tool when we have a scenario where we need to improve the communication between disparate parts of our system in an optimized way. It promotes loose coupling between objects."),(0,s.kt)("p",null,"There are various versions of this pattern, but in its most basic form, we have two main parts of the pattern. The first is a subject and the second is observers."),(0,s.kt)("p",null,"A subject handles all of the operations regarding a certain topic that the observers subscribe to. These operations subscribe an observer to a certain topic, unsubscribe an observer from a certain topic, and notify observers about a certain topic when an event is published."),(0,s.kt)("p",null,"However, there is a variation of this pattern called the publisher/subscriber pattern, which I am going to use as an example in this section. The main difference between a classical observer pattern and the publisher/subscriber pattern is that publisher/subscriber promotes even more loose coupling then the observer pattern does."),(0,s.kt)("p",null,"In the observer pattern, the subject holds the references to the subscribed observers and calls methods directly from the objects themselves whereas, in the publisher/subscriber pattern, we have channels, which serve as a communication bridge between a subscriber and a publisher. The publisher fires an event and simply executes the callback function sent for that event."),(0,s.kt)("p",null,"I am going to display a short example of the publisher/subscriber pattern, but for those interested, a classic observer pattern example can be easily found online."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'var publisherSubscriber = {};\n\n// we send in a container object which will handle the subscriptions and publishings\n(function(container) {\n    // the id represents a unique subscription id to a topic\n    var id = 0;\n\n    // we subscribe to a specific topic by sending in\n    // a callback function to be executed on event firing\n    container.subscribe = function(topic, f) {\n        if (!(topic in container)) {\n          container[topic] = [];\n        }\n\n        container[topic].push({\n            "id": ++id,\n            "callback": f\n        });\n\n        return id;\n    }\n\n    // each subscription has its own unique ID, which we use\n    // to remove a subscriber from a certain topic\n    container.unsubscribe = function(topic, id) {\n        var subscribers = [];\n        for (var subscriber of container[topic]) {\n            if (subscriber.id !== id) {\n                subscribers.push(subscriber);\n            }\n        }\n        container[topic] = subscribers;\n    }\n\n    container.publish = function(topic, data) {\n        for (var subscriber of container[topic]) {\n            // when executing a callback, it is usually helpful to read\n            // the documentation to know which arguments will be\n            // passed to our callbacks by the object firing the event\n            subscriber.callback(data);\n        }\n    }\n\n})(publisherSubscriber);\n\nvar subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {\n    console.log("I am Bob\'s callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));\n});\n\nvar subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {\n    console.log("I am Bob\'s callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));\n});\n\nvar subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {\n    console.log("I am Alice\'s callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));\n});\n\n// NOTE: after publishing an event with its data, all of the\n// subscribed callbacks will execute and will receive\n// a data object from the object firing the event\n// there are 3 console.logs executed\npublisherSubscriber.publish("mouseClicked", {"data": "data1"});\npublisherSubscriber.publish("mouseHovered", {"data": "data2"});\n\n// we unsubscribe from an event by removing the subscription ID\npublisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);\n\n// there are 2 console.logs executed\npublisherSubscriber.publish("mouseClicked", {"data": "data1"});\npublisherSubscriber.publish("mouseHovered", {"data": "data2"});\n')),(0,s.kt)("p",null,"This design pattern is useful in situations when we need to perform multiple operations on a single event being fired. Imagine you have a scenario where we need to make multiple AJAX calls to a back-end service and then perform other AJAX calls depending on the result. You would have to nest the AJAX calls one within the other, possibly entering into a situation known as callback hell. Using the publisher/subscriber pattern is a much more elegant solution."),(0,s.kt)("p",null,"A downside to using this pattern is difficult testing of various parts of our system. There is no elegant way for us to know whether or not the subscribing parts of the system are behaving as expected."))}l.isMDXComponent=!0}}]);