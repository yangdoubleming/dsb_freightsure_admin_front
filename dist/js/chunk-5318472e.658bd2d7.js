(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5318472e"],{"02f4":function(t,e,r){var n=r("4588"),o=r("be13");t.exports=function(t){return function(e,r){var a,i,l=String(o(e)),c=n(r),s=l.length;return c<0||c>=s?t?"":void 0:(a=l.charCodeAt(c),a<55296||a>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?t?l.charAt(c):a:t?l.slice(c,c+2):i-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),o=r("32e9"),a=r("79e5"),i=r("be13"),l=r("2b4c"),c=r("520a"),s=l("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var m=l(t),f=!a(function(){var e={};return e[m]=function(){return 7},7!=""[t](e)}),d=f?!a(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[s]=function(){return r}),r[m](""),!e}):void 0;if(!f||!d||"replace"===t&&!u||"split"===t&&!p){var h=/./[m],b=r(i,m,""[t],function(t,e,r,n,o){return e.exec===c?f&&!o?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),g=b[0],y=b[1];n(String.prototype,t,g),o(RegExp.prototype,m,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),o=RegExp.prototype.exec,a=String.prototype.replace,i=o,l="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[l]||0!==e[l]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(i=function(t){var e,r,i,u,p=this;return s&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(e=p[l]),i=o.call(p,t),c&&i&&(p[l]=p.global?i.index+i[0].length:e),s&&i&&i.length>1&&a.call(i[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"5d58":function(t,e,r){t.exports=r("d8d6")},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"67bb":function(t,e,r){t.exports=r("f921")},7618:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r("5d58"),o=r.n(n),a=r("67bb"),i=r.n(a);function l(t){return l="function"===typeof i.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":typeof t},l(t)}function c(t){return c="function"===typeof i.a&&"symbol"===l(o.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":l(t)},c(t)}},"79d5":function(t,e,r){},"9cf4":function(t,e,r){"use strict";var n=r("79d5"),o=r.n(n);o.a},a319:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.ruleForm,rules:t.rules}},[r("el-form-item",{attrs:{label:"豆沙包订单号",prop:"ticketNo"}},[r("el-input",{attrs:{placeholder:"请输入豆沙包订单号"},model:{value:t.ruleForm.ticketNo,callback:function(e){t.$set(t.ruleForm,"ticketNo",e)},expression:"ruleForm.ticketNo"}})],1),r("el-form-item",{attrs:{label:"保司单号",prop:"polNo"}},[r("el-input",{attrs:{placeholder:"请输入保司单号"},model:{value:t.ruleForm.polNo,callback:function(e){t.$set(t.ruleForm,"polNo",e)},expression:"ruleForm.polNo"}})],1),r("el-form-item",{attrs:{label:"生效时间",prop:"time"}},[r("el-date-picker",{attrs:{type:"daterange","range-separator":"至","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.today,callback:function(e){t.today=e},expression:"today"}})],1),r("el-form-item",{attrs:{label:"商户名称",prop:"companyName"}},[r("el-select",{attrs:{filterable:"",placeholder:"请输入商户名称"},on:{change:t.setSource},model:{value:t.ruleForm.companyName,callback:function(e){t.$set(t.ruleForm,"companyName",e)},expression:"ruleForm.companyName"}},t._l(t.options,function(t){return r("el-option",{key:t.source,attrs:{label:t.companyName,value:t.companyName}})}),1)],1),r("el-form-item",[r("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("查询")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!0}}},[t._v("多单号查询")]),r("el-button",{attrs:{type:"primary"},on:{click:t.getExcel}},[t._v("导出excel")])],1)],1)],1),r("el-col",{staticStyle:{margin:"15px auto"},attrs:{span:6,offset:18}},[t._v("总单量："+t._s(t.total||0)+"       总支付金额："+t._s(t.tableData.length>0&&t.tableData[0].paymoney/100||0))]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"element-loading-text":"加载中"}},[r("el-table-column",{attrs:{prop:"ticketNo",label:"豆沙包订单号",width:"150"}}),r("el-table-column",{attrs:{prop:"polNo",label:"保司保单号",width:"280"}}),r("el-table-column",{attrs:{prop:"companyName",label:"商户名称",width:""}}),r("el-table-column",{attrs:{prop:"effectiveDate",label:"生效时间",formatter:t.dateFormat,width:""}}),r("el-table-column",{attrs:{prop:"",label:"订单状态",width:""}},[t._v("已生效")]),r("el-table-column",{attrs:{prop:"prodAmount",label:"支付金额（元）",width:""}}),r("el-table-column",{attrs:{prop:"name",label:"操作",fixed:"right",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.userInfoDetails(e.row)}}},[t._v("\n                        详情\n                    ")])]}}])})],1),r("div",{staticClass:"pageDown"},[r("el-pagination",{attrs:{"current-page":t.ruleForm.pageNum,"page-sizes":[10,20,30,50],"page-size":t.ruleForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"多订单号查询",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[r("el-form",{ref:"manyForm",attrs:{model:t.manyForm,"label-width":"125px"}},[r("el-form-item",{attrs:{label:"查询方式"}},[r("el-radio-group",{attrs:{size:"medium"},model:{value:t.manyForm.type,callback:function(e){t.$set(t.manyForm,"type",e)},expression:"manyForm.type"}},[r("el-radio",{attrs:{border:"",label:"0"}},[t._v("豆沙包订单号")]),r("el-radio",{attrs:{border:"",label:"1"}},[t._v("保司单号")])],1)],1),r("el-form-item",[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"输入要查询的单号，每行一个"},model:{value:t.manyForm.orderList,callback:function(e){t.$set(t.manyForm,"orderList",e)},expression:"manyForm.orderList"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitManyForm("manyForm")}}},[t._v("查询")]),r("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取消")])],1)],1)],1)],1)},o=[],a=r("cebc"),i=(r("4360"),r("c1df")),l=r.n(i),c=(r("ed08"),r("2f62")),s=(r("5f87"),r("70d8")),u={data:function(){return{tableData:[],total:0,listLoading:!1,centerDialogVisible:!1,textarea:"",ruleForm:{ticketNo:"",polNo:"",applyStartTime:"",applyEndTime:"",companyName:"",pageNum:1,pageSize:10,source:""},manyForm:{type:"0",orderList:"",pageNum:1,pageSize:10},rules:{},payInfo:{ticketNo:"",discountAmount:"",balance:"",source:"",productName:""},today:[],options:[]}},computed:Object(a["a"])({},Object(c["b"])(["user"])),created:function(){this.setDate(),this.fetchData(),this.getCompanyListName()},methods:{fetchData:function(){var t=this;this.ruleForm.applyStartTime=this.today[0],this.ruleForm.applyEndTime=this.today[1],this.listLoading=!0,Object(s["k"])(this.ruleForm).then(function(e){t.tableData=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error(e.msg),t.listLoading=!1})},getCompanyListName:function(){var t=this;Object(s["i"])().then(function(e){t.options=e.data}).catch(function(e){t.$message.error(e.msg)})},setSource:function(t){this.ruleForm.source=this.options.filter(function(e){return e.companyName==t})[0].source},setDate:function(){var t=l()(new Date).format("YYYY-MM-DD");this.today=[t,t]},handleSizeChange:function(t){this.ruleForm.pageSize=t,this.ruleForm.pageNum=1,this.fetchData()},handleCurrentChange:function(t){this.ruleForm.pageNum=t,this.fetchData()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.ruleForm.pageNum=1,e.fetchData()})},submitManyForm:function(t){var e=this;console.log(this.manyForm),this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.manyForm.pageNum=1,Object(s["l"])(e.manyForm).then(function(t){e.tableData=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error(t.msg),e.listLoading=!1})})},resetForm:function(t){this.setDate(),this.$refs[t].resetFields(),this.ruleForm.pageNum=1,this.ruleForm.source="",this.fetchData()},dateFormat:function(t,e){var r=t[e.property];return void 0==r?"":l()(r).format("YYYY-MM-DD HH:mm:ss")},userInfoDetails:function(t){this.$router.push({path:"/userManage/userInfoDetails",query:{id:t.id,productId:t.productId}})},loanRecords:function(t){this.$router.push({path:"/userManage/loanRecords",query:{ciCompanyId:t.id}})},statusText:function(t){return 1==t.legalPersonsAssets?"500万以内":2==t.legalPersonsAssets?"500万-1000万":3==t.legalPersonsAssets?"1000万-2000万":4==t.legalPersonsAssets?"2000万以上":void 0},comTypeText:function(t){return 1==t.companyType?"进口":2==t.companyType?"出口":3==t.companyType?"进口/出口":void 0},getExcel:function(){var t=this;this.ruleForm.applyStartTime=this.today[0],this.ruleForm.applyEndTime=this.today[1],this.listLoading=!0,Object(s["e"])(this.ruleForm).then(function(e){t.listLoading=!1}).catch(function(e){var r=new Blob([e],{type:"application/ms-txt;charset=utf-8"}),n=l()(new Date).format("YYYYMMDD"),o="订单列表".concat(n,".csv");if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,o);else{var a=window.URL.createObjectURL(r),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",o),"undefined"===typeof i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(a)}t.listLoading=!1})}}},p=u,m=(r("9cf4"),r("2877")),f=Object(m["a"])(p,n,o,!1,null,null,null);e["default"]=f.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),o=r("4bf8"),a=r("9def"),i=r("4588"),l=r("0390"),c=r("5f1b"),s=Math.max,u=Math.min,p=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,h){return[function(n,o){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,o):r.call(String(a),n,o)},function(t,e){var o=h(r,t,this,e);if(o.done)return o.value;var p=n(t),m=String(this),f="function"===typeof e;f||(e=String(e));var g=p.global;if(g){var y=p.unicode;p.lastIndex=0}var v=[];while(1){var x=c(p,m);if(null===x)break;if(v.push(x),!g)break;var F=String(x[0]);""===F&&(p.lastIndex=l(m,a(p.lastIndex),y))}for(var w="",k=0,N=0;N<v.length;N++){x=v[N];for(var D=String(x[0]),S=s(u(i(x.index),m.length),0),$=[],L=1;L<x.length;L++)$.push(d(x[L]));var _=x.groups;if(f){var C=[D].concat($,S,m);void 0!==_&&C.push(_);var E=String(e.apply(void 0,C))}else E=b(D,m,S,$,_,e);S>=k&&(w+=m.slice(k,S)+E,k=S+D.length)}return w+m.slice(k)}];function b(t,e,n,a,i,l){var c=n+t.length,s=a.length,u=f;return void 0!==i&&(i=o(i),u=m),r.call(l,u,function(r,o){var l;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":l=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return r;if(u>s){var m=p(u/10);return 0===m?r:m<=s?void 0===a[m-1]?o.charAt(1):a[m-1]+o.charAt(1):r}l=a[u-1]}return void 0===l?"":l})}})},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},ed08:function(t,e,r){"use strict";r.d(e,"a",function(){return n});r("a481"),r("7618");function n(t){switch(t){case 1:return"生效中";case 2:return"已作废";case 3:return"未支付";case 8:return"已生效";case 7:return"投保失败";default:return""}}}}]);