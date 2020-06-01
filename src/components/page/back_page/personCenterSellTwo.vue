<template>
  <div class="personCenterSellTwo">
    <el-card shadow="always">
      <div class="title">转租房源管理面板</div>
      <div class="lease-button">
        <el-input placeholder="请输入地址"
                  v-model="input">
          <el-button slot="append"
                     icon="el-icon-search"
                     @click="searchByAddress()"></el-button>
        </el-input>
        <el-button @click="dialogFormVisible = true"
                   plain
                   :disabled="userGradeSaveBan">房源信息录入</el-button>
        <el-button type="primary"
                   plain
                   @click="searchInvaild()">无效房源查询</el-button>
        <el-button type="info"
                   plain
                   @click="findDefault()">初始化</el-button>
        <!-- <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>-->
      </div>
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                height="400">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"
                     inline
                     class="demo-table-expand">
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="附近交通">
                <span>{{ props.row.traffic }}</span>
              </el-form-item>
              <el-form-item label="房源所有人">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="户型">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="楼层">
                <span>{{ props.row.floor }}</span>
              </el-form-item>
              <el-form-item label="面积">
                <span>{{ props.row.area }}</span>
              </el-form-item>
              <el-form-item label="租金">
                <span>{{ props.row.price }}</span>
              </el-form-item>
              <el-form-item label="房源地址">
                <span>{{ props.row.house_address }}</span>
              </el-form-item>
              <el-form-item label="房源状态">
                <span>{{ props.row.status }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="房源所有人"
                         prop="name"></el-table-column>
        <el-table-column label="联系电话"
                         prop="phone"></el-table-column>
        <el-table-column label="房源地址"
                         prop="house_address"></el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)"
                       type="text"
                       size="small">编辑</el-button>
            <el-button @click="sell(scope.row)"
                       type="text"
                       size="small">打印</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[4, 6, 8, 10]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length"
                     style="float: right;margin-top: 15px"></el-pagination>
    </el-card>

    <el-dialog title="房源信息录入"
               :visible.sync="dialogFormVisible"
               class="input-house-message">
      <el-form :model="form">
        <div class="left-dialog"
             style="float: left">
          <el-form-item label="附近交通"
                        :label-width="formLabelWidth">
            <el-input v-model="form.traffic"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源楼层"
                        :label-width="formLabelWidth">
            <el-input v-model="form.floor"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源面积"
                        :label-width="formLabelWidth">
            <el-input v-model="form.area"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源地址"
                        :label-width="formLabelWidth">
            <el-input v-model="form.house_address"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源户型"
                        :label-width="formLabelWidth">
            <el-input v-model="form.type"
                      autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="right-dialog"
             style="float: right; margin-right: 50px">
          <el-form-item label="联系人"
                        :label-width="formLabelWidth">
            <el-input v-model="form.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话"
                        :label-width="formLabelWidth">
            <el-input v-model="form.phone"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="租金"
                        :label-width="formLabelWidth">
            <el-input v-model="form.price"
                      autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="房源图片"
                        :label-width="formLabelWidth">
            <el-button type="primary"
                       plain>点击上传房源图片(限五张)</el-button>
          </el-form-item> -->
        </div>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="add()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="房源信息修改"
               :visible.sync="dialogFormVisibleEdit"
               class="input-house-message">
      <el-form :model="formEdit">
        <div class="left-dialog"
             style="float: left">
          <el-form-item label="附近交通"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.traffic"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源楼层"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.floor"
                      autocomplete="off"
                      :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="房源面积"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.area"
                      autocomplete="off"
                      :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="房源地址"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.house_address"
                      autocomplete="off"
                      :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="房源户型"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.type"
                      autocomplete="off"
                      :disabled="true"></el-input>
          </el-form-item>
        </div>
        <div class="right-dialog"
             style="float: right; margin-right: 50px">
          <el-form-item label="联系人"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.phone"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="租金"
                        :label-width="formLabelWidth">
            <el-input v-model="formEdit.price"
                      autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="房源图片"
                        :label-width="formLabelWidth">
            <el-button type="primary"
                       plain>点击上传房源图片(限五张)</el-button>
          </el-form-item> -->
        </div>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary"
                   @click="update()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="房源打印"
               :visible.sync="dialogFormVisibleTwo"
               class="print-house-message">
      <div class="pref-show">
        <div class="pref-title">预览</div>
        <div class="pref-content">
          <div class="left-message">
            <h1>{{area_name}}</h1>
            <h2>{{price}}元/月</h2>
            <div class="pref-box">
              <div class="pref-detail-message"
                   v-for="(item,index) in prefMessages"
                   :key="index">
                <span class="pref-detail-title">{{item.prefTitle}}</span>
                <span class="pref-detail-data">{{item.prefData}}</span>
              </div>
            </div>
            <div class="pref-contact">
              <span>联系人:</span>
              <span>{{name}}</span>
              <h3>{{phone}}</h3>
            </div>
          </div>
          <div class="right-message">
            <img :src="url"
                 alt="房源图片" />
          </div>
        </div>
      </div>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisibleTwo = false">取 消</el-button>
        <el-button type="primary"
                   @click="print()">打 印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "perosonCenterlease",
  props: ["userGrade"],
  data() {
    return {
      userGradeSaveBan: false,
      input: "",
      currentPage: 1,
      pageSize: 10,
      url: require("../../../common/images/cat.jpg"),
      prefMessages: [
        { prefTitle: "附近交通:", prefData: "地铁房" },
        { prefTitle: "面积:", prefData: "76m²" },
        { prefTitle: "户型:", prefData: "2室 1厅 1卫 1阳" },
        { prefTitle: "楼层:", prefData: "11层/共30层" },
        { prefTitle: "装修:", prefData: "普装" }
      ],
      area_name: "",
      price: "",
      name: "",
      phone: "",
      tableData: [
        {
          name: "陈先生",
          phone: "17765602714",
          traffic: "地铁房",
          house_address: "上海市普陀区真北路",
          type: "2室 1厅 1卫 1阳",
          floor: "11层/共30层",
          area: "76m²",
          price: "2000/月",
          status: "在售"
        },
        {
          name: "陈先生",
          phone: "17765602714",
          traffic: "地铁房",
          house_address: "上海市普陀区真北路",
          type: "2室 1厅 1卫 1阳",
          floor: "11层/共30层",
          area: "76m²",
          price: "2000/月",
          total: "200万",
          status: "未售"
        },
        {
          name: "陈先生",
          phone: "17765602714",
          traffic: "地铁房",
          house_address: "上海市普陀区真北路",
          type: "2室 1厅 1卫 1阳",
          floor: "11层/共30层",
          area: "76m²",
          price: "2000/月",
          total: "200万",
          status: "未售"
        },
        {
          name: "陈先生",
          phone: "17765602714",
          traffic: "地铁房",
          house_address: "上海市普陀区真北路",
          type: "2室 1厅 1卫 1阳",
          floor: "11层/共30层",
          area: "76m²",
          price: "2000/月",
          total: "200万",
          status: "已售"
        },
        {
          name: "陈先生",
          phone: "17765602714",
          traffic: "地铁房",
          house_address: "上海市普陀区真北路",
          type: "2室 1厅 1卫 1阳",
          floor: "11层/共30层",
          area: "76m²",
          price: "2000/月",
          total: "200万",
          status: "未售"
        }
      ],
      dialogFormVisible: false,
      form: {
        traffic: "",
        floor: "",
        area: "",
        house_address: "",
        type: "",
        name: "",
        phone: "",
        price: ""
      },
      dialogFormVisibleEdit: false,
      formEdit: {
        traffic: "",
        floor: "",
        area: "",
        house_address: "",
        type: "",
        name: "",
        phone: "",
        price: ""
      },
      dialogFormVisibleTwo: false,
      formLabelWidth: "120px"
    };
  },
  created() {
    const _this = this;
    axios.get("http://localhost:8181/hire_house/findAll/").then(function(resp) {
      // console.log(resp.data);
      if (resp.status === 200) {
        _this.tableData = resp.data;
      }
    });
    if (this.userGrade < 60) {
      this.userGradeSaveBan = true;
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    // 根据地址模糊查询
    searchByAddress() {
      const _this = this;
      axios
        .get(
          "http://localhost:8181/hire_house/findByHouseAddress/" + _this.input
        )
        .then(function(resp) {
          // console.log(resp.data);
          if (resp.status === 200) {
            _this.tableData = resp.data;
          }
        });
    },
    // 查询无效房源即已租房源
    searchInvaild() {
      const _this = this;
      axios
        .get("http://localhost:8181/hire_house/findInvalid/")
        .then(function(resp) {
          // console.log(resp.data);
          if (resp.status === 200) {
            _this.tableData = resp.data;
          }
        });
    },
    // 打印房源信息的转租房源纸
    sell(row) {
      this.dialogFormVisibleTwo = true;
      const _this = this;
      axios
        .get("http://localhost:8181/hire_house/findById/" + row.id)
        .then(function(resp) {
          console.log(resp.data);
          console.log(_this.prefMessages);
          _this.area_name = resp.data.areaName;
          _this.phone = resp.data.phone;
          _this.name = resp.data.name;
          _this.price = resp.data.price;
          _this.prefMessages[0].prefData = resp.data.traffic;
          _this.prefMessages[1].prefData = resp.data.area;
          _this.prefMessages[2].prefData = resp.data.type;
          _this.prefMessages[3].prefData = resp.data.floor;
        });
    },
    reflash() {
      let _this = this;
      axios
        .get("http://localhost:8181/hire_house/findAll/")
        .then(function(resp) {
          // console.log(resp.data);
          if (resp.status === 200) {
            _this.tableData = resp.data;
          }
        });
    },
    // 添加房源信息录入
    add() {
      console.log(this.userGrade);
      const _this = this;
      if (_this.userGrade < 60) {
        _this.$message({
          message: "你的信用分数太低，不允许执行此操作！",
          type: "error"
        });
      } else {
        axios
          .post("http://localhost:8181/hire_house/update/", this.form)
          .then(function(resp) {
            if (resp.status === 200) {
              _this.dialogFormVisible = false;
              _this.reflash();
              _this.$message({
                message: "录入成功",
                type: "success"
              });
            } else {
              _this.$message({
                message: "录入失败",
                type: "error"
              });
            }
          });
      }
    },
    // 编辑房源信息
    edit(row) {
      this.dialogFormVisibleEdit = true;
      const _this = this;
      axios
        .get("http://localhost:8181/hire_house/findById/" + row.id)
        .then(function(resp) {
          _this.formEdit = resp.data;
        });
    },
    // 更新房源信息
    update() {
      this.dialogFormVisibleEdit = false;
      const _this = this;
      axios
        .post("http://localhost:8181/hire_house/update/", this.formEdit)
        .then(function(resp) {
          if (resp.status === 200) {
            _this.dialogFormVisibleEdit = false;
            _this.reflash();
            _this.$message({
              message: "修改成功",
              type: "success"
            });
          } else {
            _this.$message({
              message: "修改失败",
              type: "error"
            });
          }
        });
    },
    findDefault() {
      this.reflash();
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterSellTwo.css";
</style>
