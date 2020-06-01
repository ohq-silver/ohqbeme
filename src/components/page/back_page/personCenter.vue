<template>
  <div class="personCenter">
    <!-- <router-link to='/personCenterTwo'>跳转</router-link> -->
    <el-container>
      <el-header>
        <div class="person-header">
          <span class="head-text-one">个人中心</span>
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
              <el-menu-item index="/personCenter">
                <i class="el-icon-menu"></i>
                <span slot="title">系统首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-house"></i>
                  <span slot="title">房源管理</span>
                </template>
                <el-menu-item index="/personCenterlease">出租房源</el-menu-item>
                <el-menu-item index="/personCenterSell">出售房源</el-menu-item>
              </el-submenu>
              <el-menu-item index="/personCenterContract">
                <i class="el-icon-document"></i>
                <span slot="title">成交管理</span>
              </el-menu-item>
              <el-menu-item index="/personCenterCredit">
                <i class="el-icon-setting"></i>
                <span slot="title">租金押金</span>
              </el-menu-item>
            </el-menu>
          </div>
          <!-- <personCenterSidebar ref='personCenterSidebar'></personCenterSidebar> -->
        </el-aside>
        <el-container>
          <el-main>
            <router-view style="height: 700px"></router-view>
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
                        <span>房东用户</span>
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
                      <el-collapse-item title="房客留言"
                                        name="1">
                        <div>1601房客留言：地板漏水，请帮忙联系物业，回电：15789456318</div>
                        <div>1602房客留言：这个月房租晚两天交，工资还没发，回电：15789456318</div>
                      </el-collapse-item>
                      <el-collapse-item title="中介留言"
                                        name="2">
                        <div>你好，你的房源有人到现场看房，请回电：15789456318</div>
                        <div>你好，你的房源有人到现场看房，请回电：15789456318</div>
                      </el-collapse-item>
                      <el-collapse-item title="物业留言"
                                        name="3">
                        <div>请尽快交齐这个月的物业管理费，请回电：15789456318</div>
                        <div>请尽快交齐这个月的物业管理费，请回电：15789456318</div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-card>
                </div>
                <!-- <div class="house-tag">
                  <el-card shadow="hover">
                    鼠标悬浮时显示
                  </el-card>
                </div>-->
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
                    <div class="house-progress-title">房源求租求购需求</div>
                    <div class="house-progress-box"
                         v-for="(item ,index) in progressBoxes"
                         :key="index">
                      <el-progress type="circle"
                                   :percentage="item.boxNum"
                                   :color="item.boxColor"></el-progress>
                      <div class="house-progress-text">{{item.boxText}}</div>
                    </div>
                  </el-card>
                </div>
                <div class="people-flow-chart"
                     id="peopleFlowChart">
                  <el-card shadow="hover"
                           style="height: 135px">
                    <el-steps :active="2"
                              align-center>
                      <el-step title="通知师傅上门维修"
                               description="这是一段很长很长很长的描述性文字"></el-step>
                      <el-step title="维修中"
                               description="这是一段很长很长很长的描述性文字"></el-step>
                      <el-step title="结账"
                               description="这是一段很长很长很长的描述性文字"></el-step>
                      <el-step title="维修完成"
                               description="这是一段很长很长很长的描述性文字"></el-step>
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
      username: "admin",
      activeName: "1",
      // plusIcon: false,
      url: require("../../../common/images/cat.jpg"),
      lists: [
        { describe: "上次登录时间: ", actually: "2020-02-20", classNUM: "one" },
        { describe: "上次登录地点: ", actually: "广州", classNUM: "two" }
      ],
      progressBoxes: [
        { boxNum: 20, boxColor: "#f56c6c", boxText: "广州越秀区" },
        { boxNum: 40, boxColor: "#e6a23c", boxText: "广州南沙区" },
        { boxNum: 60, boxColor: "#5cb87a", boxText: "广州海珠区" },
        { boxNum: 80, boxColor: "#1989fa", boxText: "广州天河区" }
      ]
    };
  },
  created() {
    this.username = this.$route.params.username;
    // this.usertype = this.$route.params.userType;
    // if (this.$route.params.userType === "fangdong") {
    //   this.usertype = "房东用户";
    // } else {
    //   this.usertype = "租客用户";
    // }
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
    // handleChange () {
    //   this.plusIcon = !this.plusIcon
    // },
    changeWidth() {
      // if (this.plusIcon === false) {
      //   document.getElementById('changeAsideWidth').style.width = '64px'
      //   document.getElementById('waitDo').style.width = '460px'
      //   document.getElementById('personControduce').style.width = '460px'
      //   document.getElementById('showMessage').style.width = '919px'
      //   document.getElementById('houseProgress').style.width = '899px'
      //   document.getElementById('peopleFlowChart').style.width = '899px'
      // } else {
      //   document.getElementById('changeAsideWidth').style.width = '200px'
      //   document.getElementById('waitDo').style.width = '403px'
      //   document.getElementById('personControduce').style.width = '403px'
      //   document.getElementById('showMessage').style.width = '862px'
      //   document.getElementById('houseProgress').style.width = '842px'
      //   document.getElementById('peopleFlowChart').style.width = '842px'
      // }
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterIndex.css";
</style>
