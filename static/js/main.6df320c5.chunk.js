(this.webpackJsonpreact_pr=this.webpackJsonpreact_pr||[]).push([[0],{127:function(e,t,a){e.exports={grid:"Login_grid__1g0Ft"}},128:function(e,t,a){e.exports={grid:"MainComponent_grid__2yT70"}},131:function(e,t,a){e.exports={a:"Date_a__34mCn"}},19:function(e,t,a){e.exports={area:"Textarea_area__2G7O3",grid:"Textarea_grid__3a0lE",text:"Textarea_text__1Api5",img:"Textarea_img__13y_a",like:"Textarea_like__2WPUR",dislike:"Textarea_dislike__1pcHm",date:"Textarea_date__2GvQp",comment:"Textarea_comment__3Tle6",a:"Textarea_a__3FCEA",span_like:"Textarea_span_like__h-md8",span_dislike:"Textarea_span_dislike__10770"}},23:function(e,t,a){e.exports={a:"StyledMenuComponent_a__2Nb2D",ddd:"StyledMenuComponent_ddd__2c2k1",nav:"StyledMenuComponent_nav__39ILA",dd:"StyledMenuComponent_dd__C-khl",aaa:"StyledMenuComponent_aaa__24730"}},284:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(10),c=a(132),s=a(8),o=a(49),i=a.n(o),l=a(83),j=a(58),u=a(34),d=a(35),b=a(123),p=new(function(){function e(){Object(u.a)(this,e),this.instanseAPI=b.create({baseURL:"https://on-comments.com/api/v1"})}return Object(d.a)(e,[{key:"getNextNews",value:function(e){var t="news"+e;return this.instanseAPI.get(t)}}]),e}()),_="DELL-ELEMENT",m="CHANGE-ANY",O="TOUCH_GAM",h="IS-LOAD-INIT-DATA",x="UPDATE-DATA-NEWS",f="DE-ARR",v="UPDATE-TAG",g=function(e){return{type:v,tag:e}},y=function(e){return{type:x,data:e}},N=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getNextNews(e);case 2:n=t.sent,a(y(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getNextNews(e);case 2:n=t.sent,a(y(n.data)),a({type:h});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T={array:[],is_loadinInitData:!0,countElementsOnPage:20,counElementInOneElementPaginator:1,touh_Gam_menu:!1,num_load:0,tag:""},D=a(122),C=a(124),w=Object(r.c)({one:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(s.a)(Object(s.a)({},e),{},{touh_Gam_menu:t.touh_g});case _:return e.array.pop(),Object(s.a)(Object(s.a)({},e),{},{array:Object(c.a)(e.array)});case m:return Object(s.a)(Object(s.a)({},e),{},{any_any:e.any_any+=1});case h:return Object(s.a)(Object(s.a)({},e),{},{is_loadinInitData:!1,num_load:1});case x:return Object(s.a)(Object(s.a)({},e),{},{array:e.array.concat(t.data),num_load:e.num_load+=1});case f:return Object(s.a)(Object(s.a)({},e),{},{array:[],is_loadinInitData:!0,num_load:0});case v:return Object(s.a)(Object(s.a)({},e),{},{tag:t.tag});default:return e}},form:D.a}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,I=Object(r.e)(w,A(Object(r.a)(C.a)));window.store=I;var E=I,G=a(0),S=a.n(G),M=a(42),L=a.n(M),F=a(22),P=a(64),U=a(62),R=a(9),B=a(11),X=a(127),H=a.n(X),W=a(120),q=a(121),z=function(e){if(!e)return"AAAAAAAA in not good!!!!"},J=a(85),K=a.n(J),Q=function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(n.jsx)(W.a,{name:"text",component:"input",placeholder:"\u0442\u0435\u043a\u0441\u04422"})]}),Object(n.jsx)(W.a,{name:"text2",component:V,placeholder:"text2",label:"LastName",type:"text",validate:[z]}),e.error&&Object(n.jsxs)("div",{className:K.a.error,children:[" ",e.error," "]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"submit",children:"aaa"}),Object(n.jsx)("button",{type:"button",disabled:e.pristine||e.submitting,onClick:e.reset,children:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430"})]})]})},V=function(e){var t=e.input,a=e.label,r=e.type,c=e.meta,o=c.touched,i=c.error,l=c.warning;return Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"firstName",children:a}),Object(n.jsx)("input",Object(s.a)(Object(s.a)({},t),{},{placeholder:a,type:r})),o&&(i&&Object(n.jsx)("div",{className:K.a.error,children:Object(n.jsx)("span",{children:i})})||l&&Object(n.jsx)("span",{children:l}))]})},Y=Q=Object(q.a)({form:"login"})(Q),Z=Object(R.b)(null,{login:function(e){var t=e.text,a=e.text2;return function(e){a===t&&e(Object(j.a)("login",{_error:"\u041d\u0435\u043b\u044c\u0437\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f!!!!"}))}}})((function(e){return Object(n.jsx)("div",{className:H.a.grid,children:Object(n.jsx)(Y,{onSubmit:e.login})})})),$=a(128),ee=a.n($),te=(a(282),a(129)),ae=a(19),ne=a.n(ae),re=a(130),ce=function(e){return Object(n.jsxs)("div",{className:ne.a.area,onClick:function(){return e.dellElement()},children:[Object(n.jsx)("div",{className:ne.a.date,children:function(e){var t=new Date(1e3*e),a=(new Date).getDay(),n=t.getDay();return 6===n&&(n=-1),n===a?"\u0421\u0435\u0433\u043e\u0434\u043d\u044f":a===n+1?"\u0412\u0447\u0435\u0440\u0430":t.toLocaleDateString()}(e.data.post_date)}),Object(n.jsx)("div",{className:ne.a.text,children:Object(n.jsx)("a",{className:ne.a.a,href:e.data.news_link,children:e.data.news_text})}),Object(n.jsx)(re.LazyLoadImage,{className:ne.a.img,src:e.data.news_img_link,alt:"ddddd"}),Object(n.jsx)("div",{className:ne.a.comment,children:e.data.top_comment}),Object(n.jsx)("div",{className:ne.a.like,children:Object(n.jsx)("span",{className:ne.a.span_like,children:e.data.likes})}),Object(n.jsx)("div",{className:ne.a.dislike,children:Object(n.jsx)("span",{className:ne.a.span_dislike,children:e.data.dislikes})})]})},se=function(){var e=function(e){Object(P.a)(a,e);var t=Object(U.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).fetchMoreData=function(){var t=e.props.json_url+"?from="+5*e.props.num_load+"&too="+(5*e.props.num_load+5);e.props.loadNextNewsThunk(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.loadInitDataThunk(this.props.json_url)}},{key:"componentDidUpdate",value:function(e){0===this.props.array.length&&this.props.loadInitDataThunk(this.props.json_url),this.props.tag!==e.tag||this.props.updateTag(this.props.tag)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.is_loadinInitData&&Object(n.jsx)("div",{children:"init"}),this.props.is_loadinInitData||Object(n.jsx)(te.a,{dataLength:this.props.array.length,next:this.fetchMoreData,hasMore:!0,children:this.props.array.map((function(e,t){return Object(n.jsx)(ce,{data:e},t)}))})]})}}]),a}(S.a.Component);return Object(R.b)((function(e){return{array:e.one.array,is_loadinInitData:e.one.is_loadinInitData,num_load:e.one.num_load}}),{loadNextNewsThunk:N,loadInitDataThunk:k,updateTag:g})(e)},oe=Object(R.b)((function(){return{json_url:"/",tag:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}}),{})(se()),ie=Object(R.b)((function(){return{json_url:"/people/",tag:"\u041b\u044e\u0434\u0438"}}),{})(se()),le=Object(R.b)((function(){return{json_url:"/realt/",tag:"\u041d\u0435\u0434\u0432\u0438\u0436\u0435\u043c\u043e\u0441\u0442\u044c"}}),{})(se()),je=Object(R.b)((function(){return{json_url:"/tech/",tag:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}}),{})(se()),ue=Object(R.b)((function(){return{json_url:"/auto/",tag:"\u0410\u0432\u0442\u043e"}}),{})(se()),de=function(e){return Object(n.jsxs)("div",{className:ee.a.grid,children:[Object(n.jsx)(B.a,{exact:!0,component:oe,path:"/"}),Object(n.jsx)(B.a,{exact:!0,component:ie,path:"/people"}),Object(n.jsx)(B.a,{exact:!0,component:je,path:"/tech"}),Object(n.jsx)(B.a,{exact:!0,component:le,path:"/realt"}),Object(n.jsx)(B.a,{exact:!0,component:ue,path:"/auto"}),Object(n.jsx)(B.a,{component:Z,path:"/login"})]})},be=a(90),pe=a.n(be),_e=a(63),me=a(131),Oe=a.n(me),he=function(){var e=Object(G.useRef)(),t=Object(G.useState)(new Date),a=Object(_e.a)(t,2),r=a[0],c=a[1];return Object(G.useEffect)((function(){return e.current=setInterval((function(){c(new Date)}),1e3),function(){clearInterval(e.current)}}),[e]),Object(n.jsx)("div",{className:Oe.a.a,children:r.toLocaleTimeString()})},xe=a(23),fe=a.n(xe),ve=a(31),ge=a.n(ve),ye=function(e){var t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:ge.a.div})," ",Object(n.jsx)("div",{className:ge.a.div}),Object(n.jsx)("div",{className:ge.a.div})]}),a=Object(n.jsx)("div",{className:ge.a.cli});return Object(n.jsx)("div",{className:ge.a.asd,children:Object(n.jsx)("button",{className:ge.a.b,onClick:e.callBody,children:e.is_open?t:a})})},Ne=function(e){var t=function(t){console.log(t.target.innerText),e.callBody(),e.array_n()};return Object(n.jsxs)("div",{className:fe.a.nav,children:[Object(n.jsx)("div",{style:{position:"absolute",width:"0px"},children:Object(n.jsx)(ye,Object(s.a)({},e))}),Object(n.jsx)("div",{className:fe.a.dd,children:Object(n.jsxs)("ul",{className:fe.a.aaa,children:[Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:fe.a.a,to:"/",onClick:t,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:fe.a.a,to:"people",onClick:t,children:"\u041b\u044e\u0434\u0438"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:fe.a.a,to:"auto",onClick:t,children:"\u0410\u0432\u0442\u043e"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:fe.a.a,to:"realt",onClick:t,children:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(n.jsx)("li",{children:Object(n.jsx)(F.b,{className:fe.a.a,to:"tech",onClick:t,children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})})]})})]})},ke=function(e){var t=e.touhGamMenuAction,a=e.touh_Gam_menu,r=e.null_array,c=Object(G.useState)(!0),s=Object(_e.a)(c,2),o=s[0],i=s[1];return Object(n.jsx)("div",{style:o?{transition:"transform .2s ease 0s",transform:"translateX(200px)"}:{transition:"transform .2s ease 0s",transform:"translateX(0)"},children:Object(n.jsx)(Ne,{callBody:function(){i(!o),t(!a),o?document.body.style.overflow="hidden":document.body.style=null},is_open:o,array_n:r})})},Te=function(e){return Object(n.jsxs)("div",{className:pe.a.navbar,children:[Object(n.jsx)(he,{}),Object(n.jsx)("div",{className:pe.a.tag,children:e.tag}),Object(n.jsx)(ke,Object(s.a)({},e))]})},De=function(e){Object(P.a)(a,e);var t=Object(U.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Te,Object(s.a)({},this.props)),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:this.props.touh_Gam_menu?{opacity:"0.5"}:{overflow:"hidden"},children:Object(n.jsx)(de,{})})})]})}}]),a}(S.a.Component),Ce=Object(R.b)((function(e){return{touh_Gam_menu:e.one.touh_Gam_menu,tag:e.one.tag}}),{touhGamMenuAction:function(e){return{type:O,touh_g:e}},null_array:function(){return{type:f}}})(De);L.a.render(Object(n.jsx)(S.a.StrictMode,{children:Object(n.jsx)(F.a,{basename:"/react_pr",children:Object(n.jsx)(R.a,{store:E,children:Object(n.jsx)(Ce,{})})})}),document.getElementById("root"))},31:function(e,t,a){e.exports={asd:"GambComponent_asd__1qFM5",b:"GambComponent_b__1bz4a",div:"GambComponent_div__o2lTD",cli:"GambComponent_cli__2k4AN"}},85:function(e,t,a){e.exports={error:"LoginForm_error__1IfTq"}},90:function(e,t,a){e.exports={navbar:"TopComponent_navbar__2CGsA",main:"TopComponent_main__3KdkD",g:"TopComponent_g__3NTbd",tag:"TopComponent_tag__1Wg83"}}},[[284,1,2]]]);
//# sourceMappingURL=main.6df320c5.chunk.js.map