(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{185:function(t,e,a){t.exports=a(616)},190:function(t,e,a){},616:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=(a(190),a(37)),l=a(38),s=a(41),u=a(39),m=a(42),h=(a(97),a(10)),p=a(621),d=a(124),f=a.n(d),j=a(67);f.a.defaults.withCredentials=!0,f.a.defaults.headers.post["Content-Type"]="application/json";var b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).state={totalData:"",listData:[],md:""},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"handleclick",value:function(){var t=this;fetch("./title.json",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){t.setState({totalData:e});for(var a=[],n=0;n<t.state.totalData.data.length;n++)a.push({title:t.state.totalData.data[n],content:t.state.totalData.data[n],order:n});t.setState({listData:a})}))}},{key:"componentDidMount",value:function(){this.handleclick()}},{key:"render",value:function(){return o.a.createElement(p.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(t){console.log(t)},pageSize:3},dataSource:this.state.listData,renderItem:function(t){return o.a.createElement(j.b,{to:"/article/"+t.order},o.a.createElement(p.a.Item,{key:t.title},o.a.createElement(p.a.Item.Meta,null),t.title))}})}}]),e}(n.Component),y=a(619),E=a(129),v=a(623),g=a(44),O=y.a.Header,k=y.a.Content,D=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(y.a,{className:"layout"},o.a.createElement(O,null,o.a.createElement("div",{className:"logo"}),o.a.createElement(E.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}})),o.a.createElement(g.b,{path:"/home"},o.a.createElement(k,{style:{padding:"0 50px"}},o.a.createElement(v.a,{style:{margin:"16px 0"}},o.a.createElement(v.a.Item,{href:"https://www.baidu.com"},o.a.createElement(h.a,{type:"home"})),o.a.createElement(v.a.Item,null,"\u535a\u5ba2")),o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:580}},o.a.createElement(b,null)))),o.a.createElement(g.a,{to:"/home",from:"/"}))}}]),e}(n.Component),w=a(624),C=a(620),I=a(622),S=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.value;return o.a.createElement(w.a,{language:"",style:C.a},t)}}]),e}(o.a.PureComponent),T=I.a.create()(S),x=a(179),H=a.n(x),z=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).state={totalData:""},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"init",value:function(){var t=this,e=this.props.match.params.order_id;console.log(e),fetch("./data.json",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(a){t.setState({totalData:a.data[e]}),console.log(t.state.totalData)}))}},{key:"componentWillMount",value:function(){this.init()}},{key:"render",value:function(){return o.a.createElement(H.a,{source:this.state.totalData,escapeHtml:!1,renderers:{code:T}})}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j.a,null,o.a.createElement(g.b,{component:D,path:"/"}),o.a.createElement(g.b,{path:"/article/:order_id",component:z})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},97:function(t,e,a){}},[[185,1,2]]]);
//# sourceMappingURL=main.508e8fdf.chunk.js.map