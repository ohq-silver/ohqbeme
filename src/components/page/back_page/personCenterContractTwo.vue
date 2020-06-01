<template>
  <div class="personCenterContractTwo">
    <el-card shadow="always"
             class="contract-manager">
      <div class="upload-box">
        <div class="left-content">
          <el-upload class="upload-demo"
                     drag
                     action="https://jsonplaceholder.typicode.com/posts/"
                     multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将合同文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip"
                 slot="tip">我们将会在5个工作日内完成审核并录入合同信息</div>
          </el-upload>
          <!-- <div class="box-test"></div> -->
        </div>
        <div class="right-content">
          <el-card class="box-card">
            <div slot="header"
                 class="contract-message-top">
              <span style="float: left">合同信息管理</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">
                <a class="download"
                   :href="downloadhttp"
                   download
                   title="下载">合同模板下载</a>
              </el-button>
            </div>
            <el-input placeholder="请输入用户名"
                      v-model="input">
              <el-button slot="append"
                         icon="el-icon-search"
                         @click="search()"></el-button>
            </el-input>
            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                      style="width: 100%"
                      height="450"
                      stripe>
              <el-table-column fixed
                               prop="file_date"
                               label="日期"
                               width="150"></el-table-column>
              <el-table-column prop="file_username"
                               label="姓名"
                               width="120"></el-table-column>
              <el-table-column prop="file_process"
                               label="省份"
                               width="120"></el-table-column>
              <el-table-column prop="file_city"
                               label="市区"
                               width="120"></el-table-column>
              <el-table-column prop="file_address"
                               label="地址"
                               width="300"></el-table-column>
              <el-table-column prop="file_post_number"
                               label="邮编"
                               width="120"></el-table-column>
              <el-table-column fixed="right"
                               label="操作"
                               width="50">
                <template slot-scope="scope">
                  <el-button @click="edit(scope.row)"
                             type="text"
                             size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination class="contract-page"
                           background
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-sizes="[4, 6, 8, 10]"
                           :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="tableData.length"></el-pagination>
          </el-card>
        </div>
      </div>
    </el-card>
    <el-dialog title="合同信息查看"
               :visible.sync="dialogFormVisibleEdit"
               class="input-house-message">
      <el-form :model="formLabelAlign"
               style="margin-top: -100px">
        <div class="left-dialog"
             style="float: left">
          <el-form-item label="合同人">
            <el-input v-model="formLabelAlign.file_username"
                      :label-width="formLabelWidth"></el-input>
          </el-form-item>
          <el-form-item label="签约日期">
            <el-input v-model="formLabelAlign.file_date"
                      :label-width="formLabelWidth"></el-input>
          </el-form-item>
          <el-form-item label="房源地址">
            <el-input v-model="formLabelAlign.file_address"
                      :label-width="formLabelWidth"></el-input>
          </el-form-item>
        </div>
        <div class="right-dialog"
             style="float: right; margin-right: 50px">
          <el-form-item label="房源省份">
            <el-input v-model="formLabelAlign.file_process"
                      :label-width="formLabelWidth"></el-input>
          </el-form-item>
          <el-form-item label="房源城市">
            <el-input v-model="formLabelAlign.file_city"
                      :label-width="formLabelWidth"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
      formLabelAlign: {
        file_username: "",
        file_date: "",
        file_city: "",
        file_address: "",
        file_process: ""
      },
      dialogFormVisibleEdit: false,
      formLabelWidth: "80px",
      currentPage: 1,
      pageSize: 10,
      downloadhttp: "",
      input: "",
      tableData: []
    };
  },
  created() {
    const _this = this;
    axios.get("http://localhost:8181/file/findAll/").then(function(resp) {
      // console.log(resp.data);
      if (resp.status === 200) {
        _this.tableData = resp.data;
      }
    });
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    search() {
      const _this = this;
      axios
        .get("http://localhost:8181/file/findByName/" + _this.input)
        .then(function(resp) {
          // console.log(resp.data);
          if (resp.status === 200) {
            _this.tableData = resp.data;
          }
        });
    },
    edit(row) {
      this.dialogFormVisibleEdit = true;
      const _this = this;
      axios
        .get("http://localhost:8181/file/findById/" + row.id)
        .then(function(resp) {
          // _this.formEdit = resp.data;
          _this.formLabelAlign = resp.data;
          console.log("成功");
        });
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterContractTwo.css";
</style>
