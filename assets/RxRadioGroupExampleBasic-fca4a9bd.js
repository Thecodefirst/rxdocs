import{g as R,i,r as l,o as s,m,w as u,b as p,f as d,a as r,c as V,n as G,F as b}from"./app-6b0ccc17.js";import{_ as g}from"./plugin-vue_export-helper-c27b6911.js";const B=R({__name:"RxRadioGroupExampleBasic",setup(O){const o=i([]),t=i([{value:!1,label:"radio1"},{value:!1,label:"radio2"},{value:!1,label:"radiox3"}]);return(C,a)=>{const _=l("rx-radio"),c=l("el-col"),x=l("el-row"),n=l("rx-radio-group"),v=l("el-card");return s(),m(v,{shadow:"never"},{default:u(()=>[p("div",null,[d(" template 模板插槽 "),r(n,{rxRadioGroupOptions:t.value,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e)},{default:u(()=>[r(x,{gutter:10},{default:u(()=>[(s(!0),V(b,null,G(t.value,(e,f)=>(s(),m(c,{span:8,key:f},{default:u(()=>[r(_,{label:e.label},null,8,["label"])]),_:2},1024))),128))]),_:1})]),_:1},8,["rxRadioGroupOptions","modelValue"])]),p("div",null,[d(" RxRadioGroup 配置 "),r(n,{gutter:10,baseColProps:{span:8},rxRadioGroupOptions:t.value,modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e)},null,8,["rxRadioGroupOptions","modelValue"])]),p("div",null,[d(" RxRadioGroup 关闭toolTip "),r(n,{gutter:10,baseColProps:{span:8},toolTip:!1,rxRadioGroupOptions:t.value,modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e)},null,8,["rxRadioGroupOptions","modelValue"])])]),_:1})}}}),E=g(B,[["__file","RxRadioGroupExampleBasic.vue"]]);export{E as default};
