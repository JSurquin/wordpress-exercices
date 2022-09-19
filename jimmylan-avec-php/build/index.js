!function(){"use strict";var e,t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},n=window.wp.element,r=window.React;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));var l="beforeunload";function o(e){e.preventDefault(),e.returnValue=""}function u(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function i(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const c=(0,r.createContext)(null),s=(0,r.createContext)(null),h=(0,r.createContext)({outlet:null,matches:[]});function p(e,t){if(!e)throw new Error(t)}function f(e,t,n){void 0===n&&(n="/");let r=w(("string"==typeof t?i(t):t).pathname||"/",n);if(null==r)return null;let a=d(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let l=null;for(let e=0;null==l&&e<a.length;++e)l=E(a[e],r);return l}function d(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,a)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||p(!1),l.relativePath=l.relativePath.slice(r.length));let o=b([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&p(!1),d(e.children,t,u,o)),(null!=e.path||e.index)&&t.push({path:o,score:g(o,e.index),routesMeta:u})})),t}const m=/^:\w+$/,v=e=>"*"===e;function g(e,t){let n=e.split("/"),r=n.length;return n.some(v)&&(r+=-2),t&&(r+=2),n.filter((e=>!v(e))).reduce(((e,t)=>e+(m.test(t)?3:""===t?1:10)),r)}function E(e,t){let{routesMeta:n}=e,r={},a="/",l=[];for(let e=0;e<n.length;++e){let o=n[e],u=e===n.length-1,i="/"===a?t:t.slice(a.length)||"/",c=y({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},i);if(!c)return null;Object.assign(r,c.params);let s=o.route;l.push({params:r,pathname:b([a,c.pathname]),pathnameBase:P(b([a,c.pathnameBase])),route:s}),"/"!==c.pathnameBase&&(a=b([a,c.pathnameBase]))}return l}function y(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));return e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=u[n]||"";o=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(u[n]||""),e}),{}),pathname:l,pathnameBase:o,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const b=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function x(){return null!=(0,r.useContext)(s)}function S(e){p(!1)}function j(t){let{basename:n="/",children:a=null,location:l,navigationType:o=e.Pop,navigator:u,static:h=!1}=t;x()&&p(!1);let f=P(n),d=(0,r.useMemo)((()=>({basename:f,navigator:u,static:h})),[f,u,h]);"string"==typeof l&&(l=i(l));let{pathname:m="/",search:v="",hash:g="",state:E=null,key:y="default"}=l,b=(0,r.useMemo)((()=>{let e=w(m,f);return null==e?null:{pathname:e,search:v,hash:g,state:E,key:y}}),[f,m,v,g,E,y]);return null==b?null:(0,r.createElement)(c.Provider,{value:d},(0,r.createElement)(s.Provider,{children:a,value:{location:b,navigationType:o}}))}function $(e){let{children:t,location:n}=e;return function(e,t){x()||p(!1);let{matches:n}=(0,r.useContext)(h),a=n[n.length-1],l=a?a.params:{},o=(a&&a.pathname,a?a.pathnameBase:"/");a&&a.route;let u,c=(x()||p(!1),(0,r.useContext)(s).location);if(t){var d;let e="string"==typeof t?i(t):t;"/"===o||(null==(d=e.pathname)?void 0:d.startsWith(o))||p(!1),u=e}else u=c;let m=u.pathname||"/",v=f(e,{pathname:"/"===o?m:m.slice(o.length)||"/"});return function(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,a,l)=>(0,r.createElement)(h.Provider,{children:void 0!==a.route.element?a.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,l+1))}})),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:b([o,e.pathname]),pathnameBase:"/"===e.pathnameBase?o:b([o,e.pathnameBase])}))),n)}(O(t),n)}function O(e){let t=[];return r.Children.forEach(e,(e=>{if(!(0,r.isValidElement)(e))return;if(e.type===r.Fragment)return void t.push.apply(t,O(e.props.children));e.type!==S&&p(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=O(e.props.children)),t.push(n)})),t}function C(t){let{basename:n,children:c,window:s}=t,h=(0,r.useRef)();null==h.current&&(h.current=function(t){void 0===t&&(t={});var n=t.window,r=void 0===n?document.defaultView:n,c=r.history;function s(){var e=r.location,t=e.pathname,n=e.search,a=e.hash,l=c.state||{};return[l.idx,{pathname:t,search:n,hash:a,state:l.usr||null,key:l.key||"default"}]}var h=null;r.addEventListener("popstate",(function(){if(h)g.call(h),h=null;else{var t=e.Pop,n=s(),r=n[0],a=n[1];if(g.length){if(null!=r){var l=d-r;l&&(h={action:t,location:a,retry:function(){x(-1*l)}},x(l))}}else P(t)}}));var p=e.Pop,f=s(),d=f[0],m=f[1],v=u(),g=u();function E(e){return"string"==typeof e?e:function(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,a=void 0===r?"":r,l=e.hash,o=void 0===l?"":l;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(n+="#"===o.charAt(0)?o:"#"+o),n}(e)}function y(e,t){return void 0===t&&(t=null),a({pathname:m.pathname,hash:"",search:""},"string"==typeof e?i(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function w(e,t){return[{usr:e.state,key:e.key,idx:t},E(e)]}function b(e,t,n){return!g.length||(g.call({action:e,location:t,retry:n}),!1)}function P(e){p=e;var t=s();d=t[0],m=t[1],v.call({action:p,location:m})}function x(e){c.go(e)}null==d&&(d=0,c.replaceState(a({},c.state,{idx:d}),""));var S={get action(){return p},get location(){return m},createHref:E,push:function t(n,a){var l=e.Push,o=y(n,a);if(b(l,o,(function(){t(n,a)}))){var u=w(o,d+1),i=u[0],s=u[1];try{c.pushState(i,"",s)}catch(e){r.location.assign(s)}P(l)}},replace:function t(n,r){var a=e.Replace,l=y(n,r);if(b(a,l,(function(){t(n,r)}))){var o=w(l,d),u=o[0],i=o[1];c.replaceState(u,"",i),P(a)}},go:x,back:function(){x(-1)},forward:function(){x(1)},listen:function(e){return v.push(e)},block:function(e){var t=g.push(e);return 1===g.length&&r.addEventListener(l,o),function(){t(),g.length||r.removeEventListener(l,o)}}};return S}({window:s}));let p=h.current,[f,d]=(0,r.useState)({action:p.action,location:p.location});return(0,r.useLayoutEffect)((()=>p.listen(d)),[p]),(0,r.createElement)(j,{basename:n,children:c,location:f.location,navigationType:f.action,navigator:p})}var k=function(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{fetch("http://localhost:8080/wp-json/wp/v2/posts").then((e=>e.json().then((e=>t(e)))))}),[]),(0,n.createElement)("div",null,(0,n.createElement)("ul",null,e.map((e=>(0,n.createElement)("li",null," ",(0,n.createElement)("a",{href:`/blog/${null==e?void 0:e.slug}`},null==e?void 0:e.title.rendered)," ")))))},M=function(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{fetch("http://localhost:8080/wp-json/wp/v2/pages").then((e=>e.json().then((e=>t(e)))))}),[]),(0,n.createElement)("div",{className:"example-react-component"},(0,n.createElement)("ul",null,(0,n.createElement)("a",{style:{color:"white"},href:"/"},"Accueil"),null==e?void 0:e.map((e=>(0,n.createElement)("li",null," ",(0,n.createElement)("a",{style:{color:"white"},href:"http://localhost:8080/"+e.slug},e.title.rendered)," ")))))},B=function(){return(0,n.createElement)("div",null,(0,n.createElement)("ul",null,"vous êtes sur la page d'accueil    "))},R=function(){var e,t;const[a,l]=(0,r.useState)(),o=function(){let{matches:e}=(0,r.useContext)(h),t=e[e.length-1];return t?t.params:{}}();return(0,r.useEffect)((()=>{fetch(`http://localhost:8080/wp-json/wp/v2/posts/?slug=${o.slug}`).then((e=>e.json().then((e=>l(e)))))}),[]),(0,n.createElement)("div",{style:{background:"red"}},(null==a?void 0:a.length)&&(0,n.createElement)("p",{dangerouslySetInnerHTML:{__html:null===(e=a[0])||void 0===e||null===(t=e.content)||void 0===t?void 0:t.rendered}}))},L=window.ReactDOM;t.n(L)().render((0,n.createElement)((()=>(0,n.createElement)(C,null,(0,n.createElement)(M,null),(0,n.createElement)($,null,(0,n.createElement)(S,{path:"/",element:(0,n.createElement)(B,null)}),(0,n.createElement)(S,{path:"/boutique"},(0,n.createElement)(S,{path:":slug",element:(0,n.createElement)(R,null)})),(0,n.createElement)(S,{path:"/mon-blog",element:(0,n.createElement)(k,null)})))),null),document.querySelector("#notre_theme_wordpress"))}();