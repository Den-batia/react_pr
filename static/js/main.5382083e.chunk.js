(this.webpackJsonpreact_pr=this.webpackJsonpreact_pr||[]).push([[0],{127:function(t,e,a){t.exports={grid:"Login_grid__1g0Ft"}},128:function(t,e,a){t.exports={grid:"MainComponent_grid__2yT70"}},131:function(t,e,a){t.exports={a:"Date_a__34mCn"}},22:function(t,e,a){t.exports={area:"Textarea_area__2G7O3",grid:"Textarea_grid__3a0lE",text:"Textarea_text__1Api5",img:"Textarea_img__13y_a",like:"Textarea_like__2WPUR",dislike:"Textarea_dislike__1pcHm",date:"Textarea_date__2GvQp",comment:"Textarea_comment__3Tle6",a:"Textarea_a__3FCEA"}},23:function(t,e,a){t.exports={a:"StyledMenuComponent_a__2Nb2D",ddd:"StyledMenuComponent_ddd__2c2k1",nav:"StyledMenuComponent_nav__39ILA",dd:"StyledMenuComponent_dd__C-khl",aaa:"StyledMenuComponent_aaa__24730"}},284:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(10),c=a(132),o=a(8),s=a(49),i=a.n(s),l=a(83),u=a(58),j=a(34),d=a(35),b=a(123),p=new(function(){function t(){Object(j.a)(this,t),this.instanseAPI=b.create({baseURL:"https://on-comments.com/api/v1"})}return Object(d.a)(t,[{key:"getNextNews",value:function(t){var e="news"+t;return this.instanseAPI.get(e)}}]),t}()),_="DELL-ELEMENT",m="CHANGE-ANY",O="TOUCH_GAM",h="IS-LOAD-INIT-DATA",x="UPDATE-DATA-NEWS",f="DE-ARR",v="UPDATE-TAG",g=function(t){return{type:v,tag:t}},y=function(t){return{type:x,data:t}},N=function(t){return function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getNextNews(t);case 2:n=e.sent,a(y(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(t){return function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getNextNews(t);case 2:n=e.sent,a(y(n.data)),a({type:h});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k={array:[],is_loadinInitData:!0,countElementsOnPage:20,counElementInOneElementPaginator:1,touh_Gam_menu:!1,num_load:0,tag:""},D=a(122),C=a(124),w=Object(r.c)({one:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(o.a)(Object(o.a)({},t),{},{touh_Gam_menu:e.touh_g});case _:return t.array.pop(),Object(o.a)(Object(o.a)({},t),{},{array:Object(c.a)(t.array)});case m:return Object(o.a)(Object(o.a)({},t),{},{any_any:t.any_any+=1});case h:return Object(o.a)(Object(o.a)({},t),{},{is_loadinInitData:!1,num_load:1});case x:return Object(o.a)(Object(o.a)({},t),{},{array:t.array.concat(e.data),num_load:t.num_load+=1});case f:return Object(o.a)(Object(o.a)({},t),{},{array:[],is_loadinInitData:!0,num_load:0});case v:return Object(o.a)(Object(o.a)({},t),{},{tag:e.tag});default:return t}},form:D.a}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,I=Object(r.e)(w,A(Object(r.a)(C.a)));window.store=I;var E=I,G=a(0),S=a.n(G),M=a(42),L=a.n(M),F=a(21),P=a(64),U=a(62),R=a(9),B=a(11),X=a(127),H=a.n(X),W=a(120),q=a(121),z=function(t){if(!t)return"AAAAAAAA in not good!!!!"},J=a(85),K=a.n(J),Q=function(t){return Object(n.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(n.jsx)(W.a,{name:"text",component:"input",placeholder:"\u0442\u0435\u043a\u0441\u04422"})]}),Object(n.jsx)(W.a,{name:"text2",component:V,placeholder:"text2",label:"LastName",type:"text",validate:[z]}),t.error&&Object(n.jsxs)("div",{className:K.a.error,children:[" ",t.error," "]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"submit",children:"aaa"}),Object(n.jsx)("button",{type:"button",disabled:t.pristine||t.submitting,onClick:t.reset,children:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430"})]})]})},V=function(t){var e=t.input,a=t.label,r=t.type,c=t.meta,s=c.touched,i=c.error,l=c.warning;return Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"firstName",children:a}),Object(n.jsx)("input",Object(o.a)(Object(o.a)({},e),{},{placeholder:a,type:r})),s&&(i&&Object(n.jsx)("div",{className:K.a.error,children:Object(n.jsx)("span",{children:i})})||l&&Object(n.jsx)("span",{children:l}))]})},Y=Q=Object(q.a)({form:"login"})(Q),Z=Object(R.b)(null,{login:function(t){var e=t.text,a=t.text2;return function(t){a===e&&t(Object(u.a)("login",{_error:"\u041d\u0435\u043b\u044c\u0437\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f!!!!"}))}}})((function(t){return Object(n.jsx)("div",{className:H.a.grid,children:Object(n.jsx)(Y,{onSubmit:t.login})})})),$=a(128),tt=a.n($),et=(a(282),a(129)),at=a(22),nt=a.n(at),rt=a(130),ct=function(t){return Object(n.jsxs)("div",{className:nt.a.area,onClick:function(){return t.dellElement()},children:[Object(n.jsx)("div",{className:nt.a.date,children:function(t){var e=new Date(1e3*t),a=(new Date).getDay(),n=e.getDay();return 6===n&&(n=-1),n===a?"\u0421\u0435\u0433\u043e\u0434\u043d\u044f":a===n+1?"\u0412\u0447\u0435\u0440\u0430":e.toLocaleDateString()}(t.data.post_date)}),Object(n.jsx)("div",{className:nt.a.text,children:Object(n.jsx)("a",{className:nt.a.a,href:t.data.news_link,children:t.data.news_text})}),Object(n.jsx)(rt.LazyLoadImage,{className:nt.a.img,src:t.data.news_img_link,alt:"ddddd"}),Object(n.jsx)("div",{className:nt.a.comment,children:t.data.top_comment}),Object(n.jsx)("div",{className:nt.a.like}),Object(n.jsx)("div",{className:nt.a.dislike})]})},ot=function(){var t=function(t){Object(P.a)(a,t);var e=Object(U.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).fetchMoreData=function(){var e=t.props.json_url+"?from="+5*t.props.num_load+"&too="+(5*t.props.num_load+5);t.props.loadNextNewsThunk(e)},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.loadInitDataThunk(this.props.json_url)}},{key:"componentDidUpdate",value:function(t){0===this.props.array.length&&this.props.loadInitDataThunk(this.props.json_url),this.props.tag!==t.tag||this.props.updateTag(this.props.tag)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.is_loadinInitData&&Object(n.jsx)("div",{children:"init"}),this.props.is_loadinInitData||Object(n.jsx)(et.a,{dataLength:this.props.array.length,next:this.fetchMoreData,hasMore:!0,children:this.props.array.map((function(t,e){return Object(n.jsx)(ct,{data:t},e)}))})]})}}]),a}(S.a.Component);return Object(R.b)((function(t){return{array:t.one.array,is_loadinInitData:t.one.is_loadinInitData,num_load:t.one.num_load}}),{loadNextNewsThunk:N,loadInitDataThunk:T,updateTag:g})(t)},st=Object(R.b)((function(){return{json_url:"/",tag:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}}),{})(ot()),it=Object(R.b)((function(){return{json_url:"/people/",tag:"\u041b\u044e\u0434\u0438"}}),{})(ot()),lt=Object(R.b)((function(){return{json_url:"/realt/",tag:"\u041d\u0435\u0434\u0432\u0438\u0436\u0435\u043c\u043e\u0441\u0442\u044c"}}),{})(ot()),ut=Object(R.b)((function(){return{json_url:"/tech/",tag:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}}),{})(ot()),jt=Object(R.b)((function(){return{json_url:"/auto/",tag:"\u0410\u0432\u0442\u043e"}}),{})(ot()),dt=function(t){return Object(n.jsxs)("div",{className:tt.a.grid,children:[Object(n.jsx)(B.a,{exact:!0,component:st,path:"/"}),Object(n.jsx)(B.a,{exact:!0,component:it,path:"/people"}),Object(n.jsx)(B.a,{exact:!0,component:ut,path:"/tech"}),Object(n.jsx)(B.a,{exact:!0,component:lt,path:"/realt"}),Object(n.jsx)(B.a,{exact:!0,component:jt,path:"/auto"}),Object(n.jsx)(B.a,{component:Z,path:"/login"})]})},bt=a(90),pt=a.n(bt),_t=a(63),mt=a(131),Ot=a.n(mt),ht=function(){var t=Object(G.useRef)(),e=Object(G.useState)(new Date),a=Object(_t.a)(e,2),r=a[0],c=a[1];return Object(G.useEffect)((function(){return t.current=setInterval((function(){c(new Date)}),1e3),function(){clearInterval(t.current)}}),[t]),Object(n.jsx)("div",{className:Ot.a.a,children:r.toLocaleTimeString()})},xt=a(23),ft=a.n(xt),vt=a(31),gt=a.n(vt),yt=function(t){var e=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:gt.a.div})," ",Object(n.jsx)("div",{className:gt.a.div}),Object(n.jsx)("div",{className:gt.a.div})]}),a=Object(n.jsx)("div",{className:gt.a.cli});return Object(n.jsx)("div",{className:gt.a.asd,children:Object(n.jsx)("button",{className:gt.a.b,onClick:t.callBody,children:t.is_open?e:a})})},Nt=function(t){var e=function(e){console.log(e.target.innerText),t.callBody(),t.array_n()};return Object(n.jsxs)("div",{className:ft.a.nav,children:[Object(n.jsx)("div",{style:{position:"absolute",width:"0px"},children:Object(n.jsx)(yt,Object(o.a)({},t))}),Object(n.jsx)("div",{className:ft.a.dd,children:Object(n.jsxs)("ul",{className:ft.a.aaa,children:[Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:ft.a.a,to:"/",onClick:e,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:ft.a.a,to:"people",onClick:e,children:"\u041b\u044e\u0434\u0438"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:ft.a.a,to:"auto",onClick:e,children:"\u0410\u0432\u0442\u043e"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:ft.a.a,to:"realt",onClick:e,children:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:ft.a.a,to:"tech",onClick:e,children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})})]})})]})},Tt=function(t){var e=t.touhGamMenuAction,a=t.touh_Gam_menu,r=t.null_array,c=Object(G.useState)(!0),o=Object(_t.a)(c,2),s=o[0],i=o[1];return Object(n.jsx)("div",{style:s?{transition:"transform .2s ease 0s",transform:"translateX(200px)"}:{transition:"transform .2s ease 0s",transform:"translateX(0)"},children:Object(n.jsx)(Nt,{callBody:function(){i(!s),e(!a),s?document.body.style.overflow="hidden":document.body.style=null},is_open:s,array_n:r})})},kt=function(t){return Object(n.jsxs)("div",{className:pt.a.navbar,children:[Object(n.jsx)(ht,{}),Object(n.jsx)("div",{className:pt.a.tag,children:t.tag}),Object(n.jsx)(Tt,Object(o.a)({},t))]})},Dt=function(t){Object(P.a)(a,t);var e=Object(U.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(kt,Object(o.a)({},this.props)),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:this.props.touh_Gam_menu?{opacity:"0.5"}:{overflow:"hidden"},children:Object(n.jsx)(dt,{})})})]})}}]),a}(S.a.Component),Ct=Object(R.b)((function(t){return{touh_Gam_menu:t.one.touh_Gam_menu,tag:t.one.tag}}),{touhGamMenuAction:function(t){return{type:O,touh_g:t}},null_array:function(){return{type:f}}})(Dt);L.a.render(Object(n.jsx)(S.a.StrictMode,{children:Object(n.jsx)(F.a,{basename:"/react_pr",children:Object(n.jsx)(R.a,{store:E,children:Object(n.jsx)(Ct,{})})})}),document.getElementById("root"))},31:function(t,e,a){t.exports={asd:"GambComponent_asd__1qFM5",b:"GambComponent_b__1bz4a",div:"GambComponent_div__o2lTD",cli:"GambComponent_cli__2k4AN"}},85:function(t,e,a){t.exports={error:"LoginForm_error__1IfTq"}},90:function(t,e,a){t.exports={navbar:"TopComponent_navbar__2CGsA",main:"TopComponent_main__3KdkD",g:"TopComponent_g__3NTbd",tag:"TopComponent_tag__1Wg83"}}},[[284,1,2]]]);
//# sourceMappingURL=main.5382083e.chunk.js.map