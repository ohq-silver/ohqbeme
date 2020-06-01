<template>
  <div class="publicHouseResource">
    <div class="header">
      <ThisHeader></ThisHeader>
      <div class="top-box">
        <div class="menu">
          <ul>
            <li>
              <a href><img src="../../../common/images/indexlogo2.png"
                     alt=""
                     width="100px"></a>
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
          <h1 style="color: #fff">发布出售房源</h1>
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
            <el-input v-model="form.name"
                      placeholder="请输入小区名"></el-input>
          </el-form-item>
          <el-form-item label="房屋地址">
            <el-input v-model="form.address"
                      placeholder="楼栋号/单元号/门牌号"></el-input>
          </el-form-item>
          <el-form-item label="期望售价">
            <el-input v-model="form.price"
                      placeholder="请输入你期望卖出的价格"></el-input>
            <h4>万元</h4>
            <a href
               class="toEvaluation">
              <router-link to="/evaluation_house">不太清楚如何定价?先估个价</router-link>
            </a>
          </el-form-item>
          <el-form-item label="称呼">
            <el-input v-model="form.lickName"
                      placeholder="我们该如何称呼您"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone"
                      placeholder="您的联系方式，方便我们及时与您联系"></el-input>
            <el-button type="success"
                       plain
                       class="send-code">发送验证码</el-button>
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
      <div class="content-right">
        <div class="right-top">
          <div class="title">
            <h5>广州市&nbsp;成交均价</h5>
            <h2>29381 元/㎡</h2>
          </div>
        </div>
        <div class="right-middle">
          <div class="deal-content"
               v-for="(dealContent,index) in dealContents"
               :key=index>
            <a href="">{{dealContent.name}}</a>
            <h5>{{dealContent.time}}</h5>
            <span>{{dealContent.price}}</span>
          </div>
          <div class="right-bottom">
            <a href="">查看更多交易明细</a>
          </div>
        </div>

      </div>
    </div>
    <div class="footer">
      <ThisFooter></ThisFooter>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable camelcase */
import ThisHeader from "./header";
import ThisFooter from "./footer";
import { deal_data } from "../../../common/js/publicHouseResource_deal_data.js";
export default {
  name: "public-house-resource",
  components: {
    ThisHeader,
    ThisFooter
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        price: "",
        lickName: "",
        phone: "",
        checkNumber: ""
      },
      dealContents: deal_data
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      const _this = this;
      axios
        .post("http://localhost:8181/sell_house/save", this.form)
        .then(function(resp) {
          if (resp.data === "success") {
            _this.$message({
              message: "委托成功",
              type: "success"
            });
          } else if (resp.data === "error") {
            _this.$message({
              message: "委托失败",
              type: "error"
            });
          }
        });
    }
  }
};
</script>

<style>
@import "../../../common/css/front_css/publicCSS.css";
@import "../../../common/css/front_css/publicHouseResource.css";
</style>
