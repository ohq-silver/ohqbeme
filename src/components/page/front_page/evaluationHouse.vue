<template>
  <div class="evaluationHouse">
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
          <h1 style="color: #fff">看看我的房子值多少钱</h1>
          <h3>添加房屋信息，查看房屋估值</h3>
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
          <el-form-item label="建筑年代">
            <el-select v-model="form.ages"
                       placeholder="请选择"
                       class="pull-down-choice">
              <el-option label="1960s"
                         value="1960s"></el-option>
              <el-option label="1970s"
                         value="1970s"></el-option>
              <el-option label="1980s"
                         value="1980s"></el-option>
              <el-option label="1990s"
                         value="1990s"></el-option>
              <el-option label="2000s"
                         value="2000s"></el-option>
              <el-option label="2010s"
                         value="2010s"></el-option>
              <el-option label="2020s"
                         value="2020s"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="面积">
            <el-input v-model="form.area"
                      placeholder="请输入大于0的数字"></el-input>
            <h4>平方米</h4>
          </el-form-item>
          <el-form-item label="户型">
            <el-select v-model="form.typeOne"
                       placeholder="请选择"
                       class="pull-down-choice">
              <el-option label="1室"
                         value="1室"></el-option>
              <el-option label="2室"
                         value="2室"></el-option>
              <el-option label="3室"
                         value="3室"></el-option>
              <el-option label="4室"
                         value="4室"></el-option>
              <el-option label="5室"
                         value="5室"></el-option>
              <el-option label="6室"
                         value="6室"></el-option>
              <el-option label="7室"
                         value="7室"></el-option>
              <el-option label="8室"
                         value="8室"></el-option>
              <el-option label="9室"
                         value="9室"></el-option>
            </el-select>

            <el-select v-model="form.typeTwo"
                       placeholder="请选择"
                       class="pull-down-choice"
                       style="margin-left: 10px">
              <el-option label="0厅"
                         value="0厅"></el-option>
              <el-option label="1厅"
                         value="1厅"></el-option>
              <el-option label="2厅"
                         value="2厅"></el-option>
              <el-option label="3厅"
                         value="3厅"></el-option>
              <el-option label="4厅"
                         value="4厅"></el-option>
              <el-option label="5厅"
                         value="5厅"></el-option>
              <el-option label="6厅"
                         value="6厅"></el-option>
              <el-option label="7厅"
                         value="7厅"></el-option>
              <el-option label="8厅"
                         value="8厅"></el-option>
              <el-option label="9厅"
                         value="9厅"></el-option>
            </el-select>

            <el-select v-model="form.typeThree"
                       placeholder="请选择"
                       class="pull-down-choice"
                       style="margin-left: 10px">
              <el-option label="0卫"
                         value="0卫"></el-option>
              <el-option label="1卫"
                         value="1卫"></el-option>
              <el-option label="2卫"
                         value="2卫"></el-option>
              <el-option label="3卫"
                         value="3卫"></el-option>
              <el-option label="4卫"
                         value="4卫"></el-option>
              <el-option label="5卫"
                         value="5卫"></el-option>
              <el-option label="6卫"
                         value="6卫"></el-option>
              <el-option label="7卫"
                         value="7卫"></el-option>
              <el-option label="8卫"
                         value="8卫"></el-option>
              <el-option label="9卫"
                         value="9卫"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="朝向">
            <el-select v-model="form.orientation"
                       placeholder="请选择"
                       class="pull-down-choice">
              <el-option label="东"
                         value="东"></el-option>
              <el-option label="西"
                         value="西"></el-option>
              <el-option label="南"
                         value="南"></el-option>
              <el-option label="北"
                         value="北"></el-option>
              <el-option label="东北"
                         value="东北"></el-option>
              <el-option label="东南"
                         value="东南"></el-option>
              <el-option label="西北"
                         value="西北"></el-option>
              <el-option label="西南"
                         value="西南"></el-option>
              <el-option label="南北"
                         value="南北"></el-option>
              <el-option label="东西"
                         value="东西"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="楼层">
            <el-select v-model="form.floor"
                       placeholder="请选择"
                       class="pull-down-choice">
              <el-option label="1层"
                         value="1层"></el-option>
              <el-option label="2层"
                         value="2层"></el-option>
              <el-option label="3层"
                         value="3层"></el-option>
              <el-option label="4层"
                         value="4层"></el-option>
              <el-option label="5层"
                         value="5层"></el-option>
              <el-option label="6层"
                         value="6层"></el-option>
              <el-option label="7层"
                         value="7层"></el-option>
              <el-option label="8层"
                         value="8层"></el-option>
              <el-option label="9层"
                         value="9层"></el-option>
              <el-option label="10层"
                         value="10层"></el-option>
              <el-option label="11层"
                         value="11层"></el-option>
              <el-option label="12层"
                         value="12层"></el-option>
              <el-option label="13层"
                         value="13层"></el-option>
              <el-option label="14层"
                         value="14层"></el-option>
              <el-option label="15层"
                         value="15层"></el-option>
              <el-option label="16层"
                         value="16层"></el-option>
              <el-option label="17层"
                         value="17层"></el-option>
              <el-option label="18层"
                         value="18层"></el-option>
              <el-option label="19层"
                         value="19层"></el-option>
              <el-option label="20层"
                         value="20层"></el-option>
              <el-option label="21层"
                         value="21层"></el-option>
              <el-option label="22层"
                         value="22层"></el-option>
              <el-option label="23层"
                         value="23层"></el-option>
              <el-option label="24层"
                         value="24层"></el-option>
              <el-option label="25层"
                         value="25层"></el-option>
              <el-option label="26层"
                         value="26层"></el-option>
              <el-option label="27层"
                         value="27层"></el-option>
              <el-option label="28层"
                         value="28层"></el-option>
              <el-option label="29层"
                         value="29层"></el-option>
              <el-option label="30层"
                         value="30层"></el-option>
            </el-select>
            <span class="total-folor">总楼层</span>
            <el-select v-model="form.totalFloor"
                       placeholder="请选择"
                       class="pull-down-choice"
                       style="margin-left: 10px">
              <el-option label="1层"
                         value="1层"></el-option>
              <el-option label="2层"
                         value="2层"></el-option>
              <el-option label="3层"
                         value="3层"></el-option>
              <el-option label="4层"
                         value="4层"></el-option>
              <el-option label="5层"
                         value="5层"></el-option>
              <el-option label="6层"
                         value="6层"></el-option>
              <el-option label="7层"
                         value="7层"></el-option>
              <el-option label="8层"
                         value="8层"></el-option>
              <el-option label="9层"
                         value="9层"></el-option>
              <el-option label="10层"
                         value="10层"></el-option>
              <el-option label="11层"
                         value="11层"></el-option>
              <el-option label="12层"
                         value="12层"></el-option>
              <el-option label="13层"
                         value="13层"></el-option>
              <el-option label="14层"
                         value="14层"></el-option>
              <el-option label="15层"
                         value="15层"></el-option>
              <el-option label="16层"
                         value="16层"></el-option>
              <el-option label="17层"
                         value="17层"></el-option>
              <el-option label="18层"
                         value="18层"></el-option>
              <el-option label="19层"
                         value="19层"></el-option>
              <el-option label="20层"
                         value="20层"></el-option>
              <el-option label="21层"
                         value="21层"></el-option>
              <el-option label="22层"
                         value="22层"></el-option>
              <el-option label="23层"
                         value="23层"></el-option>
              <el-option label="24层"
                         value="24层"></el-option>
              <el-option label="25层"
                         value="25层"></el-option>
              <el-option label="26层"
                         value="26层"></el-option>
              <el-option label="27层"
                         value="27层"></el-option>
              <el-option label="28层"
                         value="28层"></el-option>
              <el-option label="29层"
                         value="29层"></el-option>
              <el-option label="30层"
                         value="30层"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房源特色">
            <el-checkbox-group v-model="form.characteristic">
              <el-checkbox label="满5"
                           name="type"></el-checkbox>
              <el-checkbox label="唯一"
                           name="type"></el-checkbox>
              <el-checkbox label="精装修"
                           name="type"></el-checkbox>
              <el-checkbox label="地铁房"
                           name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="onEvaluationSubmit"
                       class="commit">去估价</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="content-right">
        <p>基于信我庞大的真实成交与在售房源数据，让信我估价可以实时客观地预估每套房屋价格</p>
        <el-image style="width: 107px; height: 85px"
                  :src="url"
                  fit="fit"></el-image>
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
  name: "evaluation-house",
  components: {
    ThisHeader,
    ThisFooter
  },
  data() {
    return {
      form: {
        areaName: "",
        ages: "",
        area: "",
        typeOne: "",
        typeTwo: "",
        typeThree: "",
        orientation: "",
        floor: "",
        totalFoolt: "",
        characteristic: ""
      },
      url: require("../../../common/images/1575524776(1).png")
    };
  },
  methods: {
    onEvaluationSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<style>
@import "../../../common/css/front_css/publicCSS.css";
@import "../../../common/css/front_css/evaluationHouse.css";
</style>
