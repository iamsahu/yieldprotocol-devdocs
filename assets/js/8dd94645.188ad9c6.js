"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2032],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7215:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i={},o=void 0,l={unversionedId:"smart-contracts/test/TestGuestList",id:"version-0.3.2/smart-contracts/test/TestGuestList",isDocsHomePage:!1,title:"TestGuestList",description:"A basic guest list contract for testing.",source:"@site/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestGuestList",permalink:"/yearn-devdocs/vaults/0.3.2/smart-contracts/test/TestGuestList",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.2/smart-contracts/test/TestGuestList.md",tags:[],version:"0.3.2",frontMatter:{},sidebar:"version-0.3.2/mySidebar",previous:{title:"Registry.vy",permalink:"/yearn-devdocs/vaults/0.3.2/smart-contracts/registry"},next:{title:"TestStrategy",permalink:"/yearn-devdocs/vaults/0.3.2/smart-contracts/test/TestStrategy"}},c=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setGuests",id:"setguests",children:[]},{value:"authorized",id:"authorized",children:[]}]}],u={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A basic guest list contract for testing."),(0,s.kt)("p",null,"For a Vyper implementation of this contract containing additional\nfunctionality, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy"},"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,s.kt)("p",null,"Create the test guest list, setting the message sender as\n",(0,s.kt)("inlineCode",{parentName:"p"},"bouncer"),"."),(0,s.kt)("p",null,"Note that since this is just for testing, you're unable to change\n",(0,s.kt)("inlineCode",{parentName:"p"},"bouncer"),"."),(0,s.kt)("h3",{id:"setguests"},"setGuests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setGuests(\n    address[] _guests,\n    bool[] _invited\n  ) external\n")),(0,s.kt)("p",null,"Invite guests or kick them from the party."),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_guests")),(0,s.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The guests to add or update.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_invited")),(0,s.kt)("td",{parentName:"tr",align:"left"},"bool[]"),(0,s.kt)("td",{parentName:"tr",align:"left"},"A flag for each guest at the matching index, inviting or")))),(0,s.kt)("p",null,"uninviting the guest."),(0,s.kt)("h3",{id:"authorized"},"authorized"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"  function authorized(\n    address _guest,\n    uint256 _amount\n  ) external returns (bool)\n")),(0,s.kt)("p",null,"Check if a guest with a bag of a certain size is allowed into\nthe party."),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"_amount")," isn't checked to keep test setup simple, since\nfrom the vault tests' perspective this is a pass/fail call anyway."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_guest")),(0,s.kt)("td",{parentName:"tr",align:"left"},"address"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The guest's address to check.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"_amount")),(0,s.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Not used. The amount of tokens the guest is bringing.")))))}p.isMDXComponent=!0}}]);