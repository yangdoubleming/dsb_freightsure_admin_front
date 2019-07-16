<template>
  <section v-loading="loading" element-loading-text="Loading">
    <el-page-header @back="goBack" content="驳回详情" style="margin-bottom:50px;">
    </el-page-header>
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
          <span>用户申请信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">手机号：</span>{{details.contactPhone}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">企业名称：</span>{{details.companyName}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">姓名：</span>{{details.contactName}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">线上年销售额（万元）：</span>{{details.onlineAnnualSales}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">进口来源国：</span>{{details.importRegions}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">产品品类：</span>{{details.productCategorysList}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">销售平台：</span><div style="margin-top:8px;" v-for="item in details3" :key="item.id">{{item.paltformName}}——{{item.paltformWebsiteUrl}}</div></div></el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="hover" style="margin-top:30px;">
      <div slot="header" class="clearfix">
          <span>线下尽调回填</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">进货及销售流程：</span>{{details.process}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">风控措施：</span>{{details.riskManagement}}</div></el-col>
      </el-row>
      <div class="block" v-for="(item, index) in details4" :key="index">
        <span class="demonstration">{{item.name}}</span>
        <div v-for="(ele,ind) in item.arr" :key="ind">
          <el-image :src="BASE_URL+ele"></el-image>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" style="margin-top:30px;" v-if="type==2">
      <div slot="header" class="clearfix">
          <span>审核信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">销售人员：</span>{{details2.sellerName}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">保司保单号：</span>{{details2.baosiNo}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">投保有效期：</span>{{details2.effective}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">投保金额（元）：</span>{{details2.insureMoney}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">购买时间：</span>{{dateFormat(details2.purchaseTime)}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">年销售额（万元）：</span>{{details2.annualSales}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">费率：</span>{{details2.rate}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">保费：</span>{{details2.premium}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">赔偿方式：</span>{{details2.compensationWay}}</div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">每次事故赔偿限额：</span>{{details2.compensationQuota}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">累计赔偿限额：</span>{{details2.compensationQuotaCumulative}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">备注：</span>{{details2.remarks}}</div></el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="hover" style="margin-top:30px;" v-else>
      <div slot="header" class="clearfix">
          <span>审核信息</span>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="8"><div class=""><span class="bg-purple">销售人员：</span>{{details2.sellerName}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">驳回时间：</span>{{details2.createTime}}</div></el-col>
        <el-col :span="8"><div class=""><span class="bg-purple">备注：</span>{{details2.remarks}}</div></el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
    
    import { getTsApprovalRecordAndOthersById, getAllProductCategoryForTrustsure } from '@/api/userManage'
    import moment from 'moment'
    import { BASE_URL, IMG_URL, IMG_URL_show } from '@/utils/config'

    export default {
        data() {
            return {
                loading: true,
                details:{},
                details2:{},
                details3:[],
                ciRepaymentRecord:{},
                imgInfo:[],
                productArr:[],
                details4:[],
                BASE_URL:BASE_URL,
                type:'2'
            }
        },
        computed: {
            
        },
        created() {
          this.type = this.$route.query.type
          this.fetchData();
        },
        methods: {
          goBack() {
              this.$router.go(-1)
          },
          fetchData(){
            this.loading = true;
            getTsApprovalRecordAndOthersById(this.$route.query).then(response => {
                this.details = response.data.tsCompanyInfo && response.data.tsCompanyInfo||{}
                this.details2 = response.data.tsApprovalRecord && response.data.tsApprovalRecord||{}
                this.details3 = response.data.companyPlatformList && response.data.companyPlatformList||[]
                var imagePathMap = response.data.imagePathMap
                if(imagePathMap.one){
                  this.details4.push({name:"网站资质",arr: imagePathMap.one})
                }
                if(imagePathMap.two){
                  this.details4.push({name:"产品来源材料",arr: imagePathMap.two})
                }
                if(imagePathMap.three){
                  this.details4.push({name:"网站备案",arr: imagePathMap.three})
                }
                if(imagePathMap.four){
                  this.details4.push({name:"公司营业执照",arr: imagePathMap.four})
                }
                if(imagePathMap.five){
                  this.details4.push({name:"产品渠道方证明",arr: imagePathMap.five})
                }
                if(imagePathMap.six){
                  this.details4.push({name:"产品销售授权书",arr: imagePathMap.six})
                }
                if(imagePathMap.seven){
                  this.details4.push({name:"进货渠道",arr: imagePathMap.seven})
                }
                console.log(this.details4)
                //查询所有产品品类
                getAllProductCategoryForTrustsure().then(result=>{
                    var arr = []
                    this.details.productCategorysList.length>0 && this.details.productCategorysList.forEach(element => {
                      result.data.forEach(item=>{
                        if(item.id == element){
                          arr.push(item.name)
                        }
                      })
                    });
                    this.details.productCategorysList = arr.join('，')
                }).catch(err => {
                    this.$message({message:err.msg,type:'error'})
                })
                this.loading = false;
            }).catch(err=>{
                this.loading = false;
                this.$message.error(err.msg);
            })
          },
          dateFormat(date){
            if (!date) {
              return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
          },
          
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