<template>
  <section v-loading="loading" element-loading-text="Loading">
    <el-page-header @back="goBack" content="用户详情" style="margin-bottom:50px;">
    </el-page-header>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
          <span>基本信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">用户账号：</span>{{details.contactPhone}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">企业名称：</span>{{details.companyName}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">企业类型：</span>{{details.companyType}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">授权店铺：</span><label v-for="item in companyPlatformList" :key="item.id">{{item.paltformName}}；</label></div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">合作物流公司：</span>{{details.logisticsCompany}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple"> 合作支付公司：</span>{{details.paymentCompany}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">法人资产情况：</span>{{details.legalPersonsAssets}}</div></el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="hover" style="margin-top:30px;">
      <div slot="header" class="clearfix">
          <span>图片信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">营业执照：</span>{{details.productName}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
          <el-image :src="tradingCertificate"></el-image>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">身份证正反面：</span>{{details.productName}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="12">
            <el-image :src="legalPersonIdFront"></el-image>
          </el-col>
          <el-col :span="12">
            <el-image :src="legalPersonIdBack"></el-image>
          </el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
    import { BASE_URL } from '@/utils/config'
    import { getCusInsureDetails } from '@/api/userManage'
    import moment from 'moment'

    export default {
        data() {
            return {
                loading: true,
                details:{},
                companyPlatformList:[],
                legalPersonIdBack:'',
                legalPersonIdFront:'',
                tradingCertificate:''
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
              getCusInsureDetails(this.$route.query).then(response => {
                  if(response.data){
                    this.details = response.data.ciCompany
                    this.tradingCertificate = `${BASE_URL}${response.data.ciCompany.tradingCertificate}`
                    this.legalPersonIdBack = `${BASE_URL}${response.data.ciCompany.legalPersonIdBack}`
                    this.legalPersonIdFront = `${BASE_URL}${response.data.ciCompany.legalPersonIdFront}`
                    this.companyPlatformList = response.data.companyPlatformList
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