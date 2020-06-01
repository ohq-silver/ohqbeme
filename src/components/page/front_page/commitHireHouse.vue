<template>
  <div class="commitHireHouse">
    <div class="header">
      <ThisHeader></ThisHeader>
      <div class="top-box">
        <div class="menu">
          <ul>
            <li>
              <a href><img src="../../../common/images/indexlogo2.png"
                     alt=""
                     width="87px"></a>
            </li>
            <li>
              <a href
                 class="menu-one">
                <router-link to="/public_house_resource">我要卖房</router-link>
              </a>
            </li>
            <li>
              <a href
                 class="menu-two">
                <router-link to="/evaluation_house">我要估价</router-link>
              </a>
            </li>
            <li>
              <a href
                 class="menu-three">
                <router-link to="/commit_hire_house">委托出租</router-link>
              </a>
            </li>
          </ul>
        </div>
        <div class="title">
          <h1 style="color: #fff">发布出租房源</h1>
          <h3>数万线下门店 · 快速全城推广 · 专业经纪人服务</h3>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="sell-house-form">
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
          <el-form-item label="小区">
            <el-input v-model="form.areaName"
                      placeholder="请输入小区名"></el-input>
          </el-form-item>
          <el-form-item label="房屋地址">
            <el-input v-model="form.address"
                      placeholder="楼栋号/单元号/门牌号"></el-input>
          </el-form-item>
          <el-form-item label="期望租金">
            <el-input v-model="form.price"
                      placeholder="请输入你期望卖出的价格"></el-input>
            <h4>元/月</h4>
          </el-form-item>
          <el-form-item label="出租方式">
            <el-select v-model="form.region"
                       placeholder="请选择"
                       class="pull-down-choice">
              <el-option label="整租"
                         value="整租"></el-option>
              <el-option label="合租"
                         value="合租"></el-option>
              <el-option label="转租"
                         value="转租"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="称呼">
            <el-input v-model="form.name"
                      placeholder="我们该如何称呼您"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone"
                      placeholder="您的联系方式，方便我们及时与您联系"></el-input>
            <el-button type="success"
                       plain
                       class="send-code"
                       :disabled="disable"
                       :class="{ codeGeting:isGeting }"
                       @click="sendMessage()">{{getCode}}</el-button>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.checkNumber"
                      placeholder="请输入手机接收的验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="onSubmit"
                       class="commit">提交委托</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">
      <ThisFooter></ThisFooter>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ThisHeader from "./header";
import ThisFooter from "./footer";
export default {
  name: "commit-hire-house",
  components: {
    ThisHeader,
    ThisFooter
  },
  data() {
    return {
      form: {
        areaName: "",
        address: "",
        price: "",
        region: "",
        name: "",
        phone: "",
        checkNumber: ""
      },
      getCode: "获取验证码",
      isGeting: false,
      count: 60,
      disable: false
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      const _this = this;
      axios
        .post("http://localhost:8181/hire_house/save", this.form)
        .then(function(resp) {
          if (resp.data === "success") {
            _this.$message({
              message: "委托成功",
              type: "success"
            });
          } else {
            _this.$message({
              message: "验证码错误！",
              type: "error"
            });
          }
        });
    },
    sendMessage() {
      // 用户点击发送验证码时就该按钮样式
      var countDown = setInterval(() => {
        if (this.count < 1) {
          this.isGeting = false;
          this.disable = false;
          this.getCode = "获取验证码";
          this.count = 60;
          clearInterval(countDown);
        } else {
          this.isGeting = true;
          this.disable = true;
          this.getCode = this.count-- + "s后重发";
        }
      }, 1000);
      console.log(this.form.phone);
      //并且调用后台阿里短信服务的接口获取验证码
      const _this = this;
      axios
        .post(
          "http://localhost:8181/hire_house/sendMessage/" + _this.form.phone
        )
        .then(function(resp) {
          console.log(resp);
        });
    }
  }
};
</script>

<style>
@import "../../../common/css/front_css/publicCSS.css";
@import "../../../common/css/front_css/commitHireHouse.css";
</style>
