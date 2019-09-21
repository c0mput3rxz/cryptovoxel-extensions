(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{214:function(e,t,n){e.exports=n(575)},294:function(e,t){},296:function(e,t){},317:function(e,t){},319:function(e,t){},550:function(e,t){},575:function(e,t,n){"use strict";n.r(t);var a=n(4),u=n.n(a),o=n(212),p=n.n(o),s=n(72),i=n(73),m=n(75),y=n(74),r=n(76),d=n(41),c=n.n(d),l=n(56),h=n.n(l),_=n(213),b=n(57),g=[{name:"TokenPurchase",inputs:[{type:"address",name:"buyer",indexed:!0},{type:"uint256",name:"eth_sold",indexed:!0},{type:"uint256",name:"tokens_bought",indexed:!0}],type:"event",anonymous:!1},{name:"EthPurchase",inputs:[{type:"address",name:"buyer",indexed:!0},{type:"uint256",name:"tokens_sold",indexed:!0},{type:"uint256",name:"eth_bought",indexed:!0}],type:"event",anonymous:!1},{name:"AddLiquidity",inputs:[{type:"address",name:"provider",indexed:!0},{type:"uint256",name:"eth_amount",indexed:!0},{type:"uint256",name:"token_amount",indexed:!0}],anonymous:!1,type:"event"},{name:"RemoveLiquidity",inputs:[{type:"address",name:"provider",indexed:!0},{type:"uint256",name:"eth_amount",indexed:!0},{type:"uint256",name:"token_amount",indexed:!0}],anonymous:!1,type:"event"},{name:"Transfer",inputs:[{type:"address",name:"_from",indexed:!0},{type:"address",name:"_to",indexed:!0},{type:"uint256",name:"_value",indexed:!1}],anonymous:!1,type:"event"},{name:"Approval",inputs:[{type:"address",name:"_owner",indexed:!0},{type:"address",name:"_spender",indexed:!0},{type:"uint256",name:"_value",indexed:!1}],anonymous:!1,type:"event"},{name:"setup",outputs:[],inputs:[{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:175875},{name:"addLiquidity",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_liquidity"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:82616},{name:"removeLiquidity",outputs:[{type:"uint256",name:"out"},{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"amount"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:116814},{name:"__default__",outputs:[],inputs:[],constant:!1,payable:!0,type:"function"},{name:"ethToTokenSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:12757},{name:"ethToTokenTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"min_tokens"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!0,type:"function",gas:12965},{name:"ethToTokenSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"deadline"}],constant:!1,payable:!0,type:"function",gas:50463},{name:"ethToTokenTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!0,type:"function",gas:50671},{name:"tokenToEthSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:47503},{name:"tokenToEthTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_eth"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!1,type:"function",gas:47712},{name:"tokenToEthSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"}],constant:!1,payable:!1,type:"function",gas:50175},{name:"tokenToEthTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"},{type:"uint256",name:"max_tokens"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"}],constant:!1,payable:!1,type:"function",gas:50384},{name:"tokenToTokenSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:51007},{name:"tokenToTokenTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:51098},{name:"tokenToTokenSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:54928},{name:"tokenToTokenTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"token_addr"}],constant:!1,payable:!1,type:"function",gas:55019},{name:"tokenToExchangeSwapInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:49342},{name:"tokenToExchangeTransferInput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"},{type:"uint256",name:"min_tokens_bought"},{type:"uint256",name:"min_eth_bought"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:49532},{name:"tokenToExchangeSwapOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:53233},{name:"tokenToExchangeTransferOutput",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"},{type:"uint256",name:"max_tokens_sold"},{type:"uint256",name:"max_eth_sold"},{type:"uint256",name:"deadline"},{type:"address",name:"recipient"},{type:"address",name:"exchange_addr"}],constant:!1,payable:!1,type:"function",gas:53423},{name:"getEthToTokenInputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_sold"}],constant:!0,payable:!1,type:"function",gas:5542},{name:"getEthToTokenOutputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_bought"}],constant:!0,payable:!1,type:"function",gas:6872},{name:"getTokenToEthInputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"tokens_sold"}],constant:!0,payable:!1,type:"function",gas:5637},{name:"getTokenToEthOutputPrice",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256",name:"eth_bought"}],constant:!0,payable:!1,type:"function",gas:6897},{name:"tokenAddress",outputs:[{type:"address",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1413},{name:"factoryAddress",outputs:[{type:"address",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1443},{name:"balanceOf",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"address",name:"_owner"}],constant:!0,payable:!1,type:"function",gas:1645},{name:"transfer",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:75034},{name:"transferFrom",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_from"},{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:110907},{name:"approve",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_spender"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:38769},{name:"allowance",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"address",name:"_owner"},{type:"address",name:"_spender"}],constant:!0,payable:!1,type:"function",gas:1925},{name:"name",outputs:[{type:"bytes32",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1623},{name:"symbol",outputs:[{type:"bytes32",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1653},{name:"decimals",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1683},{name:"totalSupply",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:1713}],f="0x3F0c63dA66457dedc2677BEF6bbdd457BA7A3C0b",k=!1,T=null,v=0;function x(){return(x=Object(_.a)(h.a.mark((function e(){var t,n,a,u,o,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.Contract(f,g,T.library),e.next=3,t.getEthToTokenOutputPrice(v);case 3:n=e.sent,console.log(n.toString()),a=n/Math.pow(10,18),1e-4,console.log(a),a=(a=1e-4*Math.ceil(a/1e-4)).toFixed(4),console.log(a),u=new b.Interface(g),o=Math.ceil((new Date).getTime()/1e3)+900,p=u.functions.ethToTokenSwapOutput.encode([v,o]),console.log(p),T.library.getSigner().sendTransaction({to:f,data:p,value:b.utils.parseEther(a.toString())});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(m.a)(this,Object(y.a)(t).call(this,e)),T=n.props.props.context,v=parseInt(n.props.props.intentData.value),n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){!1===k&&(k=!0,v<=100&&function(){x.apply(this,arguments)}())}},{key:"render",value:function(){var e="https://etherscan.io/address/"+f;return u.a.createElement("div",null,u.a.createElement("p",null,"\ud83c\udf08 Thank you for using the $COLR vending machine!"),u.a.createElement("p",null,"\ud83d\udcb0 You have initiated a transaction for ",v," $COLR."),u.a.createElement("p",null,"\ud83e\udd84 You can verify the uniswap exchange address: ",u.a.createElement("b",null,u.a.createElement("a",{target:"_blank",href:e},"https://etherscan.io/address/",f))),u.a.createElement("p",null,"\u26fd\ufe0f Please be sure to check all inputs and gas value before submitting your transaction."),u.a.createElement("p",null,"\ud83d\uddd2\ufe0f Documentation on using $COLR can be found ",u.a.createElement("a",{target:"_blank",href:"https://www.cryptovoxels.com/docs/colr"},"here"),"."),u.a.createElement("p",null,"\ud83d\udca5 Close this window to return to Cryptovoxels."))}}]),t}(a.Component);function E(e){var t=Object(d.useWeb3Context)();if(Object(a.useEffect)((function(){t.setFirstValidConnector(["MetaMask"])}),[]),t.active||t.error){if(t.error)return u.a.createElement("p",null,t.error);var n=e.intentData.intent+e.intentData.version,o={intentData:e.intentData,context:t};return"colr-vending1"===n?u.a.createElement(w,{props:o}):u.a.createElement("div",null)}return u.a.createElement("p",null,"loading")}var O={MetaMask:new(0,d.Connectors.InjectedConnector)({supportedNetworks:[1,4]})},j={},C=function(e){function t(){var e;Object(s.a)(this,t),e=Object(m.a)(this,Object(y.a)(t).call(this)),window.ethereum.autoRefreshOnNetworkChange=!1;var n=window.location.search,a=new URLSearchParams(n);return j.intent=a.get("intent"),j.value=a.get("value"),j.version=a.get("version"),e}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement(c.a,{connectors:O,libraryName:"ethers.js"},u.a.createElement(E,{intentData:j}))}}]),t}(a.Component);p.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.e05a52ea.chunk.js.map