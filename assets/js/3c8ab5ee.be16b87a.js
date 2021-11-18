"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[348],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},584:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l={},o=void 0,c={unversionedId:"smart-contracts/BaseWrapper",id:"version-0.3.5/smart-contracts/BaseWrapper",isDocsHomePage:!1,title:"BaseWrapper",description:"Functions",source:"@site/versioned_docs/version-0.3.5/smart-contracts/BaseWrapper.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/BaseWrapper",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/BaseWrapper",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.5/smart-contracts/BaseWrapper.md",tags:[],version:"0.3.5",frontMatter:{},sidebar:"version-0.3.5/mySidebar",previous:{title:"BaseStrategyInitializable",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/BaseStrategyInitializable"},next:{title:"IWETH",permalink:"/yearn-devdocs/vaults/0.3.5/smart-contracts/IWETH"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setRegistry",id:"setregistry",children:[]},{value:"bestVault",id:"bestvault",children:[]},{value:"allVaults",id:"allvaults",children:[]},{value:"_updateVaultCache",id:"_updatevaultcache",children:[]},{value:"totalVaultBalance",id:"totalvaultbalance",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"_deposit",id:"_deposit",children:[]},{value:"_withdraw",id:"_withdraw",children:[]},{value:"_migrate",id:"_migrate",children:[]},{value:"_migrate",id:"_migrate-1",children:[]},{value:"_migrate",id:"_migrate-2",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,i.kt)("h3",{id:"setregistry"},"setRegistry"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setRegistry(\n  ) external\n")),(0,i.kt)("h3",{id:"bestvault"},"bestVault"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function bestVault(\n  ) public returns (contract VaultAPI)\n")),(0,i.kt)("h3",{id:"allvaults"},"allVaults"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function allVaults(\n  ) public returns (contract VaultAPI[])\n")),(0,i.kt)("h3",{id:"_updatevaultcache"},"_updateVaultCache"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _updateVaultCache(\n  ) internal\n")),(0,i.kt)("h3",{id:"totalvaultbalance"},"totalVaultBalance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalVaultBalance(\n  ) public returns (uint256 balance)\n")),(0,i.kt)("h3",{id:"totalassets"},"totalAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalAssets(\n  ) public returns (uint256 assets)\n")),(0,i.kt)("h3",{id:"_deposit"},"_deposit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _deposit(\n  ) internal returns (uint256 deposited)\n")),(0,i.kt)("h3",{id:"_withdraw"},"_withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _withdraw(\n  ) internal returns (uint256 withdrawn)\n")),(0,i.kt)("h3",{id:"_migrate"},"_migrate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),(0,i.kt)("h3",{id:"_migrate-1"},"_migrate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),(0,i.kt)("h3",{id:"_migrate-2"},"_migrate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256 migrated)\n")))}d.isMDXComponent=!0}}]);