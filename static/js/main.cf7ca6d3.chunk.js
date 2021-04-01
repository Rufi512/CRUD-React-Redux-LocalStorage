(this["webpackJsonpcrud-react-redux-localstorage"]=this["webpackJsonpcrud-react-redux-localstorage"]||[]).push([[0],{17:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s(0),c=s.n(n),a=s(4),r=s.n(a),l=(s(17),s(3)),o=s(2),j=s(5);var d={tasks:function(){var e=localStorage.getItem("tasks");return null===e?{tasks:[]}:JSON.parse(e)}().tasks,taskEdit:{}},u=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;if("ADD_TASK"===t.type)return Object(o.a)(Object(o.a)({},e),{},{tasks:e.tasks.concat(t.task)});if("EDIT_TASK"===t.type){var s=e.tasks;return s[t.index]=t.task,Object(o.a)(Object(o.a)({},e),{},{tasks:e.tasks.slice(),taskEdit:{}})}return"SET_EDIT_TASK"===t.type?Object(o.a)(Object(o.a)({},e),{},{taskEdit:{task:t.task,index:t.index}}):"DELETE_TASK"===t.type?(e.tasks.splice(t.index,1),Object(o.a)(Object(o.a)({},e),{},{tasks:e.tasks.slice()})):e})),b=s(6),O=Object(l.b)((function(e){return{taskEdit:e.taskEdit}}),(function(e){return{sendForm:function(t){e({type:"ADD_TASK",task:t})},edit:function(t,s){e({type:"EDIT_TASK",task:t,index:s})}}}))((function(e){var t=e.sendForm,s=(e.setEdit,e.edit),a=e.taskEdit,r=!1,l=Object(n.useRef)(null),j=Object(n.useRef)(null),d=Object(n.useRef)(null),u=function(){var e=new Date;return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)},O=Object(n.useState)({priority:"Low",date:u()}),h=Object(b.a)(O,2),f=h[0],x=h[1],k=Object(n.useState)(!1),m=Object(b.a)(k,2),p=m[0],v=m[1];Object(n.useEffect)((function(){a.task?(x(a.task),v(!0),window.innerWidth<=769&&E(!0)):v(!1)}),[a]);var y=Object(n.useState)(u()),g=Object(b.a)(y,1)[0],E=function(e){!0===e&&j.current&&d.current&&(j.current.style.opacity="1",j.current.style.visibility="visible",d.current.style.opacity="1",d.current.style.visibility="visible"),!1===e&&j.current&&d.current&&(j.current.style.opacity="0",j.current.style.visibility="hidden",d.current.style.opacity="0",d.current.style.visibility="hidden")};return window.addEventListener("resize",(function(){window.innerWidth<=769&&!0===r&&(r=!1,E(!1)),window.innerWidth>=769&&!1===r&&(r=!0,!0===!0&&d.current&&(d.current.style.opacity="1",d.current.style.visibility="visible"))})),Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("i",{onClick:function(e){E(!0),x({priority:"Low",date:u()}),v(!1)},className:"fas fa-plus"}),Object(i.jsx)("div",{ref:j,className:"task-before"}),Object(i.jsxs)("div",{ref:d,className:"task-create",children:[Object(i.jsx)("i",{onClick:function(e){E(!1),v(!1),x({priority:"Low",date:u()})},className:"fas fa-times-circle"}),Object(i.jsx)("h2",{style:{textTransform:"capitalize"},children:!0===p?"Edit the task":"Create the task"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),window.innerWidth<=769&&E(!1),p?s(f,a.index):t(f),v(!1),x({priority:"Low",date:u()}),l.current.focus()},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Name of the Task"}),Object(i.jsx)("input",{type:"text",ref:l,name:"name",onChange:function(e){return x(Object(o.a)(Object(o.a)({},f),{},{name:e.target.value}))},value:f.name||"",autoComplete:"off",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Description for the task"}),Object(i.jsx)("textarea",{name:"description",onChange:function(e){return x(Object(o.a)(Object(o.a)({},f),{},{description:e.target.value}))},value:f.description||"",autoComplete:"off",required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Time to finish the task"}),Object(i.jsx)("input",{type:"date",min:g,value:f.date||"",name:"date",onChange:function(e){return x(Object(o.a)(Object(o.a)({},f),{},{date:e.target.value}))},required:!0})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Priority for the task"}),Object(i.jsxs)("select",{name:"priority",onChange:function(e){return x(Object(o.a)(Object(o.a)({},f),{},{priority:e.target.value}))},value:f.priority||"",children:[Object(i.jsx)("option",{value:"Low",children:"Low"}),Object(i.jsx)("option",{value:"Medium",children:"Medium"}),Object(i.jsx)("option",{value:"High",children:"High"})]})]}),Object(i.jsx)("div",{className:"form-content",style:{alignItems:"center"},children:Object(i.jsx)("button",{type:"submit",children:!0===p?"Edit Task":"Create Task"})})]})]})]})})),h=Object(l.b)((function(e){return{tasks:e.tasks}}),(function(e){return{setEdit:function(t,s){e({type:"SET_EDIT_TASK",task:t,index:s})},remove:function(t){e({type:"DELETE_TASK",index:t})}}}))((function(e){var t=e.tasks,s=e.setEdit,n=e.remove;return 0===t.length?Object(i.jsxs)("div",{className:"tasks",style:{height:"100vh"},children:[Object(i.jsx)("h1",{children:"Tasks List"}),Object(i.jsx)("p",{style:{margin:"auto"},children:"You have no task on the list! "})]}):Object(i.jsxs)("div",{className:"tasks",children:[Object(i.jsx)("h1",{style:{marginBottom:"0"},children:"Tasks List"}),Object(i.jsx)("div",{className:"tasks-container",children:t.map((function(e,t){return Object(i.jsxs)("div",{className:"task",children:[Object(i.jsxs)("div",{className:"options",children:[Object(i.jsx)("i",{onClick:function(i){s(e,t)},className:"fas fa-edit"}),Object(i.jsx)("i",{onClick:function(e){n(t),s(null)},className:"fas fa-trash"})]}),Object(i.jsx)("h3",{children:e.name}),Object(i.jsx)("p",{style:{wordBreak:"break-word"},children:e.description}),Object(i.jsxs)("div",{className:"task-footer",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"fas fa-exclamation-circle",style:{marginRight:"5px"}}),Object(i.jsx)("p",{children:e.priority})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("i",{className:"fas fa-clock",style:{marginRight:"5px"}})," ",Object(i.jsx)("p",{children:e.date})]})]})]},t)}))})]})})),f=function(){return u.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("tasks",t)}({tasks:u.getState().tasks})})),Object(i.jsx)(l.a,{store:u,children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(O,{}),Object(i.jsx)(h,{})]})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.cf7ca6d3.chunk.js.map