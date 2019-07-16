<template>
    <section>
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="手机号" prop="contactPhone">
                    <el-input v-model="ruleForm.contactPhone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" prop="companyName">
                    <el-input v-model="ruleForm.companyName" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="申请时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" value-format="yyyy-MM-dd" v-model="ruleForm.startTime" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="1">至</el-col>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" value-format="yyyy-MM-dd" v-model="ruleForm.endTime" style="width: 100%;"></el-date-picker>
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
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="加载中" style="width: 100%">
            <el-table-column prop="contactPhone" label="手机号" width="150"> </el-table-column>
            <el-table-column prop="companyName" label="企业名称" width="280"> </el-table-column>
            <el-table-column prop="contactName" label="姓名"   width=""></el-table-column>
            <el-table-column prop="onlineAnnualSales" label="显示年销售额（万）" width=""></el-table-column>
            <el-table-column prop="importRegions" label="进口来源国"  width=""></el-table-column>
            <el-table-column prop="applicationTime" label="申请时间" :formatter="dateFormat" width=""> </el-table-column>
            <el-table-column prop="name" label="操作" fixed="right" width="">
                <template slot-scope="scope">
                    <el-button
                        @click="userInfoDetails(scope.row)"
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
    import { formatterColumn } from "@/utils";
    import { mapGetters } from 'vuex';
    import { getUser } from '@/utils/auth'
    import { getList } from '@/api/userManage'

    export default {
        data() {
            return {
                tableData: [],
                total:0,
                listLoading:false,
                ruleForm: {
                    contactPhone: "",
                    companyName: "",
                    startTime: '',
                    endTime: '',
                    pageNum: 1,
                    pageSize: 10,
                },
                rules: {
                },
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.listLoading = true
                getList(this.ruleForm).then(response => {
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
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.ruleForm.startTime = ''
                this.ruleForm.endTime = ''
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
            userInfoDetails(row){
                this.$router.push({path:'/userManage/userInfoDetails',query: {id:row.id,productId:row.productId}})
            },
            loanRecords(row){
                this.$router.push({path:'/userManage/loanRecords',query:{ciCompanyId:row.id}})
            },
            getExcel(){
                this.listLoading = true
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