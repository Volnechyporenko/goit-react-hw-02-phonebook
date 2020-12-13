(this["webpackJsonphomework2-feedback"]=this["webpackJsonphomework2-feedback"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__32oU3"}},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(10),i=n.n(s),o=n(3),l=n(4),u=n(6),b=n(5),h=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e}),n]})},j=n(11),m=n(20),d=n(2),f=n.n(d),O={name:"",number:""},p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=O,t.handleOnChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit({id:Object(m.a)(),name:t.state.name,number:t.state.number}),t.setState(O)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:f.a.container,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.input,required:!0,type:"text",name:"name",value:this.state.name,onChange:this.handleOnChange})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.input,required:!0,type:"tel",name:"number",value:this.state.number,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",onChange:this.handleOnChange})]}),Object(a.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=n(8),v=n.n(x),_=function(t){var e=t.onChange,n=t.filter;return Object(a.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"filter",value:n,onChange:function(t){var n=t.currentTarget.value;e(n)}})]})},C=n(9),g=n.n(C),S=function(t){var e=t.contact,n=t.handleClick;return Object(a.jsxs)("li",{className:g.a.item,children:[Object(a.jsxs)("div",{children:[e.name,": ",e.number]}),Object(a.jsx)("button",{className:g.a.btn,onClick:function(){return n(e.id)},children:"Delete"})]})},y=n(12),N=n.n(y),k=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{className:N.a.list,children:e.map((function(t){return Object(a.jsx)(S,{contact:t,handleClick:n},t.id)}))})},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name===e.name}));n?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:t.contacts.concat([e])}}))},t.onSearch=function(e){t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}))},t.onDelete=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:n})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getFilteredContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{title:"Phonebook",children:Object(a.jsx)(p,{onSubmit:this.onSubmit})}),Object(a.jsxs)(h,{title:"Contacts",children:[e.length>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{onChange:this.onSearch,filter:n}),c.length>0?Object(a.jsx)(k,{contacts:c,onDelete:this.onDelete}):Object(a.jsx)("span",{children:"Contacts is not found"})]}),!e.length&&Object(a.jsx)("span",{children:"No contacts yet. Add contacts"})]})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={container:"Form_container__2UUI8",label:"Form_label__2uT0R",input:"Form_input__2-68P",btn:"Form_btn__3vQyI"}},8:function(t,e,n){t.exports={label:"Search_label__3J9fW",input:"Search_input__xq48w"}},9:function(t,e,n){t.exports={item:"ContactItem_item__2finO",btn:"ContactItem_btn__3sxzs"}}},[[18,1,2]]]);
//# sourceMappingURL=main.76b9e0a3.chunk.js.map