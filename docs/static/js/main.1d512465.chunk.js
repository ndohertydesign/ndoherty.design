(this["webpackJsonpndoherty.design"]=this["webpackJsonpndoherty.design"]||[]).push([[0],{106:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(42),l=a.n(r),o=a(15),s=a(45),i=a(6),m=(a(32),a(10)),u=a(11),h=a(13),d=a(12),f=a(115),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"handleProjectLink",value:function(e){return function(){window.location.href="#".concat(e)}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.props.featuredProjects.map((function(t,a){return c.a.createElement("div",{key:a,className:"featured-project-card",onClick:e.handleProjectLink(t.routinglink)},c.a.createElement(f.a,{className:"featured-project-img",src:t.image[0]}),c.a.createElement("div",{className:"featured-project-text"},c.a.createElement("h3",{className:"sub-header-font project-title"},t.name),c.a.createElement("p",{className:"paragraph-font mb-3"},t.description)))})))}}]),a}(n.Component);function E(e){return console.log(e.dynamicContent.intro_copy),c.a.createElement("div",null,c.a.createElement("h1",{className:"main-title header-font mt-5"},"My Projects"),c.a.createElement(p,{featuredProjects:e.dynamicContent.projects["Featured-Projects"]}))}var b=a(116),v=(a(80),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(u.a)(a,[{key:"handleMenuOpenClose",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"render",value:function(){return this.state.menuOpen?c.a.createElement("div",{className:"custom-footer open"},c.a.createElement(b.a,{className:"d-flex flex-column h-100 align-items-center justify-space-between"},c.a.createElement("h3",{className:"nav-title"},"MENU"),c.a.createElement("div",{className:"text-center"},c.a.createElement("a",{href:"#/"},c.a.createElement("h3",{className:"nav-title mb-4",onClick:this.handleMenuOpenClose.bind(this)},"PORTFOLIO")),c.a.createElement("a",{href:"https://shop.ndoherty.design"},c.a.createElement("h3",{className:"nav-title mb-4"},"DESIGN SHOP")),c.a.createElement("a",{href:"#/about"},c.a.createElement("h3",{className:"nav-title mb-4",onClick:this.handleMenuOpenClose.bind(this)},"ABOUT")),c.a.createElement("a",{href:"#/contact"},c.a.createElement("h3",{className:"nav-title mb-4",onClick:this.handleMenuOpenClose.bind(this)},"CONTACT"))),c.a.createElement("h3",{className:"nav-title",onClick:this.handleMenuOpenClose.bind(this)},"EXIT"))):c.a.createElement("div",{className:"custom-footer",onClick:this.handleMenuOpenClose.bind(this)},c.a.createElement(b.a,{className:"d-flex justify-content-center align-items-center"},c.a.createElement("h3",{className:"nav-title"},"MENU")))}}]),a}(n.Component)),j=(a(81),a(82),a(83),a(84),a(117)),N=a(118),O=a(30);function g(e){var t=Object(n.useRef)(null),a=Object(n.useState)(null),r=Object(o.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(1),m=Object(o.a)(i,2),u=m[0],h=m[1],d=Object(n.useState)(!1),f=Object(o.a)(d,2),p=f[0],E=f[1],b=Object(n.useState)(0),v=Object(o.a)(b,2),j=v[0],N=v[1];function g(e){var t=e.numPages;s(t)}function y(e){return"next"==e?function(){h(u+1)}:"prev"==e?function(){h(u-1)}:void 0}return Object(n.useEffect)((function(){return p||(E(!0),N(t.current.clientWidth)),window.addEventListener("resize",(function(){p&&N(t.current.clientWidth)})),function(){window.removeEventListener("resize",(function(){})),E(!1)}}),[]),c.a.createElement("div",{ref:t,className:"w-100 mb-4 mt-2"},p?c.a.createElement(O.a,{file:e.fileURL,onLoadSuccess:g,options:{workerSrc:"pdf.worker.js"},renderMode:"canvas"},c.a.createElement(O.b,{pageNumber:u,width:j})):null,c.a.createElement("div",{className:"pdf-controls"},1!==u&&c.a.createElement("a",{className:"custom-primary-btn",onClick:y("prev")}," Prev "),c.a.createElement("p",{className:"m-0 mx-3"},"Page ",u," of ",l),u!==l&&c.a.createElement("a",{className:"custom-primary-btn",onClick:y("next")}," Next ")))}function y(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){m&&fetch("https://ndohertydesign-api.herokuapp.com/getPageContent/".concat(e.pageID)).then((function(e){return e.json()})).then((function(e){l(e),u(!1)}))})),m?c.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c.a.createElement("p",{className:"mt-4 loading-font"},"Loading...")):c.a.createElement("div",null,c.a.createElement(j.a,{className:"m-0"},c.a.createElement(N.a,{xs:12,className:"p-0"},c.a.createElement("div",{className:"flex-center-content justify-space-between"},c.a.createElement("h1",{className:"header-font mb-0"},e.title)))),c.a.createElement(j.a,{className:"m-0"},c.a.createElement(N.a,{xs:12,lg:8,className:"p-0"},r.map((function(e){return"image"==e.type?c.a.createElement("div",{className:"w-100 text-center my-5"},c.a.createElement(f.a,{fluid:!0,src:e.content})):"h1"==e.type?c.a.createElement("h1",{className:"header-font mt-3"},e.content):"h3"==e.type?c.a.createElement("h3",{className:"sub-header-font mt-3"},e.content):"p"==e.type?c.a.createElement("p",{className:"paragraph-font mb-2"},e.content):"br"==e.type?c.a.createElement("br",null):"a"==e.type?c.a.createElement("a",{className:"mb-2",href:e.content},c.a.createElement("p",{className:"paragraph-font m-0"},e.content)):"hr"==e.type?c.a.createElement("hr",{className:"my-2",style:{borderWidth:"3px",borderColor:"black"}}):"pdf"==e.type?c.a.createElement(g,{fileURL:e.content}):void 0}))),c.a.createElement(N.a,{xs:0,lg:4})))}a(111);var w=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"custom-navbar"},c.a.createElement("a",{className:"custom-nav-link",href:"#"},c.a.createElement("h3",{className:"nav-title fw-300"},"Portfolio")),c.a.createElement("a",{className:"custom-nav-link",href:"#/about"},c.a.createElement("h3",{className:"nav-title fw-300"},"About")),c.a.createElement("a",{className:"custom-nav-link",href:"#/contact"},c.a.createElement("h3",{className:"nav-title fw-300"},"Contact")))}}]),a}(n.Component),x=(n.Component,function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"header-font mt-5"},"About Me"),c.a.createElement(j.a,{className:"mt-5 mx-0"},c.a.createElement(N.a,{xs:12,lg:8,className:"px-0"},c.a.createElement("div",{className:"mb-5"},c.a.createElement("h3",{className:"sub-header-font"},"Who am I?"),this.props.introCopy.whoAmIText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)}))),c.a.createElement("div",{className:"mb-5"},c.a.createElement("h3",{className:"sub-header-font"},"What do I do?"),this.props.introCopy.whatIDoText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)}))),c.a.createElement("div",{className:""},c.a.createElement("h3",{className:"sub-header-font"},"How can I help you?"),this.props.introCopy.howCanIHelpText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)})))),c.a.createElement(N.a,{xs:0,lg:4})))}}]),a}(n.Component)),C=a(44),k=a.n(C),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"contact-section"},c.a.createElement("h1",{className:"header-font mt-5"},"Contact Me"),c.a.createElement(j.a,{className:"mt-5 mx-0"},c.a.createElement(N.a,{xs:12,lg:8,className:"p-0"},c.a.createElement("p",{className:"paragraph-font"},"Let's see what we can create together."),c.a.createElement(k.a,{to:"ndoherty.design@gmail.com",className:"contact-form",titlePlaceholder:"How can I help you?",contentsPlaceholder:"Give a few details so that I can better understand when we talk",buttonText:"Get in Touch!",contentsMaxLength:1e3})),c.a.createElement(N.a,{xs:0,lg:4})))}}]),a}(n.Component);var I=function(){var e=function(){window.scrollTo(0,0)};window.addEventListener("hashchange",e),window.addEventListener("beforeunload",e);var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],l=a[1],m=Object(n.useState)(!0),u=Object(o.a)(m,2),h=u[0],d=u[1];return Object(n.useEffect)((function(){h&&fetch("https://ndohertydesign-api.herokuapp.com/ndohertydesign/dynamic-content/").then((function(e){return e.json()})).then((function(e){l(e),console.log(e),d(!1)}))})),h?c.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c.a.createElement("p",{className:"mt-4 loading-font"},"Loading...")):(r.projects["Featured-Projects"]=r.projects["Featured-Projects"].filter((function(e){return e["Published?"]})),r.projects["Other-Projects"]=r.projects["Other-Projects"].filter((function(e){return e["Published?"]})),c.a.createElement("div",{className:"website-margin"},c.a.createElement(w,null),c.a.createElement(s.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(E,Object.assign({},e,{dynamicContent:r}))}}),c.a.createElement(i.a,{exact:!0,path:"/about",render:function(e){return c.a.createElement(x,Object.assign({},e,{introCopy:r.intro_copy}))}}),c.a.createElement(i.a,{exact:!0,path:"/contact",component:P}),r.projects["Featured-Projects"].map((function(e){return c.a.createElement(i.a,{exact:!0,path:e.routinglink,render:function(t){return c.a.createElement(y,Object.assign({},t,{pageID:e.id,title:e.name}))}})})),r.projects["Other-Projects"].map((function(e){return c.a.createElement(i.a,{exact:!0,path:e.routinglink,render:function(t){return c.a.createElement(y,Object.assign({},t,{pageID:e.id,title:e.name}))}})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a(114)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.1d512465.chunk.js.map