import{g as p,r as a,o as u,c as s,a as e,w as n}from"./app-6b0ccc17.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";const c=p({setup(){return{tableData:[{propName:"model-value / v-model",instructions:"选中项绑定值	",type:"array / string / number / boolean / object",chooseValue:"—",defaultValue:"—"},{propName:"toolTip",instructions:"是否开启toolTip",type:"boolean",chooseValue:"true/false",defaultValue:"true"},{propName:"toolTipConfig",instructions:"RxtoolTip配置项",type:"object",chooseValue:"—",defaultValue:"—"},{propName:"options",instructions:"RxOption配置项",type:"array",chooseValue:"—",defaultValue:"—"}]}}}),i={style:{"margin-bottom":"20px"}};function m(t,d,_,b,f,h){const o=a("el-table-column"),l=a("el-table");return u(),s("div",i,[e(l,{data:t.tableData,style:{width:"100%"},border:!1},{default:n(()=>[e(o,{prop:"propName",label:"属性名",width:"180"}),e(o,{prop:"instructions",label:"说明",width:"180"}),e(o,{prop:"type",label:"类型"}),e(o,{prop:"chooseValue",label:"可选值	"}),e(o,{prop:"defaultValue",label:"默认值"})]),_:1},8,["data"])])}const y=r(c,[["render",m],["__file","RxSelectPlusExampleApi.vue"]]);export{y as default};