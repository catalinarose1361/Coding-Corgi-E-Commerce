(this.webpackJsonpprojectthree=this.webpackJsonpprojectthree||[]).push([[0],{198:function(e,a,t){e.exports=t(411)},203:function(e,a,t){},285:function(e,a,t){e.exports=t.p+"static/media/coding-corgi-logo-192h.42608608.png"},303:function(e,a,t){e.exports=t.p+"static/media/chris-ried-ieic5Tq8YMk-unsplash.e586ae79.jpg"},304:function(e,a,t){e.exports=t.p+"static/media/dhaval-parmar-dnPniNPUe4o-unsplash.fd04c1e1.jpg"},305:function(e,a,t){e.exports=t.p+"static/media/ilya-pavlov-OqtafYT5kTw-unsplash.25f51426.jpg"},306:function(e,a,t){e.exports=t.p+"static/media/luca-bravo-XJXWbfSo2f0-unsplash.d20a7909.jpg"},410:function(e,a,t){},411:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(203),t(6)),s=(t(91),t(44)),u=(t(23),t(8)),i=(t(31),t(7)),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{span:6}),r.a.createElement(i.a,{span:12},r.a.createElement("a",{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter fa-3x",style:{margin:15}})),r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f fa-3x",style:{margin:15}})),r.a.createElement("a",{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-google-plus-g fa-3x",style:{margin:15}})),r.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram fa-3x",style:{margin:15}}))),r.a.createElement(i.a,{span:6})),r.a.createElement("p",null,"Terms & Conditions | Feedback | Contact Us"),r.a.createElement("p",null,"Ant Design \xa92018 Created with Ant UED"))},d=(t(208),t(51)),E=t(4),p=t(415),g=t(416),f=t(417),b=t(418),h=t(419),v=t(420),y=t(421),w=t(422),C=t(30),O=t.n(C),j=t(196),S=t(20),A=function(e,a){switch(a.type){case"LOGIN_USER":return Object(S.a)({},e,{user:Object(S.a)({},e.user,{},a.payload)});case"LOGOUT_USER":return Object(S.a)({},e,{user:{}});case"CART_ADD_SERVICE":return console.log("REDUCER",a),e.cart.filter((function(e){return e._id===a.payload._id})).length?e:Object(S.a)({},e,{cart:[].concat(Object(j.a)(e.cart),[a.payload])});case"CART_REMOVE_SERVICE_BY_ID":return console.log("REDUCER",a),Object(S.a)({},e,{cart:e.cart.filter((function(e){return e._id!==a.payload}))})}},N={cart:[],user:{billingAddress:[],service:[],email:"",firstName:"",lastName:""},serviceIds:function(){return this.cart.map((function(e){return e._id}))},cartTotal:function(){return this.cart.reduce((function(e,a){return e+a.price}),0)}},k=Object(n.createContext)(),_=function(e){var a=e.children;return r.a.createElement(k.Provider,{value:Object(n.useReducer)(A,N)},a)},x=function(){return Object(n.useContext)(k)},I=function(e){var a=x(),t=Object(E.a)(a,2),n=t[0];t[1];return r.a.createElement(d.a,{defaultSelectedKeys:["1"],mode:"inline",theme:"dark"},r.a.createElement(d.a.Item,null,r.a.createElement(p.a,null),r.a.createElement("span",null,"Home ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/"})),!n.user._id&&r.a.createElement(d.a.Item,null,r.a.createElement(f.a,null),r.a.createElement("span",null,"Login/Signup ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/loginSignup"})),n.user._id&&r.a.createElement(d.a.Item,{onClick:function(){O.a.post("/auth/logout").then((function(e){window.location.assign("/")}))}},r.a.createElement("span",null,r.a.createElement(b.a,null)," Logout ",r.a.createElement(g.a,null))),r.a.createElement(d.a.Item,null,r.a.createElement(h.a,null),r.a.createElement("span",null,"Browse Services ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/browse"})),n.user._id&&r.a.createElement(d.a.Item,null,r.a.createElement(v.a,null),r.a.createElement("span",null,"My Cart ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/cart"})),n.user._id&&r.a.createElement(d.a.Item,null,r.a.createElement("span",null,r.a.createElement(y.a,null)," Order History ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/OrderHistory"})),r.a.createElement(d.a.Item,null,r.a.createElement(w.a,null),r.a.createElement("span",null,"About Us ",r.a.createElement(g.a,null)),r.a.createElement(o.b,{to:"/about"})))},R=s.a.Sider,F=function(){return r.a.createElement(R,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,a){console.log(e,a)}},r.a.createElement(I,null))},T=function(){return r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:t(285),alt:"logo",style:{margin:25}}))},L=s.a.Header,D=function(){return r.a.createElement(L,{className:"site-layout-sub-header-background",style:{padding:0,backgroundColor:"#FFFFFF",height:230,justifyContent:"center",display:"flex"}},r.a.createElement(T,null))},B=t(56),P=(t(18),t(5)),M=(t(287),t(183)),V=function(){return r.a.createElement(M.a,{autoplay:!0,style:{height:260,width:775,display:"flex"}},r.a.createElement("div",{style:{color:"#EAF0CE"}},r.a.createElement("img",{alt:"coding",src:t(303),style:{width:775}})),r.a.createElement("div",{style:{color:"#EAF0CE"}},r.a.createElement("img",{alt:"coding",src:t(304),style:{width:775}})),r.a.createElement("div",{style:{color:"#EAF0CE"}},r.a.createElement("img",{alt:"coding",src:t(305),style:{width:775}})),r.a.createElement("div",{style:{color:"#EAF0CE"}},r.a.createElement("img",{alt:"coding",src:t(306),style:{width:775}})))},z=function(e){return r.a.createElement(o.b,{to:"/browse/".concat(e.title)},r.a.createElement(P.a,{block:!0,type:"primary",shape:"round",size:"large",style:{marginTop:15}},e.title," ",r.a.createElement(g.a,null)))},U=["React","Javascript","HTML"],G=["Node.js","MySQL","MongoDB"],W=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement(V,null)),r.a.createElement("div",{className:"container",style:{marginTop:25}},r.a.createElement("h4",null,"Top Categories",r.a.createElement(o.b,{to:"/categories"},r.a.createElement(P.a,{size:"small",shape:"round",style:{marginLeft:10}},"All Categories ",r.a.createElement(g.a,null)))),r.a.createElement(u.a,null,r.a.createElement(i.a,{span:11},U.map((function(e,a){return r.a.createElement(z,{key:a+"cats-1",title:e})}))),r.a.createElement(i.a,{span:2}),r.a.createElement(i.a,{span:11},G.map((function(e,a){return r.a.createElement(z,{key:a+"cats-2",title:e})}))))))},q=(t(309),t(195)),H=(t(100),t(13)),$=(t(101),t(19)),J=t(42),Y={labelCol:{span:8},wrapperCol:{span:16}},Q={wrapperCol:{offset:8,span:16}},K=function(e){var a=x(),t=Object(E.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)({username:"",password:""}),s=Object(E.a)(o,2),u=s[0],i=s[1],m=function(e){i(Object(S.a)({},u,Object(J.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,l.user._id&&r.a.createElement(B.a,{to:"/"}),r.a.createElement("h1",null,"Login"),r.a.createElement(H.a,Object.assign({},Y,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(H.a.Item,{label:"Username",name:"username",id:"username",placeholder:"Username",value:u.username,onChange:m,rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement($.a,{name:"username"})),r.a.createElement(H.a.Item,{label:"Password",name:"password",placeholder:"password",type:"password",value:u.password,onChange:m,rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement($.a.Password,{name:"password"})),r.a.createElement(H.a.Item,Object.assign({},Q,{name:"remember",valuePropName:"checked"}),r.a.createElement(q.a,null,"Remember me")),r.a.createElement(H.a.Item,Q,r.a.createElement(P.a,{type:"primary",htmlType:"submit",onClick:function(e){e.preventDefault(),O.a.post("/auth/login",Object(S.a)({},u,{username:u.username,password:u.password})).then((function(e){c({type:"LOGIN_USER",payload:e.data}),window.location.assign("/")})).catch((function(e){console.log(e)}))}},"Submit"))))},X={labelCol:{span:8},wrapperCol:{span:16}},Z={wrapperCol:{offset:8,span:16}},ee=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",username:"",password:"",confirmPassword:"",redirectTo:null}),a=Object(E.a)(e,2),t=a[0],l=a[1],c=function(e){l(Object(S.a)({},t,Object(J.a)({},e.target.name,e.target.value)))};return t.redirectTo?r.a.createElement(B.a,{to:{pathname:t.redirectTo}}):r.a.createElement("div",null,r.a.createElement("h1",null,"Signup"),r.a.createElement(H.a,Object.assign({labelCol:{span:4},wrapperCol:{span:14}},X,{initialValues:{size:"medium"}}),r.a.createElement(H.a.Item,{label:"First Name",name:"firstName",id:"firstName",type:"text",placeholder:"First Name",value:t.firstName,onChange:c,rules:[{required:!0,message:"Please input a first name!"}]},r.a.createElement($.a,{name:"firstName"})),r.a.createElement(H.a.Item,{label:"Last Name",name:"lastName",id:"lastName",type:"text",placeholder:"Last Name",value:t.lastName,onChange:c,rules:[{required:!0,message:"Please input a last name!"}]},r.a.createElement($.a,{name:"lastName"})),r.a.createElement(H.a.Item,{label:"Email",name:"email",id:"email",type:"text",placeholder:"Email",value:t.email,onChange:c,rules:[{required:!0,message:"Please input an email!"}]},r.a.createElement($.a,{name:"email"})),r.a.createElement(H.a.Item,{label:"Username",name:"username",id:"username",type:"text",placeholder:"Username",value:t.username,onChange:c,rules:[{required:!0,message:"Please input a username!"}]},r.a.createElement($.a,{name:"username"})),r.a.createElement(H.a.Item,{label:"Password",name:"password",placeholder:"password",type:"password",value:t.password,onChange:c,rules:[{required:!0,message:"Please input a password!"}]},r.a.createElement($.a.Password,{name:"password"})),r.a.createElement(H.a.Item,Z,r.a.createElement(P.a,{type:"primary",htmlType:"submit",onClick:function(e){e.preventDefault(),O.a.post("/auth",Object(S.a)({},t,{username:t.username,password:t.password})).then((function(e){e.data.errmsg?console.log("username already taken"):l(Object(S.a)({},t,{redirectTo:"/Login"}))})).catch((function(e){console.log(e)}))}},"Submit"))))},ae=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Would you like to Login or Signup?"),r.a.createElement(o.b,{to:"/Login"},r.a.createElement(P.a,{type:"primary",shape:"round",size:"large"},r.a.createElement("span",null,"LOGIN ",r.a.createElement(g.a,null)))),r.a.createElement(o.b,{to:"/Signup"},r.a.createElement(P.a,{type:"primary",style:{marginLeft:20},shape:"round",size:"large"},r.a.createElement("span",null,"SIGNUP ",r.a.createElement(g.a,null)))))},te=function(){return console.log("we are in getServicess"),O.a.get("/api/services")},ne=function(){return O.a.get("/auth")},re=function(){return console.log("we are in getServicess"),O.a.get("/api/orderHistory")},le=(t(60),t(28)),ce=(t(59),t(29)),oe=(t(394),function(e){var a=e.service,t=e.checkout,n=e.selected,l=e.handleCart,c=a.reviews[0].review;return r.a.createElement(i.a,{xs:24,sm:20,md:16,lg:12,xl:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," ",a.language),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $",a.price,"/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," ",a.coder),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By ",a.reviews[0].reviewer," :")," ",a.reviews[0].text),r.a.createElement(ce.a,{defaultValue:c})),!t&&(n?r.a.createElement(P.a,{danger:!0,onClick:function(){l(a)},"data-id":a._id,shape:"round"},"Remove"):r.a.createElement(P.a,{onClick:function(){l(a)},"data-id":a._id,shape:"round"},"Add to Cart"))))});oe.defaultProps={checkout:!1,selected:!1,handleCart:function(){}};var se=oe,ue=t(3);t(27);ue.a.configure();var ie=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),o=Object(E.a)(c,2),s=o[0],i=o[1];Object(n.useEffect)((function(){te().then((function(e){console.log("res",e),i(e.data)})).catch((function(e){return console.log(e)}))}),[]);var m=function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col",size:"md-6"},r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},s.map((function(e,a){return r.a.createElement(se,{key:a+"-service",service:e,handleCart:m})})))))))};ue.a.configure();var me=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],n=a[1],l=function(e){Object(ue.a)("Removed from Cart",{type:"error",autoClose:2e3}),n({type:"CART_REMOVE_SERVICE_BY_ID",payload:e._id})},c=t.cart.reduce((function(e,a){return e+a.price}),0);return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(v.a,null)," Your Cart"),r.a.createElement(u.a,{gutter:16},t.cart[0]?t.cart.map((function(e,a){return r.a.createElement(se,{key:a+"-service",service:e,selected:!0,handleCart:l})})):r.a.createElement("div",{className:"container",style:{padding:25,display:"flex",justifyContent:"center"}},r.a.createElement("h4",null,"You don't have anything in your cart!"))),r.a.createElement(u.a,null,r.a.createElement("h5",null,"How do payments work?"),r.a.createElement("p",null,"After you submit your order, you will be emailed an invoice. The first hour of each service will be billed upfront, and any additional time spent by the coder will be recorded and billed to you after the service is fully delivered."),r.a.createElement("p",null,"We do not handle payments, those are between you and the coder providing the service. We do however keep in close contact with our coders and if they do not receive payment within 10 days you will receive a penalty fee invoice from us.")),r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8,offset:8},r.a.createElement("h4",null,"Due Up front: $",c)),r.a.createElement(i.a,{span:8},r.a.createElement(o.b,{to:"/checkout"},r.a.createElement(P.a,{block:!0,onClick:function(){t.cart.map((function(e){return e._id}))},type:"primary",shape:"round",size:"large"},"CONTINUE TO CHECKOUT")))))},de=t(423),Ee=t(424),pe=t(425),ge=t(426),fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(w.a,null)," About Us"),r.a.createElement("div",{className:"container",style:{width:400,textAlign:"center"}},r.a.createElement("h3",null,r.a.createElement(de.a,null)," Who"),r.a.createElement("p",null,"We are a group of Full-Stack Web Development Bootcamp graduates that decided we wanted to offer our services to other grads that may be missing out on having a tutor or just need someone else to figure out a problem for you."),r.a.createElement("h3",null,r.a.createElement(Ee.a,null)," What"),r.a.createElement("p",null,"We all have different strengths in the coding world, ",r.a.createElement("br",null),"and we each offer services in what we feel most proficient in."),r.a.createElement("h3",null,r.a.createElement(pe.a,null)," Where"),r.a.createElement("p",null,"With everything being remote capable these days, ",r.a.createElement("br",null),"does it matter where we are?"),r.a.createElement("h3",null,r.a.createElement(ge.a,null)," Contact"),r.a.createElement("p",null,"When you purchase a service you will receive the contact information for the individual you purchased that service from, but if you have a question about us that can't be answered by Google, you can give us a call at 000-000-0000 or shoot us an email at"," ",r.a.createElement("a",{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer"},"inquiries@codingcorgis.com"))))},be=["React","Javascript","HTML","CSS","SASS"],he=["Node.js","MySQL","MongoDB","Redux","APIs"],ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"All Categories"),r.a.createElement(u.a,null,r.a.createElement(i.a,{span:11},be.map((function(e){return r.a.createElement(z,{title:e})}))),r.a.createElement(i.a,{span:2}),r.a.createElement(i.a,{span:11},he.map((function(e){return r.a.createElement(z,{title:e})})))))},ye=t(77),we=t.n(ye),Ce=t(112),Oe=(t(412),t(142));ue.a.configure();var je=Oe.a.Option,Se={labelCol:{span:4},wrapperCol:{span:20}},Ae=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(Object(S.a)({},t.user,{billingAddress:t.user.billingAddress[0]||{_id:""}})),s=Object(E.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)(!1),g=Object(E.a)(p,2),f=g[0],b=g[1],h=function(e){Object(ue.a)("Removed from Cart",{type:"error",autoClose:2e3}),l({type:"CART_REMOVE_SERVICE_BY_ID",payload:e._id})},v=function(e){var a=e.target;d(Object(S.a)({},m,Object(J.a)({},a.name,a.value)))},y=function(){var e=Object(Ce.a)(we.a.mark((function e(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),setTimeout((function(){b(!1)}),8e3),e.prev=1,e.next=4,O.a.post("/api/checkout",Object(S.a)({},m,{purchased_service_ids:t.serviceIds()}));case 4:e.sent,Object(ue.a)("Purchase Complete! A confirmation email has been sent to ".concat(t.user.email),{type:"success",autoClose:8e3}),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{gutter:16},t.cart.map((function(e,a){return r.a.createElement(se,{key:a+"-service",service:e,selected:!0,handleCart:h})}))),r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement("h5",null,"Remember!"),r.a.createElement("p",null,"We do not handle payments, those are between you and the coder providing the service. We do however keep in close contact with our coders and if they do not receive payment within 10 days you will receive a penalty fee invoice from us."),r.a.createElement("h4",null,"Due Up front: $",t.cartTotal())),r.a.createElement(i.a,{span:16},r.a.createElement("h5",null,"Info for the Coder:"),r.a.createElement(H.a,Se,r.a.createElement(H.a.Item,{rules:[{required:!0}],label:"First Name",type:"text",id:"firstName",name:"firstName",value:m.firstName,onChange:v},r.a.createElement($.a,{name:"firstName",placeholder:"First Name"})),r.a.createElement(H.a.Item,{rules:[{required:!0}],label:"Last Name",type:"text",id:"lastName",name:"lastName",value:m.lastName,onChange:v},r.a.createElement($.a,{name:"firstName",placeholder:"Last Name"})),r.a.createElement(H.a.Item,{rules:[{required:!0}],label:"Email",type:"text",id:"email",name:"email",value:m.email,onChange:v},r.a.createElement($.a,{name:"email",placeholder:"Email"})),r.a.createElement(H.a.Item,{label:"Order Details",type:"text",id:"details",name:"details",value:m.details,onChange:v},r.a.createElement($.a.TextArea,{name:"details",placeholder:"Please give as much initial detail about what you require from this service and the Coder will be in contact if they need any more information"})),r.a.createElement(H.a.Item,{rules:[{required:!0}],label:"Billing Address"},r.a.createElement(Oe.a,{value:m.billingAddress._id,style:{width:200,marginBottom:16,marginRight:16},onChange:function(e){console.log("selected ".concat(e))}},t.user.billingAddress.map((function(e,a){return r.a.createElement(je,{key:a+"-billing",value:e._id},e.street)}))),r.a.createElement(o.b,{to:{pathname:"/AddAddress",state:{type:"billingAddress"}}},"Add Billing Address"))),r.a.createElement(P.a,{block:!0,shape:"round",type:"primary",size:"large",onClick:y,loading:f},"SUBMIT ORDER"))))},Ne=t(427),ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(Ne.a,null)," Checkout"),r.a.createElement(Ae,null))},_e=t(428);ue.a.configure();var xe={labelCol:{span:8},wrapperCol:{span:16}},Ie={wrapperCol:{offset:8,span:16}};var Re=function(e){var a=e.location.state.type,t=x(),l=Object(E.a)(t,2),c=l[0],s=l[1],u=Object(n.useState)({street:"",city:"",state:"",country:"",zip_code:""}),i=Object(E.a)(u,2),m=i[0],d=i[1],p=function(e){var a=e.target;d(Object(S.a)({},m,Object(J.a)({},a.name,a.value)))},g=function(){var e=Object(Ce.a)(we.a.mark((function e(){var t,n;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/api/address/".concat(c.user._id,"/").concat(a),e.next=4,O.a.post(t,m);case 4:n=e.sent,s({type:"LOGIN_USER",payload:n.data}),Object(ue.a)("Added address!",{type:"success",autoClose:2e3}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Object(ue.a)("Must be logged in to add an Address!",{type:"error",autoClose:2e3}),console.warn(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement(pe.a,null)," Add Billing Address"),r.a.createElement(H.a,Object.assign({},xe,{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(H.a.Item,{label:"Street"},r.a.createElement($.a,{type:"text",placeholder:"street",name:"street",onChange:p})),r.a.createElement(H.a.Item,{label:"City"},r.a.createElement($.a,{type:"text",placeholder:"city",name:"city",onChange:p})),r.a.createElement(H.a.Item,{label:"State"},r.a.createElement($.a,{type:"text",placeholder:"state",name:"state",onChange:p})),r.a.createElement(H.a.Item,{label:"Country"},r.a.createElement($.a,{type:"text",placeholder:"country",name:"country",onChange:p})),r.a.createElement(H.a.Item,{label:"Zip Code"},r.a.createElement($.a,{type:"text",placeholder:"zip code",name:"zip_code",onChange:p})),r.a.createElement(H.a.Item,Ie,r.a.createElement(P.a,{type:"primary",shape:"round",size:"large",onClick:g},"Save"))),r.a.createElement(o.b,{to:"/checkout"},r.a.createElement(P.a,{block:!0,shape:"round",size:"large"},r.a.createElement(_e.a,null),"Return to Checkout")))},Fe=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),l=Object(E.a)(t,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){re().then((function(e){o(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History"),c.map((function(e){return r.a.createElement("div",{className:"list-group-item"},r.a.createElement("div",{className:"list-group-item"},r.a.createElement("p",null,"Order Date: ",e.date),r.a.createElement("div",{className:"list-group"},e.service.map((function(e,a){return r.a.createElement("div",{className:"list-group-item"},r.a.createElement(se,{key:a+"-s",service:e,checkout:!0}))})))))})))};ue.a.configure();var Te=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=s[0],d=s[1];Object(n.useEffect)((function(){te().then((function(e){console.log("res",e),d(e.data)})).catch((function(e){return console.log(e)}))}),[]);return console.log("services",m),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," React.js"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $150/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :"),"I love web developers!"," "),r.a.createElement(ce.a,{defaultValue:2})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36ee",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Le=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=(s[0],s[1]);Object(n.useEffect)((function(){te().then((function(e){m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," Vanilla Javascript"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $75/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :")," ","Fantastic Service"),r.a.createElement(ce.a,{defaultValue:2})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36ec",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Back to All Services"))))};ue.a.configure();var De=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=(s[0],s[1]);Object(n.useEffect)((function(){te().then((function(e){m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," HTML"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $25/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :")," ","This service fit my needs"),r.a.createElement(ce.a,{defaultValue:5})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36ed",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Be=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=(s[0],s[1]);Object(n.useEffect)((function(){te().then((function(e){m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," Node.js"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $125/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :"),"Ok I guess..."," "),r.a.createElement(ce.a,{defaultValue:3})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36ef",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Pe=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=(s[0],s[1]);Object(n.useEffect)((function(){te().then((function(e){m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," MySQL"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $75/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :"),"What a rip off!"," "),r.a.createElement(ce.a,{defaultValue:2})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36f0",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Me=function(){var e=x(),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(E.a)(c,2),m=(s[0],s[1]);Object(n.useEffect)((function(){te().then((function(e){m(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement(i.a,{span:8},r.a.createElement(le.a,{bordered:!1,style:{marginBottom:15}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Language:")," MongoDB"),r.a.createElement("li",null,r.a.createElement("strong",null,"Price:")," $100/hr"),r.a.createElement("li",null,r.a.createElement("strong",null,"Coder:")," Amber"),r.a.createElement("li",null,r.a.createElement("strong",null,"Top Review By Abby :"),"Pure Genius"," "),r.a.createElement(ce.a,{defaultValue:4})),r.a.createElement(P.a,{onClick:function(){!function(e){if(t.user._id)return Object(ue.a)("Added to Cart",{type:"success",autoClose:2e3}),l({type:"CART_ADD_SERVICE",payload:e});Object(ue.a)("Must be logged in to add services to cart",{type:"error",autoClose:2e3})}()},"data-id":"5e9cb8646d73cb38df5a36f1",shape:"round"},"Add to Cart")))),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Ve=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),l=Object(E.a)(t,2),c=(l[0],l[1]);Object(n.useEffect)((function(){te().then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement("h3",null,"No Services available for this Language yet!")),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var ze=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),l=Object(E.a)(t,2),c=(l[0],l[1]);Object(n.useEffect)((function(){te().then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement("h3",null,"No Services available for this Language yet!")),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Ue=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),l=Object(E.a)(t,2),c=l[0],s=l[1];Object(n.useEffect)((function(){te().then((function(e){console.log("res",e),s(e.data)})).catch((function(e){return console.log(e)}))}),[]);return console.log("services",c),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement("h3",null,"No Services available for this Language yet!")),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))};ue.a.configure();var Ge=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),l=Object(E.a)(t,2),c=(l[0],l[1]);Object(n.useEffect)((function(){te().then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(h.a,null)," Our Services"),r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(u.a,{gutter:16},r.a.createElement("h3",null,"No Services available for this Language yet!")),r.a.createElement(o.b,{to:"/browse"},r.a.createElement(P.a,{size:"large",shape:"round"},r.a.createElement(_e.a,null),"Go to All Services"))))},We=s.a.Content,qe=function(){return r.a.createElement(We,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(B.b,{exact:!0,path:"/",component:W}),r.a.createElement(B.b,{exact:!0,path:"/loginSignup",component:ae}),r.a.createElement(B.b,{exact:!0,path:"/Login",component:K}),r.a.createElement(B.b,{exact:!0,path:"/Signup",component:ee}),r.a.createElement(B.b,{path:"/cart",component:me}),r.a.createElement(B.b,{exact:!0,path:"/about",component:fe}),r.a.createElement(B.b,{exact:!0,path:"/categories",component:ve}),r.a.createElement(B.b,{exact:!0,path:"/checkout",component:ke}),r.a.createElement(B.b,{exact:!0,path:"/AddAddress",component:Re}),r.a.createElement(B.b,{exact:!0,path:"/browse",component:ie}),r.a.createElement(B.b,{exact:!0,path:"/browse/React",component:Te}),r.a.createElement(B.b,{exact:!0,path:"/browse/Javascript",component:Le}),r.a.createElement(B.b,{exact:!0,path:"/browse/HTML",component:De}),r.a.createElement(B.b,{exact:!0,path:"/browse/Node.js",component:Be}),r.a.createElement(B.b,{exact:!0,path:"/browse/MySQL",component:Pe}),r.a.createElement(B.b,{exact:!0,path:"/browse/MongoDB",component:Me}),r.a.createElement(B.b,{exact:!0,path:"/browse/CSS",component:Ve}),r.a.createElement(B.b,{exact:!0,path:"/browse/SASS",component:ze}),r.a.createElement(B.b,{exact:!0,path:"/browse/Redux",component:Ue}),r.a.createElement(B.b,{exact:!0,path:"/browse/APIs",component:Ge}),r.a.createElement(B.b,{exact:!0,path:"/OrderHistory",component:Fe})))},He=s.a.Footer,$e=function(){return r.a.createElement(s.a,null,r.a.createElement(F,null),r.a.createElement(s.a,null,r.a.createElement(D,null),r.a.createElement(qe,null),r.a.createElement(He,{style:{textAlign:"center",backgroundColor:"#FFFFFF"}},r.a.createElement(m,null))))};t(410);var Je=function(){var e=x(),a=Object(E.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){ne().then((function(e){var a=e.data;t({type:"LOGIN_USER",payload:a.user})}))}),[t]),r.a.createElement(r.a.Fragment,null)},Ye=function(){return r.a.createElement(o.a,null,r.a.createElement(_,null,r.a.createElement(Je,null),r.a.createElement($e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.8bd4a8a4.chunk.js.map