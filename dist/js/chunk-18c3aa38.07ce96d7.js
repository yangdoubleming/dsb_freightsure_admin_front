(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c3aa38"],{"408d":function(s,t,a){"use strict";var e=a("7842"),l=a.n(e);l.a},7842:function(s,t,a){},"825c":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading"}},[a("el-page-header",{staticStyle:{"margin-bottom":"50px"},attrs:{content:"用户详情"},on:{back:s.goBack}}),a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[s._v("基本信息")])]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("订单号：")]),s._v(s._s(s.details.ticketNo))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("包主姓名：")]),s._v(s._s(s.details.name))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("产品名称：")]),s._v(s._s(s.details.productName))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("定价系数：")]),s._v(s._s(s.adjustPrice))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("产品id：")]),s._v(s._s(s.details.productId))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v(" 支付金额（元）：")]),s._v(s._s(s.details.productAmount||""))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("产品购买份数：")]),s._v(s._s(s.details.productNum))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("物流单号：")]),s._v(s._s(s.details.expressNo))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("物流发货日期：")]),s._v(s._s(s.dateFormat(s.details.expressTime)))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("购物网站订单号 ：")]),s._v(s._s(s.details.purchasOrderNo))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("购买日期：")]),s._v(s._s(s.dateFormat(s.details.shoppingTime)))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("起运地：")]),s._v(s._s(s.details.loadingPort))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("目的口岸：")]),s._v(s._s(s.details.destinationPort))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("运输方式：")]),s._v(s._s(s.details.expressChannel))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("商品价值明细：")]),s._v(s._s(s.details.goodsValueDetail))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("商品价值：")]),s._v(s._s(s.details.goodsValue))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("商品种类：")]),s._v(s._s(s.details.goodsKind))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("商品列表：")]),s._v(s._s(s.details.goodsCategory))])])],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("生效日期：")]),s._v(s._s(s.dateFormat(s.details.effectiveDate)))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("截止日期：")]),s._v(s._s(s.dateFormat(s.details.endTime)))])]),a("el-col",{attrs:{span:8}},[a("div",{},[a("span",{staticClass:"bg-purple"},[s._v("上传日期：")]),s._v(s._s(s.dateFormat(s.details.createAt)))])])],1)],1)],1)},l=[],i=(a("01ea"),a("70d8")),r=a("c1df"),p=a.n(r),n={data:function(){return{loading:!1,details:{},companyPlatformList:[],legalPersonIdBack:"",legalPersonIdFront:"",tradingCertificate:""}},computed:{},created:function(){this.fetchData()},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var s=this;Object(i["j"])(this.$route.query).then(function(t){t.data&&(s.details=t.data[0]),s.loading=!1}).catch(function(t){s.loading=!1,s.$message.error(t.msg)})},dateFormat:function(s){return s?p()(s).format("YYYY-MM-DD HH:mm:ss"):""}}},o=n,c=(a("408d"),a("2877")),d=Object(c["a"])(o,e,l,!1,null,null,null);t["default"]=d.exports}}]);