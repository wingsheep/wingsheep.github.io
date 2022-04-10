import{g as h,n as f,r as s,o as c,f as b,w as t,a as o,d as l,k,_ as v,c as m,b as i,F as g,i as y,a6 as S}from"../app.0e4eb262.js";const T=h({setup(r){const _=f(!1);return(n,e)=>{const u=s("el-button"),a=s("el-tooltip");return c(),b(a,{disabled:_.value,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:t(()=>[o(u,{onClick:e[0]||(e[0]=d=>_.value=!_.value)},{default:t(()=>[l("click to "+k(_.value?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])}}});var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const C={},M=l("trigger me");function B(r,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{content:"I am an el-tooltip"},{default:t(()=>[o(n,null,{default:t(()=>[M]),_:1})]),_:1})}var R=v(C,[["render",B]]),St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const z={},O={class:"tooltip-base-box"},j={class:"row center"},w=l("top-start"),L=l("top"),U=l("top-end"),D={class:"row"},N=l("left-start"),V=l("right-start"),E={class:"row"},F=l("left"),H=l("right"),I={class:"row"},X=l("left-end"),Y=l("right-end"),q={class:"row center"},A=l("bottom-start"),G=l("bottom"),J=l("bottom-end");function K(r,_){const n=s("el-button"),e=s("el-tooltip");return c(),m("div",O,[i("div",j,[o(e,{class:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:t(()=>[o(n,null,{default:t(()=>[w]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[L]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:t(()=>[o(n,null,{default:t(()=>[U]),_:1})]),_:1})]),i("div",D,[o(e,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:t(()=>[o(n,null,{default:t(()=>[N]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:t(()=>[o(n,null,{default:t(()=>[V]),_:1})]),_:1})]),i("div",E,[o(e,{class:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:t(()=>[o(n,{class:"mt-3 mb-3"},{default:t(()=>[F]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:t(()=>[o(n,null,{default:t(()=>[H]),_:1})]),_:1})]),i("div",I,[o(e,{class:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:t(()=>[o(n,null,{default:t(()=>[X]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:t(()=>[o(n,null,{default:t(()=>[Y]),_:1})]),_:1})]),i("div",q,[o(e,{class:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:t(()=>[o(n,null,{default:t(()=>[A]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:t(()=>[o(n,null,{default:t(()=>[G]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:t(()=>[o(n,null,{default:t(()=>[J]),_:1})]),_:1})])])}var P=v(z,[["render",K]]),Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const Q=i("span",null,"Content",-1),W=l(" Hover me "),Z=h({setup(r){const _=f(!1);return(n,e)=>{const u=s("el-button"),a=s("el-tooltip");return c(),b(a,{visible:_.value,"onUpdate:visible":e[2]||(e[2]=d=>_.value=d)},{content:t(()=>[Q]),default:t(()=>[o(u,{onMouseenter:e[0]||(e[0]=d=>_.value=!0),onMouseleave:e[1]||(e[1]=d=>_.value=!1)},{default:t(()=>[W]),_:1})]),_:1},8,["visible"])}}});var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const tt={},et=l("hover me");function ot(r,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{content:"<span>The content can be <strong>HTML</strong></span>","raw-content":""},{default:t(()=>[o(n,null,{default:t(()=>[et]),_:1})]),_:1})}var nt=v(tt,[["render",ot]]),Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const lt={},_t=l(" multiple lines"),st=i("br",null,null,-1),at=l("second line "),ct=l("Top center");function it(r,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{placement:"top"},{content:t(()=>[_t,st,at]),default:t(()=>[o(n,null,{default:t(()=>[ct]),_:1})]),_:1})}var rt=v(lt,[["render",it]]),Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rt});const ut=l("Click to open tooltip"),dt=i("span",null," Some content ",-1),ft=h({setup(r){const _=f(),n=f(),e=f(!1);return(u,a)=>{const d=s("el-button"),x=s("el-tooltip");return c(),m(g,null,[i("div",null,[(c(),m(g,null,y(3,p=>o(d,{key:p,onMouseover:a[0]||(a[0]=$=>_.value=$.currentTarget),onClick:a[1]||(a[1]=$=>e.value=!e.value)},{default:t(()=>[ut]),_:2},1024)),64))]),o(x,{ref_key:"tooltipRef",ref:n,visible:e.value,"onUpdate:visible":a[2]||(a[2]=p=>e.value=p),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":_.value,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{content:t(()=>[dt]),_:1},8,["visible","virtual-ref"])],64)}}});var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft});const pt={},mt=l("Dark"),bt=l("Light"),vt=l("Customized theme");function gt(r,_){const n=s("el-button"),e=s("el-tooltip");return c(),m(g,null,[o(e,{content:"Top center",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[mt]),_:1})]),_:1}),o(e,{content:"Bottom center",placement:"bottom",effect:"light"},{default:t(()=>[o(n,null,{default:t(()=>[bt]),_:1})]),_:1}),o(e,{content:"Bottom center",effect:"customized"},{default:t(()=>[o(n,null,{default:t(()=>[vt]),_:1})]),_:1})],64)}var ht=v(pt,[["render",gt]]),zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht});const xt=l("test"),$t=h({setup(r){const _=f(!1),n=f({getBoundingClientRect(){return e.value}}),e=f({top:0,left:0,bottom:0,right:0});return S(()=>{document.addEventListener("mousemove",u=>{e.value=DOMRect.fromRect({width:0,height:0,x:u.clientX,y:u.clientY})})}),(u,a)=>{const d=s("el-tooltip"),x=s("el-button");return c(),m(g,null,[o(d,{visible:_.value,"onUpdate:visible":a[0]||(a[0]=p=>_.value=p),content:"Bottom center",placement:"bottom",effect:"light",trigger:"click","virtual-triggering":"","virtual-ref":n.value},null,8,["visible","virtual-ref"]),o(x,{onClick:a[1]||(a[1]=p=>_.value=!_.value)},{default:t(()=>[xt]),_:1})],64)}}});var Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$t});export{yt as _,St as a,Tt as b,Ct as c,Mt as d,Bt as e,Rt as f,zt as g,Ot as h};
