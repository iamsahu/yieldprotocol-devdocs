"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7268],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=l,d=s["".concat(p,".").concat(k)]||s[k]||N[k]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return N}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r={},o="Naming Conventions",p={unversionedId:"v2/naming-convention",id:"v2/naming-convention",isDocsHomePage:!1,title:"Naming Conventions",description:"&nbsp;",source:"@site/docs/developers/v2/naming-convention.md",sourceDirName:"v2",slug:"/v2/naming-convention",permalink:"/yearn-devdocs/developers/v2/naming-convention",tags:[],version:"current",lastUpdatedBy:"Facu",lastUpdatedAt:1637222449,formattedLastUpdatedAt:"11/18/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Emergency Procedures for Yearn Finance",permalink:"/yearn-devdocs/developers/v2/EMERGENCY"}},m=[{value:"yVaults",id:"yvaults",children:[{value:"Dev Cheat Sheet (Examples)",id:"dev-cheat-sheet-examples",children:[]},{value:"Overview and Explanation",id:"overview-and-explanation",children:[]}]},{value:"yVault Want Token",id:"yvault-want-token",children:[]},{value:"yUSD",id:"yusd",children:[]},{value:"yEarn",id:"yearn",children:[]},{value:"Test Products",id:"test-products",children:[]},{value:"Future Products",id:"future-products",children:[]}],u={toc:m};function N(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("h2",{id:"yvaults"},"yVaults"),(0,i.kt)("h3",{id:"dev-cheat-sheet-examples"},"Dev Cheat Sheet (Examples)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vanilla ERC20 tokens"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"USDC yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUSDC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"aLINK yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvaLINK")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LP positions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Curve"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-Y"),". We make an exception for the last one and call it ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uniswap"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),(0,i.kt)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balancer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SushiSwap"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Experimental"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No hard rules for ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"symbol"),", just be sure to end ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),' with "yVault".',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yveCRV-DAO yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yveCRV-DAO"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"St. Banteg of Yearn Patron of Plebs Lido St. Ether yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sboypoplyvstETH"))))))),(0,i.kt)("h3",{id:"overview-and-explanation"},"Overview and Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Acceptable alternative names include Yearn Vaults, or informally referring to the product as vaults."),(0,i.kt)("li",{parentName:"ul"},"When referring to a specific yVault, the preferred name is generally ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN + yVault"),"; this matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," field on the yVault contract. However, it is also acceptable to use ",(0,i.kt)("inlineCode",{parentName:"li"},"yvTOKEN + Vault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Yearn + TOKEN + Vault")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"yvTOKEN"),"; the latter matches ",(0,i.kt)("inlineCode",{parentName:"li"},"symbol")," in the contract.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"DAI yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvDAI Vault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Yearn DAI Vault"),", or simply ",(0,i.kt)("inlineCode",{parentName:"li"},"yvDAI")))),(0,i.kt)("li",{parentName:"ul"},"For each yVault, name and symbol conventions are as follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override")))),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," field is included in the token contract to correspond to the major yVault release version.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Additionally, developers may find it useful to denote ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," within the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," field itself to help clarify the token to be deposited. Useful examples include Uniswap LPs (below), and also v1 vs v2 Aave aTokens."))),(0,i.kt)("li",{parentName:"ul"},"The predominant use case for name and symbol override is for LP tokens. The use of the term ",(0,i.kt)("inlineCode",{parentName:"li"},"Pool")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"LP")," is interchangeable, and will be selected based on colloquial use for each protocol.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For instance, Curve and Balancer LP positions are typically referred to as pools since they can contain more than two tokens, while Uniswap and SushiSwap positions are typically referred to as LPs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Curve"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")),(0,i.kt)("li",{parentName:"ul"},"In this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",(0,i.kt)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")))),(0,i.kt)("li",{parentName:"ul"},"Note: In this methodology, ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")," refers to the vault previously known as ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD"),". Please see below for a more detailed discussion on proper use of ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uniswap"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),(0,i.kt)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balancer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))),(0,i.kt)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SushiSwap"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH"))))))))),(0,i.kt)("h2",{id:"yvault-want-token"},"yVault Want Token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Yearn's UI, it may be useful to denote the desired token to deposit into a specific yVault. For basic ERC20 ",(0,i.kt)("inlineCode",{parentName:"li"},"want")," tokens, ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"symbol")," can be pulled directly from the token contract and utilized as-is.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"USD Coin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"USDC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainLink Token"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"LINK")))),(0,i.kt)("li",{parentName:"ul"},"However, for LP positions, naming needs to be standardized.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Curve",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve 3pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve Y Pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Curve Compound Pool")),(0,i.kt)("li",{parentName:"ul"},"In this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",(0,i.kt)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"crvPOOL or override"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"crvBUSD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crvCOMP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crvGUSD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crvMUSD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crvTBTC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"crvSBTC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yCRV"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3Crv")))),(0,i.kt)("li",{parentName:"ul"},"These names were chosen as ",(0,i.kt)("inlineCode",{parentName:"li"},"crvBUSD")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"crvSBTC")," are already fairly widely used, and applying this formula works well for other pools. ",(0,i.kt)("inlineCode",{parentName:"li"},"yCRV")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"3Crv")," are the allowed exceptions, as ",(0,i.kt)("inlineCode",{parentName:"li"},"yCRV")," is the most widely used name for that pool, and ",(0,i.kt)("inlineCode",{parentName:"li"},"3Crv")," usage is now fairly common with the recent admin fee distribution."))),(0,i.kt)("li",{parentName:"ul"},"Uniswap",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN UNI"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"USDT-WETH UNI"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WBTC-WETH UNI")))))),(0,i.kt)("li",{parentName:"ul"},"Balancer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN BPT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"USDT-WETH BPT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WBTC-WETH BPT")))),(0,i.kt)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),(0,i.kt)("li",{parentName:"ul"},"SushiSwap",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN SLP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"USDT-WETH SLP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WBTC-WETH SLP"))))))))),(0,i.kt)("h2",{id:"yusd"},"yUSD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While the term ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD")," was used to refer to the Curve Y Pool yVault in the past, under our updated naming convention this vault token is now ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-Y"),". However, usage of ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD")," is still permissable when referring to the asset itself.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example:")," Yearn pays monthly grants in ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))),(0,i.kt)("li",{parentName:"ul"},"In the future, if Yearn creates a new ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD")," that is a collection of several yVault tokens (as has been previously discussed), then the current ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD")," will simply be referred to as ",(0,i.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")," and only the new token will be ",(0,i.kt)("inlineCode",{parentName:"li"},"yUSD"),".")),(0,i.kt)("h2",{id:"yearn"},"yEarn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These are Yearn's original yield-aware tokens, whose v2 and v3 contracts can be found ",(0,i.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/developers/deployed-contracts-registry#v2-yield-tokens"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"These products should be referred to as yEarn Tokens, ",(0,i.kt)("inlineCode",{parentName:"li"},"underlying token name + Earn"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"y{token.symbol()}v${self.version()}"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"yDAIv2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yDAI Earn"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yBUSDv3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yBUSD Earn"))))),(0,i.kt)("h2",{id:"test-products"},"Test Products"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For deployed contracts that have not reached their final production version, a simple modification is included to designate these on the contract level as being test products.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override + Test + Product")),(0,i.kt)("li",{parentName:"ul"},"Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"yt${token.symbol()} or override")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"DAI Test yVault"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ytDAI")))),(0,i.kt)("li",{parentName:"ul"},"Additionally, the v2 yVault contracts have upgradeable ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"symbol")," fields. This means that should a test contract perform well, these fields can be updated to reflect that it is no longer a test contract, removing the need to deploy new contracts.")),(0,i.kt)("h2",{id:"future-products"},"Future Products"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Future products can follow a simple naming convention: ",(0,i.kt)("inlineCode",{parentName:"li"},"y + product"),", where the product and any potential token names follow similar guidelines as above with yVaults. These can then be further modified as needed based on the product","(","s",")",".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Examples:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ySwap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yBorrow"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yTrade"))))))}N.isMDXComponent=!0}}]);