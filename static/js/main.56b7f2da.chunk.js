(this["webpackJsonpreact-practice-todolist"]=this["webpackJsonpreact-practice-todolist"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),o=(n(14),n(2)),s=n(3),l=n(6),d=n(5),u=(n.p,n(15),n(8)),h=n(4),m=n(0);var b=function(e){return Object(m.jsxs)("div",{className:"form-control bg-dark text-light",children:[Object(m.jsx)("input",{onChange:function(t){return e.handleChange(e.item.id)},style:{backgroundColor:"#20FF20",borderColor:"#20FF20"},className:"form-check-input btn-primary",type:"checkbox",checked:e.item.completed}),Object(m.jsxs)("label",{className:"form-check-label",style:e.item.completed?{textDecoration:"line-through",color:"#808080",fontStyle:"italic"}:null,children:[" ","".concat(e.item.text)]}),Object(m.jsx)("br",{})]})},j=[{id:1,text:"Take out the thrash",completed:!0},{id:2,text:"Cook dinner",completed:!1},{id:3,text:"Feed cat",completed:!0},{id:4,text:"Walk the dog",completed:!1},{id:5,text:"Repair mouses",completed:!0}],p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={items:j},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{items:t.items.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return Object(m.jsx)(b,{item:t,handleChange:e.handleChange},t.id)}));return Object(m.jsx)("div",{className:"container form-group",children:t})}}]),n}(a.a.Component);var f=function(){return Object(m.jsx)("h1",{className:"bg-dark text-light",children:"To Do List"})},O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),Object(m.jsx)(p,{})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(17);r.a.render(Object(m.jsx)(O,{}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.56b7f2da.chunk.js.map