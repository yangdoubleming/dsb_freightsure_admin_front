<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" v-loading="loading" class="demo-ruleForm">
        <el-form-item label="审核状态" prop="status">
            <el-radio-group v-model="ruleForm.status">
            <el-radio label="1">通过</el-radio>
            <el-radio label="2">驳回</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="销售人员" prop="sellerName">
            <el-input v-model="ruleForm.sellerName" disabled></el-input>
        </el-form-item>
        <el-form-item label="保司保单号" prop="baosiNo" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.baosiNo"></el-input>
        </el-form-item>
        <el-form-item label="投保金额（万元）" prop="insureMoney" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.insureMoney"></el-input>
        </el-form-item>
        <el-form-item label="购买时间" prop="purchaseTime" v-if="ruleForm.status==1">
            <el-date-picker type="date" placeholder="购买时间" value-format="yyyy-MM-dd" v-model="ruleForm.purchaseTime" ></el-date-picker>
        </el-form-item>
        <el-form-item label="年销售金额（万元）" prop="annualSales" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.annualSales"></el-input>
        </el-form-item>
        <el-form-item label="费率" prop="rate" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.rate"></el-input>
        </el-form-item>
        <el-form-item label="保费" prop="premium" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.premium"></el-input>
        </el-form-item>
        <el-form-item label="赔偿方式" prop="compensationWay" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.compensationWay"></el-input>
        </el-form-item>
        <el-form-item label="每次事故赔偿限额" prop="compensationQuota" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.compensationQuota"></el-input>
        </el-form-item>
        <el-form-item label="累计赔偿限额" prop="compensationQuotaCumulative" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.compensationQuotaCumulative"></el-input>
        </el-form-item>
        <el-form-item label="投保有效期（天）" prop="effective" v-if="ruleForm.status==1">
            <el-input v-model="ruleForm.effective"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
            <el-input type="textarea" v-model="ruleForm.remarks" rows="5"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="medium" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import { addTsApprovalRecord } from '@/api/userManage'

  export default {
    props:{
        id:{
          required: true
        },
        username:{
          required: true
        }
    },
    data() {
      return {
        ruleForm: {
          status: '1',
          sellerName: '',
          baosiNo: '',
          insureMoney: '',
          purchaseTime: '',
          annualSales: '',
          rate: '',
          premium: '',
          compensationWay: '',
          compensationQuota: '',
          compensationQuotaCumulative: '',
          effective: '',
          remarks: '',
        },
        rules: {
          baosiNo: [
            { required: true, message: '请输入保司保单号', trigger: 'blur' },
          ],
          insureMoney: [
            { required: true, message: '请输入投保金额', trigger: 'blur' }
          ],
          purchaseTime: [
            { required: true, message: '请输入购买时间', trigger: 'blur' }
          ],
          annualSales: [
            { required: true, message: '请输入年销售额', trigger: 'blur' }
          ],
          rate: [
            { required: true, message: '请输入费率', trigger: 'blur' }
          ],
          premium: [
            { required: true, message: '请输入保费', trigger: 'blur' }
          ],
          compensationWay: [
            { required: true, message: '请填写赔偿方式', trigger: 'blur' }
          ],
          compensationQuota: [
            { required: true, message: '请填写每次事故赔偿限额', trigger: 'blur' }
          ],
          compensationQuotaCumulative: [
            { required: true, message: '请填写累计赔偿限额', trigger: 'blur' }
          ],
          effective: [
            { required: true, message: '请填写投保限额', trigger: 'blur' }
          ],
          remarks: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        },
        loading:false,
      };
    },
    mounted(){
      this.ruleForm.sellerName = this.username
    },
    methods: {
      submitForm(formName) {
        this.ruleForm.tsCompanyId = this.id
        this.$refs[formName].validate((valid) => {
          if (valid) {
              if(this.ruleForm.status==2){
                  this.ruleForm={
                    status: this.ruleForm.status,//1-表示审核失败(驳回)
                    tsCompanyId: this.ruleForm.tsCompanyId, 
                    sellerName: this.ruleForm.sellerName,
                    remarks: this.ruleForm.remarks
                  }
              }
            this.loading = true
            addTsApprovalRecord(this.ruleForm).then(response => {
                this.loading = false;
                this.$message.success(response.msg);
                this.$router.push({path:`/userManage/userInfo`})
            }).catch(err=>{
                this.loading = false;
                this.$message.error(err.msg);
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
