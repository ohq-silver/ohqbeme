
<template>
  <div class="personCenterTwo">
    <!-- <router-link to='/personCenterTwo'>跳转</router-link> -->
    <el-container>
      <el-header>
        <div class="person-header">
          <span class="head-text-one"
                @click="toIndex()">
            个人中心
          </span>
          <div class="head-text-two">
            <el-avatar size="medium"
                       :src="url"></el-avatar>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{username}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">房东用户</el-dropdown-item>
                <el-dropdown-item command="b">租客用户</el-dropdown-item>
                <el-dropdown-item command="c">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <!-- <personCenterHeader ref='personCenterHeader'></personCenterHeader> -->
        <!-- <span class="change-icon" @click="handleChange()">
          <i v-if="plusIcon" class="el-icon-s-fold"></i>
          <i v-if="!plusIcon" class="el-icon-s-unfold"></i>
        </span>-->
        <!-- <el-radio-group
          v-model="plusIcon"
          style="margin-bottom: 8px;margin-left: -5px"
          @click="handleChange"
        >
          <el-radio :label="false" v-if="plusIcon">
            <i class="el-icon-s-unfold" style="font-size: 20px" @click="changeWidth"></i>
          </el-radio>
          <el-radio :label="true" v-if="!plusIcon">
            <i class="el-icon-s-fold" style="font-size: 20px" @click="changeWidth"></i>
          </el-radio>
        </el-radio-group>-->
      </el-header>
      <el-container>
        <el-aside id="changeAsideWidth"
                  width="200px">
          <div class="person-menu">
            <el-menu class="el-menu-vertical-demo"
                     router>
              <el-menu-item index="/personCenterTwo">
                <i class="el-icon-menu"></i>
                <span slot="title">系统首页</span>
              </el-menu-item>
              <el-menu-item index="/personCenterSellTwo">
                <i class="el-icon-house"></i>
                <span slot="title">转租房源</span>
              </el-menu-item>
              <el-menu-item index="/personCenterContractTwo">
                <i class="el-icon-document"></i>
                <span slot="title">成交管理</span>
              </el-menu-item>
              <el-menu-item index="/personCenterCreditTwo">
                <i class="el-icon-setting"></i>
                <span slot="title">租金押金</span>
              </el-menu-item>
            </el-menu>
          </div>
          <!-- <personCenterSidebar ref='personCenterSidebar'></personCenterSidebar> -->
        </el-aside>
        <el-container>
          <el-main>
            <router-view style="height: 700px"
                         :userGrade="userGrade"></router-view>
            <div class="content">
              <div class="left-content">
                <el-card shadow="hover"
                         class="person-controduce"
                         id="personControduce">
                  <div class="user-info">
                    <img :src="url"
                         alt="头像"
                         class />
                    <div class="user-info-content">
                      <div class="user-name">
                        <span>{{username}}</span>
                      </div>
                      <div class="user-type">
                        <span>租客用户</span>
                      </div>
                    </div>
                  </div>
                  <div :class="'user-info-list-'+item.classNUM"
                       v-for="(item,index) in lists"
                       :key="index">
                    <span>{{item.describe}}</span>
                    <span class="actually-text">{{item.actually}}</span>
                  </div>
                </el-card>
                <div class="wait-do"
                     id="waitDo">
                  <el-card shadow="hover">
                    <div class="wait-do-title">给你的留言</div>
                    <el-collapse v-model="activeName"
                                 accordion
                                 class="wait-do-item">
                      <el-collapse-item title="房东留言"
                                        name="1">
                        <div v-for="(item,index) in fangdongMessage"
                             :key="index">{{item.leaving_content}}</div>
                      </el-collapse-item>
                      <el-collapse-item title="中介留言"
                                        name="2">
                        <div v-for="(item,index) in zhongjieMessage"
                             :key="index">{{item.leaving_content}}</div>
                      </el-collapse-item>
                      <el-collapse-item title="物业留言"
                                        name="3">
                        <div v-for="(item,index) in wuyeMessage"
                             :key="index">{{item.leaving_content}}</div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-card>
                </div>
              </div>
              <div class="right-content">
                <!-- <el-row class="show-message"
                        :gutter="20"
                        style="margin-left: 0px"
                        id="showMessage">
                  <el-col :span="8">
                    <el-card class="show-message-card"
                             shadow="hover"
                             style="height: 100px">
                      <div class="img-icon-user">
                        <i class="el-icon-user"></i>
                      </div>
                      <div class="show-text">
                        <div class="show-number">
                          <span>1234</span>
                        </div>
                        <div class="detail-text">
                          <span>用户访问量</span>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="show-message-card"
                             shadow="hover"
                             style="height: 100px">
                      <div class="img-icon-bell">
                        <i class="el-icon-bell"></i>
                      </div>
                      <div class="show-text">
                        <div class="show-number">
                          <span>321</span>
                        </div>
                        <div class="detail-text">
                          <span>系统消息</span>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="8">
                    <el-card class="show-message-card"
                             shadow="hover"
                             style="height: 100px">
                      <div class="img-icon-file">
                        <i class="el-icon-goods"></i>
                      </div>
                      <div class="show-text">
                        <div class="show-number">
                          <span>500</span>
                        </div>
                        <div class="detail-text">
                          <span>数量</span>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row> -->
                <div class="house-progress"
                     id="houseProgress">
                  <el-card shadow="hover">
                    <div class="house-progress-title">收藏房源</div>
                    <el-table ref="singleTable"
                              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                              highlight-current-row
                              style="width: 100%"
                              class="collect-house">
                      <el-table-column type="index"
                                       width="50"></el-table-column>
                      <el-table-column property="date"
                                       label="日期"
                                       width="120"></el-table-column>
                      <el-table-column property="username"
                                       label="姓名"
                                       width="120"></el-table-column>
                      <el-table-column property="address"
                                       label="地址"></el-table-column>
                      <el-table-column property="price"
                                       label="金额"></el-table-column>
                    </el-table>
                    <el-pagination background
                                   @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page="currentPage"
                                   :page-sizes="[2, 4, 6, 7]"
                                   :page-size="pageSize"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="tableData.length"
                                   style="float: right;margin-top: 15px"></el-pagination>
                  </el-card>
                </div>
                <div class="people-flow-chart"
                     id="peopleFlowChart">
                  <el-card shadow="hover"
                           style="height: 135px">
                    <el-steps :active="active"
                              align-center>
                      <el-step title="通知师傅上门维修"
                               :description="maintenance_message_one"></el-step>
                      <el-step title="维修中"
                               :description="maintenance_message_two"></el-step>
                      <el-step title="结账"
                               :description="maintenance_message_three"></el-step>
                      <el-step title="维修完成"
                               :description="maintenance_message_four"></el-step>
                    </el-steps>
                  </el-card>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
import personCenterSidebar from "./personSideBar";
import personCenterHeader from "./personHeader";
export default {
  name: "perosonCenter",
  components: {
    personCenterSidebar,
    personCenterHeader
  },
  data() {
    return {
      active: 0,
      maintenance_message_one: "",
      maintenance_message_two: "",
      maintenance_message_three: "",
      maintenance_message_four: "",
      username: "admin",
      activeName: "1",
      currentPage: 1,
      pageSize: 7,
      // plusIcon: false,
      url: require("../../../common/images/cat.jpg"),
      lists: [
        { describe: "上次登录时间: ", actually: "2020-02-20", classNUM: "one" },
        { describe: "上次登录地点: ", actually: "广州", classNUM: "two" }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          price: "2000/月"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          price: "200万"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          price: "200万"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          price: "2000/月"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          price: "2000/月"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          price: "2000/月"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          price: "2000/月"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          price: "2000/月"
        }
      ],
      currentRow: null,
      fangdongMessage: [],
      zhongjieMessage: [],
      wuyeMessage: [],
      userGrade: 0
    };
  },
  created() {
    this.username = this.$route.params.username;
    console.log(this.$route.params.userGrade);
    this.userGrade = this.$route.params.userGrade;
    const _this = this;
    // 查询房东留言
    axios
      .get(
        "http://localhost:8181/leaving_message/findByUsernameAndSource/" +
          _this.username +
          "/" +
          "房东"
      )
      .then(function(resp) {
        // console.log(resp.data);
        if (resp.status === 200) {
          _this.fangdongMessage = resp.data;
        }
      });
    // 查询中介留言
    axios
      .get(
        "http://localhost:8181/leaving_message/findByUsernameAndSource/" +
          _this.username +
          "/" +
          "中介"
      )
      .then(function(resp) {
        // console.log(resp.data);
        if (resp.status === 200) {
          _this.zhongjieMessage = resp.data;
        }
      });
    // 查询物业留言
    axios
      .get(
        "http://localhost:8181/leaving_message/findByUsernameAndSource/" +
          _this.username +
          "/" +
          "物业"
      )
      .then(function(resp) {
        // console.log(resp.data);
        if (resp.status === 200) {
          _this.wuyeMessage = resp.data;
        }
      });
    // 查询收藏房源
    axios
      .get(
        "http://localhost:8181/collect_house/findByUsername/" + _this.username
      )
      .then(function(resp) {
        // console.log(resp.data);
        if (resp.status === 200) {
          _this.tableData = resp.data;
        }
      });
    // 查询维修进度
    axios
      .get("http://localhost:8181/maintenance/findByUsername/" + _this.username)
      .then(function(resp) {
        // console.log(resp.data);
        if (resp.status === 200) {
          console.log(resp.data[0].maintenance_message_three.length);
          // let data1 = resp.data[0].maintenance_message_one;
          if (
            (resp.data[0].maintenance_message_one != null ||
              resp.data[0].maintenance_message_one.length !== 0) &&
            (resp.data[0].maintenance_message_two === null ||
              resp.data[0].maintenance_message_two.length === 0) &&
            (resp.data[0].maintenance_message_three === null ||
              resp.data[0].maintenance_message_three.length === 0) &&
            (resp.data[0].maintenance_message_four === null ||
              resp.data[0].maintenance_message_four.length === 0)
          ) {
            _this.active = 1;
            _this.maintenance_message_one =
              resp.data[0].maintenance_message_one;
          } else if (
            (resp.data[0].maintenance_message_one != null ||
              resp.data[0].maintenance_message_one.length !== 0) &&
            (resp.data[0].maintenance_message_two != null ||
              resp.data[0].maintenance_message_two.length !== 0) &&
            (resp.data[0].maintenance_message_three === null ||
              resp.data[0].maintenance_message_three.length === 0) &&
            (resp.data[0].maintenance_message_four === null ||
              resp.data[0].maintenance_message_four.length === 0)
          ) {
            _this.active = 2;
            _this.maintenance_message_one =
              resp.data[0].maintenance_message_one;
            _this.maintenance_message_two =
              resp.data[0].maintenance_message_two;
          } else if (
            (resp.data[0].maintenance_message_one != null ||
              resp.data[0].maintenance_message_one.length !== 0) &&
            (resp.data[0].maintenance_message_two != null ||
              resp.data[0].maintenance_message_two.length !== 0) &&
            (resp.data[0].maintenance_message_three != null ||
              resp.data[0].maintenance_message_three.length !== 0) &&
            (resp.data[0].maintenance_message_four === null ||
              resp.data[0].maintenance_message_four.length === 0)
          ) {
            _this.active = 3;
            _this.maintenance_message_one =
              resp.data[0].maintenance_message_one;
            _this.maintenance_message_two =
              resp.data[0].maintenance_message_two;
            _this.maintenance_message_three =
              resp.data[0].maintenance_message_three;
          } else if (
            (resp.data[0].maintenance_message_one != null ||
              resp.data[0].maintenance_message_one.length !== 0) &&
            (resp.data[0].maintenance_message_two != null ||
              resp.data[0].maintenance_message_two.length !== 0) &&
            (resp.data[0].maintenance_message_three != null ||
              resp.data[0].maintenance_message_three.length !== 0) &&
            (resp.data[0].maintenance_message_four != null ||
              resp.data[0].maintenance_message_four.length !== 0)
          ) {
            _this.active = 4;
            _this.maintenance_message_one =
              resp.data[0].maintenance_message_one;
            _this.maintenance_message_two =
              resp.data[0].maintenance_message_two;
            _this.maintenance_message_three =
              resp.data[0].maintenance_message_three;
            _this.maintenance_message_four =
              resp.data[0].maintenance_message_four;
          }
        }
      });
  },
  methods: {
    handleCommand(command) {
      if (command === "a") {
        this.$router.push("/personCenter");
      }
      if (command === "b") {
        this.$router.push("/personCenterTwo");
      }
      if (command === "c") {
        this.$router.push("/login");
      }
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    toIndex() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterIndexTwo.css";
</style>
