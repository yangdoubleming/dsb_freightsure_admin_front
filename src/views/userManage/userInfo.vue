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
                    <el-button type="primary" @click="centerDialogVisible = true">多单号查询</el-button>
                    <el-button type="primary" @click="getExcel">导出excel</el-button>
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
        <el-dialog
        title="多订单号查询"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
            <el-form :model="manyForm" ref="manyForm" label-width="125px" >
                <el-form-item label="查询方式">
                    <el-radio-group v-model="manyForm.type" size="medium">
                    <el-radio border label='0'>豆沙包订单号</el-radio>
                    <el-radio border label='1'>保司单号</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="输入要查询的单号，每行一个"
                    v-model="manyForm.orderList">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitManyForm('manyForm')">查询</el-button>
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    
    import store from '../../store'
    import moment from 'moment'
    import { formatterColumn } from "@/utils";
    import { mapGetters } from 'vuex';
    import { getUser } from '@/utils/auth'
    import { getBalance, accountInfo, goPay, getCompanyListName, getList, exportOrderToExcelForBaosi, ordersByBatchForBaosi } from '@/api/userManage'

    export default {
        data() {
            return {
                tableData: [],
                total:0,
                listLoading:false,
                centerDialogVisible:false,
                textarea:"",
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
                manyForm:{
                    type:'0',
                    orderList:"",
                    pageNum: 1,
                    pageSize: 10,
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
                    this.$message.error(err.msg);
                    this.listLoading = false
                })
            },
            getCompanyListName(){
                getCompanyListName().then(response => {
                    this.options = response.data
                }).catch(err=>{
                    this.$message.error(err.msg);
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
            submitManyForm(formName) {
                console.log(this.manyForm)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.manyForm.pageNum = 1
                        ordersByBatchForBaosi(this.manyForm).then(response => {
                            this.tableData = response.data.list
                            this.total = response.data.total
                            this.listLoading = false
                        }).catch(err=>{
                            this.$message.error(err.msg);
                            this.listLoading = false
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.setDate()
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
            },
            getExcel(){
                this.ruleForm.applyStartTime = this.today[0]
                this.ruleForm.applyEndTime = this.today[1]
                this.listLoading = true
                exportOrderToExcelForBaosi(this.ruleForm).then(response => {
                    this.listLoading = false
                }).catch(err=>{
                    let blob = new Blob([err], {
                      type: 'application/ms-txt;charset=utf-8'
                    });// 转化为blob对象
                    var day = moment(new Date()).format("YYYYMMDD")
                    let filename = `订单列表${day}.csv`;// 判断是否使用默认文件名
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