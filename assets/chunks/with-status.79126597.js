var ce=Object.defineProperty,pe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var I=(t,a,o)=>a in t?ce(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,B=(t,a)=>{for(var o in a||(a={}))ge.call(a,o)&&I(t,o,a[o]);if(V)for(var o of V(a))_e.call(a,o)&&I(t,o,a[o]);return t},U=(t,a)=>pe(t,me(a));import{a1 as q,O as Q,g as h,a2 as W,a3 as fe,J as be,a as n,r as _,a4 as $,a5 as he,n as S,a6 as F,d as y,a7 as X,a8 as ve,a9 as Se,aa as Y,ab as Te,ac as ye,P as G,ad as Z,ae as Ce,af as we,_ as Ae,ag as Ne,h as O,o as T,f as A,u as m,w as f,b as N,ah as xe,k as L,K as j,c as z,F as D,ai as Le,aj as ze,ak as ee,al as te,am as De}from"../app.0e4eb262.js";const ae=t=>{const a=q("tableRoot");return Q("span",{},(a==null?void 0:a.slots[t.column.slot])?a==null?void 0:a.slots[t.column.slot]({row:t.row,column:t.column,$index:t.index}):null)};ae.props={row:Object,index:Number,column:{type:Object,default:null}};const oe=t=>{const a=q("tableRoot");return Q("span",{},a==null?void 0:a.slots[t.column.slotHeader]({column:t.column,scope:t.scope}))};oe.props={column:{type:Object,default:null},scope:{type:Object,default:null}};const J=h({name:"RenderColumn",components:{TableSlot:ae,TableSlotHeader:oe,ElTableColumn:W,ElTooltip:fe,InfoFilled:be},props:{column:{type:Object,default:()=>({})},align:{type:String,default:"left"},showOverflowTooltip:{type:Boolean,default:!0}},setup(t){const a=e=>e.showHeaderTooltip?n("span",null,[e.label,n(_("el-tooltip"),{placement:"top",effect:"light",content:e.headerTooltipText},{default:()=>[n("span",{class:"table-header-tip-icon",style:"font-size: 12px"},[n(_("info-filled"),{style:"width: 14px;height: 14px; display: inline-block;margin: 0 0 3px 6px;"},null)])]})]):n("span",null,[e.label]),o=e=>d=>e.renderHeader?e.renderHeader(e,d):e.slotHeader?n(_("table-slot-header"),{column:e,scope:d},null):a(e);function r(e){return n(_("el-table-column"),$(e,{align:t.align,showOverflowTooltip:e.showOverflowTooltip==null?t.showOverflowTooltip:e.showOverflowTooltip}),{default:({row:d,$index:c})=>e.render(d,e,c),header:o(e)})}function i(e){return n(_("el-table-column"),$(e,{sortable:e.sortable,align:t.align,showOverflowTooltip:e.showOverflowTooltip==null?t.showOverflowTooltip:e.showOverflowTooltip}),{default:({row:d,$index:c})=>n(_("table-slot"),{row:d,column:e,index:c},null),header:o(e)})}function l(e){const d=e.children;return n(_("el-table-column"),{label:e.label,align:t.align,headerAlign:e.headerAlign},{default:()=>[d.map(c=>g(c))],header:o(e)})}function u(e){return n(_("el-table-column"),{label:e.label,type:"expand"},{default:({row:d,$index:c})=>e.render?e.render(d,e,c):n(_("table-slot"),{row:d,column:e,index:c},null),header:o(e)})}const p=(e,d)=>e[d.property]||"-";function s(e){const d=e.formatter||p;return n(_("el-table-column"),$(e,{align:t.align,selectable:e.selectable,showOverflowTooltip:e.showOverflowTooltip==null?t.showOverflowTooltip:e.showOverflowTooltip,formatter:d}),{header:o(e)})}function g(e){return e.render&&e.type!=="expand"?r(e):e.slot&&e.type!=="expand"?i(e):e.children?l(e):e.type==="expand"?u(e):s(e)}return()=>g(t.column)}});function Oe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!X(t)}const $e=h({name:"TableSetting",components:{ElDialog:he},props:{columnOptions:{type:Array,default:()=>[]},hideColumns:{type:Array,default:()=>[]}},emits:["confirm"],setup(t,{emit:a,attrs:o}){const r=S(!0),i=S(!1),l=S([]),u=S([]),p=()=>{i.value=!0,r.value=!1,u.value=t.columnOptions.filter(d=>!t.hideColumns.includes(d.label)),l.value=u.value.map(d=>d.label)};function s(d){d?l.value=t.columnOptions.map(c=>c.label):l.value=[],r.value=!1}function g(d){const c=d.length;i.value=c===t.columnOptions.length,r.value=c>0&&c<t.columnOptions.length}function e(){a("confirm",l.value)}return F(()=>{p()}),()=>{let d;return n(_("el-dialog"),$({title:"\u8868\u683C\u8BBE\u7F6E"},o),{default:()=>[n("div",{class:"table-setting-item"},[n("p",{class:"table-setting-item-title"},[y("\u5B57\u6BB5\u663E\u793A\u8BBE\u7F6E")]),n("div",{class:"table-setting-item-content"},[n(_("el-checkbox"),{indeterminate:r.value,modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,onChange:s,style:"margin-bottom:10px;"},{default:()=>[y("\u5168\u9009")]}),n(_("el-checkbox-group"),{modelValue:l.value,"onUpdate:modelValue":c=>l.value=c,onChange:g},Oe(d=u.value.map(c=>c.label?n(_("el-checkbox"),{label:c.label,key:c.label,style:"margin-bottom:10px;"},{default:()=>[c.label]}):null))?d:{default:()=>[d]})])]),n("div",null,[n(_("el-button"),{onClick:e,type:"primary"},{default:()=>[y("\u786E\u5B9A")]})])]})}}});function Ge(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!X(t)}const K={background:!0,pageSize:50,total:0,layout:"prev, pager, next, total, sizes",pageSizes:[10,20,30,40,50],pagerCount:7,currentPage:1},ke=h({name:"DynamicTable",components:{ElTable:ve,ElTableColumn:W,ElPagination:Se,RenderColumn:J,TableSetting:$e},props:U(B({},Y),{columns:{type:Array,default:()=>[]},hideColumns:{type:Array,default:()=>[]},align:{type:String,default:"left"},pagination:{type:[Boolean,Object],default:()=>K},selectable:{type:Function,default:()=>!0},showOverflowTooltip:{type:Boolean,default:!0},showTableSetting:{type:Boolean,default:!1},customClass:{type:Array,default:()=>["dynamic-table"]}}),emits:["update:pagination","size-change","current-change","page-change"],setup(t,a){Te("tableRoot",a);const{emit:o,attrs:r,slots:i,expose:l}=a,u=ye().vnode.props||{},p="onUpdate:pagination"in u,s=G(()=>!p&&t.pagination!==!1),g=S(),e=G(()=>{const b={};return Object.keys(Y).forEach(C=>{t[C]&&C!=="data"&&(b[C]=t[C])}),b}),d=G(()=>t.pagination!==!1),c=G({get(){return Object.assign(K,t.pagination)},set(b){o("update:pagination",b)}}),x=S(!1);let P=!1;const le=b=>{console.log("handleSizeChange",b),s.value&&(k.value.currentPageSize=b,k.value.currentPage=1),c.value=Object.assign(c.value,{pageSize:b,currentPage:1}),o("size-change",b),o("page-change",{pageSize:b,currentPage:c.value.currentPage}),we(()=>{P=!1})},se=b=>{console.log("handleCurrentChange",b),s.value&&(k.value.currentPage=b),P||(c.value=Object.assign(c.value,{currentPage:b}),console.log("page",c.value,b),o("current-change",b),o("page-change",{pageSize:c.value.pageSize,currentPage:b})),P=!1},re=()=>{x.value=!0},H=S([]);function de(b,C){const w=(b-1)*C,ue=w+C;return t.data.slice(w,ue)}function E({currentPage:b,currentPageSize:C}){H.value=de(b,C)}const k=S();Z(()=>t.data.length,()=>{s.value&&(E({currentPage:c.value.currentPage,currentPageSize:c.value.pageSize}),c.value=Object.assign(c.value,{total:t.data.length}),k.value=Ce({total:t.data.length,page:c.value.currentPage,pageSize:c.value.pageSize,onPageChange:E,onPageSizeChange:E}))},{immediate:!0});const M=S([]),ie=b=>{M.value.forEach(C=>{b.includes(C.label)?C.hide=!1:C.label&&(C.hide=!0)}),x.value=!1},R=()=>{M.value=t.columns.filter(b=>!t.hideColumns.includes(b.prop))};return Z(()=>t.hideColumns,()=>{R()}),F(()=>{R()}),l({table:g}),()=>{var C;let b;return n("div",{class:t.customClass},[t.showTableSetting&&n("div",{class:"table-setting",onClick:re},[n("i",{class:"el-icon-setting"},null)]),n(_("el-table"),$({ref:w=>g.value=w},e.value,r,{data:s.value?H.value:t.data}),Ge(b=M.value.map(w=>w.hide?null:n(J,{key:w.prop,column:w,align:t.align,showOverflowTooltip:t.showOverflowTooltip},null)))?b:{default:()=>[b]}),d.value&&n("div",{class:"pagination dynamic-table-pagination"},[n("div",{class:"page-aside"},[(C=i.pageAside)==null?void 0:C.call(i)]),n(_("el-pagination"),$({class:"pagination--target"},c.value,{currentPage:c.value.currentPage,onUpdateCurrentPage:w=>{p&&(c.value.currentPage=w)},onSizeChange:le,onCurrentChange:se}),null)]),n(_("table-setting"),{modelValue:x.value,"onUpdate:modelValue":w=>x.value=w,onConfirm:ie,columnOptions:t.columns,hideColumns:t.hideColumns},null)])}}});var je=ke;var Pe=Ae(je,[["__scopeId","data-v-7bb7c048"]]);const v=Ne(Pe);var ne=v;const Ee=h({setup(t){const a=[{label:"\u65E5\u671F",prop:"date",width:180},{label:"\u59D3\u540D",prop:"name",width:180},{label:"\u5730\u5740",prop:"address"}],o=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(r,i)=>(T(),A(m(v),{columns:a,data:m(o),pagination:!1},null,8,["data"]))}});var xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});const Me={style:{display:"flex","align-items":"center"}},Be={style:{"margin-left":"10px"}},Fe=y("Edit"),He=y("Delete"),Re=h({setup(t){const a=(l,u)=>{console.log(l,u),j.success(`edit ${l} ${u.name}`)},o=(l,u)=>{console.log(l,u),j.error(`delete ${l} ${u.name}`)},r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],i=[{label:"Date",prop:"date",width:180,slot:"date"},{label:"Name",prop:"name",width:180,slot:"name"},{label:"Operations",prop:"operations",slot:"operations"}];return(l,u)=>{const p=_("el-icon"),s=_("el-tag"),g=_("el-popover"),e=_("el-button");return T(),A(m(v),{columns:i,data:r,pagination:!1},{date:f(({row:d})=>[N("div",Me,[n(p,null,{default:f(()=>[n(m(xe))]),_:1}),N("span",Be,L(d.date),1)])]),name:f(({row:d})=>[n(g,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:f(()=>[N("div",null,"name: "+L(d.name),1),N("div",null,"address: "+L(d.address),1)]),reference:f(()=>[n(s,null,{default:f(()=>[y(L(d.name),1)]),_:2},1024)]),_:2},1024)]),operations:f(({row:d,$index:c})=>[n(e,{size:"small",onClick:x=>a(c,d)},{default:f(()=>[Fe]),_:2},1032,["onClick"]),n(e,{size:"small",type:"danger",onClick:x=>o(c,d)},{default:f(()=>[He]),_:2},1032,["onClick"])]),_:1})}}});var Lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re});const Ve=y("Edit"),Ie=y("Delete"),Ue=h({setup(t){const a=(p,s)=>{console.log(p,s),j.success(`edit ${p} ${s.name}`)},o=(p,s)=>{console.log(p,s),j.error(`delete ${p} ${s.name}`)},r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Jerry",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Antfu",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Sheep",address:"No. 189, Grove St, Los Angeles"}],i=[{label:"Date",prop:"date",width:180,showHeaderTooltip:!0,headerTooltipText:"\u6211\u662F\u63D0\u793A\u5185\u5BB9"},{label:"Name",prop:"name",width:180},{label:"Operations",prop:"operations",slot:"operations",slotHeader:"header"}],l=S(""),u=G(()=>r.filter(p=>!l.value||p.name.toLowerCase().includes(l.value.toLowerCase())));return(p,s)=>{const g=_("el-input"),e=_("el-button");return T(),A(m(v),{columns:i,data:m(u),pagination:!1},{header:f(()=>[n(g,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=d=>l.value=d),size:"small",placeholder:"Type to search"},null,8,["modelValue"])]),operations:f(({row:d,$index:c})=>[n(e,{size:"small",onClick:x=>a(c,d)},{default:f(()=>[Ve]),_:2},1032,["onClick"]),n(e,{size:"small",type:"danger",onClick:x=>o(c,d)},{default:f(()=>[Ie]),_:2},1032,["onClick"])]),_:1},8,["data"])}}});var zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ue});const Ye=h({setup(t){const a=[{type:"index",index:r=>r*2},{label:"Date",prop:"date",width:180},{label:"Name",prop:"name",width:180},{label:"Address",prop:"address"}],o=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(r,i)=>(T(),A(m(v),{columns:a,data:o,pagination:!1}))}});var Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye});const Ze=h({setup(t){const a=[{type:"expand",slot:"expand"},{label:"Date",prop:"date"},{label:"Name",prop:"name"}],o=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(r,i)=>(T(),A(m(v),{columns:a,data:o,pagination:!1},{expand:f(({row:l})=>[N("p",null,"State: "+L(l.state),1),N("p",null,"City: "+L(l.city),1),N("p",null,"Address: "+L(l.address),1),N("p",null,"Zip: "+L(l.zip),1)]),_:1}))}});var Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});const Je=y("reset date filter"),Ke=y("reset all filters"),qe=h({setup(t){const r=[{label:"Date",prop:"date",sortable:!0,width:180,columnKey:"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],filterMethod:(s,g,e)=>{const d=e.property;return g[d]===s}},{label:"Name",prop:"name",width:180},{label:"Address",prop:"address"},{label:"Tag",prop:"tag",slot:"tag",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],filterMethod:(s,g)=>g.tag===s,filterPlacement:"bottom-end"}],i=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}]),l=S(),u=()=>{l.value.table.clearFilter(["date"])},p=()=>{l.value.table.clearFilter()};return(s,g)=>{const e=_("el-button"),d=_("el-tag");return T(),z(D,null,[n(e,{onClick:u},{default:f(()=>[Je]),_:1}),n(e,{onClick:p},{default:f(()=>[Ke]),_:1}),n(m(v),{ref_key:"tableRef",ref:l,columns:r,data:m(i),"row-key":"date",pagination:!1},{tag:f(c=>[n(d,{type:c.row.tag==="Home"?"":"success","disable-transitions":""},{default:f(()=>[y(L(c.row.tag),1)]),_:2},1032,["type"])]),_:1},8,["data"])],64)}}});var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qe});const Qe=h({setup(t){const a=[{label:"Date",prop:"date",width:120,fixed:"left"},{label:"Name",prop:"name",width:110},{label:"State",prop:"state",width:120},{label:"City",prop:"city",width:320},{label:"Address",prop:"address",width:600},{label:"Zip",prop:"zip",width:120}],o=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}];return(r,i)=>(T(),A(m(v),{columns:a,data:o,pagination:!1,height:"250"}))}});var Gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const We=y(" Remove "),Xe=y("Add Item"),et=h({setup(t){const a=new Date,o=[{label:"Date",prop:"date",width:120,fixed:"left"},{label:"Name",prop:"name",width:110},{label:"State",prop:"state",width:120},{label:"City",prop:"city",width:320},{label:"Address",prop:"address",width:600},{label:"Zip",prop:"zip",width:120},{label:"Operations",slot:"options",prop:"options",width:120,fixed:"right"}],r=S([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]),i=u=>{r.value.splice(u,1)},l=()=>{a.setDate(a.getDate()+1),r.value.push({date:ze(a).format("YYYY-MM-DD"),name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})};return(u,p)=>{const s=_("el-button");return T(),z(D,null,[n(m(v),{columns:o,data:r.value,"max-height":"250",pagination:!1},{options:f(g=>[n(s,{type:"text",size:"small",onClick:Le(e=>i(g.$index),["prevent"])},{default:f(()=>[We]),_:2},1032,["onClick"])]),_:1},8,["data"]),n(s,{class:"mt-4",style:{width:"100%"},onClick:l},{default:f(()=>[Xe]),_:1})],64)}}});var kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const tt=h({setup(t){const a=[{label:"Date",prop:"date",width:180},{label:"Delivery Info",children:[{label:"Name",prop:"name",width:180},{label:"Address Info",children:[{label:"City",prop:"city",width:180},{label:"State",prop:"state",width:180},{label:"Zip",prop:"zip",width:180}]}]}],o=O([{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]);return(r,i)=>(T(),A(m(v),{columns:a,data:m(o),pagination:!1},null,8,["data"]))}});var jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const at=y("\u663E\u793A\u5168\u90E8"),ot=y("\u9690\u85CF\u6027\u522B\u5E74\u9F84"),nt=h({setup(t){const a=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address",hide:!0},{label:"Sex",prop:"sex"},{label:"Age",prop:"age"},{label:"Grade",prop:"grade"}],o=S([]),r=(l=[])=>o.value=l,i=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",sex:"man",age:"18",grade:"3"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",sex:"man",age:"18",grade:"3"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",sex:"man",age:"18",grade:"3"}]);return(l,u)=>{const p=_("ElButton");return T(),z(D,null,[n(m(v),{columns:a,data:m(i),pagination:!1,"hide-columns":m(o)},null,8,["data","hide-columns"]),n(p,{onClick:u[0]||(u[0]=s=>r())},{default:f(()=>[at]),_:1}),n(p,{onClick:u[1]||(u[1]=s=>r(["sex","age"]))},{default:f(()=>[ot]),_:1})],64)}}});var Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const lt={style:{"margin-top":"20px"}},st=y("Toggle selection status of second and third rows"),rt=y("Clear selection"),dt=h({setup(t){const a=[{type:"selection",width:50},{label:"Date",prop:"date",width:120},{label:"Name",prop:"name",width:120},{label:"Address",prop:"address",showOverflowTooltip:!0}],o=S(),r=S([]),i=p=>{p?p.forEach(s=>{o.value.table.toggleRowSelection(s,void 0)}):o.value.table.clearSelection()},l=p=>{r.value=p},u=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los Angeles"}];return(p,s)=>{const g=_("el-button");return T(),z(D,null,[n(m(v),{ref_key:"multipleTableRef",ref:o,columns:a,data:u,style:{width:"100%"},pagination:!1,onSelectionChange:l},null,512),N("div",lt,[n(g,{onClick:s[0]||(s[0]=e=>i([u[1],u[2]]))},{default:f(()=>[st]),_:1}),n(g,{onClick:s[1]||(s[1]=e=>i())},{default:f(()=>[rt]),_:1})])],64)}}});var Et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dt});const it=h({setup(t){const a=[{label:"Phone",prop:"phone"},{label:"Gender",prop:"gender"},{label:"Email",prop:"email"}],o=S([]),r=S({currentPage:1,pageSize:10,total:0}),i=S(!1),l=s=>B({results:s.pageSize,page:s.current},s),u=s=>{i.value=!0;const g=new URLSearchParams(l(s)).toString();window.fetch(`https://randomuser.me/api?${g}`,{method:"GET"}).then(e=>e.json()).catch(e=>console.error("Error:",e)).then(e=>{i.value=!1,o.value=e.results,r.value={total:200,currentPage:s.currentPage,pageSize:s.pageSize}})},p=s=>{u({currentPage:s.currentPage,pageSize:s.pageSize})};return F(()=>{u(r.value)}),(s,g)=>{const e=ee("loading");return te((T(),A(m(ne),{pagination:m(r),"onUpdate:pagination":g[0]||(g[0]=d=>De(r)?r.value=d:null),"max-height":"300px",columns:a,data:m(o),stripe:"",border:!0,"highlight-current-row":"",onPageChange:p},null,8,["pagination","data"])),[[e,i.value]])}}});var Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:it});const ut=h({setup(t){const a=[{label:"ID",prop:"id",width:180},{label:"Name",prop:"name"},{label:"Cost 1 ($)",prop:"amount1",sortable:!0},{label:"Cost 2 ($)",prop:"amount2",sortable:!0},{label:"Cost 3 ($)",prop:"amount3",sortable:!0}],o=({rowIndex:l,columnIndex:u})=>{if(l%2===0){if(u===0)return[1,2];if(u===1)return[0,0]}},r=({rowIndex:l,columnIndex:u})=>{if(u===0)return l%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},i=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}];return(l,u)=>(T(),z(D,null,[n(m(v),{columns:a,data:i,border:"",pagination:!1,"span-method":o}),n(m(v),{columns:a,data:i,border:"",pagination:!1,style:{width:"100%","margin-top":"20px"},"span-method":r})],64))}});var Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ut});const ct={style:{"margin-top":"20px"}},pt=y("Select second row"),mt=y("Clear selection"),gt=h({setup(t){const a=[{type:"index",width:50},{label:"Date",prop:"date",width:120},{label:"Name",prop:"name",width:120},{label:"Address",prop:"address"}],o=S(),r=S(),i=p=>{r.value.table.setCurrentRow(p)},l=p=>{o.value=p},u=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(p,s)=>{const g=_("el-button");return T(),z(D,null,[n(m(v),{ref_key:"singleTableRef",ref:r,columns:a,data:u,"highlight-current-row":"",style:{width:"100%"},pagination:!1,onCurrentChange:l},null,512),N("div",ct,[n(g,{onClick:s[0]||(s[0]=e=>i(u[1]))},{default:f(()=>[pt]),_:1}),n(g,{onClick:s[1]||(s[1]=e=>i())},{default:f(()=>[mt]),_:1})])],64)}}});var Ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt});const _t=h({setup(t){const o=[{label:"\u65E5\u671F",sortable:!0,prop:"date",width:180},{label:"\u59D3\u540D",prop:"name",width:180},{label:"\u5730\u5740",prop:"address",formatter:(i,l)=>`${l.property}: ${i.address}( \u6211\u662F\u683C\u5F0F\u5316\u540E\u7684\u5185\u5BB9 )`}],r=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(i,l)=>(T(),A(m(v),{columns:o,data:m(r),pagination:!1,"default-sort":{prop:"date",order:"descending"}},null,8,["data"]))}});var Ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});const ft=h({setup(t){const a=[{label:"\u65E5\u671F",prop:"date",width:180},{label:"\u59D3\u540D",prop:"name",width:180},{label:"\u5730\u5740",prop:"address"}],o=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(r,i)=>(T(),A(m(v),{pagination:!1,columns:a,data:m(o),stripe:""},null,8,["data"]))}});var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft});const bt=h({setup(t){const a=[{label:"ID",prop:"id",width:180},{label:"Name",prop:"name"},{label:"Cost 1 ($)",prop:"amount1"},{label:"Cost 2 ($)",prop:"amount2"},{label:"Cost 3 ($)",prop:"amount3"}],o=i=>{const{columns:l,data:u}=i,p=[];return l.forEach((s,g)=>{if(g===0){p[g]="Total Cost";return}const e=u.map(d=>Number(d[s.property]));e.every(d=>Number.isNaN(d))?p[g]="N/A":p[g]=`$ ${e.reduce((d,c)=>{const x=Number(c);return Number.isNaN(x)?d:d+c},0)}`}),p},r=[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9}];return(i,l)=>(T(),z(D,null,[n(m(v),{columns:a,data:r,border:"","show-summary":"",pagination:!1}),n(m(v),{style:{width:"100%","margin-top":"20px"},columns:a,data:r,border:"",height:"200","show-summary":"","summary-method":o,pagination:!1})],64))}});var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const ht=h({setup(t){const a=S("fixed"),o=[{label:"Date",prop:"date"},{label:"Name",prop:"name"},{label:"Address",prop:"address"}],r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(i,l)=>{const u=_("el-radio-button"),p=_("el-radio-group");return T(),z(D,null,[n(p,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s)},{default:f(()=>[n(u,{label:"left"}),n(u,{label:"center"}),n(u,{label:"right"})]),_:1},8,["modelValue"]),n(m(v),{columns:o,data:r,align:a.value,pagination:!1},null,8,["align"])],64)}}});var It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht});const vt=h({setup(t){const a=[{label:"Date",prop:"date",width:180,sortable:!0},{label:"Name",prop:"name",width:180,sortable:!0}],o=(l,u,p)=>{setTimeout(()=>{p([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},r=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],i=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}];return(l,u)=>(T(),z(D,null,[n(m(v),{style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","default-expand-all":"",columns:a,data:r,pagination:!1}),n(m(v),{"row-key":"id",border:"",columns:a,data:i,lazy:"",load:o,"tree-props":{children:"children",hasChildren:"hasChildren"},pagination:!1})],64))}});var Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt});const St=y("Add item"),Tt=y("Delete item"),yt=h({setup(t){const a=[{label:"Id",prop:"id"},{label:"Name",prop:"name"},{label:"Email",prop:"email"}],o=S([]),r=()=>{o.value.push({id:o.value.length+1,name:`user${o.value.length+1}`})},i=()=>{o.value.shift()},l=O({currentPage:1,pageSize:20});setTimeout(()=>{for(let p=0;p<80;p++)o.value.push({id:p,name:`user ${p}`})},1e3);const u=S(!1);return(p,s)=>{const g=_("ElButton"),e=ee("loading");return T(),z(D,null,[te(n(m(ne),{pagination:m(l),"max-height":"300px",columns:a,data:m(o),stripe:"",border:!0,"highlight-current-row":""},{pageAside:f(()=>[N("span",null,"pageAside: "+L(JSON.stringify(m(l))),1)]),_:1},8,["pagination","data"]),[[e,u.value]]),n(g,{type:"primary",plain:"",onClick:r},{default:f(()=>[St]),_:1}),n(g,{type:"danger",plain:"",onClick:i},{default:f(()=>[Tt]),_:1})],64)}}});var Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt});const Ct=h({setup(t){const a=[{label:"\u65E5\u671F",prop:"date",width:180},{label:"\u59D3\u540D",prop:"name",width:180},{label:"\u5730\u5740",prop:"address"}],o=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]);return(r,i)=>(T(),A(m(v),{columns:a,data:m(o),border:"",pagination:!1},null,8,["data"]))}});var Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ct});const wt=h({setup(t){const a=[{label:"\u65E5\u671F",prop:"date",width:180},{label:"\u59D3\u540D",prop:"name",width:180},{label:"\u5730\u5740",prop:"address"}],o=O([{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),r=({row:i,rowIndex:l})=>l===1?"warning-row":l===3?"success-row":"";return(i,l)=>(T(),A(m(v),{columns:a,data:m(o),pagination:!1,"row-class-name":r},null,8,["data"]))}});var Jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt});export{xt as _,Lt as a,zt as b,Dt as c,Ot as d,$t as e,Gt as f,kt as g,jt as h,Pt as i,Et as j,Mt as k,Bt as l,Ft as m,Ht as n,Rt as o,Vt as p,It as q,Ut as r,Yt as s,Zt as t,Jt as u};
