(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396673e4"],{3657:function(t,a,s){},"7a60":function(t,a,s){"use strict";var e=s("3657"),l=s.n(e);l.a},e7f0:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading"}},[s("el-page-header",{staticStyle:{"margin-bottom":"50px"},attrs:{content:"贷款详情"},on:{back:t.goBack}}),s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("基本信息")])]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("贷款编号:")]),t._v(t._s(t.details.loanNo))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("电子保单：")]),t._v(t._s(t.details.electronicPolicy))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("放款银行：")]),t._v(t._s(t.details.loanBank))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("投保金额(元)：")]),t._v(t._s(t.details.insuranceMoney))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("放款时间：")]),t._v(t._s(t.details.loanTime))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("申请时间：")]),t._v(t._s(t.details.applyTime))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("投保期限（月）：")]),t._v(t._s(t.details.loanTerm))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v(" 贷款金额（元）：")]),t._v(t._s(t.details.loanAmount))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("剩余还款周期（月）：")]),t._v(t._s(t.details.outstandingTerm))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("贷款状态：")]),t._v(t._s(t.details.status))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v(" 剩余还款金额（元）：")]),t._v(t._s(t.ciRepaymentRecord.unpaidPrincipal))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("贷款利率：")]),t._v(t._s(t.details.name))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("还款时间：")]),t._v(t._s(t.details.repaymentTime))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v(" 每月还款日期：")]),t._v(t._s(t.details.monthRepaymentDay))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("待结算金额（元）：")]),t._v(t._s(t.details.notSettlementMoney))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("结算状态：")]),t._v(t._s(t.details.settlement))])])],1)],1)],1)},l=[],n=s("70d8"),i=s("c1df"),r=s.n(i),p={data:function(){return{loading:!0,details:{},ciRepaymentRecord:{}}},computed:{},created:function(){this.fetchData()},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var t=this;Object(n["e"])(this.$route.query).then(function(a){a.data&&(t.details=a.data.ciCompanyLoan,t.ciRepaymentRecord=a.data.ciRepaymentRecord||{}),t.loading=!1}).catch(function(a){t.loading=!1,t.$message.error(a)})},dateFormat:function(t){return t?r()(t).format("YYYY-MM-DD HH:mm:ss"):""}}},c=p,o=(s("7a60"),s("2877")),d=Object(o["a"])(c,e,l,!1,null,null,null);a["default"]=d.exports}}]);