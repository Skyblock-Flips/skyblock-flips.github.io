(this.webpackJsonpskyblockflips=this.webpackJsonpskyblockflips||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(30),i=a.n(c),r=(a(76),a(16)),l=a(17),o=a(19),d=a(18),b=(a(32),a(62)),j=a(8),h=a(7),m=a(142),p=a(6),O=a(63),u=Object(O.a)({palette:{primary:{main:"#aaaaaa",light:"#dddddd"},secondary:{light:"#0066ff",main:"#0044ff"}},spreadIt:{button:{backgroundColor:"#4CAFFF",textAlign:"center",fontSize:"25px",padding:"10px 5px",color:"white",outlineStyle:"none",border:"none",cursor:"pointer",marginTop:"25px",minWidth:"10%"},error:{color:"red"},inputField:{backgroundColor:"white"},link:{textDecoration:"none",color:"white",textAlign:"none"},table:{backgroundColor:"#424242",border:"thin solid #515151"},tableItem:{color:"white",borderBottom:"thin solid #515151"}}}),f=a(2),x=Object(h.a)({},u.spreadIt),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"Skyblock Flips"}),Object(f.jsx)("p",{children:"Check the best items to flip at the click of a button."}),Object(f.jsx)("a",{href:"./#/bazaar",className:e.link,children:Object(f.jsx)(m.a,{className:e.button,children:"Bazaar Flips"})})]})})}}]),a}(s.Component),y=Object(p.a)(x)(g),v=a(135),k=a(139),N=a(138),I=a(134),w=a(136),S=a(137),z=a(122),F=a(26),B=a.n(F),C=Object(h.a)(Object(h.a)({},u.spreadIt),{},{wrapper:{width:"98%",overflow:"hidden",paddingTop:"2%",paddingLeft:"2%",paddingBottom:"2%"},cardHolder:{float:"left",width:"49%",fontSize:"25px",display:"inline-block"},notes:{width:"48%",paddingLeft:"1%",fontSize:"20px",display:"inline-block",overflow:"hidden"}}),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={order:[],items:{},names:{}},e.interval=setInterval((function(){B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/margins").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{order:t.data.sorted,items:t.data.items}))}))}),5e3),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/margins").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{order:t.data.sorted,items:t.data.items}))})),B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/names").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{names:t.data}))}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)("div",{className:t.wrapper,children:[Object(f.jsx)("div",{className:t.cardHolder,children:Object(f.jsx)(I.a,{component:z.a,children:Object(f.jsxs)(v.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(f.jsx)(w.a,{children:Object(f.jsxs)(S.a,{children:[Object(f.jsx)(N.a,{className:t.tableItem,children:Object(f.jsx)("b",{children:"Item Name"})}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:Object(f.jsx)("b",{children:"Margin"})}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:Object(f.jsx)("b",{children:"Buy Price"})}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:Object(f.jsx)("b",{children:"Sell Price"})})]})}),Object(f.jsx)(k.a,{children:this.state.order.map((function(a,s){return Object(f.jsxs)(S.a,{hover:!0,children:[Object(f.jsx)(N.a,{component:"th",scope:"row",className:t.tableItem,children:Object(f.jsx)("a",{href:"/#/itemview/"+a,className:t.link,children:e.state.names[a]})}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:Object(f.jsx)("span",{style:{color:e.state.items[a].margin>0?"#00ff00":0===e.state.items[a].margin?"grey":"#ff0000"},children:(e.state.items[a].margin>=0?"+":"")+(Math.round(1e4*e.state.items[a].margin)/100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"%"})}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:e.state.items[a].buyOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(f.jsx)(N.a,{align:"right",className:t.tableItem,children:e.state.items[a].sellOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},s+1)}))})]})})}),Object(f.jsxs)("div",{className:t.notes,children:[Object(f.jsx)("h1",{children:"Bazaar Flips"}),Object(f.jsxs)("p",{style:{textAlign:"left"},children:["Bazaar flipping is when you purchase an item from the bazaar using a buy order then sell it with a sell order to make a profit, this calculates and displays margins for all of the items in the bazaar and ranks them to make it easier to flip them. ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),"Please note that the margins are adjusted to add 0.1 coins to the buy price and subtract 0.1 coins from the sell price before calculating as this is how most of the sell and buy offers are made. ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),"This also only updates every 5 seconds to not max out the hypixel api."]})]})]})})})}}]),a}(s.Component),P=Object(p.a)(C)(A),M=a(140),L=Object(h.a)(Object(h.a)({},u.spreadIt),{},{card:{width:"75%",backgroundColor:"#424242",color:"#ffffff",margin:"12.5%",height:"50%"}}),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={items:{},names:{}},e.interval=setInterval((function(){B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/data").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))}))}),5e3),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/data").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{items:t.data}))})),B.a.get("https://skyblockflips-api.asra.repl.co/bazaar/names").then((function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{names:t.data}))}))}},{key:"render",value:function(){var e=this.props.classes,t=this.props.match.params.item;return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)(M.a,{className:e.card,children:[Object(f.jsx)("h1",{children:void 0===this.state.names?"Loading...":this.state.names[t]}),void 0===this.state.items.margins?null:Object(f.jsx)(I.a,{component:z.a,children:Object(f.jsxs)(v.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(f.jsx)(w.a,{children:Object(f.jsxs)(S.a,{children:[Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:Object(f.jsx)("b",{children:"Margin"})}),Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:Object(f.jsx)("b",{children:"Buy Price"})}),Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:Object(f.jsx)("b",{children:"Sell Price"})})]})}),Object(f.jsx)(k.a,{children:Object(f.jsxs)(S.a,{hover:!0,children:[Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:Object(f.jsx)("span",{style:{color:this.state.items.margins.items[t].margin>0?"#00ff00":0===this.state.items.margins.items[t].margin?"grey":"#ff0000"},children:(this.state.items.margins.items[t].margin>=0?"+":"")+(Math.round(1e4*this.state.items.margins.items[t].margin)/100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"%"})}),Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:this.state.items.margins.items[t].buyOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),Object(f.jsx)(N.a,{align:"center",className:e.tableItem,children:this.state.items.margins.items[t].sellOffer.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},1)})]})})]})})})}}]),a}(s.Component),D=Object(p.a)(L)(T),H=Object(h.a)({},u.spreadIt),J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"404"}),Object(f.jsx)("p",{children:"Page Not Found"}),Object(f.jsx)(m.a,{className:e.button,href:"/",children:"Return Home"})]})})}}]),a}(s.Component),E=Object(p.a)(H)(J),R=a(141),W=a(61),q=a.n(W)()(u),G=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"main-background",style:{backgroundColor:"#282c34"},children:Object(f.jsx)(R.a,{theme:q,children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{exact:!0,path:"/",component:y}),Object(f.jsx)(j.a,{exact:!0,path:"/bazaar",component:P}),Object(f.jsx)(j.a,{exact:!0,path:"/itemview/:item",component:D}),Object(f.jsx)(j.a,{path:"/*",component:E})]})})})})}}]),a}(s.Component),K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,143)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),K()},32:function(e,t,a){},76:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.b48144f0.chunk.js.map