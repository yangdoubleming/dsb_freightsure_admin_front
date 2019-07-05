<template>
  <section v-loading="loading" element-loading-text="Loading">
    <el-page-header @back="goBack" content="贷款详情" style="margin-bottom:50px;">
    </el-page-header>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
          <span>基本信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">贷款编号:</span>{{details.loanNo}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">电子保单：</span>{{details.electronicPolicy}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">放款银行：</span>{{details.loanBank}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">投保金额(元)：</span>{{details.insuranceMoney}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">放款时间：</span>{{details.loanTime}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">申请时间：</span>{{details.applyTime}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">投保期限（月）：</span>{{details.loanTerm}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple"> 贷款金额（元）：</span>{{details.loanAmount}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">剩余还款周期（月）：</span>{{details.outstandingTerm}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">贷款状态：</span>{{details.status}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple"> 剩余还款金额（元）：</span>{{ciRepaymentRecord.unpaidPrincipal}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">贷款利率：</span>{{details.name}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">还款时间：</span>{{details.repaymentTime}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple"> 每月还款日期：</span>{{details.monthRepaymentDay}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">待结算金额（元）：</span>{{details.notSettlementMoney}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">结算状态：</span>{{details.settlement}}</div></el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
    
    import { getCiCompanyLoanById } from '@/api/userManage'
    import moment from 'moment'

    export default {
        data() {
            return {
                loading: true,
                details:{},
                ciRepaymentRecord:{}
            }
        },
        computed: {
            
        },
        created() {
          this.fetchData();
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            fetchData(){
              getCiCompanyLoanById(this.$route.query).then(response => {
                  if(response.data){
                    this.details = response.data.ciCompanyLoan
                    this.ciRepaymentRecord = response.data.ciRepaymentRecord || {}
                  }
                  this.loading = false;
              }).catch(err=>{
                  this.loading = false;
                  this.$message.error(err);
              })
          },
          dateFormat(date){
              if (!date) {
                return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
          }
        }
    }      
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .row-bg {
    margin: 30px 0;
  }

  .box-card {
    /* width: 480px; */
  }
  .bg-purple{
    color:#909399;
  }
</style>