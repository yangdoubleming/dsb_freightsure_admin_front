(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a865faa"],{"02f4":function(t,e,r){var a=r("4588"),n=r("be13");t.exports=function(t){return function(e,r){var o,l,i=String(n(e)),u=a(r),s=i.length;return u<0||u>=s?t?"":void 0:(o=i.charCodeAt(u),o<55296||o>56319||u+1===s||(l=i.charCodeAt(u+1))<56320||l>57343?t?i.charAt(u):o:t?i.slice(u,u+2):l-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var a=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var a=r("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),o=r("79e5"),l=r("be13"),i=r("2b4c"),u=r("520a"),s=i("species"),c=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),m=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=i(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),f=d?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[s]=function(){return r}),r[p](""),!e}):void 0;if(!d||!f||"replace"===t&&!c||"split"===t&&!m){var b=/./[p],h=r(l,p,""[t],function(t,e,r,a,n){return e.exec===u?d&&!n?{done:!0,value:b.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),v=h[0],g=h[1];a(String.prototype,t,v),n(RegExp.prototype,p,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"222b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-page-header",{attrs:{content:"贷款记录"},on:{back:t.goBack}}),r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px","margin-top":"50px"},attrs:{span:24}},[r("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.ruleForm,rules:t.rules}},[r("el-form-item",{attrs:{label:"贷款期限",prop:"loanTerm"}},[r("el-select",{attrs:{placeholder:"贷款期限"},model:{value:t.ruleForm.loanTerm,callback:function(e){t.$set(t.ruleForm,"loanTerm",e)},expression:"ruleForm.loanTerm"}},[r("el-option",{attrs:{label:"全部",value:""}}),r("el-option",{attrs:{label:"1个月",value:"1"}}),r("el-option",{attrs:{label:"2个月",value:"2"}}),r("el-option",{attrs:{label:"3个月",value:"3"}}),r("el-option",{attrs:{label:"4个月",value:"4"}}),r("el-option",{attrs:{label:"5个月",value:"5"}}),r("el-option",{attrs:{label:"6个月",value:"6"}})],1)],1),r("el-form-item",{attrs:{label:"贷款状态",prop:"status"}},[r("el-select",{attrs:{placeholder:"状态"},model:{value:t.ruleForm.status,callback:function(e){t.$set(t.ruleForm,"status",e)},expression:"ruleForm.status"}},[r("el-option",{attrs:{label:"全部",value:""}}),r("el-option",{attrs:{label:"资料未完成",value:"0"}}),r("el-option",{attrs:{label:"审核中",value:"1"}}),r("el-option",{attrs:{label:"已终止",value:"2"}}),r("el-option",{attrs:{label:"放款中",value:"3"}}),r("el-option",{attrs:{label:"未结清",value:"4"}}),r("el-option",{attrs:{label:"已逾期",value:"5"}}),r("el-option",{attrs:{label:"已结清",value:"6"}}),r("el-option",{attrs:{label:"还款中",value:"7"}})],1)],1),this.$route.query.ciCompanyId?t._e():r("el-form-item",{attrs:{label:"商户标识",prop:"source"}},[r("el-input",{attrs:{placeholder:"请输入商户标识"},model:{value:t.ruleForm.source,callback:function(e){t.$set(t.ruleForm,"source",e)},expression:"ruleForm.source"}})],1),r("el-form-item",{attrs:{label:"结算状态",prop:"settlement"}},[r("el-select",{attrs:{placeholder:"请选择结算状态"},model:{value:t.ruleForm.settlement,callback:function(e){t.$set(t.ruleForm,"settlement",e)},expression:"ruleForm.settlement"}},[r("el-option",{attrs:{label:"全部",value:""}}),r("el-option",{attrs:{label:"已结算",value:"4"}}),r("el-option",{attrs:{label:"已驳回",value:"5"}}),r("el-option",{attrs:{label:"已审核",value:"3"}})],1)],1),r("el-form-item",[r("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("查询")]),r("el-button",{attrs:{type:"primary"},on:{click:t.getExcel}},[t._v("导出excel")])],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"element-loading-text":"Loading"}},[r("el-table-column",{attrs:{prop:"loanTerm",label:"贷款期限（月）",width:"150"}}),r("el-table-column",{attrs:{prop:"loanAmount",label:"贷款金额（元）",width:"280"}}),r("el-table-column",{attrs:{prop:"applyTime",label:"申请时间",width:""}}),r("el-table-column",{attrs:{prop:"status",label:"贷款状态",width:"",formatter:t.statusText}}),r("el-table-column",{attrs:{prop:"contactName",label:"联系人",width:""}}),r("el-table-column",{attrs:{prop:"policyNo",label:"电子保单号",width:""}}),r("el-table-column",{attrs:{prop:"monthRepaymentDay",label:"每月还款日期",width:""}}),r("el-table-column",{attrs:{prop:"notSettlementMoney",label:"待结算金额（元）",width:""}}),r("el-table-column",{attrs:{prop:"settlement",label:"结算状态",width:"",formatter:t.settlementText}}),r("el-table-column",{attrs:{prop:"name",label:"操作",fixed:"right",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.loanDetails(e.row,"loanDetails")}}},[t._v("\n                        详情\n                    ")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.repayRecords(e.row)}}},[t._v("还款记录\n                    ")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.loanAudit(e.row)}}},[t._v("\n                        结算审核\n                    ")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.loanDetails(e.row,"loanEdit")}}},[t._v("\n                        编辑\n                    ")])]}}])})],1),r("div",{staticClass:"pageDown"},[r("el-pagination",{attrs:{"current-page":t.ruleForm.pageNum,"page-sizes":[10,20,30,50],"page-size":t.ruleForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"结算审核",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[r("el-form",{ref:"auditRuleForm",attrs:{model:t.auditRuleForm,rules:t.auditRules,"label-width":"138px"}},[r("el-form-item",{attrs:{label:"企业名称：",prop:"companyName"}},[r("el-input",{attrs:{disabled:""},model:{value:t.auditRuleForm.companyName,callback:function(e){t.$set(t.auditRuleForm,"companyName",e)},expression:"auditRuleForm.companyName"}})],1),r("el-form-item",{attrs:{label:"法人姓名：",prop:"legalPersonName"}},[r("el-input",{attrs:{disabled:""},model:{value:t.auditRuleForm.legalPersonName,callback:function(e){t.$set(t.auditRuleForm,"legalPersonName",e)},expression:"auditRuleForm.legalPersonName"}})],1),r("el-form-item",{attrs:{label:"待结算金额（元）：",prop:"notSettlementMoney"}},[r("el-input",{attrs:{disabled:""},model:{value:t.auditRuleForm.notSettlementMoney,callback:function(e){t.$set(t.auditRuleForm,"notSettlementMoney",e)},expression:"auditRuleForm.notSettlementMoney"}})],1),r("el-form-item",{attrs:{label:"备注：",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.auditRuleForm.remarks,callback:function(e){t.$set(t.auditRuleForm,"remarks",e)},expression:"auditRuleForm.remarks"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitAuditForm("auditRuleForm","3")}}},[t._v("审核")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitAuditForm("auditRuleForm","5")}}},[t._v("驳回")]),r("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取消")])],1)],1)],1)],1)},n=[],o=r("7618"),l=r("cebc"),i=(r("4360"),r("c1df")),u=r.n(i),s=r("70d8"),c=(r("ed08"),r("2f62")),m=r("01ea"),p={data:function(){return{centerDialogVisible:!1,tableData:[],total:0,listLoading:!0,ruleForm:{ciCompanyId:"",loanTerm:"",status:"",settlement:"",source:"",pageNum:1,pageSize:10},rules:{},auditRuleForm:{companyName:"",legalPersonName:"",notSettlementMoney:"",remarks:"",id:"",settlement:""},auditRules:{remarks:[{required:!0,message:"请输入每月还款时间",trigger:"blur"}]},payInfo:{ticketNo:"",discountAmount:"",balance:"",source:"",productName:""}}},computed:Object(l["a"])({},Object(c["b"])(["user"])),created:function(){this.fetchData(),this.ruleForm.ciCompanyId=this.$route.query.ciCompanyId||""},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.listLoading=!0,Object(s["c"])(this.ruleForm,this.$route.query.ciCompanyId||"").then(function(e){t.tableData=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error(e),t.listLoading=!1})},handleSizeChange:function(t){this.ruleForm.pageSize=t,this.ruleForm.pageNum=1,this.fetchData()},handleCurrentChange:function(t){this.ruleForm.pageNum=t,this.fetchData()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.ruleForm.pageNum=1,e.fetchData()})},resetForm:function(t){this.$refs[t].resetFields(),this.ruleForm.pageNum=1,this.fetchData()},dateFormat:function(t,e){var r=t[e.property];return void 0==r?"":u()(r).format("YYYY-MM-DD HH:mm:ss")},loanDetails:function(t,e){this.$router.push({path:"/userManage/".concat(e),query:{id:t.id,productId:t.productId}})},submitAuditForm:function(t,e){var r=this;this.auditRuleForm.settlement=e,this.$refs[t].validate(function(t){Object(s["h"])(r.auditRuleForm).then(function(t){r.$message.success(t.msg),r.centerDialogVisible=!1,r.ruleForm.pageNum=1,r.fetchData()}).catch(function(t){r.$message.error(t),r.centerDialogVisible=!1})})},resetAuditForm:function(){},loanAudit:function(t){var e=this;Object(s["e"])({id:t.id}).then(function(r){e.auditRuleForm.companyName=r.data.ciCompany.companyName,e.auditRuleForm.legalPersonName=r.data.ciCompany.legalPersonName,e.auditRuleForm.notSettlementMoney=r.data.ciCompanyLoan.notSettlementMoney,e.auditRuleForm.id=t.id,e.centerDialogVisible=!0}).catch(function(t){e.$message.error(t)})},repayRecords:function(t){this.$router.push({path:"/userManage/repayRecords",query:{ciCompanyId:t.ciCompanyId,loanNo:t.loanNo}})},getExcel:function(){var t={ciCompanyId:this.ruleForm.ciCompanyId,loanTerm:this.ruleForm.loanTerm,status:this.ruleForm.status,settlement:this.ruleForm.settlement,source:this.ruleForm.source},e=this.urlEncode(t).slice(1);window.location.href="".concat(m["a"],"/downloadExcelForCompanyLoan?").concat(e)},statusText:function(t){return 0==t.status?"资料未完成":1==t.status?"审核中":2==t.status?"已终止":3==t.status?"放款中":4==t.status?"未结清":5==t.status?"已逾期":6==t.status?"已结清":7==t.status?"还款中":void 0},settlementText:function(t){return 0==t.settlement?"不需结算":1==t.settlement?"未结算":2==t.settlement?"待审核":3==t.settlement?"已审核":4==t.settlement?"已结算":5==t.settlement?"已驳回":void 0},urlEncode:function(t,e,r){if(null==t)return"";var a="",n=Object(o["a"])(t);if("string"==n||"number"==n||"boolean"==n)a+="&"+e+"="+(null==r||r?encodeURIComponent(t):t);else for(var l in t){var i=null==e?l:e+(t instanceof Array?"["+l+"]":"."+l);a+=this.urlEncode(t[l],i,r)}return a}}},d=p,f=(r("2c74"),r("2877")),b=Object(f["a"])(d,a,n,!1,null,null,null);e["default"]=b.exports},"2c74":function(t,e,r){"use strict";var a=r("ce4f"),n=r.n(a);n.a},"520a":function(t,e,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,l=n,i="lastIndex",u=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[i]||0!==e[i]}(),s=void 0!==/()??/.exec("")[1],c=u||s;c&&(l=function(t){var e,r,l,c,m=this;return s&&(r=new RegExp("^"+m.source+"$(?!\\s)",a.call(m))),u&&(e=m[i]),l=n.call(m,t),u&&l&&(m[i]=m.global?l.index+l[0].length:e),s&&l&&l.length>1&&o.call(l[0],r,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)}),l}),t.exports=l},"5d58":function(t,e,r){t.exports=r("d8d6")},"5f1b":function(t,e,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"67bb":function(t,e,r){t.exports=r("f921")},7618:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var a=r("5d58"),n=r.n(a),o=r("67bb"),l=r.n(o);function i(t){return i="function"===typeof l.a&&"symbol"===typeof n.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t},i(t)}function u(t){return u="function"===typeof l.a&&"symbol"===i(n.a)?function(t){return i(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":i(t)},u(t)}},a481:function(t,e,r){"use strict";var a=r("cb7c"),n=r("4bf8"),o=r("9def"),l=r("4588"),i=r("0390"),u=r("5f1b"),s=Math.max,c=Math.min,m=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,b){return[function(a,n){var o=t(this),l=void 0==a?void 0:a[e];return void 0!==l?l.call(a,o,n):r.call(String(o),a,n)},function(t,e){var n=b(r,t,this,e);if(n.done)return n.value;var m=a(t),p=String(this),d="function"===typeof e;d||(e=String(e));var v=m.global;if(v){var g=m.unicode;m.lastIndex=0}var y=[];while(1){var F=u(m,p);if(null===F)break;if(y.push(F),!v)break;var x=String(F[0]);""===x&&(m.lastIndex=i(p,o(m.lastIndex),g))}for(var R="",w=0,k=0;k<y.length;k++){F=y[k];for(var $=String(F[0]),N=s(c(l(F.index),p.length),0),C=[],S=1;S<F.length;S++)C.push(f(F[S]));var D=F.groups;if(d){var E=[$].concat(C,N,p);void 0!==D&&E.push(D);var I=String(e.apply(void 0,E))}else I=h($,p,N,C,D,e);N>=w&&(R+=p.slice(w,N)+I,w=N+$.length)}return R+p.slice(w)}];function h(t,e,a,o,l,i){var u=a+t.length,s=o.length,c=d;return void 0!==l&&(l=n(l),c=p),r.call(i,c,function(r,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(u);case"<":i=l[n.slice(1,-1)];break;default:var c=+n;if(0===c)return r;if(c>s){var p=m(c/10);return 0===p?r:p<=s?void 0===o[p-1]?n.charAt(1):o[p-1]+n.charAt(1):r}i=o[c-1]}return void 0===i?"":i})}})},b0c5:function(t,e,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},ce4f:function(t,e,r){},ed08:function(t,e,r){"use strict";r.d(e,"a",function(){return a});r("a481"),r("7618");function a(t){switch(t){case 1:return"生效中";case 2:return"已作废";case 3:return"未支付";case 8:return"已生效";case 7:return"投保失败";default:return""}}}}]);