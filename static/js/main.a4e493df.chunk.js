(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(4),c=s.n(i),r=(s(10),s(11),s(5)),l=s(2),u=function(e,t){var s=Object(n.useState)(e),a=Object(l.a)(s,2),i=a[0],c=a[1],u=Object(n.useState)(!1),j=Object(l.a)(u,2),o=j[0],m=j[1],b=function(e,t){var s=Object(n.useState)(!0),a=Object(l.a)(s,2),i=a[0],c=a[1],r=Object(n.useState)(!0),u=Object(l.a)(r,2),j=u[0],o=u[1],m=Object(n.useState)(!0),b=Object(l.a)(m,2),p=b[0],h=b[1],d=Object(n.useState)(!0),O=Object(l.a)(d,2),x=O[0],v=O[1],g=Object(n.useState)(0),y=Object(l.a)(g,2),N=y[0],E=y[1];return Object(n.useEffect)((function(){for(var s in t)switch(s){case"isEmpty":c(!e);break;case"isNumber":/^[0-9]+$/.test(e)?o(!1):o(!0);break;case"isLetter":/^[\u0430-\u044f\u0410-\u042f]+$/.test(e)?h(!1):h(!0);break;case"minLength":e.length<t[s]?v(!0):v(!1),E(e.length)}}),[e]),{isEmpty:i,isNumber:j,isLetter:p,minLengthError:x,lengthValue:N}}(i,t);return Object(r.a)({value:i,onChange:function(e){c(e.target.value)},onBlur:function(){m(!0)},isDirty:o,setDirty:m},b)},j=s(0),o=function(){var e=u("",{isEmpty:!0,isLetter:!0}),t=u("",{isEmpty:!0,isLetter:!0}),s=u("",{isEmpty:!0,isNumber:!0}),n=u("",{isEmpty:!0,minLength:100});return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{className:"formContainer",children:[Object(j.jsx)("h1",{children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0437\u044b\u0432"}),Object(j.jsxs)("div",{className:"inputBlock",children:[Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("input",{className:"input",type:"text",onChange:e.onChange,onBlur:e.onBlur,value:e.value,name:"firstName",placeholder:"\u0418\u043c\u044f"}),e.isDirty&&e.isEmpty&&Object(j.jsx)("div",{className:"errorInput",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}),!e.isEmpty&&e.isLetter&&Object(j.jsx)("div",{className:"messageInput",children:"\u0418\u043c\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("input",{className:"input",type:"text",onChange:t.onChange,onBlur:t.onBlur,value:t.value,name:"lastName",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),t.isDirty&&t.isEmpty&&Object(j.jsx)("div",{className:"errorInput",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}),!t.isEmpty&&t.isLetter&&Object(j.jsx)("div",{className:"messageInput",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"})]}),Object(j.jsxs)("div",{className:"inputContainer",children:[Object(j.jsx)("input",{className:"input",type:"text",onChange:s.onChange,onBlur:s.onBlur,value:s.value,name:"ID",placeholder:"ID \u041f\u0440\u043e\u0444\u0438\u043b\u044f \u0432 \u0411\u041a"}),s.isDirty&&s.isEmpty&&Object(j.jsx)("div",{className:"errorInput",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}),!s.isEmpty&&s.isNumber&&Object(j.jsx)("div",{className:"messageInput",children:"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b"})]})]}),Object(j.jsxs)("div",{className:"textareaBlock",children:[Object(j.jsxs)("span",{className:"textareaSign",children:["\u0412\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 (",0===n.lengthValue?Object(j.jsx)("span",{children:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 100 \u0437\u043d\u0430\u043a\u043e\u0432"}):Object(j.jsxs)("span",{className:n.lengthValue<100?"textareaSignRed":"textareaSignGreen",children:[n.lengthValue," \u0437\u043d\u0430\u043a"]}),")"]}),Object(j.jsx)("textarea",{className:"textarea",onChange:n.onChange,onBlur:n.onBlur,value:n.value,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f, \u0430 \u0447\u0442\u043e \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c?"}),n.isDirty&&n.isEmpty&&Object(j.jsx)("div",{className:"errorInput",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"}),!n.isEmpty&&n.minLengthError&&Object(j.jsx)("div",{className:"messageInput",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 100"})]}),Object(j.jsx)("button",{className:"button",onClick:function(a){a.preventDefault(),e.isEmpty&&e.setDirty(!0),t.isEmpty&&t.setDirty(!0),s.isEmpty&&s.setDirty(!0),n.isEmpty&&n.setDirty(!0)},children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.a4e493df.chunk.js.map