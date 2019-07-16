<template>
    <section>
        <!-- 表格 -->
        <el-table :data="tableData" v-loading="listLoading" element-loading-text="Loading" style="width: 100%">
            <el-table-column prop="goodsNo" label="货号" width="280"> </el-table-column>
            <el-table-column prop="commodityName" label="商品名称" width=""></el-table-column>
            <el-table-column prop="brandName" label="品牌名称" width="" > </el-table-column>
            <el-table-column prop="firstCategory" label="大类名称" width=""> </el-table-column>
            <el-table-column prop="secondCategory" label="小类名称" width=""> </el-table-column>
            <el-table-column prop="colour" label="颜色名称" width=""> </el-table-column>
            <el-table-column prop="specification" label="规格名称" width=""> </el-table-column>
            <el-table-column prop="barCode" label="条码" width=""> </el-table-column>
            <el-table-column prop="weight" label="重量（克）" width=""> </el-table-column>
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
    
    import moment from 'moment'
    import { findCompanyItemList,} from '@/api/userManage'

    export default {
        data() {
            return {
                tableData: [],
                total:0,
                listLoading:false,
                ruleForm: {
                    pageNum: 1,
                    pageSize: 10,
                },
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            fetchData() {
                this.listLoading = true
                findCompanyItemList(this.ruleForm, this.$route.query).then(response => {
                    this.tableData = response.data.list
                    this.total = response.data.total
                    this.listLoading = false
                }).catch(err=>{
                    this.$message.error(err.msg);
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
             //时间格式化
            dateFormat(row, column) {
                var date = row[column.property];
                  if (date == undefined) {
                    return "";
                }
                return moment(date).format("YYYY-MM-DD HH:mm:ss")
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