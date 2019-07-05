<template>
    <section>
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="企业名称" prop="companyName">
                    <el-input v-model="ruleForm.companyName" placeholder="请输入企业名称"></el-input>
                </el-form-item>
                <el-form-item label="企业类型" prop="companyType">
                    <el-select v-model="ruleForm.companyType" placeholder="状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="进口" value="1"></el-option>
                        <el-option label="出口" value="2"></el-option>
                        <el-option label="进口/出口" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商户标识" prop="source">
                    <el-input v-model="ruleForm.source" placeholder="请输入商户标识"></el-input>
                </el-form-item>
                <el-form-item label="法人资产" prop="legalPersonsAssets">
                    <el-select v-model="ruleForm.legalPersonsAssets" placeholder="请选择法人资产">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="500万以内" value="1"></el-option>
                        <el-option label="500万-1000万" value="2"></el-option>
                        <el-option label="1000万-2000万" value="3"></el-option>
                        <el-option label="2000万以上" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                </el-form-item>
            </el-form>
		</el-col>

        <!-- 表格 -->
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="加载中" style="width: 100%">
            <el-table-column prop="contactPhone" label="用户账号" width="150"> </el-table-column>
            <el-table-column prop="companyName" label="企业名称" width="280"> </el-table-column>
            <el-table-column prop="companyType" label="企业类型"  :formatter="comTypeText" width=""></el-table-column>
            <el-table-column prop="logisticsCompany" label="合作物流公司" width=""> </el-table-column>
            <el-table-column prop="paymentCompany" label="合作支付公司" width=""> </el-table-column>
            <el-table-column prop="legalPersonsAssets" label="法人资产情况" :formatter="statusText" width=""></el-table-column>
            <el-table-column prop="name" label="操作" fixed="right" width="">
                <template slot-scope="scope">
                    <el-button
                        @click="loanRecords(scope.row)"
                        type="text"
                        size="small">贷款信息
                    </el-button>
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
    import { getList } from '@/api/userManage'
    import { formatterColumn } from "@/utils";
    import { mapGetters } from 'vuex'
    import { getBalance, accountInfo, goPay } from '@/api/userManage'

    export default {
        data() {
            return {
                tableData: [],
                total:0,
                listLoading:true,
                ruleForm: {
                    companyName: "",
                    companyType: "",
                    source: "",
                    pageNum: 1,
                    pageSize: 10,
                    legalPersonsAssets: "",
                },
                rules: {
                },
                payInfo: {
                    ticketNo: '',
                    discountAmount: '',
                    balance: '',
                    source:'',
                    productName:''
                }
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
                    this.$message.error(err);
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
            statusText(row){
                if(row.legalPersonsAssets == 1){
                    return '500万以内'
                }else if(row.legalPersonsAssets == 2){
                    return '500万-1000万'
                }else if(row.legalPersonsAssets == 3){
                    return '1000万-2000万'
                }else if(row.legalPersonsAssets == 4){
                    return '2000万以上'
                }
            },
            comTypeText(row){
                if(row.companyType == 1){
                    return '进口'
                }else if(row.companyType == 2){
                    return '出口'
                }else if(row.companyType == 3){
                    return '进口/出口'
                }
            }
            
        }
    }      
</script>

<style>
    .pageDown{
        float: right;
        margin-top: 15px;
    }
</style>