<template>
  <section v-loading="loading" element-loading-text="Loading">
    <el-page-header @back="goBack" content="用户详情" style="margin-bottom:50px;">
    </el-page-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>用户申请信息</span>
        </div>
        <div class="demo-ruleForm">
          <el-form-item label="手机号：" prop="name">
            <el-input v-model="ruleForm.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="企业名称：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="线上年销售额（万元）：" prop="delivery">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="进口来源国：" prop="delivery">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="产品品类：" prop="delivery">
            <el-input type="textarea" v-model="ruleForm.name" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="销售平台：" prop="delivery">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover" style="margin-top:50px;">
        <div slot="header" class="clearfix">
            <span>线下尽调回调</span>
        </div>
        <div class="demo-ruleForm">
          <el-form-item label="进货及销售流程：" prop="name">
            <el-input type="textarea" v-model="ruleForm.name" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="风控措施：" prop="name">
            <el-input type="textarea" v-model="ruleForm.name" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="产品清单：" prop="name">
            <el-button type="primary">上传Excel</el-button>
          </el-form-item>
          <el-form-item label="网站资质：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="公司营业执照：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品来源资料：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="网站备案：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品渠道方证明：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品销售授权书：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="进货渠道：" prop="name">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </div>
      </el-card>
      <div style="width:100%;">
        <div class="btn-box">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">审核</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </div>
      </div>
    </el-form>
  </section>
</template>

<script>
    import { BASE_URL } from '@/utils/config'
    import { getCusInsureDetails } from '@/api/userManage'
    import moment from 'moment'

    export default {
      data() {
        return {
          ruleForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
          },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        loading: false,
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      goBack() {
        this.$router.go(-1)
      },
    }
  }      
</script>

<style>
  .demo-ruleForm{
    width: 50%;
    margin: 0 auto;
  }
  .el-upload--picture-card {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 200px;
    height: 100px;
    line-height: 100px;
    vertical-align: top;
  }
  .btn-box{
    width: 300px;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>