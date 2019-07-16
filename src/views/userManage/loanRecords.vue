<template>
    <section>
        </el-page-header>
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-top:50px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="手机号" prop="contactPhone">
                    <el-input v-model="ruleForm.contactPhone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" prop="companyName">
                    <el-input v-model="ruleForm.companyName" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="驳回时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" value-format="yyyy-MM-dd" v-model="ruleForm.rejectStartTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="1">至</el-col>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" value-format="yyyy-MM-dd" v-model="ruleForm.rejectEndTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                    <el-button type="primary" @click="getExcel">导出excel</el-button>
                </el-form-item>
            </el-form>
		</el-col>
        <!-- 表格 -->
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="Loading" style="width: 100%">
            <el-table-column prop="tsCompanyInfo.contactPhone" label="手机号" width="150"> </el-table-column>
            <el-table-column prop="tsCompanyInfo.companyName" label="企业名称" width="280"> </el-table-column>
            <el-table-column prop="tsCompanyInfo.contactName" label="姓名" width=""></el-table-column>
            <el-table-column prop="tsCompanyInfo.onlineAnnualSales" label="线上销售额（万）" width="" > </el-table-column>
            <el-table-column prop="tsCompanyInfo.importRegions" label="进口来源国" width=""> </el-table-column>
            <el-table-column prop="createTime" label="驳回时间" width="" :formatter="dateFormat"> </el-table-column>
            <el-table-column prop="operator" label="操作人" width=""> </el-table-column>
            <el-table-column prop="remarks" label="备注" width=""> </el-table-column>
            <el-table-column prop="" label="操作" fixed="right" width="250">
                <template slot-scope="scope">
                    <el-button
                        @click="loanDetails(scope.row,'loanDetails')"
                        type="text"
                        size="small">
                        详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <!-- 工具条 -->
        <div class="pageDown">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="ruleForm.pageNum"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="ruleForm.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </section>
</template>

<script>
    
    import store from '../../store'
    import moment from 'moment'
    import { findRejectRecordList, downloadExcelForRejectRecord,} from '@/api/userManage'
    import { formatterColumn } from "@/utils";
    import { mapGetters } from 'vuex'
    import { BASE_URL } from '@/utils/config'

    export default {
        data() {
            return {
                centerDialogVisible: false,
                tableData: [],
                total:0,
                listLoading:false,
                ruleForm: {
                    contactPhone:'',
                    companyName: "",
                    rejectStartTime:'',
                    rejectEndTime: "",
                    pageNum: 1,
                    pageSize: 10,
                },
                rules: {
                },
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            fetchData() {
                this.listLoading = true
                findRejectRecordList(this.ruleForm).then(response => {
                    this.tableData = response.data.list
                    this.total = response.data.total
                    this.listLoading = false
                }).catch(err=>{
                    this.$message.error(err.msg);
                    this.listLoading = false
                })
            },
            handleSizeChange(val) {
                this.ruleForm.pageSize = val
                this.ruleForm.pageNum = 1
                this.fetchData()
            },
            handleCurrentChange(val) {
                this.ruleForm.pageNum = val
                this.fetchData()
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ruleForm.pageNum = 1
                        this.fetchData()
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.ruleForm.rejectStartTime = ''
                this.ruleForm.rejectEndTime = ''
                this.ruleForm.pageNum = 1
                this.fetchData()
            },
             //时间格式化
            dateFormat(row, column) {
                var date = row[column.property];
                  if (date == undefined) {
                    return "";
                }
                return moment(date).format("YYYY-MM-DD HH:mm:ss")
            },
            loanDetails(row,type){
                this.$router.push({path:`/userManage/${type}`,query: {type:'1',id:row.id}})
            },
            getExcel(){
                this.listLoading = true
                downloadExcelForRejectRecord(this.ruleForm).then(response => {
                    this.listLoading = false
                }).catch(err=>{
                    let blob = new Blob([err], {
                      type: 'application/ms-txt;charset=utf-8'
                    });// 转化为blob对象
                    var day = moment(new Date()).format("YYYYMMDD")
                    let filename = `驳回列表${day}.csv`;// 判断是否使用默认文件名
                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                      window.navigator.msSaveBlob(blob, filename);
                    } else {
                      var blobURL = window.URL.createObjectURL(blob);// 将blob对象转为一个URL
                      var tempLink = document.createElement('a');// 创建一个a标签
                      tempLink.style.display = 'none';
                      tempLink.href = blobURL;
                      tempLink.setAttribute('download', filename);// 给a标签添加下载属性
                      if (typeof tempLink.download === 'undefined') {
                        tempLink.setAttribute('target', '_blank');
                      }
                      document.body.appendChild(tempLink);// 将a标签添加到body当中
                      tempLink.click();// 启动下载
                      document.body.removeChild(tempLink);// 下载完毕删除a标签
                      window.URL.revokeObjectURL(blobURL);
                    }
                    this.listLoading = false
                })
            },
        }
    }      
</script>

<style>
    .pageDown{
        float: right;
        margin-top: 15px;
    }
</style>