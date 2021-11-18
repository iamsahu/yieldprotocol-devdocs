"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8608:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i={},o=void 0,c={unversionedId:"smart-contracts/yToken",id:"version-0.3.5/smart-contracts/yToken",isDocsHomePage:!1,title:"yToken",description:"Functions",source:"@site/versioned_docs/version-0.3.5/smart-contracts/yToken.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/yToken",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/yToken",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.5/smart-contracts/yToken.md",tags:[],version:"0.3.5",frontMatter:{},sidebar:"version-0.3.5/mySidebar",previous:{title:"Vault.vy",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/vault"},next:{title:"yWETH",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/yWETH"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"name",id:"name",children:[]},{value:"symbol",id:"symbol",children:[]},{value:"decimals",id:"decimals",children:[]},{value:"totalSupply",id:"totalsupply",children:[]},{value:"balanceOf",id:"balanceof",children:[]},{value:"_transfer",id:"_transfer",children:[]},{value:"transfer",id:"transfer",children:[]},{value:"_approve",id:"_approve",children:[]},{value:"approve",id:"approve",children:[]},{value:"transferFrom",id:"transferfrom",children:[]},{value:"increaseAllowance",id:"increaseallowance",children:[]},{value:"decreaseAllowance",id:"decreaseallowance",children:[]},{value:"deposit",id:"deposit",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"_permitAll",id:"_permitall",children:[]},{value:"permitAll",id:"permitall",children:[]},{value:"migrate",id:"migrate",children:[]},{value:"migrate",id:"migrate-1",children:[]},{value:"migrate",id:"migrate-2",children:[]},{value:"migrate",id:"migrate-3",children:[]},{value:"migrate",id:"migrate-4",children:[]},{value:"migrate",id:"migrate-5",children:[]},{value:"revokeAll",id:"revokeall",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function symbol(\n  ) external returns (string)\n")),(0,l.kt)("h3",{id:"decimals"},"decimals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decimals(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"totalsupply"},"totalSupply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalSupply(\n  ) external returns (uint256 total)\n")),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOf(\n  ) external returns (uint256 balance)\n")),(0,l.kt)("h3",{id:"_transfer"},"_transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _transfer(\n  ) internal\n")),(0,l.kt)("h3",{id:"transfer"},"transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transfer(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"_approve"},"_approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _approve(\n  ) internal\n")),(0,l.kt)("h3",{id:"approve"},"approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function approve(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"transferfrom"},"transferFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferFrom(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"increaseallowance"},"increaseAllowance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function increaseAllowance(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"decreaseallowance"},"decreaseAllowance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decreaseAllowance(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"deposit"},"deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"_permitall"},"_permitAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _permitAll(\n  ) internal\n")),(0,l.kt)("h3",{id:"permitall"},"permitAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function permitAll(\n  ) public\n")),(0,l.kt)("h3",{id:"migrate"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-1"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-2"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-3"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-4"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-5"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"revokeall"},"revokeAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeAll(\n  ) external\n")))}d.isMDXComponent=!0}}]);