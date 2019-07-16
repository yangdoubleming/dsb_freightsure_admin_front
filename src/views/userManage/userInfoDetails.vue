<template>
  <section v-loading="loading" element-loading-text="Loading">
    <el-page-header @back="goBack" content="申请详情" style="margin-bottom:50px;">
    </el-page-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>用户申请信息</span>
        </div>
        <div class="demo-ruleForm">
          <el-form-item label="手机号：" prop="contactPhone">
            <el-input v-model="ruleForm.contactPhone" disabled></el-input>
          </el-form-item>
          <el-form-item label="企业名称：" prop="companyName">
            <el-input v-model="ruleForm.companyName"></el-input>
          </el-form-item>
          <el-form-item label="姓名：" prop="contactName">
            <el-input v-model="ruleForm.contactName"></el-input>
          </el-form-item>
          <el-form-item label="线上年销售额（万元）：" prop="onlineAnnualSales">
            <el-input v-model="ruleForm.onlineAnnualSales"></el-input>
          </el-form-item>
          <el-form-item label="进口来源国：" prop="importRegionsList">
            <el-input v-model="ruleForm.importRegionsList"></el-input><span style="color:red">追加请用中文“，”隔开</span>
          </el-form-item>
          <el-form-item label="产品品类：" prop="productCategorysList">
              <el-checkbox-group v-model="ruleForm.productCategorysList">
                  <el-checkbox :label="item.id" v-for="item in productArr" :key='item.id' >{{item.name}}</el-checkbox>
              </el-checkbox-group>
          </el-form-item>
          <el-form-item label="销售平台：" prop="companyPlatformList" >
              <el-row v-for="(item, index) in ruleForm.companyPlatformList" :key="index" style="margin-bottom:10px;">
                  <el-col :span="8"><el-input v-model="item.paltformName" placeholder="店铺名"></el-input></el-col>
                  <el-col :span="2" class="row-line">—</el-col>
                  <el-col :span="8"><el-input v-model="item.paltformWebsiteUrl" placeholder="店铺网址"></el-input></el-col>
                  <el-col :span="6"><i class="el-icon-plus icon-style" @click="plusCompany"></i><i class="el-icon-minus icon-style" @click="minusCompany(index)"></i></el-col>
              </el-row>
          </el-form-item> 
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover" style="margin-top:50px;">
        <div slot="header" class="clearfix">
            <span>线下尽调回填</span>
        </div>
        <div class="demo-ruleForm">
          <el-form-item label="进货及销售流程：" prop="process">
            <el-input type="textarea" v-model="ruleForm.process" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="风控措施：" prop="riskManagement">
            <el-input type="textarea" v-model="ruleForm.riskManagement" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="产品清单：" prop="">
            <el-upload
              class="upload-demo"
              :action="baseUrl2"
              :on-success="handleSuccess"
              :with-credentials="true"
              :headers="myHeaders"
              :limit="1"
              :on-error="handleErr"
              :on-exceed="handleExceed">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="网站资质：" prop="">
            <el-upload
              :file-list="fileListA"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess1"
              :on-preview="handlePreview"
              :on-remove="handleRemove1">
              <i class="el-icon-plus avatar-uploader-icon">请上传网站资质</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品来源资料：" prop="">
            <el-upload
              :file-list="fileListB"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess2"
              :on-preview="handlePreview"
              :on-remove="handleRemove2">
              <i class="el-icon-plus avatar-uploader-icon">请上传产品来源资料</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="网站备案：" prop="">
            <el-upload
              :file-list="fileListC"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess3"
              :on-preview="handlePreview"
              :on-remove="handleRemove3">
              <i class="el-icon-plus avatar-uploader-icon">请上传网站备案</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="公司营业执照：" prop="">
            <el-upload
              :file-list="fileListD"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess4"
              :on-preview="handlePreview"
              :on-remove="handleRemove4">
              <i class="el-icon-plus avatar-uploader-icon">请上传公司营业执照</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品渠道方证明：" prop="">
            <el-upload
              :file-list="fileListE"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess5"
              :on-preview="handlePreview"
              :on-remove="handleRemove5">
              <i class="el-icon-plus avatar-uploader-icon">请上传产品渠道方证明</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="产品销售授权书：" prop="">
            <el-upload
              :file-list="fileListF"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess6"
              :on-preview="handlePreview"
              :on-remove="handleRemove6">
              <i class="el-icon-plus avatar-uploader-icon">请上传产品销售授权书</i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="进货渠道：" prop="">
            <el-upload
              :file-list="fileListG"
              :action="baseUrl"
              :with-credentials="true"
              :headers="myHeaders"
              list-type="picture-card"
              :on-success="handleSuccess7"
              :on-preview="handlePreview"
              :on-remove="handleRemove7">
              <i class="el-icon-plus avatar-uploader-icon">请上传进货渠道</i>
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
          <el-button @click="centerDialogVisible = true">审核</el-button>
          <el-button @click="goBack">取消</el-button>
        </div>
      </div>
    </el-form>
    <el-dialog
      title="申请审核"
      :visible.sync="centerDialogVisible"
      width="80%"
      center>
        <AuditDialog :id="id" :username="username" />
    </el-dialog>
  </section>
</template>

<script>
    import { BASE_URL, IMG_URL, IMG_URL_show } from '@/utils/config'
    import { getUser } from '@/utils/auth' 
    import { getTsCompanyAndPlatformById, getAllProductCategoryForTrustsure, editTsCompanyInfoAndOthers } from '@/api/userManage'
    import moment from 'moment'
    import AuditDialog from "./auditDialog";

    export default {
      components: {
          AuditDialog
      },
      data() {
        return {
          ruleForm: {
            contactPhone: '',
            companyName: '',
            contactName: '',
            onlineAnnualSales: '',
            importRegionsList: '',
            productCategorysList: [],
            companyPlatformList: [],
            process: '',
            riskManagement:'',
            imagePathList:[],
          },
        rules: {
          contactPhone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ],
          companyName: [
            { required: true, message: '请选择企业名称', trigger: 'blur' }
          ],
          contactName: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          onlineAnnualSales: [
            { required: true, message: '请输入线上年销售额', trigger: 'blur' }
          ],
          importRegionsList: [
            { required: true, message: '请输入进口来源国', trigger: 'blur' }
          ],
          productCategorysList: [
            { type: 'array', required: true, message: '请输入产品品类', trigger: 'blur' }
          ],
          companyPlatformList: [
            { type: 'array', required: true, message: '请填写销售平台', trigger: 'blur' }
          ],
          process: [
            { required: true, message: '请输入进货及销售流程', trigger: 'blur' }
          ],
          riskManagement: [
            { required: true, message: '请输入风控措施', trigger: 'blur' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        loading: false,
        productArr:[],
        baseUrl:`${BASE_URL}/adminTs/upload`,
        baseUrl2:`${BASE_URL}/adminTs/uploadItemExcel`,
        myHeaders: {token: getUser().token},
        centerDialogVisible: false,
        id:'',
        username:'',
        uploadStatus:false,
        fileList1:[],
        fileListA:[],
        fileList2:[],
        fileListB:[],
        fileList3:[],
        fileListC:[],
        fileList4:[],
        fileListD:[],
        fileList5:[],
        fileListE:[],
        fileList6:[],
        fileListF:[],
        fileList7:[],
        fileListG:[],
      };
    },
    mounted(){
      this.id = this.$route.query.id
      this.getTsCompanyAndPlatformById()
      this.getAllProductCategoryForTrustsure()
    },
    methods: {
      getTsCompanyAndPlatformById(){
        this.loading = true;
        getTsCompanyAndPlatformById(this.$route.query).then(response => {
            if(response.data.tsCompanyInfo){
              this.username = response.data.user.name
              this.ruleForm.contactPhone = response.data.tsCompanyInfo.contactPhone||''
              this.ruleForm.companyName = response.data.tsCompanyInfo.companyName||''
              this.ruleForm.contactName = response.data.tsCompanyInfo.contactName||''
              this.ruleForm.onlineAnnualSales = response.data.tsCompanyInfo.onlineAnnualSales||''
              this.ruleForm.process = response.data.tsCompanyInfo.process||''
              this.ruleForm.riskManagement = response.data.tsCompanyInfo.riskManagement||''
              this.ruleForm.importRegionsList = response.data.tsCompanyInfo.importRegionsList.join('，')||''
              this.ruleForm.productCategorysList = response.data.tsCompanyInfo.productCategorysList||[];
              this.ruleForm.companyPlatformList = response.data.companyPlatformList||[];
              var arr1 = []
              response.data.imagePathMap.one && response.data.imagePathMap.one.forEach(item=>{
                  arr1.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.one && response.data.imagePathMap.one.forEach(item=>{
                  this.fileList1.push({type:1,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListA = arr1

              var arr2 = []
              response.data.imagePathMap.two && response.data.imagePathMap.two.forEach(item=>{
                  arr2.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.two && response.data.imagePathMap.two.forEach(item=>{
                  this.fileList2.push({type:2,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListB = arr2

              var arr3 = []
              response.data.imagePathMap.three && response.data.imagePathMap.three.forEach(item=>{
                  arr3.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.three && response.data.imagePathMap.three.forEach(item=>{
                  this.fileList3.push({type:3,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListC = arr3

              var arr4 = []
              response.data.imagePathMap.four && response.data.imagePathMap.four.forEach(item=>{
                  arr4.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.four && response.data.imagePathMap.four.forEach(item=>{
                  this.fileList4.push({type:4,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListD = arr4

              var arr5 = []
              response.data.imagePathMap.five && response.data.imagePathMap.five.forEach(item=>{
                  arr5.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.five && response.data.imagePathMap.five.forEach(item=>{
                  this.fileList5.push({type:5,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListE = arr5

              var arr6 = []
              response.data.imagePathMap.six && response.data.imagePathMap.six.forEach(item=>{
                  arr6.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.six && response.data.imagePathMap.six.forEach(item=>{
                  this.fileList6.push({type:6,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListF = arr6

              var arr7 = []
              response.data.imagePathMap.seven && response.data.imagePathMap.seven.forEach(item=>{
                  arr7.push({url: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              response.data.imagePathMap.seven && response.data.imagePathMap.seven.forEach(item=>{
                  this.fileList7.push({type:7,imagePath: IMG_URL_show + item.replace(/\\/g,"/")});
              })
              this.fileListG = arr7
            }
            this.loading = false;
        }).catch(err=>{
            this.loading = false;
            this.$message.error(err.msg);
        })
      },
      //查询所有产品品类
      getAllProductCategoryForTrustsure(){
        getAllProductCategoryForTrustsure().then(result=>{
            this.productArr = result.data
        }).catch(err => {
            this.$message({message:err.msg,type:'error'})
        })
      },
      plusCompany(){
          this.ruleForm.companyPlatformList.push({
              paltformName:"",
              paltformWebsiteUrl:""
          })
      },
      minusCompany(index){
          if(this.ruleForm.companyPlatformList.length==1){
              this.$message.warning('不能再删了')
              return;
          }
          this.ruleForm.companyPlatformList.splice(index, 1);
      },
      submitForm(formName) {
        if(!this.uploadStatus){
          this.$message.warning('请先上传产品清单')
          return
        }
        this.ruleForm.imagePathList = this.fileList1.concat(this.fileList2).concat(this.fileList3).concat(this.fileList4).concat(this.fileList5).concat(this.fileList6).concat(this.fileList7)||[]
        this.ruleForm.id = this.$route.query.id
        this.ruleForm.importRegionsList = this.ruleForm.importRegionsList.split('，')
        var arr = []
        this.ruleForm.imagePathList.forEach(item=>{
          arr.push({type:item.type,imagePath:item.imagePath.replace(IMG_URL_show,"")})
        })
        this.ruleForm.imagePathList = arr
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            editTsCompanyInfoAndOthers(this.ruleForm).then(response => {
                this.$message.success(response.msg);
                this.ruleForm.importRegionsList = this.ruleForm.importRegionsList.join('，')
                this.loading = false;
            }).catch(err=>{
                this.$message.error(err.msg);
                this.loading = false;
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      
      goBack() {
        this.$router.go(-1)
      },
      handleErr(){
        this.uploadStatus = false
        this.$message.error('上传产品清单失败')
      },
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess1(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:1,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList1 = midrr
      },
      handleRemove1(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:1,imagePath: element.response.data})
        });
        this.fileList1 = midrr
      },
      handleSuccess2(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:2,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList2 = midrr
      },
      handleRemove2(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:2,imagePath: element.response.data})
        });
        this.fileList2 = midrr
      },
      handleSuccess3(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:3,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList3 = midrr
      },
      handleRemove3(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:3,imagePath: element.response.data})
        });
        this.fileList3 = midrr
      },
      handleSuccess4(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:4,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList4 = midrr
      },
      handleRemove4(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:4,imagePath: element.response.data})
        });
        this.fileList4 = midrr
      },
      handleSuccess5(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:5,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList5 = midrr
      },
      handleRemove5(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:5,imagePath: element.response.data})
        });
        this.fileList5 = midrr
      },
      handleSuccess6(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:6,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList6 = midrr
      },
      handleRemove6(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:6,imagePath: element.response.data})
        });
        this.fileList6 = midrr
      },
      handleSuccess7(response, file, fileList){
          var midrr = []
          fileList.forEach(element => {
            if(element.response){
                midrr.push({type:7,imagePath: element.response.data})
            }else{
                midrr.push(element.url.replace(IMG_URL_show,""))
            }
          });
          this.fileList7 = midrr
      },
      handleRemove7(file, fileList) {
        var midrr = []
        fileList.forEach(element => {
            midrr.push({type:7,imagePath: element.response.data})
        });
        this.fileList7 = midrr
      },
       handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleSuccess(response){
        if(response.code == 0){
          this.uploadStatus = true
          this.$message.success(response.msg)
        }else{
          this.uploadStatus = false
          this.$message.error(response.msg)
        }
      }
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
  .row-line{
    text-align: center;
  } 
  .icon-style{
    font-size:22px;
    cursor:pointer;
    font-weight: bold;
    margin: 0 10px;
  }


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 16px;
    color: #8c939d;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .el-upload--picture-card {
        background-color: #ffffff;
        box-sizing: border-box;
        width: 200px;
        height: 100px;
        line-height: 100px;
        vertical-align: top;
    }
    .el-upload--picture-card i {
        font-size: 16px;
    }
    .el-upload-list--picture-card .el-upload-list__item {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200px;
        height: 100px;
        margin: 0 8px 8px 0;
        display: inline-block;
    }
  .avatar {
    width: 200px;
    height: 100px;
    display: block;
  }
  .el-upload-text{
    line-height: 100px;
    text-align: center;
    font-size: 14px;
    color: #8c939d;
  }
</style>