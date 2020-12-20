(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__XnEYZ",image:"ImageGalleryItem_image__3usC0"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__sUWnm",modal:"Modal_modal__R-yzO"}},15:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__iAR1q"}},16:function(e,t,a){e.exports={button:"Button_button__2xQds"}},17:function(e,t,a){e.exports={loader:"Loader_loader__1TKxr"}},24:function(e,t,a){},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1cin5",searchForm:"Searchbar_searchForm__2MrRQ",button:"Searchbar_button__1UoPS",label:"Searchbar_label__1LjMY",input:"Searchbar_input__1NQi-"}},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(14),r=a.n(c),o=a(1),i=a.n(o),s=(a(23),a(24),a(12)),l=a(3),u=a(8),j=a.n(u),b=a(4),m=a.n(b);function d(e){var t=e.onSubmit,a=Object(o.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1];return Object(n.jsx)("header",{className:m.a.searchbar,children:Object(n.jsxs)("form",{className:m.a.searchForm,onSubmit:function(e){e.preventDefault(),t(r),i("")},children:[Object(n.jsx)("button",{type:"submit",className:m.a.button,children:Object(n.jsx)("span",{className:m.a.label,children:"Search"})}),Object(n.jsx)("input",{className:m.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){var t=e.target;i(t.value)}})]})})}var g=a(15),f=a.n(g),h=a(10),p=a.n(h),O=a(11),_=a.n(O),x=a(7),v=a.n(x);a(13);function y(e){var t=e.onClose,a=e.src,c=Object(o.useState)(!1),r=Object(l.a)(c,2),i=r[0],s=r[1],u=function(){s((function(e){return!e}))};return Object(o.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return u(),window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),Object(n.jsxs)("div",{className:_.a.overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:[Object(n.jsx)("img",{className:_.a.modal,src:a,alt:"",onLoad:u}),i&&Object(n.jsx)(v.a,{type:"BallTriangle",color:"#3f51b5",height:350})]})}function S(e){var t=e.imageData,a=t.id,c=t.webformatURL,r=t.largeImageURL,i=Object(o.useState)(!1),s=Object(l.a)(i,2),u=s[0],j=s[1],b=Object(o.useState)(null),m=Object(l.a)(b,2),d=m[0],g=m[1],f=function(){j((function(e){return!e}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:p.a.imageGalleryItem,children:Object(n.jsx)("img",{src:c,alt:a,className:p.a.image,"data-largeimg":r,onClick:function(e){g(e.target.dataset.largeimg),f()}})}),u&&Object(n.jsx)(y,{onClose:f,src:d})]})}function w(e){var t=e.gallery;return Object(n.jsx)("ul",{className:f.a.imageGallery,children:t.map((function(e,t){return Object(n.jsx)(S,{imageData:e},t)}))})}var N=a(16),k=a.n(N);function I(e){var t=e.onClick;return Object(n.jsx)("button",{type:"button",className:k.a.button,onClick:t,children:"Load more"})}var C=a(17),G=a.n(C);function A(){return Object(n.jsx)("div",{className:G.a.loader,children:Object(n.jsx)(v.a,{type:"BallTriangle",color:"#3f51b5",height:60})})}var E=a.p+"static/media/waiting.20c59006.jpg",L=a.p+"static/media/error.4efd80f6.gif";var F={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18969106-b552d166da3dfed7b4523ee16","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(e,'"')))}))}},M="idle",R="pending",T="resolved",q="rejected";function U(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)(null),i=Object(l.a)(r,2),u=i[0],b=i[1],m=Object(o.useState)(0),g=Object(l.a)(m,2),f=g[0],h=g[1],p=Object(o.useState)(M),O=Object(l.a)(p,2),_=O[0],x=O[1],v=Object(o.useState)(null),y=Object(l.a)(v,2),S=y[0],N=y[1],k=Object(o.useState)(null),C=Object(l.a)(k,2),G=C[0],U=C[1];return Object(o.useEffect)((function(){u&&(x(R),F.fetchImages(u,f).then((function(e){if(U(e.totalHits),e.totalHits<1)return Promise.reject(new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(u)));c((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),x(T)})).catch((function(e){N(e),x(q)})))}),[f,u]),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(n.jsxs)("div",{className:j.a.App,children:[Object(n.jsx)(d,{onSubmit:function(e){b(e),h(1),c([])}}),(_===M||_===q)&&Object(n.jsxs)("div",{className:j.a.waiting,children:[Object(n.jsx)("p",{children:_===M?"Waiting for queue":_===q&&S.message}),Object(n.jsx)("img",{src:_===M&&E||_===q&&L,alt:"",className:j.a.image})]}),(_===T||_===R)&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{gallery:a}),G>a.length&&Object(n.jsx)(I,{onClick:function(){h((function(e){return e+1}))}}),_===R&&Object(n.jsx)(A,{})]})]})}r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.querySelector("#root"))},8:function(e,t,a){e.exports={App:"App_App__39yAa",waiting:"App_waiting__1ZtyV",image:"App_image__1G7As"}}},[[46,1,2]]]);
//# sourceMappingURL=main.d1389770.chunk.js.map