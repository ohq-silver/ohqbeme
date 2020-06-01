<template>
  <div class="personCenterCreditTwo">
    <el-card shadow="always"
             class="credit-manager">
      <div class="goal"
           style="float: right;margin-right: 30px">
        <el-progress type="circle"
                     :percentage="percentage"></el-progress>
        <div class="text">信用积分</div>
        <div class="goal-desribe">您的信用积分将会根据你及時的事件处理作出相应的调整</div>
      </div>
      <div class="message"
           style="float: left">
        <el-tabs type="border-card">
          <el-tab-pane label="押金退还">
            <el-table :data="tableData2"
                      style="width: 100%">
              <el-table-column label="姓名"
                               width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover"
                              placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference"
                         class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="房源联系人"
                               width="180">
                <template slot-scope="scope">
                  <i class="el-icon-user"></i>
                  <span style="margin-left: 10px">{{ scope.row.user }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini"
                             @click="handleEditTwo(scope.$index, scope.row)">催退押金</el-button>
                  <!-- <el-button
                    size="mini"
                    type="danger"
                    @click="handleDeleteTwo(scope.$index, scope.row)"
                  >删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="房源维修">
            <el-table :data="tableData3"
                      style="width: 100%">
              <el-table-column label="姓名"
                               width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover"
                              placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference"
                         class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="房源联系人"
                               width="180">
                <template slot-scope="scope">
                  <i class="el-icon-user"></i>
                  <span style="margin-left: 10px">{{ scope.row.user }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini"
                             @click="handleEditThree(scope.$index, scope.row)">房源维修</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  props: ["userGrade"],
  data() {
    return {
      percentage: 0,
      tableData2: [
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          user: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          user: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tableData3: [
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          user: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          user: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          user: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {
    const _this = this;
    axios.get("http://localhost:8181/contract/findAll/").then(function(resp) {
      // console.log(resp.data);
      if (resp.status === 200) {
        _this.tableData2 = resp.data;
        _this.tableData3 = resp.data;
      }
    });
    this.percentage = this.userGrade;
  },
  methods: {
    handleEdit(index, row) {
      this.$message({
        message: "催缴租金短信已发出",
        type: "success"
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该催缴租金通知, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEditTwo(index, row) {
      this.$message({
        message: "押金退还短信已发出",
        type: "success"
      });
    },
    handleDeleteTwo(index, row) {
      this.$confirm("此操作将永久删除该押金退还通知, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEditThree(index, row) {
      this.$message({
        message: "房源维修通知短信已发出",
        type: "success"
      });
    },
    handleDeleteThree(index, row) {
      this.$confirm("此操作将永久删除该房源维修通知, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEditFour(index, row) {
      this.$message({
        message: "通知已还原",
        type: "success"
      });
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterCreditTwo.css";
</style>
