import{g as k,i as a,l as p,r,o as b,m as h,w as m,f as s,a as x}from"./app-6b0ccc17.js";import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";const f=k({__name:"RxCheckboxGroupExampleTooltipSlots",setup(v){const o=a([]),c=a([{value:!1,label:"checkbox1-overflow"},{value:!1,label:"checkbox2-overflow",toolTipContent:"content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2",toolTipSlots:e=>p("div",{},`toolTipSlots-${e.label}`)},{value:!1,label:"checkbox3-overflow",toolTipContent:"content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2-content-checkbox2"}]),u=e=>p("div",{},`toolTipFormatter-${e.label}`);return(e,t)=>{const n=r("rx-checkbox-group"),i=r("el-card");return b(),h(i,{shadow:"never"},{default:m(()=>[s(" checkBoxOptions.toolTipSlots "),x(n,{gutter:10,baseColProps:{span:4},checkBoxOptions:c.value,rxCheckboxAll:!0,toolTipConfig:{placement:"top"},modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=l=>o.value=l)},null,8,["checkBoxOptions","modelValue"]),s(" toolTip插槽 toolTipFormatter "),x(n,{gutter:10,baseColProps:{span:4},checkBoxOptions:c.value,rxCheckboxAll:!0,toolTipConfig:{placement:"top"},toolTipFormatter:u,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=l=>o.value=l)},null,8,["checkBoxOptions","modelValue"])]),_:1})}}}),T=d(f,[["__file","RxCheckboxGroupExampleTooltipSlots.vue"]]);export{T as default};
