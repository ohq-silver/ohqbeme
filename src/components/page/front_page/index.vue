<template>
  <div class="index">
    <div class="header">
      <el-image :src="logo"
                style="margin-top: 5px; margin-left: 5px; width: 125px; height: 50px"></el-image>
      <!-- 使用循环实现顶部导航栏 -->
      <ul class="menu-box">
        <li v-for="(item,index) in menus"
            :key="index"
            @click="toOtherPage(index)">{{item.menuName}}</li>
      </ul>
      <div class="login-box">
        <span @click="toLogin()"
              class="login">登录/注册</span>
        <i class="el-icon-user-solid"></i>
        <span style="margin-left: 5px"
              class="personCenter"
              @click="toPersonCenter()">{{username}}</span>
      </div>
      <div class="search-box"
           style="color: #fff">
        <div class="web-title"
             style="float: left; margin-top: 100px; margin-left: 240px">
          <h1 style="font-size: 80px;letter-spacing: 30px">信我网</h1>
          <h2 style="position: relative; top: 10px; font-size: 40px;">可靠找房源</h2>
          <h2 style="position: relative; top: 10px; font-size: 40px;">带你找到安心的家</h2>
        </div>
      </div>
    </div>
    <div class="content"
         style="width: 1300px; margin: 50px auto">
      <div class="index-second-house"
           style="width: 1300px; margin: 0px auto">
        <h1>二手好房</h1>
        <h4 style="font-weight: normal; color: #999">好房源那么多，我们为您精选</h4>
        <h4 style="float: right; margin-top: -21px; margin-right: 12px; color: #36c"
            @click="toSecondHouse()">更多二手房</h4>
        <div class="box2">
          <ul>
            <li v-for="(item,index) in secondHouseData"
                :key="index"
                @click="toSecondHouseItem()">
              <div class="com">
                <img :src="item.imageUrl"
                     style="width: 307px; height: 205px; border-radius: 6px;" />
                <h3 style="margin-top: 15px">{{item.name}}</h3>
                <h3>{{item.address}}</h3>
                <h5 style="margin-top: 10px; color: #777; font-weight: normal">{{item.houseType}}</h5>
                <h4 style="float: right; margin-top: -23px; margin-right: 12px; color: #FF6600; font-size: 20px">{{item.price}}万</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="index-new-house"
           style="width: 1300px; margin: 50px auto">
        <h1>优选新房</h1>
        <h4 style="font-weight: normal; color: #999">真实信息准确同步，楼盘动态一手掌握</h4>
        <h4 style="float: right; margin-top: -21px; margin-right: 12px; color: #36c"
            @click="toNewHouse()">更多新房</h4>
        <div class="box2">
          <ul>
            <li v-for="(item,index) in newHouseData"
                :key="index"
                @click="toNewHouseItem()">
              <div class="com">
                <img :src="item.imageUrl"
                     style="width: 307px; height: 205px; border-radius: 6px;" />
                <h3 style="margin-top: 15px">{{item.name}}</h3>
                <h3>{{item.address}}</h3>
                <h5 style="margin-top: 10px; color: #777; font-weight: normal">{{item.houseType}}</h5>
                <h4 style="float: right; margin-top: -23px; margin-right: 12px; color: #FF6600; font-size: 20px">{{item.price}}万</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="index-renting-house"
           style="width: 1300px; margin: 50px auto">
        <h1>品质租房</h1>
        <h4 style="font-weight: normal; color: #999">高品质租房体验，从信我开始</h4>
        <h4 style="float: right; margin-top: -21px; margin-right: 12px; color: #36c"
            @click="toRentingHouse()">更多租房</h4>
        <div class="box2">
          <ul>
            <li v-for="(item,index) in rentingHouseData"
                :key="index"
                @click="toRentingHouseItem()">
              <div class="com">
                <img :src="item.imageUrl"
                     style="width: 307px; height: 205px; border-radius: 6px;" />
                <h3 style="margin-top: 15px">{{item.name}}</h3>
                <h3>{{item.address}}</h3>
                <h5 style="margin-top: 10px; color: #777; font-weight: normal">{{item.houseType}}</h5>
                <h4 style="float: right; margin-top: -23px; margin-right: 12px; color: #FF6600; font-size: 20px">{{item.price}}万</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer"
         style="position: relative; margin-top: 50px">
      <ThisFooter></ThisFooter>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable */
import ThisFooter from "./footer";
export default {
  name: "index",
  components: {
    ThisFooter
  },
  data() {
    return {
      username: "个人中心",
      logo: require("../../../common/images/indexlogo.png"),
      menus: [
        { menuName: "首页" },
        { menuName: "二手房" },
        { menuName: "新房" },
        { menuName: "租房" },
        { menuName: "发布房源" }
      ],
      secondHouseData: [
        {
          imageUrl: require("../../../common/images/house1.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: "http://www.ohqbeme.cn/static/img/house1.c0cd69f.jpg",
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house3.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house4.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        }
      ],
      newHouseData: [
        {
          imageUrl: require("../../../common/images/house5.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house6.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house7.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house8.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        }
      ],
      rentingHouseData: [
        {
          imageUrl: require("../../../common/images/house13.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house14.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house11.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        },
        {
          imageUrl: require("../../../common/images/house12.jpg"),
          name: "海珠·昌岗",
          address: "昌岗中路",
          houseType: "2室1厅·67.98平米",
          price: "190"
        }
      ]
    };
  },
  created() {
    // this.username = this.$route.params.username;
    // console.log(this.username);
    const _this = this;
    axios
      .get("http://localhost:8181/secondHouse/findByLimit")
      .then(function(resp) {
        _this.secondHouseData = resp.data;
        console.log(resp.data);
      });
    axios
      .get("http://localhost:8181/newHouse/findByLimit")
      .then(function(resp) {
        _this.newHouseData = resp.data;
        console.log(resp.data);
      });
    axios
      .get("http://localhost:8181/rentingHouse/findByLimit")
      .then(function(resp) {
        _this.rentingHouseData = resp.data;
        console.log(resp.data);
      });
  },
  mounted() {
    this.username = this.$route.params.username; //根据登录页传过来的用户名进行数据渲染
    console.log(this.username);
    console.log(this.$route.params.userGrade);
  },
  methods: {
    toOtherPage(index) {
      if (index === 0) {
        this.$router.push("/");
      }
      if (index === 1) {
        this.$router.push("/second_house");
      }
      if (index === 2) {
        this.$router.push("/new_house");
      }
      if (index === 3) {
        this.$router.push("/renting_house");
      }
      if (index === 4) {
        this.$router.push("/public_house_resource");
      }
    },
    toSecondHouse() {
      this.$router.push("/second_house");
    },
    toSecondHouseItem() {
      this.$router.push("/second_house_item");
    },
    toNewHouse() {
      this.$router.push("/new_house");
    },
    toNewHouseItem() {
      this.$router.push("/new_house_item");
    },
    toRentingHouse() {
      this.$router.push("/renting_house");
    },
    toRentingHouseItem() {
      this.$router.push("/renting_house_item");
    },
    toLogin() {
      this.$router.push("/login");
    },
    //根据用户类型进行跳转到不同用户类型下的个人中心并且传递用户名，用户类型和用户信用积分
    toPersonCenter() {
      console.log(this.$route.params.userType);
      if (this.$route.params.userType === "fangdong") {
        this.$router.push({
          name: "personCenter",
          params: {
            username: this.username,
            userType: this.$route.params.userType,
            userGrade: this.$route.params.userGrade
          }
        });
      } else {
        this.$router.push({
          name: "personCenterTwo",
          params: {
            username: this.username,
            userType: this.$route.params.userType,
            userGrade: this.$route.params.userGrade
          }
        });
      }
      // this.$router.push({
      //   name: "personCenter",
      //   params: {
      //     username: this.username,
      //     userType: this.$route.params.userType
      //   }
      // });
    }
  }
};
</script>

<style>
@import "../../../common/css/front_css/index.css";
@import "../../../common/css/front_css/publicCSS.css";
</style>
