(this["webpackJsonpndoherty.design"]=this["webpackJsonpndoherty.design"]||[]).push([[1],{112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(47),s=a.n(r),o=a(15),l=a(128),i=a(23),m=a(6),p=a(24),u=a(8),d=a(9),f=a(11),h=a(10),E=a(125),b=a(126),g=a(127),N=a(31),v=a.n(N),y=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement(v.a,{animateIn:this.props.imgRight?"slideInLeft":"slideInRight",animateOnce:!0},c.a.createElement(E.a,{className:"mobile-side-scroll-row",style:{marginBottom:"6rem"}},c.a.createElement("div",{className:"d-flex mobile-side-scroll-reverse ".concat(this.props.imgRight?"row-reverse":"")},c.a.createElement(b.a,{className:"mobile-side-scroll-img-col sticky-col p-0 ".concat(this.props.imgRight?"desktop-margin-left":"desktop-margin-right"),xs:8},c.a.createElement("div",{className:"w-100 h-100",style:{zIndex:"-1",position:"absolute",left:"".concat(this.props.imgRight?"-2rem":"2rem"),top:"2rem",backgroundColor:"#ffc107",opacity:"80%"}}),c.a.createElement(g.a,{fluid:!0,className:"feature-img mobile-side-scroll-img",src:this.props.imgSrc})),c.a.createElement(b.a,{className:" flex-center-content flex-column mobile-side-scroll-col",xs:4},c.a.createElement("p",{className:"swipe-interaction-font pb-5 desktop-d-none"}," \u2190 Swipe to see!"),c.a.createElement("div",{className:"flex-center-content"},this.props.children)))))}}]),a}(n.Component),j=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"py-5"},c.a.createElement(E.a,{className:"mt-5"},c.a.createElement(b.a,{xs:12},c.a.createElement("h1",{className:"header-font"},"FEATURED PROJECTS"))),this.props.featuredProjects.map((function(e,t){return c.a.createElement(y,{imgRight:t%2==1,imgSrc:e.image[0]},c.a.createElement("div",{className:"p-1 mobile-side-scroll-text-wrapper"},c.a.createElement("h3",{className:"sub-header-font"},e.name),c.a.createElement("div",{className:"d-flex flex-wrap"},e.tags.map((function(e){return c.a.createElement("span",{style:{padding:".1rem .3rem",marginRight:".3rem",marginBottom:".5rem",fontSize:"8pt",backgroundColor:"#333",color:"white",borderRadius:"4pt"}},e)}))),c.a.createElement("p",{className:"paragraph-font"},e.description),c.a.createElement(i.b,{className:"custom-primary-btn",to:e.routinglink},"Read More")))})))}}]),a}(n.Component);function x(e){return c.a.createElement(b.a,{className:"p-3",sm:12,md:4},e.imgSrc&&c.a.createElement("div",{className:"card-img-wrapper flex-center-content mb-4"},c.a.createElement(g.a,{fluid:!0,src:e.imgSrc})),e.children)}function O(e){return c.a.createElement("div",{className:"pb-5"},c.a.createElement(E.a,{className:"mt-5"},c.a.createElement(b.a,{xs:12},c.a.createElement("h1",{className:"header-font"},"OTHER PROJECTS"))),c.a.createElement(E.a,null,e.projectTeasers.map((function(e){return c.a.createElement(x,{imgSrc:e.image[0]},c.a.createElement("h3",{className:"sub-header-font"},e.name),c.a.createElement("div",{className:"d-flex flex-wrap"},e.tags.map((function(e){return c.a.createElement("span",{style:{padding:".1rem .3rem",marginRight:".3rem",marginBottom:".5rem",fontSize:"8pt",backgroundColor:"#333",color:"white",borderRadius:"4pt"}},e)}))),c.a.createElement("p",{className:"paragraph-font"},e.description),c.a.createElement(i.b,{className:"custom-primary-btn",to:"".concat(e.routinglink)},"Read More"))}))))}var w=a(22),C=a.n(w),k=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){C()("#process-scroll-button").click((function(){C()("html, body").animate({scrollTop:C()("#process-section").offset().top},2e3)}))}},{key:"render",value:function(){return c.a.createElement(E.a,{className:"py-5"},c.a.createElement(b.a,{className:"sticky-col p-3",sm:12,md:8},c.a.createElement("div",{className:"mt-5"},c.a.createElement("div",{style:{position:"relative"},className:"yellow-bg-margin-left"},c.a.createElement("div",{className:"w-100 h-100",style:{position:"absolute",left:"-2rem",top:"2rem",backgroundColor:"#ffc107",opacity:"80%"}}),c.a.createElement(g.a,{style:{position:"relative",zIndex:"1"},fluid:!0,className:"header-img",src:"https://ik.imagekit.io/ndohertydesign/sticky-header-img_sv3YeBXZE.png"})))),c.a.createElement(b.a,{className:"mt-4 p-3 scrolling-col",xs:12,md:4},c.a.createElement("div",{className:"mb-5 p-1 pt-3 small-mb-mobile"},c.a.createElement("h3",{className:"sub-header-font"},"Who am I?"),this.props.introCopy.whoAmIText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)}))),c.a.createElement("div",{className:"mb-5 p-1 small-mb-mobile"},c.a.createElement("h3",{className:"sub-header-font"},"What do I do?"),this.props.introCopy.whatIDoText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)}))),c.a.createElement("div",{className:"p-1"},c.a.createElement("h3",{className:"sub-header-font"},"How can I help you?"),this.props.introCopy.howCanIHelpText.split("\\n").map((function(e){return c.a.createElement("p",{className:"paragraph-font mb-2"},e)})),c.a.createElement("div",{id:"process-scroll-button",className:"py-1"},c.a.createElement("span",{className:"custom-primary-btn"},"More about my freelancing!")))))}}]),a}(n.Component),P=a(49),S=a.n(P),R=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"contact-section",className:"py-5"},c.a.createElement(E.a,{className:"my-5"},c.a.createElement(b.a,{xs:12},c.a.createElement("h1",{className:"header-font"},"GET IN TOUCH"),c.a.createElement("p",{className:"paragraph-font"},"Let's see what we can create together!")),c.a.createElement(b.a,{xs:12},c.a.createElement(S.a,{to:"ndoherty.design@gmail.com",className:"contact-form",titlePlaceholder:"How can I help you?",contentsPlaceholder:"Give a few details so that I can better understand when we talk",buttonText:"Send it!",contentsMaxLength:1e3}))))}}]),a}(n.Component),T=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){C()("#contact-scroll-button-2").click((function(){C()("html, body").animate({scrollTop:C()("#contact-section").offset().top},2e3)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"py-5",id:"process-section"},c.a.createElement(E.a,{className:"mt-5"},c.a.createElement(b.a,{xs:12,className:"text-center"},c.a.createElement("h1",{className:"header-font"},"WHAT IS MY PROJECT PROCESS?"))),c.a.createElement(E.a,null,c.a.createElement(b.a,{xs:12,sm:4,className:"flex-column flex-align-center"},c.a.createElement("div",{className:"position-relative w-100 process-min-height"},c.a.createElement("div",{className:"stacking-div"},c.a.createElement("h3",{className:"sub-header-font background-number-font"},"01")),c.a.createElement("div",{className:"stacking-div mt-1"},c.a.createElement("h3",{className:"sub-header-font font-weight-bold text-center"},this.props.processCopy.step1Title))),c.a.createElement("div",{className:"w-75"},c.a.createElement("p",{className:"paragraph-font"},this.props.processCopy.step1Description))),c.a.createElement(b.a,{xs:12,sm:4,className:"flex-column flex-align-center"},c.a.createElement("div",{className:"position-relative w-100 process-min-height"},c.a.createElement("div",{className:"stacking-div"},c.a.createElement("h3",{className:"sub-header-font background-number-font"},"02")),c.a.createElement("div",{className:"stacking-div mt-1"},c.a.createElement("h3",{className:"sub-header-font font-weight-bold text-center"},this.props.processCopy.step2Title))),c.a.createElement("div",{className:"w-75"},c.a.createElement("p",{className:"paragraph-font"},this.props.processCopy.step2Description))),c.a.createElement(b.a,{xs:12,sm:4,className:"flex-column flex-align-center"},c.a.createElement("div",{className:"position-relative w-100 process-min-height"},c.a.createElement("div",{className:"stacking-div"},c.a.createElement("h3",{className:"sub-header-font background-number-font"},"03")),c.a.createElement("div",{className:"stacking-div mt-1"},c.a.createElement("h3",{className:"sub-header-font font-weight-bold text-center"},this.props.processCopy.step3Title))),c.a.createElement("div",{className:"w-75"},c.a.createElement("p",{className:"paragraph-font"},this.props.processCopy.step3Description)))),c.a.createElement(E.a,{className:"mt-3"},c.a.createElement(b.a,{xs:12,className:"text-center"},c.a.createElement("div",{id:"contact-scroll-button-2",className:"py-1"},c.a.createElement("span",{className:"custom-primary-btn"},"Get a free project estimation!")))))}}]),a}(n.Component);function I(e){return c.a.createElement("div",null,c.a.createElement(k,{introCopy:e.dynamicContent.intro_copy}),c.a.createElement(j,{featuredProjects:e.dynamicContent.projects["Featured-Projects"]}),c.a.createElement(O,{projectTeasers:e.dynamicContent.projects["Other-Projects"]}),c.a.createElement(T,{processCopy:e.dynamicContent.process_copy}),c.a.createElement(R,null))}var L=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("a",{className:"social-icon",href:"https://www.instagram.com/ndoherty.design/",target:"_blank"},c.a.createElement("i",{className:"fab fa-instagram-square fa-2x"})))}}]),a}(n.Component),q=(a(87),a(88),a(89),a(37)),D=a(35),B=function(e){Object(f.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(u.a)(this,r),(a=t.call(this,e)).state={currentBlogPost:D[0].componentCode},a}return Object(d.a)(r,[{key:"getBlogPost",value:function(e){return Object(n.lazy)((function(){return a(90)("./".concat(e,"Post.jsx")).catch((function(){return a.e(0).then(a.bind(null,119))}))}))}},{key:"render",value:function(){var e=this,t=this.getBlogPost(this.state.currentBlogPost);return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(b.a,{xs:12},c.a.createElement("div",{className:"flex-center-content justify-space-between"},c.a.createElement("h1",{className:"header-font mb-0 blog-title"},"NDOHERTY.DESIGN BLOG"),c.a.createElement("a",{className:"custom-primary-btn",href:"#"},c.a.createElement("i",{className:"fas fa-home"}))),c.a.createElement("hr",{className:"bg-dark mb-0"}))),c.a.createElement(E.a,{className:"py-4",style:{overflowX:"scroll"}},c.a.createElement(b.a,null,c.a.createElement("div",{className:"d-flex"},D.map((function(t){return c.a.createElement("div",{className:"text-center mx-3 blog-title-select".concat(e.state.currentBlogPost==t.componentCode?" blog-title-selected":""),onClick:function(){e.setState(Object(q.a)(Object(q.a)({},e.state),{},{currentBlogPost:t.componentCode}))}},c.a.createElement("h3",{className:"sub-header-font blog-title mb-0"},t.title.toUpperCase()),c.a.createElement("p",{className:"mb-0 blog-date-header"},t.date))}))))),c.a.createElement("hr",{className:"bg-dark mt-0"}),c.a.createElement(n.Suspense,{fallback:"Loading blog post..."},c.a.createElement(t,null)))}}]),r}(n.Component),H=a(36);function M(e){var t=Object(n.useRef)(null),a=Object(n.useState)(null),r=Object(o.a)(a,2),s=r[0],l=r[1],i=Object(n.useState)(1),m=Object(o.a)(i,2),p=m[0],u=m[1],d=Object(n.useState)(!1),f=Object(o.a)(d,2),h=f[0],E=f[1],b=Object(n.useState)(0),g=Object(o.a)(b,2),N=g[0],v=g[1];function y(e){var t=e.numPages;l(t)}function j(e){return"next"==e?function(){u(p+1)}:"prev"==e?function(){u(p-1)}:void 0}return Object(n.useEffect)((function(){return h||(E(!0),v(t.current.clientWidth)),window.addEventListener("resize",(function(){h&&v(t.current.clientWidth)})),function(){window.removeEventListener("resize",(function(){})),E(!1)}}),[]),c.a.createElement("div",{ref:t,className:"w-100 mb-4"},h?c.a.createElement(H.a,{file:e.fileURL,onLoadSuccess:y,options:{workerSrc:"pdf.worker.js"},renderMode:"canvas"},c.a.createElement(H.b,{pageNumber:p,width:N})):null,c.a.createElement("div",{className:"pdf-controls"},1!==p&&c.a.createElement("a",{className:"custom-primary-btn",onClick:j("prev")}," Prev "),c.a.createElement("p",{className:"m-0 mx-3"},"Page ",p," of ",s),p!==s&&c.a.createElement("a",{className:"custom-primary-btn",onClick:j("next")}," Next ")))}function z(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){m&&fetch("https://ndohertydesign-api.herokuapp.com/getPageContent/".concat(e.pageID)).then((function(e){return e.json()})).then((function(e){s(e),u(!1)}))})),m?c.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"text-center"},c.a.createElement(p.HashLoader,{size:100,color:"#ffc107",loading:!0}),c.a.createElement("p",{className:"mt-3 paragraph-font"},"Loading..."))):c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement(E.a,null,c.a.createElement(b.a,{xs:12},c.a.createElement("div",{className:"flex-center-content justify-space-between"},c.a.createElement("h1",{className:"header-font mb-0"},e.title)),c.a.createElement("hr",{className:"bg-dark"}))),c.a.createElement(E.a,null,c.a.createElement(b.a,{xs:0,lg:2}),c.a.createElement(b.a,{xs:12,lg:8},r.map((function(e){return"image"==e.type?c.a.createElement("div",{className:"w-100 text-center my-3"},c.a.createElement(g.a,{fluid:!0,src:e.content})):"h1"==e.type?c.a.createElement("h1",{className:"header-font"},e.content):"h3"==e.type?c.a.createElement("h3",{className:"sub-header-font"},e.content):"p"==e.type?c.a.createElement("p",{className:"paragraph-font"},e.content):"br"==e.type?c.a.createElement("br",null):"p"==e.type?c.a.createElement("p",{className:"paragraph-font"},e.content):"a"==e.type?c.a.createElement("a",{href:e.content},e.content):"hr"==e.type?c.a.createElement("hr",null):"pdf"==e.type?c.a.createElement(M,{fileURL:e.content}):void 0}))),c.a.createElement(b.a,{xs:0,lg:2})))}a(117);var U=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"custom-navbar d-flex justify-space-between align-items-center"},c.a.createElement("h3",{className:"nav-title"},"NDOHERTY.DESIGN"),c.a.createElement("a",{className:"custom-primary-btn",href:"#"},c.a.createElement("i",{className:"fas fa-home"})))}}]),a}(n.Component);var W=function(){var e=function(){window.scrollTo(0,0)};window.addEventListener("hashchange",e),window.addEventListener("beforeunload",e);var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],s=a[1],u=Object(n.useState)(!0),d=Object(o.a)(u,2),f=d[0],h=d[1];return Object(n.useEffect)((function(){f&&fetch("https://ndohertydesign-api.herokuapp.com/ndohertydesign/dynamic-content/").then((function(e){return e.json()})).then((function(e){s(e),h(!1)}))})),f?c.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"text-center"},c.a.createElement(p.HashLoader,{size:100,color:"#ffc107",loading:!0}),c.a.createElement("p",{className:"mt-3 paragraph-font"},"Loading..."))):(r.projects["Featured-Projects"]=r.projects["Featured-Projects"].filter((function(e){return e.published})),r.projects["Other-Projects"]=r.projects["Other-Projects"].filter((function(e){return e.published})),c.a.createElement("div",null,c.a.createElement(U,null),c.a.createElement(l.a,{className:"mt-3 pt-3"},c.a.createElement(i.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(I,Object.assign({},e,{dynamicContent:r}))}}),r.projects["Featured-Projects"].map((function(e){return c.a.createElement(m.a,{exact:!0,path:e.routinglink,render:function(t){return c.a.createElement(z,Object.assign({},t,{pageID:e.id,title:e.name}))}})})),r.projects["Other-Projects"].map((function(e){return c.a.createElement(m.a,{exact:!0,path:e.routinglink,render:function(t){return c.a.createElement(z,Object.assign({},t,{pageID:e.id,title:e.name}))}})})),c.a.createElement(m.a,{exact:!0,path:"/blog",component:B}))),c.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e){e.exports=JSON.parse('[{"title":"Shape Exercise Critique","componentCode":"shapeExerciseCritique","date":"07/16/2020"},{"title":"Critique 2 Reflection: Line","componentCode":"critiqueTwoReflection","date":"07/14/2020"},{"title":"Line Exercise Critique","componentCode":"lineExerciseCritique","date":"07/12/2020"},{"title":"Critique 1 Reflection: Composition","componentCode":"critiqueOneReflection","date":"07/06/2020"},{"title":"Composition Exercise Critique","componentCode":"compositionExerciseCritique","date":"07/02/2020"}]')},51:function(e,t,a){e.exports=a(118)},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){var n={"./NullPost.jsx":[119,0],"./compositionExerciseCritiquePost.jsx":[120,4],"./critiqueOneReflectionPost.jsx":[121,5],"./critiqueTwoReflectionPost.jsx":[122,6],"./lineExerciseCritiquePost.jsx":[123,7],"./shapeExerciseCritiquePost.jsx":[124,8]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return a.e(t[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id=90,e.exports=c}},[[51,2,3]]]);
//# sourceMappingURL=main.a9e2b7c8.chunk.js.map