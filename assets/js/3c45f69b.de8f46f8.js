"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[9591],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||l;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7431:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i={},o="Deploying a Vault and Strategy V2",s={unversionedId:"v2/DEPLOYMENT",id:"v2/DEPLOYMENT",isDocsHomePage:!1,title:"Deploying a Vault and Strategy V2",description:"Note: This repo is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions.",source:"@site/docs/developers/v2/DEPLOYMENT.md",sourceDirName:"v2",slug:"/v2/DEPLOYMENT",permalink:"/yearn-devdocs/developers/v2/DEPLOYMENT",tags:[],version:"current",lastUpdatedBy:"pandadefi",lastUpdatedAt:1626686136,formattedLastUpdatedAt:"7/19/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Additional Resources",permalink:"/yearn-devdocs/developers/v2/additional-resources"},next:{title:"Operations procedures",permalink:"/yearn-devdocs/developers/v2/OPERATIONS"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Deploying a new Experimental Vault",id:"deploying-a-new-experimental-vault",children:[]},{value:"Deploying a new Strategy",id:"deploying-a-new-strategy",children:[]},{value:"Make the Vault and Strategy work together",id:"make-the-vault-and-strategy-work-together",children:[]},{value:"Test harvesting manually",id:"test-harvesting-manually",children:[]},{value:"Scaling up / Moving to Endorse",id:"scaling-up--moving-to-endorse",children:[{value:"Endorsing a vault from a previous release",id:"endorsing-a-vault-from-a-previous-release",children:[]}]},{value:"Publishing Your Strategy Description",id:"publishing-your-strategy-description",children:[]},{value:"Setting up Keep3r",id:"setting-up-keep3r",children:[]},{value:"References",id:"references",children:[{value:"Limits per Stage",id:"limits-per-stage",children:[]},{value:"Sharer contract",id:"sharer-contract",children:[]},{value:"Health Checks",id:"health-checks",children:[]}]},{value:"Note on Health Checks Backward Compatibility",id:"note-on-health-checks-backward-compatibility",children:[]},{value:"Adding Health Checks to your strategy",id:"adding-health-checks-to-your-strategy",children:[]},{value:"Health Check Operations",id:"health-check-operations",children:[]},{value:"Customizing Health Checks",id:"customizing-health-checks",children:[{value:"Addresses",id:"addresses",children:[]}]}],c={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploying-a-vault-and-strategy-v2"},"Deploying a Vault and Strategy V2"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": This ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iearn-finance/chief-multisig-officer"},"repo")," is encouraged to create multiple scripts for governance and dev multisig execution of complex transactions."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Make sure you have the brownie environment setup before trying to deploy a vault. Check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-vaults/blob/master/README.md"},"Readme MD in Yearn Vaults Repo")," for instructions."),(0,l.kt)("p",null,"The below instructions show some python commands that assume you are using the brownie console or a brownie script setup is in place."),(0,l.kt)("h2",{id:"deploying-a-new-experimental-vault"},"Deploying a new Experimental Vault"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-vaults/"},"Yearn Vaults Repo")," and run ",(0,l.kt)("inlineCode",{parentName:"p"},"brownie run scripts/deploy.py --network <network-to-deploy-vault>"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose the brownie account for deploying your vault. This account needs to have balance to pay for the deploy transaction.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the script is using the latest version of registry ",(0,l.kt)("inlineCode",{parentName:"p"},"v2.registry.ychad.eth")," against the planned new release vault to be sure its an updated version. (Can validate on Etherscan for latest address)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the version of vault to deploy or press enter to use latest release.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},"Y")," when prompt to deploy Proxy Vault")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the checksummed address of the ERC20 token the vault will use.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the vault Parameters (Below are some suggested values):"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Set your address or an address you control as governance."),(0,l.kt)("li",{parentName:"ul"},"Set Treasury (",(0,l.kt)("inlineCode",{parentName:"li"},"treasury.ychad.eth"),") as the rewards address."),(0,l.kt)("li",{parentName:"ul"},"Set Core Dev multisig (",(0,l.kt)("inlineCode",{parentName:"li"},"dev.ychad.eth"),") as guardian."),(0,l.kt)("li",{parentName:"ul"},"Set Strategist multisig (",(0,l.kt)("inlineCode",{parentName:"li"},"brain.ychad.eth"),") as management."),(0,l.kt)("li",{parentName:"ul"},"Set description and symbol for vault or use suggested as default (can be changed on chain later)"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm the Parameters are set correctly and press ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"and ENTER to deploy vault.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check new vault has ABI setup on Etherscan (Some vault versions from older releases may have verification issues with Vyper and proxy detection on Etherscan, consider using latest releases >0.3.5 to ensure verification works).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set up the vault with correct deposit limit:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vault.setDepositLimit(limit)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set management fee to 0:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vault.setManagementFee(0)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"(Optional) Set governance to ychad.eth (",(0,l.kt)("inlineCode",{parentName:"p"},"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"),") if vault is planned to be endorsed soon:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Note you can still make changes to the vault after setting governance up until governance is accepted")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vault.setGovernance(ychad.eth)\n")),(0,l.kt)("h2",{id:"deploying-a-new-strategy"},"Deploying a new Strategy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new issue in the strategies' ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iearn-finance/yearn-strategies/issues"},"repo")," using the template ",(0,l.kt)("inlineCode",{parentName:"li"},"Strategy Review"),". ",(0,l.kt)("strong",{parentName:"li"},"Complete all the fields"),"."),(0,l.kt)("li",{parentName:"ol"},"If the strategy is targeting a new protocol/new chain, not currently approved by yearn (used in production), a due diligence and path to production plan documents may also be required for the strategy to be considered for endorsing.\nExamples ",(0,l.kt)("a",{parentName:"li",href:"https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view"},"SNX"),", ",(0,l.kt)("a",{parentName:"li",href:"https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O"},"VESPER")),(0,l.kt)("li",{parentName:"ol"},"Coordinate with Core Dev strategist for getting a review on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/iearn-finance/projects/5"},"board"),"."),(0,l.kt)("li",{parentName:"ol"},"Complete peer review by at least 2 strategists."),(0,l.kt)("li",{parentName:"ol"},"Check if ",(0,l.kt)("inlineCode",{parentName:"li"},"want")," token has a deployed vault already (>=v0.3.0) and coordinate to use that first if possible."),(0,l.kt)("li",{parentName:"ol"},"Coordinate with core developer to set proper deposit limit and other settings for new vault. See the table below: ",(0,l.kt)("a",{parentName:"li",href:"#limits-per-stage"},"Limits per Stage"),"."),(0,l.kt)("li",{parentName:"ol"},"Deploy strategy and upload code to Etherscan for verification."),(0,l.kt)("li",{parentName:"ol"},"Tag GitHub review issue with deployed version and add mainnet address(es) to the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/orgs/iearn-finance/projects/5"},"board"),".")),(0,l.kt)("h2",{id:"make-the-vault-and-strategy-work-together"},"Make the Vault and Strategy work together"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add strategy to vault (for vault code v0.3.3+):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy = ''                     # Your strategy address\ndebt_ratio = 9800                 # 98%\nminDebtPerHarvest = 0             # Lower limit on debt add\nmaxDebtPerHarvest = 2 ** 256 - 1  # Upper limit on debt add\nperformance_fee = 1000            # Strategist perf fee: 10%\n\nvault.addStrategy(\n  strategy,\n  debt_ratio,\n  minDebtPerHarvest,\n  maxDebtPerHarvest,\n  performance_fee\n)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"debt_ratio")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},"9800")," if first strategy on vault."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rate_limit")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," unless there is reason for it to be different."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set keeper:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.setKeeper(keep3r_manager)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keep3r_manager")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set health check:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.setHealthCheck(health_check)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"health_check")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"0xddcea799ff1699e98edf118e0629a974df7df012"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": see section on ",(0,l.kt)("a",{parentName:"p",href:"#health-checks"}," health check ")," for more details."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set rewards:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.setRewards(address)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read ",(0,l.kt)("a",{parentName:"li",href:"#Sharer-contract-(optional)"},"below")," if you want to use the sharer contract."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Run tests against "live" vault and strategy in mainnet-fork:'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Harvest.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Profitable harvest.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Revoke strategy and check that funds return to the vault.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Increase/decrease debt + harvest, and check that the strategy is working well.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Migration.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check that tokens in the strategy cannot be sweeped by dust collection.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Example"),": Hegic strat ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Macarse/yhegic/tree/master/tests/development"},"repo"),"."))))),(0,l.kt)("h2",{id:"test-harvesting-manually"},"Test harvesting manually"),(0,l.kt)("p",null,"If you need a UI to test, you can coordinate with the strategists."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deposit some ",(0,l.kt)("inlineCode",{parentName:"p"},"want")," tokens into the vault.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Do first ",(0,l.kt)("inlineCode",{parentName:"p"},"harvest")," and make sure it worked correctly."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.harvest()\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Monitor ",(0,l.kt)("inlineCode",{parentName:"p"},"harvest")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"tend")," triggers for first few days. Call ",(0,l.kt)("inlineCode",{parentName:"p"},"harvest"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"tend")," manually."))),(0,l.kt)("h2",{id:"scaling-up--moving-to-endorse"},"Scaling up / Moving to Endorse"),(0,l.kt)("p",null,"In addition to the 2 strategists, a Core Developer has to review the strategy before going into production."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Increase deposit limit according to the table ",(0,l.kt)("a",{parentName:"p",href:"#Limits-per-Stage"},"below"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set management fee to production level:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vault.setManagementFee(200)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set parameters for vault correctly before endorse:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Set Governance to (",(0,l.kt)("inlineCode",{parentName:"li"},"ychad.eth"),")"),(0,l.kt)("li",{parentName:"ul"},"Set Treasury (",(0,l.kt)("inlineCode",{parentName:"li"},"treasury.ychad.eth"),") as the rewards address."),(0,l.kt)("li",{parentName:"ul"},"Set Core Dev multisig (",(0,l.kt)("inlineCode",{parentName:"li"},"dev.ychad.eth"),") as guardian."),(0,l.kt)("li",{parentName:"ul"},"Set Strategist multisig (",(0,l.kt)("inlineCode",{parentName:"li"},"brain.ychad.eth"),") as management."),(0,l.kt)("li",{parentName:"ul"},"Set description and symbol for vault or use suggested as default (can be changed on chain later)"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Yearn governance now must accept governance and endorse the vault:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.acceptGovernance()\nregistry.endorseVault(vault)\n")),(0,l.kt)("h3",{id:"endorsing-a-vault-from-a-previous-release"},"Endorsing a vault from a previous release"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check for latest release number in the registry contract")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the apiVersion of the vault you want to endorse to identify target release")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Calculate the releaseDelta from your target release. (see registry endorseVault param details)\nE.g: latestRelease = 0.3.3 and numReleases = 5. New vault apiVersion is 0.3.2\n",(0,l.kt)("inlineCode",{parentName:"p"},"releaseDelta = numReleases - 1 - releaseTarget"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Confirm using ",(0,l.kt)("inlineCode",{parentName:"p"},"registry.releases(uint256)")," that your ",(0,l.kt)("inlineCode",{parentName:"p"},"targetRelease")," has the same apiVersion as your vault."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"releaseTarget = 3 # e.g vault api version 0.3.2\nreleaseDelta = registry.numReleases() - 1 - releaseTarget # (5-1-3) = 1\nstrategy.acceptGovernance() # from ychad.eth\nregistry.endorseVault(vault, releaseDelta) # from ychad.eth.\n")))),(0,l.kt)("h2",{id:"publishing-your-strategy-description"},"Publishing Your Strategy Description"),(0,l.kt)("p",null,"These steps are required for all strategies. These descriptions will be pulled into the new v3 website and used to generate strategy diagrams."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a pull request ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/yearn/yearn-meta/tree/master/data/strategies"},"at this link")," to add a new ",(0,l.kt)("inlineCode",{parentName:"li"},".json")," file with your strategy description and details."),(0,l.kt)("li",{parentName:"ol"},"Using other strategy files as a reference, create a 1-2 sentence description for your strategy."),(0,l.kt)("li",{parentName:"ol"},"The author field is optional.")),(0,l.kt)("h2",{id:"setting-up-keep3r"},"Setting up Keep3r"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Adjust trigger variables until they are correct:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.setProfitFactor()\nstrategy.setDebtThreshold()\nstrategy.setMaxReportDelay()\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set strategy's Keep3r role to v2-keeper-contract"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy.setKeeper(0x736D7e3c5a6CB2CE3B764300140ABF476F6CFCCF)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create an add-strategy PR in Keep3r ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iearn-finance/yearn-keeper"},"repo")," (TBD)"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("h3",{id:"limits-per-stage"},"Limits per Stage"),(0,l.kt)("p",null,"These are the standard deposit limits per stage. They can be adjusted on a case by case basis."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stage"),(0,l.kt)("th",{parentName:"tr",align:null},"Limit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,l.kt)("td",{parentName:"tr",align:null},"\\$500K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Production"),(0,l.kt)("td",{parentName:"tr",align:null},"\\$10M")))),(0,l.kt)("h3",{id:"sharer-contract"},"Sharer contract"),(0,l.kt)("p",null,'"Sharer" is a contract for distributing/splitting strategist rewards. For boarding school graduates suggested split is 34% to strategist multisig and 66% to strategist \u2013 ',(0,l.kt)("a",{parentName:"p",href:"https://github.com/Grandthrax/Sharer"},"Sharer Contract"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Setup rewards for your strategy by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"sharer.addContributors"),"."),(0,l.kt)("li",{parentName:"ul"},"Include devs if you forked someone else's strategy."),(0,l.kt)("li",{parentName:"ul"},"Be sure to reward people who helped you."),(0,l.kt)("li",{parentName:"ul"},"You can find the sharer here: ",(0,l.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d"},"0x2c641e14afecb16b4aa6601a40ee60c3cc792f7d"))),(0,l.kt)("h3",{id:"health-checks"},"Health Checks"),(0,l.kt)("p",null,"Since the v0.4.3 release, we introduce the concept of Health Checks contracts to vaults and strategies. These are helper contracts that can validate the end state of a harvest, or critical transaction, to ensure the accounting stays within established safe parameters."),(0,l.kt)("p",null,'You can think of these contracts as on-chain unit tests, or "self asserts" that ensure that the end state of a critical transaction matches an expected condition. The design allows for health checks to be configured per individual vault or strategy. In case the "assert" doesn\'t match expectations the entire transaction will revert and will require manual intervention by strategists, or core devs.'),(0,l.kt)("p",null,"Vaults from release v0.4.3 and onward, support attaching an on-chain health check contract to be called after every harvest report."),(0,l.kt)("h2",{id:"note-on-health-checks-backward-compatibility"},"Note on Health Checks Backward Compatibility"),(0,l.kt)("p",null,"The health checks are designed to be backward compatible. To target already deployed vaults, we released a patch for each tagged release of ",(0,l.kt)("inlineCode",{parentName:"p"},"BaseStrategy"),". e.g:"),(0,l.kt)("p",null,"v0.3.5 -> ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-vaults/tree/v0.3.5-1"},"v0.3.5-1")," (compatible version)"),(0,l.kt)("h2",{id:"adding-health-checks-to-your-strategy"},"Adding Health Checks to your strategy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Before deploying a strategy with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yearn/brownie-strategy-mix"},"brownie-strategy-mix")," make sure your ",(0,l.kt)("inlineCode",{parentName:"p"},"brownie-config.yml")," points to the correct patched vault version, to get a Health Check enabled ",(0,l.kt)("inlineCode",{parentName:"p"},"BaseStrategy")," imported to your strategy.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"No change should be necessary on your extended ",(0,l.kt)("inlineCode",{parentName:"p"},"Strategy")," logic to interact with the health check contract. ",(0,l.kt)("strong",{parentName:"p"},"IMPORTANT"),": Check your contract size to see if refactoring is needed for compilation.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update your unit tests to set to the common Health Check contract ",(0,l.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xddcea799ff1699e98edf118e0629a974df7df012"},"health.ychad.eth")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"commonHealthCheck = Contract(web3.ens.resolve(\u201chealth.ychad.eth\u201d))\nstrategy.setHealthCheck(commonHealthCheck)\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Test your normal harvest operations using mainnet-fork and unit tests to validate that the integration is working correctly.")),(0,l.kt)("h2",{id:"health-check-operations"},"Health Check Operations"),(0,l.kt)("p",null,"A global setting is used to check against deviations in reported profit and losses that are within a safe interval. Any report/harvest that falls outside this global safe interval will report."),(0,l.kt)("p",null,"In case there is a harvest/report revert transaction detected on-chain manual intervention is required to debug and accept the transaction into the vaults accounting. This should be done after proper validation by the strategist's multi-sig and Core Devs group."),(0,l.kt)("p",null,"Disabling health checks is meant to be a one-time special event using the following steps:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# disables next health check on harvest\nstrategy.setDoHealthCheck(false, { account: brain.ychad.eth })\n\n# do harvest with profit/loss deviation\nstrategy.harvest()\n")),(0,l.kt)("p",null,"After this manual harvest, the health check will be automatically enabled back for further harvests."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOT RECOMMENDED"),": Health checks can be disabled permanently by setting the health check contract to address ",(0,l.kt)("inlineCode",{parentName:"p"},"0x0")," in the Strategy Contract. This should be done only in extreme circumstances and if you know what you are doing."),(0,l.kt)("h2",{id:"customizing-health-checks"},"Customizing Health Checks"),(0,l.kt)("p",null,"The Common Health Check Contract ",(0,l.kt)("inlineCode",{parentName:"p"},"health.ychad.eth")," uses a global default setting for profit and loss."),(0,l.kt)("p",null,"It also supports setting specific profit/loss limit checks per strategy via the following operation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy = ''; # strategy address\nprofitLimit = 100 # in bps\nlossLimit = 100 # in bps\nhealthcheck.setStrategyLimits(strategy, profitLimit, lossLimit)\n")),(0,l.kt)("p",null,"Finally, if needed, a custom Health Check contract can be deployed and attached to the common Health Check contract, which works as a registry. You can attach a custom Health Check to a strategy using the following operation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"strategy = ''; # strategy address\ncustomHealthCheck = '' # custom health check address\n\nhealthcheck.setCheck(strategy, customHealthCheck)\n")),(0,l.kt)("p",null,"Custom Health Check ",(0,l.kt)("strong",{parentName:"p"},"must")," follow the interface for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-vaults/blob/3bea2d8c070efeb05bc02d7d0136120bc516af4b/contracts/CommonHealthCheck.sol#L5"},"custom health checks")),(0,l.kt)("h3",{id:"addresses"},"Addresses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Identity"),(0,l.kt)("th",{parentName:"tr",align:null},"ENS"),(0,l.kt)("th",{parentName:"tr",align:null},"Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V2 Registry"),(0,l.kt)("td",{parentName:"tr",align:null},"v2.registry.ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0x50c1a2eA0a861A967D9d0FFE2AE4012c2E053804")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Yearn multisig (daddy)"),(0,l.kt)("td",{parentName:"tr",align:null},"ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Strategist multisig"),(0,l.kt)("td",{parentName:"tr",align:null},"brain.ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0x16388463d60FFE0661Cf7F1f31a7D658aC790ff7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Dev multisig"),(0,l.kt)("td",{parentName:"tr",align:null},"dev.ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0x846e211e8ba920B353FB717631C015cf04061Cc9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("td",{parentName:"tr",align:null},"treasury.ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0x93A62dA5a14C80f265DAbC077fCEE437B1a0Efde")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Health Check"),(0,l.kt)("td",{parentName:"tr",align:null},"health.ychad.eth"),(0,l.kt)("td",{parentName:"tr",align:null},"0xDDCea799fF1699e98EDF118e0629A974Df7DF012")))))}d.isMDXComponent=!0}}]);