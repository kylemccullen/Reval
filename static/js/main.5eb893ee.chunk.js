(this.webpackJsonpreval=this.webpackJsonpreval||[]).push([[0],{56:function(e){e.exports=JSON.parse('{"upFrontCost":"Total amount invested into the property.","propertyManager":"Monthly property management fee. This is usually a fixed percent of collected rent.","leaseLength":"Typical lease length in years.","leaseRenewalFee":"Fee the property manager collects to resign the current tenant to a new lease. This is usually a fixed percent of the first months rent of the new lease.","turnover":"Average length a tenant will stay in years.","procurementFee":"Fee the property manager collects to find a new tenant if the property becomes vacant. This is usually a fixed percent of the first months rent of the new lease.","additionalPropertyManagementExpense":"The average monthly additional cost of property manager fees.","mortgageTerm":"The length of the mortgage in years.","insurance":"Yearly insurance premium.","propertyTax":"Yearly property taxes.","cashFlow":"Expected monthly cash flow of rent minus known costs. Known costs include property management fee, mortgage, insurance, and taxes).","cashOnCash":"Percent return based on Cash Flow","equityYearOne":"Total equity gained in the first year of ownership.","vacancyRate":"Rate at which the property is vacant.","majorMinorCapEx":"Major and Minor repairs fund for the property.","mediumTerm":"Expected monthly cash flow of rent minus known and unknown costs. Unknown costs include additional property management expense, vacancy, and major/minor capital expenditures."}')},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),r=a(13),s=a.n(r),l=a(32),i=a(80),o=a(79),u=a(77),j=a(60),d=a(18),b=a(9),m=Object(c.createContext)(),h=function(e){var t=e.children,a=Object(c.useState)(!1),r=Object(b.a)(a,2),s=r[0],l=r[1];Object(c.useEffect)((function(){var e=localStorage.getItem("isDarkTheme");l("true"===e)}),[]);return Object(n.jsx)(m.Provider,{value:{isDarkMode:s,toggleDarkMode:function(){var e=!s;l(e),localStorage.setItem("isDarkTheme",e)}},children:t})},p=function(e){var t=e.value,a=e.onChange,r=e.error,s=e.onClose,l=Object(c.useContext)(m).isDarkMode;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"d-flex flex-direction-row align-items-center",children:[Object(n.jsx)("input",{className:"form-control".concat(0!==r.length?"is-invalid ":""," ").concat(l?" bg-dark text-light":""),type:"text",value:t,onChange:a}),Object(n.jsx)("span",{className:"close-input",onClick:s,children:Object(n.jsx)(d.g,{})})]}),0!==r.length&&Object(n.jsx)("div",{className:"invalid-feedback",children:r})]})},x=a(81),O=a(78),v=function(e){var t=e.children,a=e.title,r=e.icon,s=e.iconClass,l=void 0===s?"":s,i=Object(c.useContext)(m).isDarkMode,o=Object(c.useState)(window.innerWidth),u=Object(b.a)(o,2),j=u[0],d=u[1],h=j<600;Object(c.useEffect)((function(){var e=function(){d(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var p="";p+=i?"dark":"",p+=h?" top":" right";var v=Object(n.jsxs)(x.a,{className:p,children:[Object(n.jsx)(x.a.Title,{children:a}),Object(n.jsx)(x.a.Content,{children:t})]});return Object(n.jsx)(O.a,{trigger:["hover","click"],placement:h?"top":"right",overlay:v,children:Object(n.jsx)("span",{className:"p-1 ".concat(l),children:r})})},g=a(45),f=a(55),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return parseFloat(e.toFixed(t))},w=function(e,t){switch(t){case"V":case"currency":return parseFloat(e).toLocaleString("en-US",{style:"currency",currency:"USD"});case"P":case"percent":return"".concat((100*parseFloat(e)).toFixed(3),"%");case"number":case"text":return e;default:return"!REF"}},C=function(e,t){var a=e.split(","),n=Object(b.a)(a,3),c=n[0],r=n[1];return"P"===n[2]?parseFloat(c)*t:parseFloat(r)},P=function(e){var t=parseFloat(e.homeValue),a=parseFloat(e.purchasePrice),n=parseFloat(e.additionalCosts),c=parseFloat(e.rent),r=parseFloat(e.mortgageRate),s=parseFloat(e.mortgageTerm),l=parseFloat(e.leaseLength),i=parseFloat(e.turnover),o=parseFloat(e.vacancyRate),u=C(e.downPayment,a),j=C(e.closingCosts,a),d=u+j+n,b=C(e.propertyManager,c),m=a-u,h=function(e,t,a){var n=e*(t/12)*Math.pow(1+t/12,12*a)/(Math.pow(1+t/12,12*a)-1);return y(n)}(m,r,s),p=C(e.insurance,a),x=C(e.propertyTax,a),O=y(c-b-h-(p+x)/12),v=y(12*O/d,3),g=C(e.leaseRenewalFee,c),f=C(e.procurementFee,c),w=y((g/l+f/i)/12),P=function(e,t,a){var n=e*(1-(Math.pow(1+t,a)-Math.pow(1+t,12))/(Math.pow(1+t,a)-1));return y(n)}(m,r/12,12*s),F=C(e.majorMinorCapEx,c),k=y(O-w-c*o-F),N=y(12*k/d,3),T={};return u/.2<a&&(T.downPayment="Most lenders require a down payment of at least 20%."),s<1&&(T.equityYearOne="Can't calculate equity gained in the first year if the mortgage term is less than one year."),[{homeValue:t,purchasePrice:a,additionalCosts:n,rent:c,mortgageRate:r,mortgageTerm:s,leaseLength:l,turnover:i,vacancyRate:o,downPayment:u,closingCosts:j,upFrontCost:d,propertyManager:b,mortgagePayment:h,insurance:p,propertyTax:x,cashFlow:O,cashOnCash:v,leaseRenewalFee:g,procurementFee:f,additionalPropertyManagementExpense:w,equityYearOne:P,majorMinorCapEx:F,mediumTerm:k,mediumReturn:N},T]},F=Object(c.createContext)(),k={name:"123 Main St. (Edit me)",homeValue:"115000.00",purchasePrice:"115000.00",downPayment:"0.2,30000.00,P",closingCosts:"0.03,2000.00,P",additionalCosts:"0",rent:"1100.00",propertyManager:"0.1,100.00,P",leaseLength:"1",leaseRenewalFee:"0.25,100.00,P",turnover:"3",procurementFee:"1.0,1100,P",mortgageRate:"0.0425",mortgageTerm:"30",insurance:"0.007,700.00,P",propertyTax:"0.01,1000.00,P",vacancyRate:"0.05",majorMinorCapEx:"0.1,100,P"},N=function(e){var t=e.children,a=Object(c.useState)(k),r=Object(b.a)(a,2),s=r[0],l=r[1],i=Object(c.useState)({}),o=Object(b.a)(i,2),u=o[0],j=o[1],d=Object(c.useState)({}),m=Object(b.a)(d,2),h=m[0],p=m[1],x=Object(c.useState)(null),O=Object(b.a)(x,2),v=O[0],y=O[1];Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search),t={};Object.keys(k).forEach((function(a){"name"===a&&null!==e.get(a)&&(document.title="Reval - ".concat(e.get(a))),t[a]=e.get(a)?e.get(a):k[a]})),w(t)}),[]);var w=function(e){l(e);var t=P(e),a=Object(b.a)(t,2),n=a[0],c=a[1];j(n),p(c)};return Object(n.jsx)(F.Provider,{value:{data:s,setDataValue:function(e,t){"name"===e&&(document.title="Reval - ".concat(t));var a=Object(f.a)(Object(f.a)({},s),{},Object(g.a)({},e,t));w(a)},evalData:u,warnings:h,valueCompare:v,setValueCompare:function(e){y(e?u:null)}},children:t})},T=a(56),M=function(e){var t=e.label,a=e.name,r=e.isStatic,s=void 0!==r&&r,i=Object(c.useContext)(F).warnings;return Object(n.jsxs)("label",{children:[Object(n.jsx)("span",{children:t}),s&&Object(n.jsx)(v,{title:"Static Field",icon:Object(n.jsx)(l.b,{}),iconClass:"text-muted",children:Object(n.jsx)("span",{children:"This field is static and can't be changed"})}),void 0!==T[a]&&Object(n.jsx)(v,{title:"Info",icon:Object(n.jsx)(d.c,{}),iconClass:"text-muted",children:Object(n.jsx)("span",{children:T[a]})}),void 0!==i[a]&&Object(n.jsx)(v,{title:"Warning",icon:Object(n.jsx)(d.a,{}),iconClass:"text-warning",children:Object(n.jsx)("span",{children:i[a]})})]})},R=["homeValue","rent","term","cashFlow","cashOnCash","EquityYearOne","mediumTerm","mediumReturn"],S=function(e){var t=e.name,a=e.valueType,r=Object(c.useContext)(F),s=r.evalData,l=r.valueCompare;if(null===l||"name"===t)return null;var i=s[t]-l[t];if(0===i)return null;var o=!1,u=R.includes(t);return(i>0&&u||i<0&&!u)&&(o=!0),Object(n.jsxs)("span",{className:"pl-2 ".concat(o?"text-success":"text-danger"),children:[i>0?"+":"",w(i,a)]})},E=function(e){var t=e.value,a=e.toggle,c=e.leftIcon,r=e.rightIcon,s=e.size,l=void 0===s?40:s,i={height:"".concat(l,"px"),width:"".concat(l,"px"),padding:0};return Object(n.jsxs)("div",{className:"btn-group",children:[Object(n.jsx)("button",{className:"btn btn-outline-primary icon ".concat(t?"":"active"),type:"button",style:i,onClick:function(){return t?a():null},children:c}),Object(n.jsx)("button",{className:"btn btn-outline-primary icon ".concat(t?"active":""),type:"button",style:i,onClick:function(){return t?null:a()},children:r})]})},V=function(e){var t=e.name,a=e.label,r=void 0===a?null:a,s=e.value,l=e.valueType,i=void 0===l?"currency":l,o=e.inline,u=void 0!==o&&o,j=e.valueAndPercent,m=void 0!==j&&j,h=e.percentValueOf,x=void 0===h?null:h,O=Object(c.useContext)(F).setDataValue,v=Object(c.useState)(!1),g=Object(b.a)(v,2),f=g[0],y=g[1],P=Object(c.useState)(""),k=Object(b.a)(P,2),N=k[0],T=k[1],R=Object(c.useState)(""),V=Object(b.a)(R,2),D=V[0],L=V[1],A=s.split(","),q=Object(b.a)(A,3),I=q[0],Y=q[1],z=q[2],U=Object(c.useCallback)((function(e){T(m?"P"===z?I:Y:e)}),[T,Y,z,m,I]);if(Object(c.useEffect)((function(){U(s)}),[s,U]),void 0==s)return null;var B=function(e){var a=s.split(",");a[2]=e,U("P"===e?I:Y),O(t,a.join(",")),H(a)},H=function(e){var a=new URLSearchParams(window.location.search);a.set(t,e),window.history.replaceState({},"","?"+a.toString())};return Object(n.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),0===D.length){var a=m?"P"===z?[N,Y,z].join(","):[I,N,z].join(","):N;H(a),O(t,a),y(!1)}},children:Object(n.jsxs)("div",{className:"form-group ".concat(u?"inline":""),children:[r&&Object(n.jsx)(M,{label:r,name:t}),Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{className:"flex-fill",children:f?Object(n.jsx)(p,{value:N,onChange:function(e){var t=e.target.value;L(""),"text"!==i&&isNaN(t)&&L("Must be a valid number."),T(t)},error:D,onClose:function(){y(!1),L(""),U(m?"P"===z?I:Y:s)}}):Object(n.jsxs)("div",{className:"text-value",onClick:function(){return y(!0)},children:[m?w(C(s,x),"V"):w(s,i),Object(n.jsx)(S,{name:t,valueType:m?"V":i})]})}),m&&Object(n.jsx)(E,{value:"P"!==z,toggle:function(){B("P"===z?"V":"P")},leftIcon:Object(n.jsx)(d.e,{}),rightIcon:Object(n.jsx)(d.b,{}),size:32})]})]})})},D=a(76),L=a(58),A=function(){var e=Object(c.useContext)(m).isDarkMode,t=Object(c.useState)(!1),a=Object(b.a)(t,2),r=a[0],s=a[1],i=function(){return s(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a.Link,{onClick:function(){return s(!0)},children:"tutorial"}),Object(n.jsxs)(D.a,{show:r,onHide:i,className:e?"is-dark":"",children:[Object(n.jsx)(D.a.Header,{closeButton:!0,children:Object(n.jsx)(D.a.Title,{children:"Tutorial"})}),Object(n.jsxs)(D.a.Body,{children:[Object(n.jsx)("p",{children:"A rental property evaluator with sharable links."}),Object(n.jsx)("h4",{children:"Editing Fields"}),Object(n.jsxs)("p",{children:["All non static fields are editable. Static fields are denoted with a"," ",Object(n.jsx)(l.b,{})," icon next to the label. To edit a field click on the displayed text, make changes in the text input and hit ENTER on your keyboard to submit the changes. Notice that all calculations a re-run, and corresponding fields are updated."]}),Object(n.jsx)("p",{children:"There are two types of editable fields. Single value, and fixed value and percent. Fixed value and percent fields contain a toggle switch that allows you to quickly switch between a fixed value or a percent."}),Object(n.jsx)("h4",{children:"Sharing links"}),Object(n.jsx)("p",{children:"Want to share your calculations with someone? Each edit updates the link with the new value. Just send them the link after you make all your changes."}),Object(n.jsx)("h4",{children:"Dark Mode"}),Object(n.jsx)("p",{children:"Toggle between light and dark mode from the settings dropdown."}),Object(n.jsx)("h4",{children:"Value Compare"}),Object(n.jsx)("p",{children:"Value compare allows you go see how changing fields will effect other fields. Click the Set button in the settings dropdown, make changes to some fields and compare the difference from when value compare was set."}),Object(n.jsx)("h4",{children:"Other"}),Object(n.jsxs)("p",{children:["Have a question, improvement, feature request or find a bug? Submit an issue"," ",Object(n.jsx)("a",{href:"https://github.com/kmccullen97/reval/issues",children:"here"}),"."]})]}),Object(n.jsx)(D.a.Footer,{children:Object(n.jsx)(L.a,{variant:"secondary",onClick:i,children:"Got it"})})]})]})},q=function(){var e=Object(c.useContext)(m),t=e.isDarkMode,a=e.toggleDarkMode,r=Object(c.useContext)(F),s=r.data,l=r.valueCompare,b=r.setValueCompare;return Object(n.jsxs)(i.a,{expand:"lg",variant:t?"dark":"light",children:[Object(n.jsxs)(i.a.Brand,{className:"d-flex",children:[Object(n.jsx)(j.a,{size:30,color:t?"white":"black"}),Object(n.jsx)(V,{name:"name",label:"",value:s.name,valueType:"text"})]}),Object(n.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(i.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsx)(o.a,{className:"mr-auto"}),Object(n.jsxs)(o.a,{className:"align-content-center",children:[Object(n.jsx)(A,{}),Object(n.jsxs)(u.a,{title:"Settings",alignRight:!0,className:t?"dark":"",children:[Object(n.jsxs)("div",{className:"navbar-setting-item",children:[Object(n.jsx)("span",{className:"label",children:"Value Compare"}),Object(n.jsxs)("div",{children:[null!==l&&Object(n.jsx)("button",{className:"btn btn-light btn-sm mr-2",onClick:function(){return b(!1)},title:"Remove",children:"Remove"}),Object(n.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return b(!0)},children:"Set"})]})]}),Object(n.jsxs)("div",{className:"navbar-setting-item",children:[Object(n.jsx)("span",{className:"label",children:"Theme"}),Object(n.jsx)(E,{value:t,toggle:a,leftIcon:Object(n.jsx)(d.f,{}),rightIcon:Object(n.jsx)(d.d,{}),size:32})]})]})]})]})]})},I=function(e){var t=e.name,a=e.value,c=e.label,r=e.type,s=void 0===r?"currency":r;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)(M,{label:c,name:t,isStatic:!0}),Object(n.jsxs)("div",{className:"text-value static",children:[w(a,s),Object(n.jsx)(S,{name:t,valueType:s})]})]})},Y=function(){var e=Object(c.useContext)(F),t=e.data,a=e.evalData;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)(V,{name:"homeValue",label:"Home Value",value:t.homeValue}),Object(n.jsx)(V,{name:"purchasePrice",label:"Purchase Price",value:t.purchasePrice})]}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)(V,{name:"downPayment",label:"Down Payment",value:t.downPayment,percentValueOf:a.purchasePrice,valueAndPercent:!0}),Object(n.jsx)(V,{name:"closingCosts",label:"Closing Costs",value:t.closingCosts,percentValueOf:a.purchasePrice,valueAndPercent:!0}),Object(n.jsx)(V,{name:"additionalCosts",label:"Additional Costs",value:t.additionalCosts})]}),Object(n.jsx)("div",{className:"section",children:Object(n.jsx)(I,{name:"upFrontCost",label:"Up Front Cost",value:a.upFrontCost})})]})},z=a(59),U=function(e){var t=e.children,a=Object(c.useState)(!1),r=Object(b.a)(a,2),s=r[0],l=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"div-link",onClick:function(){return l(!s)},"aria-controls":"example-collapse-text","aria-expanded":s,children:s?"see less":"see more"}),Object(n.jsx)(z.a,{in:s,children:t})]})},B=function(){var e=Object(c.useContext)(F),t=e.data,a=e.evalData;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"section",children:Object(n.jsx)(V,{name:"rent",label:"Rent",value:t.rent})}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsxs)("div",{className:"collapsible",children:[Object(n.jsx)(V,{name:"propertyManager",label:"Property Manager",value:t.propertyManager,percentValueOf:a.rent,valueAndPercent:!0}),Object(n.jsx)(U,{children:Object(n.jsxs)("div",{className:"indent",children:[Object(n.jsx)(V,{name:"leaseLength",label:"Lease Length",value:t.leaseLength,valueType:"number",inline:!0}),Object(n.jsx)(V,{name:"leaseRenewalFee",label:"Lease Renewal Fee",value:t.leaseRenewalFee,percentValueOf:a.rent,valueAndPercent:!0}),Object(n.jsx)(V,{name:"turnover",label:"Turnover",value:t.turnover,valueType:"number",inline:!0}),Object(n.jsx)(V,{name:"procurementFee",label:"ProcurementFee",value:t.procurementFee,percentValueOf:a.rent,valueAndPercent:!0}),Object(n.jsx)(I,{name:"additionalPropertyManagementExpense",label:"Additional Cost",value:a.additionalPropertyManagementExpense})]})})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"collapsible",children:[Object(n.jsx)(I,{name:"mortgagePayment",label:"Mortgage",value:a.mortgagePayment}),Object(n.jsx)(U,{children:Object(n.jsxs)("div",{className:"indent",children:[Object(n.jsx)(V,{name:"mortgageRate",label:"Rate",value:t.mortgageRate,valueType:"percent",inline:!0}),Object(n.jsx)(V,{name:"mortgageTerm",label:"Term",value:t.mortgageTerm,valueType:"number",inline:!0})]})})]}),Object(n.jsx)(V,{name:"insurance",label:"Insurance",value:t.insurance,percentValueOf:a.purchasePrice,valueAndPercent:!0}),Object(n.jsx)(V,{name:"propertyTax",label:"Property Taxes",value:t.propertyTax,percentValueOf:a.purchasePrice,valueAndPercent:!0})]})]})]})},H=function(){var e=Object(c.useContext)(F),t=e.data,a=e.evalData;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)(I,{name:"cashFlow",label:"Cash Flow",value:a.cashFlow}),Object(n.jsx)(I,{name:"cashOnCash",label:"Cash on Cash",value:a.cashOnCash,type:"percent"}),Object(n.jsx)(I,{name:"equityYearOne",label:"Equity Y1",value:a.equityYearOne})]}),Object(n.jsxs)("div",{className:"section",children:[Object(n.jsx)(V,{name:"vacancyRate",label:"Vacancy Rate",value:t.vacancyRate,valueType:"percent"}),Object(n.jsx)(V,{name:"majorMinorCapEx",label:"Major Minor CapEx",value:t.majorMinorCapEx,percentValueOf:a.rent,valueAndPercent:!0}),Object(n.jsx)(I,{name:"mediumTerm",label:"Medium Term",value:a.mediumTerm}),Object(n.jsx)(I,{name:"mediumReturn",label:"Medium Return",value:a.mediumReturn,type:"percent"})]})]})},J=(a(70),function(){var e=Object(c.useContext)(m).isDarkMode;return Object(n.jsxs)("div",{className:"wrapper overflow-auto ".concat(e?"dark":""),children:[Object(n.jsx)("div",{children:Object(n.jsx)(q,{})}),Object(n.jsx)("div",{className:"content container my-3",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(Y,{})}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(B,{})}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)(H,{})})]})}),Object(n.jsx)("div",{className:"text-right p-2",children:Object(n.jsxs)("span",{className:"text-muted",children:[Object(n.jsx)("a",{href:"https://github.com/kmccullen97/reval",className:"mr-2 text-muted",children:Object(n.jsx)(l.a,{})}),Object(n.jsxs)("span",{children:["v","1.1.0"]})]})})]})}),W=function(){return Object(n.jsx)(h,{children:Object(n.jsx)(N,{children:Object(n.jsx)(J,{})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(n.jsx)(W,{}),document.getElementById("root")),G()}},[[71,1,2]]]);
//# sourceMappingURL=main.5eb893ee.chunk.js.map