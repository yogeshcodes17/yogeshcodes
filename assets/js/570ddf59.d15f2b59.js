"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[8969],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3485:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>c,toc:()=>l,default:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={id:"connected-senses",title:"Connected Senses Project"},a=void 0,c={unversionedId:"connected-senses",id:"connected-senses",title:"Connected Senses Project",description:"A sample post with markdown.",source:"@site/docs/ConnectedSensesShowcase.md",sourceDirName:".",slug:"/connected-senses",permalink:"/yogeshcodes/connected-senses",tags:[],version:"current",frontMatter:{id:"connected-senses",title:"Connected Senses Project"}},l=[{value:"Inline Highlighting",id:"inline-highlighting",children:[],level:2},{value:"Code Blocks",id:"code-blocks",children:[],level:2}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A sample post with markdown."),(0,o.kt)("h2",{id:"inline-highlighting"},"Inline Highlighting"),(0,o.kt)("p",null,"Sample of inline highlighting ",(0,o.kt)("inlineCode",{parentName:"p"},"sum = parseInt(num1) + parseInt(num2)")),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Some Javascript code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var num1, num2, sum\nnum1 = prompt('Enter first number')\nnum2 = prompt('Enter second number')\nsum = parseInt(num1) + parseInt(num2) // \"+\" means \"add\"\nalert('Sum = ' + sum) // \"+\" means combine into a string\n")),(0,o.kt)("p",null,"Some Python code \ud83d\udc0d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def fib():\n    a, b = 0, 1\n    while True:            # First iteration:\n        yield a            # yield 0 to start with and then\n        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)\n\nfor index, fibonacci_number in zip(range(10), fib()):\n     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))\n")))}u.isMDXComponent=!0}}]);