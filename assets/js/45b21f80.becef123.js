"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[7408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},h),{},{components:n})):a.createElement(g,l({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},932:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,assets:()=>s,toc:()=>c,default:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Analyzing the performance of Javascript Methods",tags:["javascript","optimization"]},l=void 0,i={permalink:"/yogeshcodes/blog/performance-analyze-javascript-methods",source:"@site/blog/performance-analyze-javascript-methods.md",title:"Analyzing the performance of Javascript Methods",description:"Let's discuss the performance of Javascript built-in methods.",date:"2022-07-20T12:48:36.000Z",formattedDate:"July 20, 2022",tags:[{label:"javascript",permalink:"/yogeshcodes/blog/tags/javascript"},{label:"optimization",permalink:"/yogeshcodes/blog/tags/optimization"}],truncated:!1,authors:[],nextItem:{title:"Best Problem-Solving Approaches",permalink:"/yogeshcodes/blog/problem-solving-approaches"}},s={authorsImageUrls:[]},c=[{value:"<em>Things we are going to discuss in this blog:</em>",id:"things-we-are-going-to-discuss-in-this-blog",children:[],level:2},{value:"<strong>Objects</strong>",id:"objects",children:[{value:"<strong>Where can we use Objects?</strong>",id:"where-can-we-use-objects",children:[],level:3},{value:"<strong>What is the Big O of objects?</strong>",id:"what-is-the-big-o-of-objects",children:[],level:3},{value:"<strong>Big O Object Methods</strong>",id:"big-o-object-methods",children:[],level:3}],level:2},{value:"<strong>Arrays</strong>",id:"arrays",children:[{value:"<strong>Where can we use Arrays?</strong>",id:"where-can-we-use-arrays",children:[],level:3},{value:"<strong>What is the Big O of arrays?</strong>",id:"what-is-the-big-o-of-arrays",children:[],level:3}],level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's discuss the performance of Javascript built-in methods."),(0,r.kt)("h2",{id:"things-we-are-going-to-discuss-in-this-blog"},(0,r.kt)("em",{parentName:"h2"},"Things we are going to discuss in this blog:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Understand how objects and arrays work, through the lens of Big O."),(0,r.kt)("li",{parentName:"ol"},"Understand why adding elements to the start is slow."),(0,r.kt)("li",{parentName:"ol"},"Compare and contrast the runtime for arrays and objects, as well as built-in methods")),(0,r.kt)("h2",{id:"objects"},(0,r.kt)("strong",{parentName:"h2"},"Objects")),(0,r.kt)("p",null,"Objects are unordered key-value pairs. Means these object values not indexed like arrays. You giving a key name and key-value, it's stored that's it it will not be indexed. "),(0,r.kt)("h3",{id:"where-can-we-use-objects"},(0,r.kt)("strong",{parentName:"h3"},"Where can we use Objects?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When you don't need to order the elements with the index value. "),(0,r.kt)("li",{parentName:"ol"},"When you want to access/insert/remove the elements fastly.")),(0,r.kt)("p",null,"When you accessing the elements means you don't need to search through all the elements of the objects like arrays unless you already know what the exact key name!"),(0,r.kt)("h3",{id:"what-is-the-big-o-of-objects"},(0,r.kt)("strong",{parentName:"h3"},"What is the Big O of objects?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insertion => O(1) - Ex: obj",'["name"]',' = "John";'),(0,r.kt)("li",{parentName:"ol"},"Removal => O(1)"),(0,r.kt)("li",{parentName:"ol"},"Searching => O(n) - Ex: Object.keys(obj);"),(0,r.kt)("li",{parentName:"ol"},"Access => O(1) - Ex: obj",'["name"]',";")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you don't want to order elements Objects are well performant.")),(0,r.kt)("h3",{id:"big-o-object-methods"},(0,r.kt)("strong",{parentName:"h3"},"Big O Object Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object.keys -   O(N)"),(0,r.kt)("li",{parentName:"ul"},"Object.values -   O(N)"),(0,r.kt)("li",{parentName:"ul"},"Object.entries -   O(N)"),(0,r.kt)("li",{parentName:"ul"},"hasOwnProperty -   O(1)")),(0,r.kt)("h2",{id:"arrays"},(0,r.kt)("strong",{parentName:"h2"},"Arrays")),(0,r.kt)("p",null,"Arrays are ordered list. By default, arrays will order the elements with ascending order when inserting anything."),(0,r.kt)("p",null,'Ex: let values = [true, {}, [], 2, "awesome"];'),(0,r.kt)("h3",{id:"where-can-we-use-arrays"},(0,r.kt)("strong",{parentName:"h3"},"Where can we use Arrays?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When you want to list elements in the order. "),(0,r.kt)("li",{parentName:"ol"},"When you want fast access/insertion and removal (with some limitations)")),(0,r.kt)("h3",{id:"what-is-the-big-o-of-arrays"},(0,r.kt)("strong",{parentName:"h3"},"What is the Big O of arrays?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inserting"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The performance of the arrays depends on how you inserting the value. "),(0,r.kt)("li",{parentName:"ul"},"If you insert at the end of the array. The Big O is O(1). Since it's not changing the order of the array. ",(0,r.kt)("strong",{parentName:"li"},"Ex: ","[3, 4]",".push(2)")),(0,r.kt)("li",{parentName:"ul"},"If you insert at the beginning of the array. The Big O is O(n). Since it's changing the order of the whole array. Changing the order of the whole array means you can say I'm just inserting the value in arr","[0]",". But what really happens is the previous value stored in arr","[0]"," will move arr","[1]"," similar to all the values. ",(0,r.kt)("strong",{parentName:"li"},"Ex: ","[1, 3, 4]",".shift(2)")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Removal "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Same as inserting."),(0,r.kt)("li",{parentName:"ul"},"Remove the end of the array value is O(1). ",(0,r.kt)("strong",{parentName:"li"},"Ex: ","[3,4]",".pop()")),(0,r.kt)("li",{parentName:"ul"},"Remove the beginning value is costliest O(n). ",(0,r.kt)("strong",{parentName:"li"},"Ex: ","[3,4]",".unShift()"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Searching ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Searching an element is O(n). Since we should loop through all the elements of the array to search a particular. No matter we found the element at the beginning or middle. Cumulatively we can consider it as an O(n). ",(0,r.kt)("strong",{parentName:"li"},"Ex: ","[2,3,4]",".find(value => value === 3)"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Accessing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accessing an element is O(n). You should know the exact index value of the element to access. ",(0,r.kt)("strong",{parentName:"li"},"Ex: arr","[3]"))),(0,r.kt)("p",null,"The basic array operations we are using daily still there are so many operations we not covering those in this blog. "),(0,r.kt)("p",null,"concat -   O(N)\nslice -   O(N)\nsplice -   O(N)\nsort -   O(N * log N)\nforEach/map/filter/reduce/etc. -   O(N)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that! We'll discuss in coming articles. ")),(0,r.kt)("p",null,"Thanks for reading. See you in the next blog soon."))}u.isMDXComponent=!0}}]);