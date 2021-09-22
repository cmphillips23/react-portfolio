(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(6),i=c.n(r),n=(c(11),c(2)),o=c(0);var l=function(e){return Object(o.jsxs)("header",{className:"container",children:[Object(o.jsx)("p",{children:"Connor Phillips"}),Object(o.jsx)("nav",{children:["About","Contact","Projects","Resume"].map((function(t){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#"+t,onClick:function(){return e.setCurrentCategory(t)},className:"..",children:t})},t)}))})]})};var j=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("p",{className:"about",children:"I am an aspiring software developer, and I just completed the Full Stack Web Developer Boot Camp through the University of Texas.  I have 4+ years of management experience in the transportation industry, and I am ready to explore opportunities in the world of technology and software programming.  My career so far has required me to think critically and make decisions in high-stress situations, and also to be responsible for all facets of the operations to which I was assigned.  I believe that my experience so far has given me the tools necessary to succeed in any work environment, and I am ready for the next challenge that comes my way!"})]})},h=c(3),b=c(5);var d=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(n.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),i=Object(n.a)(r,2),l=i[0],j=i[1],d=c.name,m=c.email,u=c.message;function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t?e.target.value.length?j(""):j("".concat(e.target.name," is required.")):j("Your email is invalid.")}l||a(Object(b.a)(Object(b.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("section",{className:"contact-form",children:[Object(o.jsx)("h1",{children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",defaultValue:d,onBlur:O,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",defaultValue:m,name:"email",onBlur:O})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",defaultValue:u,onBlur:O,rows:"5"})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Also reach out to me via email or phone, and check out my github: ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Email -  ",Object(o.jsx)("a",{href:"@mailto:cmphillips23@gmail.com",children:"cmphillips23@gmail.com"}),Object(o.jsx)("br",{}),"Github - ",Object(o.jsx)("a",{href:"https://github.com/cmphillips23",children:"github.com/cmphillips23"}),Object(o.jsx)("br",{}),"Phone - ",Object(o.jsx)("a",{href:"tel:214-549-1656",children:"214-549-1656"})]})},m=c.p+"static/media/stock-talk.030ac271.PNG",u=c.p+"static/media/recess.e54b1cee.PNG",O=c.p+"static/media/safe-flight.9d8cb8c1.PNG",x=c.p+"static/media/run-buddy.ec9ab2f5.PNG",p=c.p+"static/media/password-generator.2d08c75e.PNG";var g=function(){return Object(o.jsxs)("section",{className:"portfolio-section",children:[Object(o.jsx)("h2",{children:"My Work"}),Object(o.jsxs)("div",{className:"portfolio-container",children:[Object(o.jsx)("div",{className:"stock-talk",children:Object(o.jsx)("a",{href:"https://limitless-refuge-10058.herokuapp.com/",children:Object(o.jsx)("img",{alt:"Stock Talk",src:m,height:"100%",width:"100%"})})}),Object(o.jsx)("div",{className:"recess",children:Object(o.jsx)("a",{href:"https://pacific-inlet-95494.herokuapp.com/",children:Object(o.jsx)("img",{alt:"Recess",src:u,height:"100%",width:"100%"})})}),Object(o.jsx)("div",{className:"safe-flight",children:Object(o.jsx)("a",{href:"https://n8dogg59.github.io/teamTravel/",children:Object(o.jsx)("img",{alt:"Safe Flight",src:O,height:"100%",width:"100%"})})}),Object(o.jsx)("div",{className:"run-buddy",children:Object(o.jsx)("a",{href:"http://cmphillips23.github.io/run-buddy/",children:Object(o.jsx)("img",{alt:"Run Buddy",src:x,height:"100%",width:"100%"})})}),Object(o.jsx)("div",{className:"password",children:Object(o.jsx)("a",{href:"http://cmphillips23.github.io/password-generator/",children:Object(o.jsx)("img",{alt:"Password Generator",src:p,height:"100%",width:"110%"})})})]})]})},f=c.p+"static/media/resume.02c86785.PNG";var v=function(){return Object(o.jsx)("section",{children:Object(o.jsx)("img",{alt:"Resume",src:f,height:"100%",width:"100%"})})};var y=function(){return Object(o.jsx)("span",{className:"portrait"})};var w=function(){var e=Object(s.useState)("About"),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{currentCategory:c,setCurrentCategory:a}),Object(o.jsx)("main",{children:function(){switch(c){case"Landing":return Object(o.jsx)(y,{});case"About":return Object(o.jsx)(j,{});case"Contact":return Object(o.jsx)(d,{});case"Projects":return Object(o.jsx)(g,{});case"Resume":return Object(o.jsx)(v,{});default:return Object(o.jsx)(y,{})}}()})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),N()}},[[13,1,2]]]);
//# sourceMappingURL=main.a2264ca1.chunk.js.map