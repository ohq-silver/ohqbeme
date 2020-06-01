<template>
  <div class="personCenterContract">
    <el-card shadow="always" class="contract-manager">
      <div class="upload-box">
        <div class="left-content">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将合同文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">我们将会在5个工作日内完成审核并录入合同信息</div>
          </el-upload>
          <!-- <div class="box-test"></div> -->
        </div>
        <div class="right-content">
          <el-card class="box-card">
            <div slot="header" class="contract-message-top">
              <span style="float: left">合同信息管理</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                <a class="download" :href="downloadhttp" download title="下载">合同模板下载</a>
              </el-button>
            </div>
            <el-input placeholder="请输入用户名">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-table :data="tableData" style="width: 100%" height="450" stripe>
              <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" width="300"></el-table-column>
              <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              class="contract-page"
              background
              layout="prev, pager, next"
              :total="1000"
            ></el-pagination>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      downloadhttp: '',
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
}
</script>

<style>
@import "../../../common/css/back_css/personCenterContract.css";
</style>
