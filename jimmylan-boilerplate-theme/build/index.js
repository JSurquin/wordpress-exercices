!function(){"use strict";var e={n:function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},d:function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},n=window.wp.element,t=window.React,r=window.ReactDOM,o=e.n(r);new class{constructor(e){this.name=e,this.greet()}greet(){console.log(`Hello, my name is ${this.name}.`)}}("Jimmylan"),o().render((0,n.createElement)((function(){const[e,r]=(0,t.useState)(0);return(0,n.createElement)("div",{className:"example-react-component",onClick:()=>r((e=>e+1))},(0,n.createElement)("p",null,"allons sur mon blog"),(0,n.createElement)("a",{href:"/mon-blog"},"Mon blog"),(0,n.createElement)("p",null,"je n'avais pas compris"))}),null),document.querySelector("#render-react-example-here"))}();