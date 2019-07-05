<template>
    <section>
        <el-page-header @back="goBack" content="贷款记录">
        </el-page-header>
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-top:50px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="贷款期限" prop="loanTerm">
                    <el-select v-model="ruleForm.loanTerm" placeholder="贷款期限">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="1个月" value="1"></el-option>
                        <el-option label="2个月" value="2"></el-option>
                        <el-option label="3个月" value="3"></el-option>
                        <el-option label="4个月" value="4"></el-option>
                        <el-option label="5个月" value="5"></el-option>
                        <el-option label="6个月" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="贷款状态" prop="status">
                    <el-select v-model="ruleForm.status" placeholder="状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="资料未完成" value="0"></el-option>
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="已终止" value="2"></el-option>
                        <el-option label="放款中" value="3"></el-option>
                        <el-option label="未结清" value="4"></el-option>
                        <el-option label="已逾期" value="5"></el-option>
                        <el-option label="已结清" value="6"></el-option>
                        <el-option label="还款中" value="7"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商户标识" prop="source" v-if='!this.$route.query.ciCompanyId'>
                    <el-input v-model="ruleForm.source" placeholder="请输入商户标识"></el-input>
                </el-form-item>
                <el-form-item label="结算状态" prop="settlement">
                    <el-select v-model="ruleForm.settlement" placeholder="请选择结算状态">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="已结算" value="4"></el-option>
                        <el-option label="已驳回" value="5"></el-option>
                        <el-option label="已审核" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                    <el-button type="primary" @click="getExcel">导出excel</el-button>
                    <!-- <el-button type="primary">批量结算审核</el-button> -->
                </el-form-item>
            </el-form>
		</el-col>

        <!-- 表格 -->
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="Loading" style="width: 100%">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="loanTerm" label="贷款期限（月）" width="150"> </el-table-column>
            <el-table-column prop="loanAmount" label="贷款金额（元）" width="280"> </el-table-column>
            <el-table-column prop="applyTime" label="申请时间" width=""></el-table-column>
            <el-table-column prop="status" label="贷款状态" width="" :formatter="statusText"> </el-table-column>
            <el-table-column prop="contactName" label="联系人" width=""> </el-table-column>
            <el-table-column prop="policyNo" label="电子保单号" width=""> </el-table-column>
            <el-table-column prop="monthRepaymentDay" label="每月还款日期" width=""></el-table-column>
            <el-table-column prop="notSettlementMoney" label="待结算金额（元）" width=""></el-table-column>
            <el-table-column prop="settlement" label="结算状态" width="" :formatter="settlementText"></el-table-column>
            <el-table-column prop="name" label="操作" fixed="right" width="250">
                <template slot-scope="scope">
                    <el-button
                        @click="loanDetails(scope.row,'loanDetails')"
                        type="text"
                        size="small">
                        详情
                    </el-button>
                    <el-button
                        @click="repayRecords(scope.row)"
                        type="text"
                        size="small">还款记录
                    </el-button>
                    <el-button
                        @click="loanAudit(scope.row)"
                        type="text"
                        size="small">
                        结算审核
                    </el-button>
                    <el-button
                        @click="loanDetails(scope.row,'loanEdit')"
                        type="text"
                        size="small">
                        编辑
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

        <el-dialog
        title="结算审核"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
            <el-form :model="auditRuleForm" :rules="auditRules" ref="auditRuleForm" label-width="138px" >
                <el-form-item label="企业名称：" prop="companyName" >
                    <el-input v-model="auditRuleForm.companyName" disabled></el-input>
                </el-form-item>
                <el-form-item label="法人姓名：" prop="legalPersonName">
                    <el-input v-model="auditRuleForm.legalPersonName" disabled></el-input>
                </el-form-item>
                <el-form-item label="待结算金额（元）：" prop="notSettlementMoney">
                    <el-input v-model="auditRuleForm.notSettlementMoney" disabled></el-input>
                </el-form-item>
                <el-form-item label="备注：" prop="remarks">
                    <el-input v-model="auditRuleForm.remarks" type='textarea' :rows="3"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitAuditForm('auditRuleForm','3')">审核</el-button>
                    <el-button type="primary" @click="submitAuditForm('auditRuleForm','5')">驳回</el-button>
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    
    import store from '../../store'
    import moment from 'moment'
    import { findCiCompanyLoanList, getCiCompanyLoanById, toExamineCompanyLoan, downloadExcelForCompanyLoan, toBatchExamineCompanyLoan } from '@/api/userManage'
    import { formatterColumn } from "@/utils";
    import { mapGetters } from 'vuex'
    import { BASE_URL } from '@/utils/config'

    export default {
        data() {
            return {
                centerDialogVisible: false,
                tableData: [],
                total:0,
                listLoading:true,
                ruleForm: {
                    ciCompanyId:'',
                    loanTerm: "",
                    status:'',
                    settlement: "",
                    source: '',
                    pageNum: 1,
                    pageSize: 10,
                },
                rules: {
                },
                auditRuleForm:{
                    companyName:'',
                    legalPersonName:'',
                    notSettlementMoney:'',
                    remarks:'',
                    id:'',
                    settlement:''
                },
                auditRules:{
                    remarks:[
                        { required: true, message: '请输入每月还款时间', trigger: 'blur' },
                    ]
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
            this.ruleForm.ciCompanyId = this.$route.query.ciCompanyId ||''
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            fetchData() {
                this.listLoading = true
                findCiCompanyLoanList(this.ruleForm, this.$route.query.ciCompanyId||'').then(response => {
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
            loanDetails(row,type){
                this.$router.push({path:`/userManage/${type}`,query: {id:row.id,productId:row.productId}})
            },
            submitAuditForm(formName,settlement){
                this.auditRuleForm.settlement = settlement
                this.$refs[formName].validate((valid) => {
                    toExamineCompanyLoan(this.auditRuleForm).then(result=>{
                        this.$message.success(result.msg);
                        this.centerDialogVisible = false
                        this.ruleForm.pageNum = 1
                        this.fetchData()
                    }).catch(err=>{
                        this.$message.error(err);
                        this.centerDialogVisible = false
                    })
                });
            },
            resetAuditForm(){

            },
            loanAudit(row){
                getCiCompanyLoanById({id:row.id}).then(response => {
                    this.auditRuleForm.companyName = response.data.ciCompany.companyName
                    this.auditRuleForm.legalPersonName = response.data.ciCompany.legalPersonName
                    this.auditRuleForm.notSettlementMoney = response.data.ciCompanyLoan.notSettlementMoney
                    this.auditRuleForm.id = row.id
                    this.centerDialogVisible = true
                }).catch(err=>{
                    this.$message.error(err);
                })
            },
            repayRecords(row){
                this.$router.push({path:`/userManage/repayRecords`,query: {ciCompanyId:row.ciCompanyId,loanNo:row.loanNo}})
            },
            getExcel(){
                var form = {
                    ciCompanyId:this.ruleForm.ciCompanyId,
                    loanTerm: this.ruleForm.loanTerm,
                    status:this.ruleForm.status,
                    settlement: this.ruleForm.settlement,
                    source: this.ruleForm.source,
                } 
                var params = this.urlEncode(form).slice(1)
                window.location.href = `${BASE_URL}/downloadExcelForCompanyLoan?${params}`;
            },
            statusText(row){
                if(row.status == 0){
                    return '资料未完成'
                }else if(row.status == 1){
                    return '审核中'
                }else if(row.status == 2){
                    return '已终止'
                }else if(row.status == 3){
                    return '放款中'
                }else if(row.status == 4){
                    return '未结清'
                }else if(row.status == 5){
                    return '已逾期'
                }else if(row.status == 6){
                    return '已结清'
                }else if(row.status == 7){
                    return '还款中'
                }
            },
            settlementText(row){
                if(row.settlement == 0){
                    return '不需结算'
                }else if(row.settlement == 1){
                    return '未结算'
                }else if(row.settlement == 2){
                    return '待审核'
                }else if(row.settlement == 3){
                    return '已审核'
                }else if(row.settlement == 4){
                    return '已结算'
                }else if(row.settlement == 5){
                    return '已驳回'
                }
            },
            urlEncode (param, key, encode) {
                if (param==null) return '';
                var paramStr = '';
                var t = typeof (param);
                if (t == 'string' || t == 'number' || t == 'boolean') {
                    paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
                } else {
                    for (var i in param) {
                        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
                        paramStr += this.urlEncode(param[i], k, encode)
                    }
                }
                return paramStr;
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