(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{18:function(e,a,t){},29:function(e){e.exports=JSON.parse('{"itemlist":[{"src":"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60","caption":"Embracieren","location":"Berlin, Germany","price":"6,999Birr"},{"src":"https://images.unsplash.com/photo-1579726670131-487ecc8e1e8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60","caption":"Hearts of diamond","location":"Beverly Hills, USA","price":"8,200Birr"},{"src":"https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60","caption":"Autunumus","location":"Toronto, Canada","price":"5,894Birr"},{"src":"https://images.unsplash.com/photo-1474169482634-9d0381a70510?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","caption":"Deep Thought","location":"Addis Ababa, Ethiopia","price":"8,999Birr"},{"src":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","caption":"Wanderlust","location":"Paris, France","price":"4,996Birr"},{"src":"https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60","caption":"Trafalgar","location":"London, UK","price":"8,569Birr"}]}')},31:function(e,a,t){e.exports=t(45)},36:function(e,a,t){},37:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),i=t.n(r),c=(t(36),t(37),t(18),t(8)),s=t(27),o=t(10),m=t(11),u=t(13),h=t(12),d=t(4),E=t(14),p=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).addToCart=t.addToCart.bind(Object(d.a)(t)),t.handleInputChange=t.handleInputChange.bind(Object(d.a)(t)),t.state={numberOfItems:1},t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"addToCart",value:function(){alert(this.props.caption)}},{key:"handleInputChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(s.a)({},n,t))}},{key:"render",value:function(){return l.a.createElement("div",{className:"entry-block"},l.a.createElement("a",{href:this.props.src},l.a.createElement("img",{className:"entry-img",src:this.props.src,alt:this.props.src})),l.a.createElement("h5",null,this.props.caption),l.a.createElement("h6",null,this.props.location),l.a.createElement("p",{style:{marginBottom:"0",fontSize:"90%"}},"Quantity"),l.a.createElement("form",null,l.a.createElement("input",{name:"numberOfItems",type:"number",value:this.state.numberOfItems,onChange:this.handleInputChange})),l.a.createElement("div",null,l.a.createElement("p",{style:{marginRight:"1%"}},this.props.price),l.a.createElement("button",{className:"add",onClick:this.addToCart},"Add to Cart")))}}]),a}(l.a.Component),b=t(5),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={EmailValue:"",PasswordValue:""},t.handleChangeEmail=t.handleChangeEmail.bind(Object(d.a)(t)),t.handleChangePassword=t.handleChangePassword.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({EmailValue:e.target.EmailValue})}},{key:"handleChangePassword",value:function(e){this.setState({PasswordValue:e.target.PasswordValue})}},{key:"handleSubmit",value:function(e){alert("You have successfully logged in!"),e.preventDefault(),e.target.reset()}},{key:"render",value:function(){return l.a.createElement("form",{className:"signed",onSubmit:this.handleSubmit},l.a.createElement("h2",{style:{marginBottom:"0"}},"Sign in"),l.a.createElement("p",{style:{marginTop:"0"}},"Don't have an account? ",l.a.createElement("a",{href:"index.html",style:{fontSize:"85%"}},l.a.createElement(b.b,{to:"/register"},"Register"))),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"email",placeholder:"Enter your Email",EmailValue:this.state.EmailValue,onChange:this.handleChangeEmail})),l.a.createElement("label",null,"Password",l.a.createElement("input",{type:"password",placeholder:"Enter your password",PasswordValue:this.state.PasswordValue,onChange:this.handleChangePassword})),l.a.createElement("a",{href:"index.html",style:{textAlign:"right",marginBottom:"4%",fontSize:"85%"}},l.a.createElement(b.b,{to:"/forgotpassword"},"Forgot your password?")),l.a.createElement("input",{id:"sign",type:"submit",value:"Sign in"}))}}]),a}(l.a.Component),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={EmailValue:"",PasswordValue:"",CPasswordValue:""},t.handleChangeEmail=t.handleChangeEmail.bind(Object(d.a)(t)),t.handleChangePassword=t.handleChangePassword.bind(Object(d.a)(t)),t.handleChangeCPassword=t.handleChangeCPassword.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({EmailValue:e.target.EmailValue})}},{key:"handleChangePassword",value:function(e){this.setState({PasswordValue:e.target.PasswordValue})}},{key:"handleChangeCPassword",value:function(e){this.setState({CPasswordValue:e.target.CPasswordValue})}},{key:"handleSubmit",value:function(e){alert("You have successfully signed in"),e.preventDefault(),e.target.reset()}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/",style:{color:"black"}},l.a.createElement(c.a,{icon:"arrow-left"}),"\xa0Go back"))))),l.a.createElement("form",{className:"signed",onSubmit:this.handleSubmit},l.a.createElement("h2",{style:{marginBottom:"0"}},"Register"),l.a.createElement("p",{style:{marginTop:"0"}},"Already have an account? ",l.a.createElement("a",{href:"index.html",style:{fontSize:"85%"}},l.a.createElement(b.b,{to:"/signin"},"Sign in"))),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"email",placeholder:"Enter your Email",EmailValue:this.state.EmailValue,onChange:this.handleChangeEmail,required:!0})),l.a.createElement("label",null,"Password",l.a.createElement("input",{type:"password",placeholder:"Enter your password",PasswordValue:this.state.PasswordValue,onChange:this.handleChangePassword,required:!0})),l.a.createElement("label",null,"Confirm Password",l.a.createElement("input",{type:"password",placeholder:"Confirm password",CPasswordValue:this.state.CPasswordValue,onChange:this.handleChangeCPassword,required:!0})),l.a.createElement("input",{id:"sign",type:"submit",value:"Sign in"})),l.a.createElement("div",{className:"main-footer"},l.a.createElement("span",null,"\xa9 Eden Alem 2020")))}}]),a}(l.a.Component),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={EmailValue:""},t.handleChangeEmail=t.handleChangeEmail.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"handleChangeEmail",value:function(e){this.setState({EmailValue:e.target.EmailValue})}},{key:"handleSubmit",value:function(e){alert("Email sent!"),e.preventDefault(),e.target.reset()}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/",style:{color:"black"}},l.a.createElement(c.a,{icon:"arrow-left"}),"\xa0Go back"))))),l.a.createElement("form",{className:"signed",onSubmit:this.handleSubmit},l.a.createElement("h2",{style:{marginBottom:"0"}},"Recover your password"),l.a.createElement("p",{style:{marginTop:"0"}},"Enter your account's email address and we will send you a password reset link."),l.a.createElement("label",null,"Email",l.a.createElement("input",{type:"email",placeholder:"Enter your Email",EmailValue:this.state.EmailValue,onChange:this.handleChangeEmail})),l.a.createElement("input",{id:"sign",type:"submit",value:"Send password reset email"})),l.a.createElement("div",{className:"main-footer"},l.a.createElement("span",null,"\xa9 Eden Alem 2020")))}}]),a}(l.a.Component),w=t(29),v=t(2);function C(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"name"},l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/"},"Lowin Jewellery"))),l.a.createElement("ul",{className:"main-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/signin"},l.a.createElement(c.a,{icon:"user-alt"}),"\xa0Sign in"))),l.a.createElement("li",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/cart"},l.a.createElement(c.a,{icon:"shopping-cart"}),"\xa0Cart")))))),l.a.createElement("div",{className:"flex-container"},w.itemlist.map((function(e){return l.a.createElement(p,{key:e.src,src:e.src,location:e.location,caption:e.caption,price:e.price})}))),l.a.createElement("div",{className:"main-footer"},l.a.createElement("span",null,"\xa9 Eden Alem 2020")))}function O(){return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/",style:{color:"black"}},l.a.createElement(c.a,{icon:"arrow-left"}),"\xa0Go back"))))),l.a.createElement(f,null),l.a.createElement("div",{className:"main-footer"},l.a.createElement("span",null,"\xa9 Eden Alem 2020"))))}function j(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/",style:{color:"black"}},l.a.createElement(c.a,{icon:"arrow-left"}),"\xa0continue shopping"))),l.a.createElement("ul",{className:"main-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/signin"},l.a.createElement(c.a,{icon:"user-alt"}),"\xa0Sign in"))),l.a.createElement("li",null,l.a.createElement("a",{href:"index.html"},l.a.createElement(b.b,{to:"/cart"},l.a.createElement(c.a,{icon:"shopping-bag"}),"\xa00")))))),l.a.createElement("div",{className:"cart_container"},l.a.createElement("img",{className:"cart-img",src:"https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",alt:"Jewellery"}),l.a.createElement("div",{style:{marginLeft:"5%",marginTop:"2%"},class:"text_container"},l.a.createElement("h5",null,"Lovensaider"),l.a.createElement("h6",null,"Allias street, Bonjour"))),l.a.createElement("div",{className:"cart_container"},l.a.createElement("img",{className:"cart-img",src:"https://images.unsplash.com/photo-1589426056403-25c5faaac8ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGpld2Vscnl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60",alt:"Jewellery"}),l.a.createElement("div",{style:{marginLeft:"5%",marginTop:"2%"},class:"text_container"},l.a.createElement("h5",null,"Admineir"),l.a.createElement("h6",null,"Berly street, Adios"))),l.a.createElement("div",{className:"main-footer"},l.a.createElement("span",null,"\xa9 Eden Alem 2020")))}function N(){return l.a.createElement(b.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/cart"},l.a.createElement(j,null)),l.a.createElement(v.a,{path:"/signin"},l.a.createElement(O,null)),l.a.createElement(v.a,{path:"/register"},l.a.createElement(g,null)),l.a.createElement(v.a,{path:"/forgotpassword"},l.a.createElement(y,null)),l.a.createElement(v.a,{path:"/"},l.a.createElement(C,null))))}var S=t(16),x=t(30),P=t(17);S.b.add(x.a,P.c,P.a,P.d,P.b);var V=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3b1dd5c8.chunk.js.map