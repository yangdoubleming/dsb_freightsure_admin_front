(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de73db8"],{3657:function(t,a,s){},"7a60":function(t,a,s){"use strict";var e=s("3657"),l=s.n(e);l.a},ac6a:function(t,a,s){for(var e=s("cadf"),l=s("0d58"),i=s("2aba"),r=s("7726"),n=s("32e9"),o=s("84f2"),c=s("2b4c"),p=c("iterator"),d=c("toStringTag"),u=o.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},_=l(v),g=0;g<_.length;g++){var f,m=_[g],b=v[m],C=r[m],h=C&&C.prototype;if(h&&(h[p]||n(h,p,u),h[d]||n(h,d,m),o[m]=u,b))for(f in e)h[f]||i(h,f,e[f],!0)}},e7f0:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading"}},[s("el-page-header",{staticStyle:{"margin-bottom":"50px"},attrs:{content:"驳回详情"},on:{back:t.goBack}}),s("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("用户申请信息")])]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("手机号：")]),t._v(t._s(t.details.contactPhone))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("企业名称：")]),t._v(t._s(t.details.companyName))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("姓名：")]),t._v(t._s(t.details.contactName))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("线上年销售额（万元）：")]),t._v(t._s(t.details.onlineAnnualSales))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("进口来源国：")]),t._v(t._s(t.details.importRegions))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("产品品类：")]),t._v(t._s(t.details.productCategorysList))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("销售平台：")]),t._l(t.details3,function(a){return s("div",{key:a.id,staticStyle:{"margin-top":"8px"}},[t._v(t._s(a.paltformName)+"——"+t._s(a.paltformWebsiteUrl))])})],2)])],1)],1),s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"30px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("线下尽调回填")])]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("进货及销售流程：")]),t._v(t._s(t.details.process))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("风控措施：")]),t._v(t._s(t.details.riskManagement))])])],1),t._l(t.details4,function(a,e){return s("div",{key:e,staticClass:"block"},[s("span",{staticClass:"demonstration"},[t._v(t._s(a.name))]),t._l(a.arr,function(a,e){return s("div",{key:e},[s("el-image",{attrs:{src:t.BASE_URL+a}})],1)})],2)})],2),2==t.type?s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"30px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("审核信息")])]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("销售人员：")]),t._v(t._s(t.details2.sellerName))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("保司保单号：")]),t._v(t._s(t.details2.baosiNo))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("投保有效期：")]),t._v(t._s(t.details2.effective))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("投保金额（元）：")]),t._v(t._s(t.details2.insureMoney))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("购买时间：")]),t._v(t._s(t.dateFormat(t.details2.purchaseTime)))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("年销售额（万元）：")]),t._v(t._s(t.details2.annualSales))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("费率：")]),t._v(t._s(t.details2.rate))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("保费：")]),t._v(t._s(t.details2.premium))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("赔偿方式：")]),t._v(t._s(t.details2.compensationWay))])])],1),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("每次事故赔偿限额：")]),t._v(t._s(t.details2.compensationQuota))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("累计赔偿限额：")]),t._v(t._s(t.details2.compensationQuotaCumulative))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("备注：")]),t._v(t._s(t.details2.remarks))])])],1)],1):s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"30px"},attrs:{shadow:"hover"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("审核信息")])]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("销售人员：")]),t._v(t._s(t.details2.sellerName))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("驳回时间：")]),t._v(t._s(t.dateFormat(t.details2.createTime)))])]),s("el-col",{attrs:{span:8}},[s("div",{},[s("span",{staticClass:"bg-purple"},[t._v("备注：")]),t._v(t._s(t.details2.remarks))])])],1)],1)],1)},l=[],i=(s("7f7f"),s("ac6a"),s("70d8")),r=s("c1df"),n=s.n(r),o=s("01ea"),c={data:function(){return{loading:!0,details:{},details2:{},details3:[],ciRepaymentRecord:{},imgInfo:[],productArr:[],details4:[],BASE_URL:o["a"],type:"2"}},computed:{},created:function(){this.type=this.$route.query.type,this.fetchData()},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.loading=!0,Object(i["k"])(this.$route.query).then(function(a){t.details=a.data.tsCompanyInfo&&a.data.tsCompanyInfo||{},t.details2=a.data.tsApprovalRecord&&a.data.tsApprovalRecord||{},t.details3=a.data.companyPlatformList&&a.data.companyPlatformList||[];var s=a.data.imagePathMap;s.one&&t.details4.push({name:"网站资质",arr:s.one}),s.two&&t.details4.push({name:"产品来源材料",arr:s.two}),s.three&&t.details4.push({name:"网站备案",arr:s.three}),s.four&&t.details4.push({name:"公司营业执照",arr:s.four}),s.five&&t.details4.push({name:"产品渠道方证明",arr:s.five}),s.six&&t.details4.push({name:"产品销售授权书",arr:s.six}),s.seven&&t.details4.push({name:"进货渠道",arr:s.seven}),console.log(t.details4),Object(i["i"])().then(function(a){var s=[];t.details.productCategorysList.length>0&&t.details.productCategorysList.forEach(function(t){a.data.forEach(function(a){a.id==t&&s.push(a.name)})}),t.details.productCategorysList=s.join("，")}).catch(function(a){t.$message({message:a.msg,type:"error"})}),t.loading=!1}).catch(function(a){t.loading=!1,t.$message.error(a.msg)})},dateFormat:function(t){return t?n()(t).format("YYYY-MM-DD HH:mm:ss"):""}}},p=c,d=(s("7a60"),s("2877")),u=Object(d["a"])(p,e,l,!1,null,null,null);a["default"]=u.exports}}]);