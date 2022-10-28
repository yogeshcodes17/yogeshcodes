"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[3297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2737:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>l,assets:()=>c,toc:()=>s,default:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"Recursion in daily programming!",tags:[]},a=void 0,l={permalink:"/yogeshcodes/blog/recursion-daily-practicing",source:"@site/blog/recursion-daily-practicing.md",title:"Recursion in daily programming!",description:"We may use recursion in daily programming without knowing.",date:"2022-07-20T12:48:36.000Z",formattedDate:"July 20, 2022",tags:[],truncated:!1,authors:[],prevItem:{title:"Problem Solving Patterns",permalink:"/yogeshcodes/blog/problem-solving-patterns"},nextItem:{title:"Solid Principles with React",permalink:"/yogeshcodes/blog/solid-principles-react"}},c={authorsImageUrls:[]},s=[{value:"<strong>What is recursion?</strong>",id:"what-is-recursion",children:[{value:"Still confused?",id:"still-confused",children:[],level:3}],level:2},{value:"<strong>Where we can use it?</strong>",id:"where-we-can-use-it",children:[{value:"<strong>Another Example</strong>",id:"another-example",children:[],level:3}],level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We may use recursion in daily programming without knowing.\nI will explain what recursion is and where can we use it. Keep reading!"),(0,i.kt)("h2",{id:"what-is-recursion"},(0,i.kt)("strong",{parentName:"h2"},"What is recursion?")),(0,i.kt)("p",null,"In layman terms, when we doing the same task repeatedly we can call it a recursive task. In programming terms, when a function calls a function itself to do the task and it's going iteratively to complete. It's called recursion."),(0,i.kt)("h3",{id:"still-confused"},"Still confused?"),(0,i.kt)("p",null,"Okay, take one example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function findCorrectObject(arr, id) {\n   if(arr[arr.length].id === id) {\n     return arr[arr.legth];\n   } else if(arr.length === 0) {\n     return "Not found!";\n   } else {\n     arr.pop();\n     findCorrectObject(arr, id);\n   }\n}\nfindCorrectObject([{id: "3434343", title: "title 1"}, {id: "45454565", title: "title 2"}], "3434343");\n')),(0,i.kt)("p",null,"In this example, we finding the correct element from the array. As you see we called the same function with the required params. This is recursion. It'll run till it finds the correct object or the till the array will empty. "),(0,i.kt)("p",null,"Simple right?"),(0,i.kt)("h2",{id:"where-we-can-use-it"},(0,i.kt)("strong",{parentName:"h2"},"Where we can use it?")),(0,i.kt)("p",null,"In javascript, recursion taking a huge place. In so many scenarios we can use the recursion. Example: JSON.parse / JSON.stringify"),(0,i.kt)("p",null,"If you look inside the code of __deep() in lodash library it uses the same recursion. I'm telling deep cloning means in javascript if assign an object to a variable it'll shallow copy it'll not a deep copy. This means when you changed the new object created with the existing one it'll also change the existing one. "),(0,i.kt)("p",null,"We can use recursion to solve that problem. "),(0,i.kt)("p",null,"Here is the code for deep copy of an object! Don't get fear about huge code. I'll explain what it actually will do. Read the code carefully!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function clone(item) {\n  if (!item) {\n    return item;\n  } // null, undefined values check\n\n  var types = [Number, String, Boolean],\n    result;\n\n  // normalizing primitives if someone did new String(\'aaa\'), or new Number(\'444\');\n  types.forEach(function(type) {\n    if (item instanceof type) {\n      result = type(item); // Yeah, we used recursion here! To find the exact primitive\n    }\n  });\n  \n  // If the result is still undefined. The item should be an Object or Array\n  if (typeof result == "undefined") { \n    if (Object.prototype.toString.call(item) === "[object Array]") {\n      result = [];\n      // If the item is array, we call the same function to deep clone each values. Yes it is recursion.\n      item.forEach(function(child, index, array) {\n        result[index] = clone(child);\n      });\n    } else if (typeof item == "object") {\n      // testing that this is DOM\n      if (item.nodeType && typeof item.cloneNode == "function") {\n        result = item.cloneNode(true);\n      } else if (!item.prototype) {\n        // check that this is a literal\n        if (item instanceof Date) {\n          result = new Date(item);\n        } else {\n          // it is an object literal\n          result = {};\n          for (var i in item) {\n            result[i] = clone(item[i]);\n          }\n        }\n      } else {\n        // depending what you would like here,\n        // just keep the reference, or create new object\n        if (false && item.constructor) {\n          // would not advice to do that, reason? Read below\n          result = new item.constructor();\n        } else {\n          result = item;\n        }\n      }\n    } else {\n      result = item;\n    }\n  }\n\n  return result;\n}\n\nvar copy = clone({\n  one: {\n    "one-one": new String("hello"),\n    "one-two": ["one", "two", true, "four"]\n  },\n  two: document.createElement("div"),\n  three: [\n    {\n      name: "three-one",\n      number: new Number("100"),\n      obj: new (function() {\n        this.name = "Object test";\n      })()\n    }\n  ]\n});\n')),(0,i.kt)("h3",{id:"another-example"},(0,i.kt)("strong",{parentName:"h3"},"Another Example")),(0,i.kt)("p",null,"If you think the previous example is too much, here I took one famous problem to explain recursion. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function calculateFactorial(num) {\n  if(num === 1) return 1;\n  return num * calculateFactorial(num - 1);\n}\n\ncalculateFactorial(5);\n")),(0,i.kt)("p",null,"In this function, the calculateFactorial will call a total of 5 times to complete the problem. Whenever the calculateFactorial(num - 1) function call it'll create the separate function stack and the previous function will wait till the current function resolves. Likewise, the new function will be called in runtime until it returns 1. "),(0,i.kt)("p",null,"I recently used recursion in my project. I currently working with reactJS. So it'll better if explain the real-life scenario. We had one problem, the user need to select the children of the parent in the dropdown. And the children might have another child. Likewise the data will grove. I used this ",(0,i.kt)("a",{parentName:"p",href:"https://dowjones.github.io/react-dropdown-tree-select/#/story/with-material-design-styles"},"library")," to solve the particular problem."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s5.gifyu.com/images/recursion-example.gif",alt:null})),(0,i.kt)("p",null,"I immensely used recursion inside. Because each object might have another set of object and I need to go through all the phases until I reach the final object without another child. "),(0,i.kt)("p",null,"Recursion solving so many problems that loops cannot solve. And also the code will be cleaner and optimized. "),(0,i.kt)("p",null,"Thanks for reading!!"))}p.isMDXComponent=!0}}]);