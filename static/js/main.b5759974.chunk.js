(this["webpackJsonpitem-checked-custom-example"]=this["webpackJsonpitem-checked-custom-example"]||[]).push([[0],{170:function(e,t,r){"use strict";r.r(t);r(79);var o,n=r(0),i=r.n(n),a=r(12),d=r.n(a),l=r(77),c=(r(84),r(85),r(46)),p=r.n(c),s=(r(87),r(48)),u=r.n(s),h=r(25),m=new Uint8Array(16);function f(){if(!o&&!(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(m)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function b(e){return"string"===typeof e&&g.test(e)}for(var v=[],x=0;x<256;++x)v.push((x+256).toString(16).substr(1));function k(e,t,r){var o=(e=e||{}).random||(e.rng||f)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var n=0;n<16;++n)t[r+n]=o[n];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]).toLowerCase();if(!b(r))throw TypeError("Stringified UUID is invalid");return r}(o)}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var y,E,R,T,j,F,O=Object(n.createElement)("path",{d:"M7.32 12.171a2.062 2.062 0 01-3.193.157L.411 8.204a1.597 1.597 0 112.372-2.138l2.63 2.918a.194.194 0 00.3-.015l5.405-7.33a1.597 1.597 0 112.57 1.895L7.32 12.172z",fill:"#fff"});var W=Object(h.a)((function(e){return Object(n.createElement)("svg",w({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),O)}))(y||(y=C(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  left: 0;\n  right: 0;\n"]))),z=h.a.div((function(e){return{position:"relative",width:""+e.otherprops.width,height:""+e.otherprops.height,margin:""+e.otherprops.margin,padding:""+e.otherprops.padding,borderRadius:""+e.otherprops.borderRadius,border:e.otherprops.border+" "+e.otherprops.borderType+" "+e.otherprops.borderColor,"&:hover":{background:"#F1F1F1",cursor:"pointer"},"&:hover span":{background:"#807A7A"},"&:hover img":{background:"none",cursor:"pointer"},"& .ant-tooltip-arrow-content":{backgroundColor:e.otherprops.color},"& .ant-tooltip-inner":{backgroundColor:e.otherprops.color}}})),A=h.a.div((function(e){return{position:"relative",borderRadius:"5px",width:"20px",height:"20px",margin:"5px 10px",backgroundColor:e.color,"& img":{position:"absolute",left:"50%",right:0,bottom:0,top:"50%",maxWidth:"100%",transform:"translate(-50%, -50%)"}}})),B=h.a.h1((function(e){return{padding:0,display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"1.1rem",marginBottom:"unset",fontFamily:"Montserrat, sans-serif",fontWeight:e.isBold?"bold !important":"normal",color:""+(e.isTextColor?e.color:"")}})),L=h.a.div(E||(E=C(["\n  padding: 0;\n  height: 100%;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: ",";\n\n  &:focus {\n    outline: none;\n  }\n\n  &.ant-avatar-string {\n    font-size: 15px;\n  }\n"])),(function(e){return e.otherprops.isRevert?"row-reverse":"unset"})),S=h.a.div(R||(R=C(["\n  margin: 0;\n  flex: 1 1 auto;\n  min-width: 0;\n  width: 80%;\n\n  & h1 {\n    display: flex;\n    justify-content: left;\n    margin-bottom: unset !important;\n  }\n"]))),V=Object(h.a)(u.a)(T||(T=C(["\n  width: 20px;\n  height: 20px;\n  font-size: 13px;\n  margin-right: 10px;\n  margin-left: ",";\n"])),(function(e){return e.otherprops.isRevert?"10px":""})),P=Object(h.a)(u.a)(j||(j=C(["\n  width: 20px;\n  height: 20px;\n  font-size: 13px;\n  background: none !important;\n  margin-right: 10px;\n"]))),I=Object(h.a)(p.a)(F||(F=C(["\n\n"]))),N=function(e){var t=e.id,r=void 0===t?k():t,o=e.width,n=void 0===o?"100%":o,a=e.height,d=void 0===a?"40px":a,l=e.borderRadius,c=void 0===l?"0px":l,p=e.name,s=void 0===p?"ClassFunc checked":p,u=e.color,h=void 0===u?"#1790FF":u,m=e.borderColor,f=void 0===m?"#1790FF":m,g=e.border,b=void 0===g?null:g,v=e.borderType,x=void 0===v?"solid":v,C=e.onClick,w=void 0===C?function(){}:C,y=e.isLeft,E=void 0!==y&&y,R=e.leftNumber,T=void 0===R?null:R,j=e.checked,F=void 0!==j&&j,O=e.isRevert,N=void 0!==O&&O,U=e.disabled,D=void 0!==U&&U,J=e.hiddenAvatar,M=void 0!==J&&J,$=e.isTextColor,q=void 0!==$&&$,G=e.isBold,H=void 0!==G&&G,K=e.offTooltip,Q=void 0!==K&&K,X=e.tooltipPlacement,Y=void 0===X?"top":X,Z=e.margin,_=void 0===Z?"5px":Z,ee=e.padding,te=void 0===ee?"unset":ee;return i.a.createElement(z,{id:r,key:r,otherprops:{width:n,height:d,borderRadius:c,borderColor:f,color:h,border:b,borderType:x,margin:_,padding:te}},i.a.createElement(I,{title:Q?null:s,placement:Y,arrowPointAtCenter:!0,getPopupContainer:function(){return document.getElementById(r)}},i.a.createElement(L,{otherprops:{isRevert:N},onClick:function(){D||w&&w()}},i.a.createElement(A,{color:h},F&&i.a.createElement(W,{alt:""})),i.a.createElement(S,null,i.a.createElement(B,{isTextColor:q,isBold:H,color:h},s)),M?null:E?i.a.createElement(V,{size:20,otherprops:{isRevert:N}}," ",T):i.a.createElement(P,{size:20}))))},U=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),r=t[0],o=t[1],n=function(){o(!r)};return i.a.createElement("div",{style:{width:"100%",maxWidth:"500px",margin:"auto",marginTop:"100px",textAlign:"center"}},"Default",i.a.createElement(N,{width:"250px",checked:r,onClick:n,margin:"10px"}),"With border radius",i.a.createElement(N,{name:"ClassFunc checked",border:"1px",borderRadius:"10px",checked:r,onClick:n,margin:"10px"}),"With border radius text color",i.a.createElement(N,{name:"ClassFunc checked",border:"1px",borderRadius:"10px",checked:r,onClick:n,margin:"10px",isTextColor:!0}),"With change color",i.a.createElement(N,{name:"ClassFunc checked",border:"1px",borderRadius:"10px",color:"#690003",borderColor:"#690003",checked:r,onClick:n,margin:"10px",isTextColor:!0}),"With left number",i.a.createElement(N,{border:"1px",borderRadius:"10px",checked:r,onClick:n,margin:"10px",isLeft:!0,leftNumber:10}),"Width revert",i.a.createElement(N,{border:"1px",margin:"10px",checked:r,onClick:n,isRevert:!0,isLeft:!0,leftNumber:10}),"Width disable",i.a.createElement(N,{border:"1px",margin:"10px",checked:r,onClick:n,isRevert:!0,offTooltip:!0,disabled:!0}),"With off tooltip & disable",i.a.createElement(N,{border:"1px",margin:"10px",checked:r,onClick:n,isRevert:!0,offTooltip:!0,disabled:!0}))};d.a.render(i.a.createElement(U,null),document.getElementById("root"))},78:function(e,t,r){e.exports=r(170)},79:function(e,t,r){}},[[78,1,2]]]);
//# sourceMappingURL=main.b5759974.chunk.js.map