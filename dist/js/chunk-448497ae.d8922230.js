(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-448497ae"],{"0daf":function(e,a,t){},"12d5":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("el-page-header",{attrs:{content:"贷款信息录入"},on:{back:e.goBack}}),t("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"50px",width:"600px",margin:"0 auto"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"电子保单",prop:"electronicPolicy"}},[t("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingYyzz,expression:"loadingYyzz"}],staticClass:"avatar-uploader",attrs:{action:e.baseUrl,"show-file-list":!1,"on-success":e.handleYyzz,"with-credentials":!0,headers:e.myHeaders,"element-loading-text":"文件上传中","element-loading-spinner":"el-icon-loading","before-upload":e.beforeHandleYyzz}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"},[e._v("电子保单")])])],1),t("el-form-item",{attrs:{label:"电子保单号",prop:"policyNo"}},[t("el-input",{model:{value:e.ruleForm.policyNo,callback:function(a){e.$set(e.ruleForm,"policyNo",a)},expression:"ruleForm.policyNo"}})],1),t("el-form-item",{attrs:{label:"投保金额（元）",prop:"insuranceMoney"}},[t("el-input",{model:{value:e.ruleForm.insuranceMoney,callback:function(a){e.$set(e.ruleForm,"insuranceMoney",a)},expression:"ruleForm.insuranceMoney"}})],1),t("el-form-item",{attrs:{label:"保单费率",prop:"insuranceRate"}},[t("el-input",{model:{value:e.ruleForm.insuranceRate,callback:function(a){e.$set(e.ruleForm,"insuranceRate",a)},expression:"ruleForm.insuranceRate"}})],1),t("el-form-item",{attrs:{label:"放款银行",prop:"loanBank"}},[t("el-input",{model:{value:e.ruleForm.loanBank,callback:function(a){e.$set(e.ruleForm,"loanBank",a)},expression:"ruleForm.loanBank"}})],1),t("el-form-item",{attrs:{label:"放款时间",prop:"loanTime"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.loanTime,callback:function(a){e.$set(e.ruleForm,"loanTime",a)},expression:"ruleForm.loanTime"}})],1),t("el-form-item",{attrs:{label:"贷款利率",prop:"loanRate"}},[t("el-input",{model:{value:e.ruleForm.loanRate,callback:function(a){e.$set(e.ruleForm,"loanRate",a)},expression:"ruleForm.loanRate"}})],1),t("el-form-item",{attrs:{label:"服务费",prop:"handlingRate"}},[t("el-input",{model:{value:e.ruleForm.handlingRate,callback:function(a){e.$set(e.ruleForm,"handlingRate",a)},expression:"ruleForm.handlingRate"}})],1),t("el-form-item",{attrs:{label:"贷款状态",prop:"status"}},[t("el-select",{attrs:{placeholder:"请选择贷款状态"},model:{value:e.ruleForm.status,callback:function(a){e.$set(e.ruleForm,"status",a)},expression:"ruleForm.status"}},[t("el-option",{attrs:{label:"资料未完成",value:"0"}}),t("el-option",{attrs:{label:"审核中",value:"1"}}),t("el-option",{attrs:{label:"已终止",value:"2"}}),t("el-option",{attrs:{label:"放款中",value:"3"}}),t("el-option",{attrs:{label:"未结清",value:"4"}}),t("el-option",{attrs:{label:"已逾期",value:"5"}}),t("el-option",{attrs:{label:"已结清",value:"6"}}),t("el-option",{attrs:{label:"还款中",value:"7"}})],1)],1),t("el-form-item",{attrs:{label:"每月还款时间",prop:"monthRepaymentDay"}},[t("el-input",{model:{value:e.ruleForm.monthRepaymentDay,callback:function(a){e.$set(e.ruleForm,"monthRepaymentDay",a)},expression:"ruleForm.monthRepaymentDay"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitForm("ruleForm")}}},[e._v("提交")]),t("el-button",{on:{click:function(a){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],l=t("70d8"),n=t("01ea"),i=t("c1df"),s=t.n(i);if(JSON.parse(localStorage.getItem("user")))var u=JSON.parse(localStorage.getItem("user")).token;var m={data:function(){return{loadingYyzz:!1,imageUrl:"",myHeaders:{},baseUrl:"".concat(n["a"],"/upload"),ruleForm:{id:"",electronicPolicy:"",policyNo:"",insuranceMoney:"",insuranceRate:"",loanBank:"",loanTime:"",loanRate:"",handlingRate:"",status:"",monthRepaymentDay:""},rules:{id:"",electronicPolicy:[],policyNo:[{required:!0,message:"请输入电子保单号",trigger:"blur"}],insuranceMoney:[{required:!0,message:"请输入投保金额（元",trigger:"blur"}],insuranceRate:[{required:!0,message:"请输入保单费率",trigger:"blur"}],loanBank:[{required:!0,message:"请输入放款银行",trigger:"blur"}],loanTime:[{required:!0,message:"请输入放款时间",trigger:"blur"}],loanRate:[{required:!0,message:"请输入贷款利率",trigger:"blur"}],handlingRate:[{required:!0,message:"请输入服务费",trigger:"blur"}],status:[{required:!0,message:"请选择贷款状态",trigger:"blur"}],monthRepaymentDay:[{required:!0,message:"请输入每月还款时间",trigger:"blur"}]}}},computed:{},created:function(){this.fetchData(),this.ruleForm.id=this.$route.query.id,this.myHeaders={token:u}},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var e=this;Object(l["h"])(this.$route.query).then(function(a){a.data&&(e.ruleForm.electronicPolicy=a.data.ciCompanyLoan.electronicPolicy,e.imageUrl=n["a"]+a.data.ciCompanyLoan.electronicPolicy,e.ruleForm.policyNo=a.data.ciCompanyLoan.policyNo,e.ruleForm.insuranceMoney=a.data.ciCompanyLoan.insuranceMoney,e.ruleForm.insuranceRate=a.data.ciCompanyLoan.insuranceRate,e.ruleForm.loanBank=a.data.ciCompanyLoan.loanBank,e.ruleForm.loanTime=e.dateFormat(a.data.ciCompanyLoan.loanTime),e.ruleForm.loanRate=a.data.ciCompanyLoan.loanRate,e.ruleForm.handlingRate=a.data.ciCompanyLoan.handlingRate,e.ruleForm.status=e.statusText(a.data.ciCompanyLoan.status),e.ruleForm.monthRepaymentDay=a.data.ciCompanyLoan.monthRepaymentDay),e.loading=!1}).catch(function(a){e.loading=!1,e.$message.error(a.msg)})},submitForm:function(e){var a=this;this.$refs[e].validate(function(e){return e?(a.ruleForm.status=a.fStatusText(a.ruleForm.status),a.ruleForm.electronicPolicy?void Object(l["b"])(a.ruleForm).then(function(e){a.$message.success(e.msg)}).catch(function(e){a.$message.error(e.msg)}):(a.$message.warning("请上传电子保单"),!1)):(console.log("error submit!!"),!1)})},resetForm:function(e){this.$refs[e].resetFields()},handleYyzz:function(e,a){this.loadingYyzz=!1,this.imageUrl=n["a"]+e.data,this.ruleForm.electronicPolicy=e.data},beforeHandleYyzz:function(e){this.loadingYyzz=!0},statusText:function(e){return 0==e?"资料未完成":1==e?"审核中":2==e?"已终止":3==e?"放款中":4==e?"未结清":5==e?"已逾期":6==e?"已结清":7==e?"还款中":void 0},fStatusText:function(e){return"资料未完成"==e?"0":"审核中"==e?"1":"已终止"==e?"2":"放款中"==e?"3":"未结清"==e?"4":"已逾期"==e?"5":"已结清"==e?"6":"还款中"==e?"7":e},dateFormat:function(e){return e?s()(e).format("YYYY-MM-DD"):""}}},c=m,d=(t("dfaf"),t("2877")),p=Object(d["a"])(c,r,o,!1,null,null,null);a["default"]=p.exports},dfaf:function(e,a,t){"use strict";var r=t("0daf"),o=t.n(r);o.a}}]);