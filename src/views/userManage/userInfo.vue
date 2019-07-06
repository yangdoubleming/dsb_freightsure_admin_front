<template>
    <section>
        <!--查询栏-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                <el-form-item label="豆沙包订单号" prop="ticketNo">
                    <el-input v-model="ruleForm.ticketNo" placeholder="请输入豆沙包订单号"></el-input>
                </el-form-item>
                <el-form-item label="保司单号" prop="polNo">
                    <el-input v-model="ruleForm.polNo" placeholder="请输入保司单号"></el-input>
                </el-form-item>
                <el-form-item label="生效时间" prop="time">
                    <el-date-picker
                        v-model="today"
                        type="daterange"
                        range-separator="至"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="商户名称" prop="companyName">
                    <el-select v-model="ruleForm.companyName" filterable placeholder="请输入商户名称" @change="setSource">
                        <el-option
                        v-for="item in options"
                        :key="item.source"
                        :label="item.companyName"
                        :value="item.companyName">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                    <!-- <el-button type="primary" @click="submitForm('ruleForm')">多单号查询</el-button> -->
                    <el-button type="primary" @click="submitForm('ruleForm')">导出excel</el-button>
                </el-form-item>
            </el-form>
		</el-col>
        <el-col :span="6" :offset="18" style="margin:15px auto;">总单量：{{total||0}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总支付金额：{{tableData.length>0&&tableData[0].paymoney/100||0}}</el-col>

        <!-- 表格 -->
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="加载中" style="width: 100%">
            <el-table-column prop="ticketNo" label="豆沙包订单号" width="150"> </el-table-column>
            <el-table-column prop="polNo" label="保司保单号" width="280"> </el-table-column>
            <el-table-column prop="companyName" label="商户名称"   width=""></el-table-column>
            <el-table-column prop="effectiveDate" label="生效时间" :formatter="dateFormat" width=""> </el-table-column>
            <el-table-column prop="" label="订单状态" width="">已生效</el-table-column>
            <el-table-column prop="prodAmount" label="支付金额（元）"  width=""></el-table-column>
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
    import { getBalance, accountInfo, goPay, getCompanyListName, getList } from '@/api/userManage'

    export default {
        data() {
            return {
                tableData: [],
                total:0,
                listLoading:false,
                ruleForm: {
                    ticketNo: "",
                    polNo: "",
                    applyStartTime: '',
                    applyEndTime: '',
                    companyName:'',
                    pageNum: 1,
                    pageSize: 10,
                    source:''
                },
                rules: {
                },
                payInfo: {
                    ticketNo: '',
                    discountAmount: '',
                    balance: '',
                    source:'',
                    productName:''
                },
                today:[],
                options: []
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        created() {
            this.setDate()
            this.fetchData()
            this.getCompanyListName()
        },
        methods: {
            fetchData() {
                this.ruleForm.applyStartTime = this.today[0]
                this.ruleForm.applyEndTime = this.today[1]
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
            getCompanyListName(){
                this.listLoading = true
                getCompanyListName().then(response => {
                    this.options = response.data
                    this.listLoading = false
                }).catch(err=>{
                    this.$message.error(err);
                    this.listLoading = false
                })
            },
            setSource(v){
                this.ruleForm.source = this.options.filter(item=>item.companyName==v)[0].source
            },
            setDate(){
                var newday = moment(new Date()).format("YYYY-MM-DD")
                this.today = [newday,newday]
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
                this.ruleForm.source = ''
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