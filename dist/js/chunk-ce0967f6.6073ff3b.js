(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce0967f6"],{"17d4":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,"element-loading-text":"Loading"}},[a("el-table-column",{attrs:{prop:"goodsNo",label:"货号",width:"280"}}),a("el-table-column",{attrs:{prop:"commodityName",label:"商品名称",width:""}}),a("el-table-column",{attrs:{prop:"brandName",label:"品牌名称",width:""}}),a("el-table-column",{attrs:{prop:"firstCategory",label:"大类名称",width:""}}),a("el-table-column",{attrs:{prop:"secondCategory",label:"小类名称",width:""}}),a("el-table-column",{attrs:{prop:"colour",label:"颜色名称",width:""}}),a("el-table-column",{attrs:{prop:"specification",label:"规格名称",width:""}}),a("el-table-column",{attrs:{prop:"barCode",label:"条码",width:""}}),a("el-table-column",{attrs:{prop:"weight",label:"重量（克）",width:""}})],1),a("div",{staticClass:"pageDown"},[a("el-pagination",{attrs:{"current-page":t.ruleForm.pageNum,"page-sizes":[10,20,30,50],"page-size":t.ruleForm.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],n=a("c1df"),r=a.n(n),i=a("70d8"),s={data:function(){return{tableData:[],total:0,listLoading:!1,ruleForm:{pageNum:1,pageSize:10}}},created:function(){this.fetchData()},methods:{goBack:function(){this.$router.go(-1)},fetchData:function(){var t=this;this.listLoading=!0,Object(i["g"])(this.ruleForm,this.$route.query).then(function(e){t.tableData=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error(e.msg),t.listLoading=!1})},handleSizeChange:function(t){this.ruleForm.pageSize=t,this.ruleForm.pageNum=1,this.fetchData()},handleCurrentChange:function(t){this.ruleForm.pageNum=t,this.fetchData()},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":r()(a).format("YYYY-MM-DD HH:mm:ss")}}},u=s,c=(a("4466"),a("2877")),d=Object(c["a"])(u,l,o,!1,null,null,null);e["default"]=d.exports},4466:function(t,e,a){"use strict";var l=a("dd4f"),o=a.n(l);o.a},dd4f:function(t,e,a){}}]);