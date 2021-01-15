(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{44:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),n=a(15),r=a.n(n),i=(a(44),a(12)),l=a(3),o=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg bg-primary pt-0 pb-0",id:"navbar",children:Object(c.jsxs)("div",{className:"container pt-2 pb-2 pl-0 pr-0",children:[Object(c.jsx)(i.b,{to:"/",className:"navbar-brand p-2",children:"COVID Stat App"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse",children:Object(c.jsx)("img",{src:"../img/hamburger.svg",className:"hamburger",alt:"Hamburger"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(c.jsx)("ul",{className:"navbar-nav ml-auto list-inline"})})]})})},d=function(e){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-8 col-md-10 m-auto",children:Object(c.jsxs)("div",{className:"jumbotron mt-3",children:[Object(c.jsx)("h2",{className:"text-center",children:"404 \u041e\u0448\u0438\u0431\u043a\u0430"}),Object(c.jsx)("h5",{className:"mt-3",children:"\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."}),Object(c.jsxs)("div",{className:"button-group",children:[Object(c.jsx)("button",{className:"btn btn-primary",onClick:e.history.goBack,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(c.jsx)(i.b,{to:"/",className:"btn btn-success ml-3",children:"\u041d\u0430 \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]})]})})})})},j=a(23),b=a(14),u=function(e){var t=e.variant,a=void 0===t?"info":t,s=e.children;return Object(c.jsx)("div",{className:"alert alert-".concat(a),children:s})},m=a.p+"static/media/spinner.dbb22bcf.gif",h=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)("img",{src:m,alt:"Loading...",style:{width:"300px",margin:"auto",display:"block"}})})},p=a(34),O=a.n(p),v=function(e){var t=e.name,a=e.title,s=e.data,n=e.newCases,r=function(e){var t=e.data,a=e.newCases,c=[];for(var s in t){var n=String(s).split("/"),r=[n[1],n[0]];n[0]=r[0],n[1]=r[1],n=n.join("/"),c.push({date:n,value:t[s]})}var i=[],l=[];return c.forEach((function(e,t){a&&0===t||(t%7===0||c.length-t<5)&&(i.push(e.date),a?l.push(e.value-c[t-1].value):l.push(e.value))})),{categoriesArray:i,seriesArray:l}}({data:s,newCases:void 0!==n&&n}),i={chart:{id:"basic-bar"},grid:{padding:{right:20,left:20}},xaxis:{categories:r.categoriesArray},yaxis:{labels:{formatter:function(e){return e.toLocaleString()}}},dataLabels:{enabled:!1},title:{text:a,align:"center",margin:20,offsetY:20,style:{fontSize:"25px"}}},l=[{name:t,data:r.seriesArray}];return Object(c.jsx)("div",{className:"chart",children:Object(c.jsx)(O.a,{options:i,series:l,type:"bar",width:"100%",height:"400px"})})},x=a(22),g=a.n(x),f=a(35),y=a(36),N=a.n(y),C=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({province:[],timeline:{cases:{},deaths:{},recovered:{}}}),i=Object(j.a)(r,2),l=i[0],o=i[1],d=Object(b.b)(),m=Object(b.c)((function(e){return e.history})),p=m.loading,O=m.error;Object(s.useEffect)((function(){o(m.data)}),[m.data]);return Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("div",{className:"row mt-2",children:Object(c.jsx)("div",{className:"col-12 m-auto",children:Object(c.jsx)("h2",{className:"text-center",children:"Most accurate COVID-19 information"})})}),Object(c.jsx)("div",{className:"row mt-2",children:Object(c.jsx)("div",{className:"col-lg-5 col-md-8 m-auto",children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),d(function(e){var t=e.country,a=e.lastdays,c=void 0===a?30:a;return function(){var e=Object(f.a)(g.a.mark((function e(a){var s,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"HISTORY_LOADING"}),e.next=4,N.a.get("".concat("https://disease.sh","/v3/covid-19/historical/").concat(t,"?lastdays=").concat(c));case 4:s=e.sent,n=s.data,a({type:"HISTORY_FETCH_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"HISTORY_FETCH_ERROR",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}({country:a,lastdays:120})),n("")},children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text",children:"Enter a country"})}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return n(e.target.value)},value:a,placeholder:"Country",required:!0}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-success",type:"submit",children:"Search"})})]})})})}),O&&Object(c.jsx)(u,{variant:"danger",children:O}),p?Object(c.jsx)(h,{}):Object(c.jsxs)(c.Fragment,{children:[Object.keys(l.timeline.cases).length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"row mb-3",children:Object(c.jsx)("div",{className:"col-12 mt-2",children:Object(c.jsx)(v,{name:"Total Cases",title:"Total Cases in ".concat(l.country),data:l.timeline.cases})})}),Object(c.jsx)("div",{className:"row mb-3",children:Object(c.jsx)("div",{className:"col-12 mt-2",children:Object(c.jsx)(v,{name:"New Cases Per Day",title:"New Cases Per Day in ".concat(l.country),data:l.timeline.cases,newCases:!0})})})]}),Object.keys(l.timeline.deaths).length>0&&Object(c.jsx)("div",{className:"row mb-3",children:Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(v,{name:"Total Deaths",title:"Total Deaths in ".concat(l.country),data:l.timeline.deaths})})})]})]})},S=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(o,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(l.a,{exact:!0,path:"*",component:d})]})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))},T=a(10),R=a(37),E=a(38),I=a(11),D={data:{province:[],timeline:{cases:{},deaths:{},recovered:{}}},loading:!1,error:""},H=Object(T.combineReducers)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HISTORY_LOADING":return Object(I.a)(Object(I.a)({},e),{},{loading:!0,error:""});case"HISTORY_FETCH_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{data:t.payload,loading:!1,error:""});case"HISTORY_FETCH_ERROR":return Object(I.a)(Object(I.a)({},e),{},{data:{province:[],timeline:{cases:{},deaths:{},recovered:{}}},error:t.payload,loading:!1});default:return e}}}),F=[R.a],_=Object(T.createStore)(H,{},Object(E.composeWithDevTools)(T.applyMiddleware.apply(void 0,F)));r.a.render(Object(c.jsx)(b.a,{store:_,children:Object(c.jsx)(S,{})}),document.getElementById("root")),w()}},[[70,1,2]]]);
//# sourceMappingURL=main.43f68136.chunk.js.map