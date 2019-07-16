(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e2b6cab"],{"208a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","margin-top":"50px"},attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.ruleForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"销售人员",prop:"sellerName"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.ruleForm.sellerName,callback:function(t){e.$set(e.ruleForm,"sellerName",t)},expression:"ruleForm.sellerName"}})],1),a("el-form-item",{attrs:{label:"保司保单号",prop:"baosiNo"}},[a("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.ruleForm.baosiNo,callback:function(t){e.$set(e.ruleForm,"baosiNo",t)},expression:"ruleForm.baosiNo"}})],1),a("el-form-item",{attrs:{label:"企业名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.ruleForm.companyName,callback:function(t){e.$set(e.ruleForm,"companyName",t)},expression:"ruleForm.companyName"}})],1),a("el-form-item",{attrs:{label:"购买时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.buyStartTime,callback:function(t){e.$set(e.ruleForm,"buyStartTime",t)},expression:"ruleForm.buyStartTime"}})],1),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("至")]),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.buyEndTime,callback:function(t){e.$set(e.ruleForm,"buyEndTime",t)},expression:"ruleForm.buyEndTime"}})],1)],1),a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:e.getExcel}},[e._v("导出excel")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"Loading"}},[a("el-table-column",{attrs:{prop:"tsCompanyInfo.companyName",label:"企业名称",width:"280"}}),a("el-table-column",{attrs:{prop:"baosiNo",label:"保司保单号",width:""}}),a("el-table-column",{attrs:{prop:"sellerName",label:"销售人员",width:""}}),a("el-table-column",{attrs:{prop:"insureMoney",label:"投保金额（元）",width:""}}),a("el-table-column",{attrs:{prop:"purchaseTime",label:"购买时间",width:"",formatter:e.dateFormat}}),a("el-table-column",{attrs:{prop:"remarks",label:"备注",width:""}}),a("el-table-column",{attrs:{prop:"",label:"操作",fixed:"right",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.loanDetails(t.row,"loanDetails")}}},[e._v("\n                        详情\n                    ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.loanDetails(t.row,"goodsList")}}},[e._v("\n                        商品清单\n                    ")])]}}])})],1),a("div",{staticClass:"pageDown"},[a("el-pagination",{attrs:{"current-page":e.ruleForm.pageNum,"page-sizes":[10,20,30,50],"page-size":e.ruleForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],o=a("c1df"),n=a.n(o),i=a("70d8"),s={data:function(){return{centerDialogVisible:!1,tableData:[],total:0,listLoading:!1,ruleForm:{sellerName:"",baosiNo:"",companyName:"",buyStartTime:"",buyEndTime:"",pageNum:1,pageSize:10},rules:{}}},created:function(){this.fetchData()},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var e=this;this.listLoading=!0,Object(i["f"])(this.ruleForm).then(function(t){e.tableData=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error(t.msg),e.listLoading=!1})},handleSizeChange:function(e){this.ruleForm.pageSize=e,this.ruleForm.pageNum=1,this.fetchData()},handleCurrentChange:function(e){this.ruleForm.pageNum=e,this.fetchData()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.ruleForm.pageNum=1,t.fetchData()})},resetForm:function(e){this.$refs[e].resetFields(),this.ruleForm.buyStartTime="",this.ruleForm.buyEndTime="",this.ruleForm.pageNum=1,this.fetchData()},dateFormat:function(e,t){var a=e[t.property];return void 0==a?"":n()(a).format("YYYY-MM-DD HH:mm:ss")},loanDetails:function(e,t){this.$router.push({path:"/userManage/".concat(t),query:{tsCompanyId:e.tsCompanyId,type:"2",id:e.id}})},getExcel:function(){var e=this;this.listLoading=!0,Object(i["b"])(this.ruleForm).then(function(t){e.listLoading=!1}).catch(function(t){var a=new Blob([t],{type:"application/ms-txt;charset=utf-8"}),l=n()(new Date).format("YYYYMMDD"),r="订单列表".concat(l,".csv");if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,r);else{var o=window.URL.createObjectURL(a),i=document.createElement("a");i.style.display="none",i.href=o,i.setAttribute("download",r),"undefined"===typeof i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)}e.listLoading=!1})}}},u=s,c=(a("2d29"),a("2877")),m=Object(c["a"])(u,l,r,!1,null,null,null);t["default"]=m.exports},"2d29":function(e,t,a){"use strict";var l=a("4589"),r=a.n(l);r.a},4589:function(e,t,a){}}]);