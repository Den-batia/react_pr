(this.webpackJsonpreact_pr=this.webpackJsonpreact_pr||[]).push([[7],{283:function(t,a,e){t.exports={a:"Textarea_a__12u7-",grid:"Textarea_grid__3raD1",text:"Textarea_text__1WlTS",img:"Textarea_img__j3xxX",like:"Textarea_like__2Clwl",dislike:"Textarea_dislike__1pnwC",date:"Textarea_date__Mp0qx",comment:"Textarea_comment__2WDr4"}},284:function(t,a,e){"use strict";var n=e(47),r=e(48),i=e(90),s=e(89),o=e(1),c=e(0),l=e.n(c),d=e(285),p=e(18),u=e(283),_=e.n(u),h=e(286),j=function(t){return Object(o.jsxs)("div",{className:_.a.a,onClick:function(){return t.dellElement()},children:[Object(o.jsx)("div",{className:_.a.date,children:function(t){var a=new Date(1e3*t),e=(new Date).getDay(),n=a.getDay();return 6===n&&(n=-1),n===e?"\u0421\u0435\u0433\u043e\u0434\u043d\u044f":e===n+1?"\u0412\u0447\u0435\u0440\u0430":a.toLocaleDateString()}(t.data.post_date)}),Object(o.jsx)("div",{className:_.a.text,children:t.data.news_text}),Object(o.jsx)(h.LazyLoadImage,{className:_.a.img,src:t.data.news_img_link,alt:"ddddd"}),Object(o.jsx)("div",{className:_.a.comment,children:t.data.top_comment}),Object(o.jsx)("div",{className:_.a.like}),Object(o.jsx)("div",{className:_.a.dislike})]})},m=e(27);a.a=function(){var t=function(t){Object(i.a)(e,t);var a=Object(s.a)(e);function e(){var t;Object(n.a)(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=a.call.apply(a,[this].concat(i))).fetchMoreData=function(){var a=t.props.json_url+"?from="+5*t.props.num_load+"&too="+(5*t.props.num_load+5);t.props.loadNextNewsThunk(a)},t}return Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.loadInitDataThunk(this.props.json_url)}},{key:"componentDidUpdate",value:function(t){0===this.props.array.length&&this.props.loadInitDataThunk(this.props.json_url),this.props.tag!==t.tag||this.props.updateTag(this.props.tag)}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[this.props.is_loadinInitData&&Object(o.jsx)("div",{children:"init"}),this.props.is_loadinInitData||Object(o.jsx)(d.a,{dataLength:this.props.array.length,next:this.fetchMoreData,hasMore:!0,children:this.props.array.map((function(t,a){return Object(o.jsx)(j,{data:t},a)}))})]})}}]),e}(l.a.Component);return Object(p.b)((function(t){return{array:t.one.array,is_loadinInitData:t.one.is_loadinInitData,num_load:t.one.num_load}}),{loadNextNewsThunk:m.b,loadInitDataThunk:m.a,updateTag:m.g})(t)}},289:function(t,a,e){"use strict";e.r(a);var n=e(18),r=e(284);a.default=Object(n.b)((function(){return{json_url:"/realt/",tag:"\u041d\u0435\u0434\u0432\u0438\u0436\u0435\u043c\u043e\u0441\u0442\u044c"}}),{})(Object(r.a)())}}]);
//# sourceMappingURL=7.cf1fef9d.chunk.js.map