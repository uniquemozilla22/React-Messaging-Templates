(this["webpackJsonpmessaging-app"]=this["webpackJsonpmessaging-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),m=(t(16),t(3)),s=t(4),i=t(6),o=t(5),d=(t(17),t(18),function(e){var a=["head-section"];return e.darktoggle&&a.push("dark"),l.a.createElement("div",{className:a.join(" ")},l.a.createElement("div",{className:"headLeft-section"},l.a.createElement("div",{className:"headLeft-sub"},l.a.createElement("input",{type:"text",name:"search",placeholder:"Search..."}),l.a.createElement("button",null," ",l.a.createElement("i",{className:"fa fa-search"})," "))),l.a.createElement("div",{className:"headRight-section"},l.a.createElement("div",{className:"headRight-sub"},l.a.createElement("h3",null,e.name),l.a.createElement("small",null,e.status))))}),u=(t(19),t(37)),E=function(e){return l.a.createElement("div",null,l.a.createElement("li",{className:e.status},l.a.createElement("div",{className:"chatList"},l.a.createElement("div",{className:"img"},l.a.createElement("i",{className:"fa fa-circle"}),l.a.createElement(u.a,null)),l.a.createElement("div",{className:"desc"},l.a.createElement("small",{className:"time"},"11:11 AM"),l.a.createElement("h5",null,e.name),l.a.createElement("small",null,"Lorem ipsum dolor sit amet...")))))},h=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"left-section mCustomScrollbar","data-mcs-theme":"minimal-dark"},l.a.createElement("ul",null,l.a.createElement(E,{name:"Yogesh Bhattarai",status:"active"}),l.a.createElement(E,{name:"Una"}),l.a.createElement(E,{name:"Yogesh"}),l.a.createElement(E,{name:"Krishna"}),l.a.createElement(E,{name:"Una"}),l.a.createElement(E,{name:"Yogesh"}),l.a.createElement(E,{name:"Krishna"}),l.a.createElement(E,{name:"Una"}),l.a.createElement(E,{name:"Yogesh"}),l.a.createElement(E,{name:"Krishna"})))}}]),t}(n.Component),g=function(e){var a,t="";"me"===e.by?t="msg-right":"day"===e.by?a=l.a.createElement("li",{class:"msg-day"},l.a.createElement("small",null,e.children)):t="msg-left ";var n,r=l.a.createElement("li",{className:t},l.a.createElement("div",{className:"msg-left-sub"},l.a.createElement("img",{src:"#"}),l.a.createElement("div",{className:"msg-desc"},"This is a message that i need to send to you."),l.a.createElement("small",null,"05:25 am")));return n="day"===e.by?a:r,l.a.createElement("div",null,n)},f=function(e){var a=["right-section"];return e.darktoggle&&(a.push("dark"),["right-section-bottom"].push("dark")),l.a.createElement("div",{className:a.join(" ")},l.a.createElement("div",{className:"message mCustomScrollbar","data-mcs-theme":"minimal-dark"},l.a.createElement("ul",null,l.a.createElement(g,{by:"me"}),l.a.createElement(g,{by:"day"},"Wednesday"),l.a.createElement(g,{by:"me"}),l.a.createElement(g,{by:""}),l.a.createElement(g,{by:"me"}),l.a.createElement(g,{by:"day"},"Thursday"),l.a.createElement(g,{by:"me"}),l.a.createElement(g,{by:"me"}))),l.a.createElement("div",{className:"right-section-bottom"},l.a.createElement("form",null,l.a.createElement("div",{className:"upload-btn"},l.a.createElement("button",{className:"btn"},l.a.createElement("i",{className:"fa fa-photo"})),l.a.createElement("input",{type:"file",name:"myfile"})),l.a.createElement("input",{type:"text",name:"",placeholder:"type here..."}),l.a.createElement("button",{className:"btn-send"},l.a.createElement("i",{className:"fa fa-send"})))))},v=function(e){return l.a.createElement("div",{className:"body-section"},l.a.createElement(h,null),l.a.createElement(f,{darktoggle:e.darktoggle}))},b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={darktoggle:!1},e.darkModeHandler=function(){var a=e.state.darktoggle;e.setState({darktoggle:!a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=["main-section"];return this.state.darktoggle&&e.push("dark"),l.a.createElement("div",{className:e.join(" ")},l.a.createElement("button",{onClick:this.darkModeHandler},"Dark"),l.a.createElement(d,{name:"Yogesh Bhattarai",status:"online",darktoggle:this.state.darktoggle}),l.a.createElement(v,{darktoggle:this.state.darktoggle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.376c5f74.chunk.js.map