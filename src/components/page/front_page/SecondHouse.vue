<template>
  <div class="second-house">
    <div class="second-house-header">
      <ThisHeader ref="Header"></ThisHeader>
      <div class="search-box">
        <div class="menu">
          <ul>
            <li>
              <a href>
                <img src="../../../common/images/indexlogo2.png"
                     alt=""
                     width="87px">
              </a>
            </li>
            <li>
              <a href
                 class="menu-one">在售</a>
            </li>
            <li>
              <a href
                 class="menu-two">成交</a>
            </li>
            <li>
              <a href
                 class="menu-three">小区</a>
            </li>
            <li>
              <a href
                 class="menu-four">地图找房</a>
            </li>
          </ul>
          <el-input placeholder="请输入区域或小区名开始找房"
                    v-model="inputData"
                    class="input-with-select"
                    style="position: relative; width: 600px; margin-right: 393px;">
            <el-button slot="append"
                       icon="el-icon-search"
                       @click="getInputValue()"></el-button>
          </el-input>
          <!-- <el-input placeholder="请输入区域或小区名开始找房"
                    prefix-icon="el-icon-search"></el-input> -->
        </div>
      </div>
    </div>

    <div class="second-house-content">
      <div class="choose-form">
        <div class="position-place">
          <ul>
            <li class="text-one">位置</li>
            <li id="text-two"
                @click="showArea()">区域</li>
            <li id="text-three"
                @click="showLine()">地铁线</li>
          </ul>
          <hr />
        </div>
        <div class="area"
             id="area">
          <ul class="area-all">
            <li v-for="(area,index) in areas"
                :key="index"
                :class="'area-data-'+area.classNumber">{{area.name}}</li>
          </ul>
        </div>
        <div class="line"
             id="line">
          <ul class="line-all">
            <li v-for="(line,index) in lines"
                :key="index"
                :class="'line-data-'+line.classNumber">{{line.name}}</li>
          </ul>
        </div>
        <div class="check-box-form">
          <el-form ref="form"
                   :model="form"
                   label-width="80px">
            <el-form-item label="价格"
                          label-width="60px">
              <el-radio-group v-model="form.type"
                              style="margin-left:20px">
                <el-radio label="100万"
                          name="type"></el-radio>
                <el-radio label="100-120万"
                          name="type"></el-radio>
                <el-radio label="150-200万"
                          name="type"></el-radio>
                <el-radio label="200-300万"
                          name="type"></el-radio>
                <el-radio label="300-500万"
                          name="type"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="房型"
                          label-width="60px">
              <el-radio-group v-model="form.type"
                              style="margin-left:20px">
                <el-radio label="一室"
                          name="type"></el-radio>
                <el-radio label="二室"
                          name="type"></el-radio>
                <el-radio label="三室"
                          name="type"></el-radio>
                <el-radio label="四室"
                          name="type"></el-radio>
                <el-radio label="五室"
                          name="type"></el-radio>
                <el-radio label="五室以上"
                          name="type"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="建筑面积"
                          label-width="84px">
              <el-radio-group v-model="form.area"
                              style="margin-left:20px"
                              @change="getAreaValue()">
                <el-radio label="0-40㎡"
                          name="area"></el-radio>
                <el-radio label="40-60㎡"
                          name="area"></el-radio>
                <el-radio label="60-80㎡"
                          name="area"></el-radio>
                <el-radio label="80-100㎡"
                          name="area"></el-radio>
                <el-radio label="100-120㎡"
                          name="area"></el-radio>
                <el-radio label="120-144㎡"
                          name="area"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="房源特色"
                          label-width="84px">
              <el-radio-group v-model="form.type"
                              style="margin-left:20px">
                <el-radio label="必看好房"
                          name="type"></el-radio>
                <el-radio label="满5年"
                          name="type"></el-radio>
                <el-radio label="满两年"
                          name="type"></el-radio>
                <el-radio label="近地铁"
                          name="type"></el-radio>
                <el-radio label="VR房源"
                          name="type"></el-radio>
                <el-radio label="7日新上"
                          name="type"></el-radio>
              </el-radio-group>
            </el-form-item>
            <div class="show-hide-choose"
                 id="show_hide_choose">
              <el-form-item label="朝向"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="南北"
                            name="type"></el-radio>
                  <el-radio label="朝南"
                            name="type"></el-radio>
                  <el-radio label="朝东"
                            name="type"></el-radio>
                  <el-radio label="朝西"
                            name="type"></el-radio>
                  <el-radio label="朝北"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="楼层"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="低楼层"
                            name="type"></el-radio>
                  <el-radio label="中楼层"
                            name="type"></el-radio>
                  <el-radio label="高楼层"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="楼龄"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="5年以内"
                            name="type"></el-radio>
                  <el-radio label="10年以内"
                            name="type"></el-radio>
                  <el-radio label="15年以内"
                            name="type"></el-radio>
                  <el-radio label="20年以内"
                            name="type"></el-radio>
                  <el-radio label="20年以上"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="装修"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="精装修"
                            name="type"></el-radio>
                  <el-radio label="普通装修"
                            name="type"></el-radio>
                  <el-radio label="毛坯房"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="用途"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="普通住宅"
                            name="type"></el-radio>
                  <el-radio label="商业类"
                            name="type"></el-radio>
                  <el-radio label="别墅"
                            name="type"></el-radio>
                  <el-radio label="四合院"
                            name="type"></el-radio>
                  <el-radio label="车位"
                            name="type"></el-radio>
                  <el-radio label="其他"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="电梯"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="有电梯"
                            name="type"></el-radio>
                  <el-radio label="无电梯"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="权属"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="商品房"
                            name="type"></el-radio>
                  <el-radio label="公房"
                            name="type"></el-radio>
                  <el-radio label="经适房"
                            name="type"></el-radio>
                  <el-radio label="其他"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="类型"
                            label-width="60px">
                <el-radio-group v-model="form.type"
                                style="margin-left:20px">
                  <el-radio label="塔楼"
                            name="type"></el-radio>
                  <el-radio label="板楼"
                            name="type"></el-radio>
                  <el-radio label="板塔结合"
                            name="type"></el-radio>
                </el-radio-group>
              </el-form-item>
            </div>

            <div class="more-choose-text"
                 @click="showMoreChoose()"
                 id="open_choose">更多选项</div>
            <div class="recive-choose-text"
                 @click="hideMoreChoose()"
                 id="recive_choose">收起选项</div>
          </el-form>
        </div>
      </div>
      <div class="house-details">
        <el-tabs style="width: 923px; height:1000px">
          <el-tab-pane label="面积"
                       class="mianji">
            <div v-for="(fistTypeHouse,index) in fistTypeHouses"
                 :key="index"
                 :class="'first-type-house-'+fistTypeHouse.classNumber"
                 @click="toItem(index)">
              <el-image :src="fistTypeHouse.imageUrl"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <div class="show-text">
                  <h2 class="area-name">{{fistTypeHouse.introduce_name}}</h2>
                  <h4>
                    <i class="el-icon-location-outline"></i>
                    {{fistTypeHouse.name}}
                  </h4>
                  <h4>
                    <i class="el-icon-office-building"></i>
                    {{fistTypeHouse.details_content}}
                  </h4>
                  <h4>
                    <i class="el-icon-star-off"></i>
                    {{fistTypeHouse.new_info}}
                  </h4>
                  <div class="tag">
                    <span>{{fistTypeHouse.tag_one}}</span>
                    <span>{{fistTypeHouse.tag_two}}</span>
                    <span>{{fistTypeHouse.tag_three}}</span>
                    <span>{{fistTypeHouse.tag_four}}</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-left"
                           @click="first_prevPage()"
                           class="last-page">上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{first_currentPage}}页/共{{first_totalPage}}页</div>
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-right"
                           @click="first_nextPage()"
                           class="next-page">下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="最新发布"
                       class="zuixinfabu">
            <div v-for="(secondTypeHouse,index) in secondTypeHouses"
                 :key="index"
                 :class="'second-type-house-'+secondTypeHouse.classNumber">
              <el-image :src="secondTypeHouse.imageUrl"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <h2 class="area-name">{{secondTypeHouse.introduce_name}}</h2>
                <h4>
                  <i class="el-icon-location-outline"></i>
                  {{secondTypeHouse.name}}
                </h4>
                <h4>
                  <i class="el-icon-office-building"></i>
                  {{secondTypeHouse.details_content}}
                </h4>
                <h4>
                  <i class="el-icon-star-off"></i>
                  {{secondTypeHouse.new_info}}
                </h4>
                <div class="tag">
                  <span>{{secondTypeHouse.tag_one}}</span>
                  <span>{{secondTypeHouse.tag_two}}</span>
                  <span>{{secondTypeHouse.tag_three}}</span>
                  <span>{{secondTypeHouse.tag_four}}</span>
                </div>
              </div>
              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-left"
                           @click="second_prevPage()"
                           class="last-page">上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{second_currentPage}}页/共{{second_totalPage}}页</div>
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-right"
                           @click="second_nextPage()"
                           class="next-page">下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="总价"
                       class="zongjia">
            <div v-for="(thirdTypeHouse,index) in thirdTypeHouses"
                 :key="index"
                 :class="'third-type-house-'+thirdTypeHouse.classNumber">
              <el-image :src="thirdTypeHouse.imageUrl"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <h2 class="area-name">{{thirdTypeHouse.introduce_name}}</h2>
                <h4>
                  <i class="el-icon-location-outline"></i>
                  {{thirdTypeHouse.name}}
                </h4>
                <h4>
                  <i class="el-icon-office-building"></i>
                  {{thirdTypeHouse.details_content}}
                </h4>
                <h4>
                  <i class="el-icon-star-off"></i>
                  {{thirdTypeHouse.new_info}}
                </h4>
                <div class="tag">
                  <span>{{thirdTypeHouse.tag_one}}</span>
                  <span>{{thirdTypeHouse.tag_two}}</span>
                  <span>{{thirdTypeHouse.tag_three}}</span>
                  <span>{{thirdTypeHouse.tag_four}}</span>
                </div>
              </div>
              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-left"
                           @click="third_prevPage()"
                           class="last-page">上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{third_currentPage}}页/共{{third_totalPage}}页</div>
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-right"
                           @click="third_nextPage()"
                           class="next-page">下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="房屋单价"
                       class="fangwudanjia">
            <div v-for="(fourTypeHouse,index) in fourTypeHouses"
                 :key="index"
                 :class="'four-type-house-'+fourTypeHouse.classNumber">
              <el-image :src="fourTypeHouse.imageUrl"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <h2 class="area-name">{{fourTypeHouse.introduce_name}}</h2>
                <h4>
                  <i class="el-icon-location-outline"></i>
                  {{fourTypeHouse.name}}
                </h4>
                <h4>
                  <i class="el-icon-office-building"></i>
                  {{fourTypeHouse.details_content}}
                </h4>
                <h4>
                  <i class="el-icon-star-off"></i>
                  {{fourTypeHouse.new_info}}
                </h4>
                <div class="tag">
                  <span>{{fourTypeHouse.tag_one}}</span>
                  <span>{{fourTypeHouse.tag_two}}</span>
                  <span>{{fourTypeHouse.tag_three}}</span>
                  <span>{{fourTypeHouse.tag_four}}</span>
                </div>
              </div>
              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-left"
                           @click="four_prevPage()"
                           class="last-page">上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{four_currentPage}}页/共{{four_totalPage}}页</div>
              <el-button-group>
                <el-button type="primary"
                           icon="el-icon-arrow-right"
                           @click="four_nextPage()"
                           class="next-page">下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="expand-more">
        <div class="map-to-house">
          <div>
            <el-image :src="maptohouse"
                      alt="地图找房"></el-image>
          </div>
          <div>
            <el-button type="primary">试试地图找房</el-button>
          </div>
        </div>
        <hr />
        <div class="look-more">
          <div class="title">
            <span class="no-link">信我看点</span>
            <span class="link">
              <a href>更多</a>
            </span>
          </div>
          <div class="content">
            <ul>
              <li>
                <a href
                   title="买房可得注意了，这4种房子买了就后悔，你中招没？">买房可得注意了，这4种房子买了就后悔，你中招没？</a>
              </li>
              <li>
                <a href
                   title="请注意！2019年下半年房贷能贷30年就别贷25年！">请注意！2019年下半年房贷能贷30年就别贷25年！</a>
              </li>
              <li>
                <a href
                   title="东西越来越多，屋子越来越乱？这些收纳设计你值得拥有！">东西越来越多，屋子越来越乱？这些收纳设计你值得拥有！</a>
              </li>
              <li>
                <a href
                   title="全速前进，“单飞”后的小鹿茶真的“飘了”？">全速前进，“单飞”后的小鹿茶真的“飘了”？</a>
              </li>
              <li>
                <a href
                   title="央行：坚决不搞“大水漫灌”，重申不将房地产作为刺激手段">央行：坚决不搞“大水漫灌”，重申不将房地产作为刺激手段</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="hot-more">
          <div class="title">
            <span class="no-link">热门百科</span>
            <span class="link">
              <a href>更多</a>
            </span>
          </div>
          <div class="content">
            <ul>
              <li>
                <a href
                   title="板楼与塔楼是两种不同的建筑形态，挺拔的塔楼与平缓的板楼各具特色。">板楼与塔楼是两种不同的建筑形态，挺拔的塔楼与平缓的板楼各具特色。</a>
              </li>
              <li>
                <a href
                   title="交了定金却不想买房了，定金可以退吗？">交了定金却不想买房了，定金可以退吗？</a>
              </li>
              <li>
                <a href
                   title="公积金单位补缴说明怎么写？有何作用？">公积金单位补缴说明怎么写？有何作用？</a>
              </li>
              <li>
                <a href
                   title="外国人广州购房条件是什么？">外国人广州购房条件是什么？</a>
              </li>
              <li>
                <a href
                   title="购买二手房详细流程是怎样的？">购买二手房详细流程是怎样的？</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="second-house-footer">
      <ThisFooter></ThisFooter>
    </div>
  </div>
</template>

<script>
import ThisHeader from "./header";
import ThisFooter from "./footer";
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import {
  areas_data,
  line_data
} from "../../../common/js/static_second_house_area_line.js";
import {
  first_type,
  second_type,
  third_type,
  four_type
} from "../../../common/js/second_house_all_type.js";
export default {
  name: "second-house",
  components: {
    ThisHeader,
    ThisFooter
  },
  data() {
    return {
      inputData: "",
      areas: areas_data,
      lines: line_data,
      show: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        area: ""
      },
      maptohouse: require("../../../common/images/maptohouse.png"),
      // 第一大类里的几个分页变量
      first_totalPage: 1, // 统共页数，默认为1
      first_currentPage: 1, // 当前页数 ，默认为1
      first_pageSize: 5, // 每页显示数量
      fistTypeHouses: [], // 当前页显示内容
      firstTypeData: first_type, // 放置后台数据
      // 第二大类里的几个分页变量
      second_totalPage: 1, // 统共页数，默认为1
      second_currentPage: 1, // 当前页数 ，默认为1
      second_pageSize: 5, // 每页显示数量
      secondTypeHouses: [], // 当前页显示内容
      secondTypeData: second_type, // 放置后台数据
      // 第三大类里的几个分页变量
      third_totalPage: 1, // 统共页数，默认为1
      third_currentPage: 1, // 当前页数 ，默认为1
      third_pageSize: 5, // 每页显示数量
      thirdTypeHouses: [], // 当前页显示内容
      thirdTypeData: third_type, // 放置后台数据
      // 第四大类里的几个分页变量
      four_totalPage: 1, // 统共页数，默认为1
      four_currentPage: 1, // 当前页数 ，默认为1
      four_pageSize: 5, // 每页显示数量
      fourTypeHouses: [], // 当前页显示内容
      fourTypeData: four_type, // 放置后台数据,
      second_house_id: 0 // 初始id值
    };
  },
  mounted() {},
  created() {
    const _this = this;
    axios
      .get("http://localhost:8181/secondHouse/findOrderByArea")
      .then(function(resp) {
        _this.firstTypeData = resp.data;
        _this.first_totalPage = Math.ceil(
          _this.firstTypeData.length / _this.first_pageSize
        );
        // // 计算得0时设置为1
        _this.first_totalPage =
          _this.first_totalPage === 0 ? 1 : _this.first_totalPage;
        _this.getCurrentPageData_First();
        // console.log(resp.data);
      });
    axios
      .get("http://localhost:8181/secondHouse/findOrderByPublicTime")
      .then(function(resp) {
        _this.secondTypeData = resp.data;
        // 第二大类下的计算
        _this.second_totalPage = Math.ceil(
          _this.secondTypeData.length / _this.second_pageSize
        );
        // 计算得0时设置为1
        _this.second_totalPage =
          _this.second_totalPage === 0 ? 1 : _this.second_totalPage;
        _this.getCurrentPageData_Second();
      });
    axios
      .get("http://localhost:8181/secondHouse/findOrderByPrice")
      .then(function(resp) {
        _this.thirdTypeData = resp.data;
        // 第三大类下的计算
        _this.third_totalPage = Math.ceil(
          _this.thirdTypeData.length / _this.third_pageSize
        );
        // 计算得0时设置为1
        _this.third_totalPage =
          _this.third_totalPage === 0 ? 1 : _this.third_totalPage;
        _this.getCurrentPageData_Third();
      });
    axios
      .get("http://localhost:8181/secondHouse/findOrderBySinglePrice")
      .then(function(resp) {
        _this.fourTypeData = resp.data;
        // 第四大类下的计算
        _this.four_totalPage = Math.ceil(
          _this.fourTypeData.length / _this.four_pageSize
        );
        // 计算得0时设置为1
        _this.four_totalPage =
          _this.four_totalPage === 0 ? 1 : _this.four_totalPage;
        _this.getCurrentPageData_Four();
      });
  },
  methods: {
    showArea() {
      document.getElementById("text-two").style.color = "#06c";
      document.getElementById("text-three").style.color = "#000";
      document.getElementById("area").style.display = "block";
      document.getElementById("line").style.display = "none";
      this.show = !this.show;
    },
    showLine() {
      document.getElementById("text-two").style.color = "#000";
      document.getElementById("text-three").style.color = "#06c";
      document.getElementById("area").style.display = "none";
      document.getElementById("line").style.display = "block";
      this.show = !this.show;
    },
    onSubmit() {
      // console.log("submit!");
    },
    showMoreChoose() {
      document.getElementById("show_hide_choose").style.display = "block";
      document.getElementById("recive_choose").style.display = "block";
      document.getElementById("open_choose").style.display = "none";
    },
    hideMoreChoose() {
      document.getElementById("show_hide_choose").style.display = "none";
      document.getElementById("recive_choose").style.display = "none";
      document.getElementById("open_choose").style.display = "block";
    },
    // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
    // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
    // 第一个分类中数据显示
    getCurrentPageData_First() {
      let begin = (this.first_currentPage - 1) * this.first_pageSize;
      let end = this.first_currentPage * this.first_pageSize;
      this.fistTypeHouses = this.firstTypeData.slice(begin, end);
      // console.log(this.firstTypeData);
    },
    // 上一页
    first_prevPage() {
      if (this.first_currentPage === 1) {
        return false;
      } else {
        this.first_currentPage--;
        this.getCurrentPageData_First();
      }
    },
    // 下一页
    first_nextPage() {
      if (this.first_currentPage === this.first_totalPage) {
        return false;
      } else {
        this.first_currentPage++;
        this.getCurrentPageData_First();
      }
    },
    // 第二个分类中数据显示
    getCurrentPageData_Second() {
      let begin = (this.second_currentPage - 1) * this.second_pageSize;
      let end = this.second_currentPage * this.second_pageSize;
      this.secondTypeHouses = this.secondTypeData.slice(begin, end);
    },
    // 上一页
    second_prevPage() {
      // console.log(document.getElementById('tab-0').className)
      if (this.second_currentPage === 1) {
        return false;
      } else {
        this.second_currentPage--;
        this.getCurrentPageData_Second();
      }
    },
    // 下一页
    second_nextPage() {
      if (this.second_currentPage === this.second_totalPage) {
        return false;
      } else {
        this.second_currentPage++;
        this.getCurrentPageData_Second();
      }
    },
    // 第三个分类中数据显示
    getCurrentPageData_Third() {
      let begin = (this.third_currentPage - 1) * this.third_pageSize;
      let end = this.third_currentPage * this.third_pageSize;
      this.thirdTypeHouses = this.thirdTypeData.slice(begin, end);
    },
    // 上一页
    third_prevPage() {
      // console.log(document.getElementById('tab-0').className)
      if (this.third_currentPage === 1) {
        return false;
      } else {
        this.third_currentPage--;
        this.getCurrentPageData_Third();
      }
    },
    // 下一页
    third_nextPage() {
      if (this.third_currentPage === this.third_totalPage) {
        return false;
      } else {
        this.third_currentPage++;
        this.getCurrentPageData_Third();
      }
    },
    // 第四个分类中数据显示
    getCurrentPageData_Four() {
      let begin = (this.four_currentPage - 1) * this.four_pageSize;
      let end = this.four_currentPage * this.four_pageSize;
      this.fourTypeHouses = this.fourTypeData.slice(begin, end);
    },
    // 上一页
    four_prevPage() {
      // console.log(document.getElementById('tab-0').className)
      if (this.four_currentPage === 1) {
        return false;
      } else {
        this.four_currentPage--;
        this.getCurrentPageData_Four();
      }
    },
    // 下一页
    four_nextPage() {
      if (this.four_currentPage === this.four_totalPage) {
        return false;
      } else {
        this.four_currentPage++;
        this.getCurrentPageData_Four();
      }
    },
    // 跳转到子项中的详情页面
    toItem(index) {
      const _this = this;
      _this.second_house_id = _this.firstTypeData[index].id;
      // axios
      //   .get("http://localhost:8181/secondHouse/findOrderBySinglePrice")
      //   .then(function(resp) {
      //     _this.fourTypeData = resp.data;
      //     // 第四大类下的计算
      //     _this.four_totalPage = Math.ceil(
      //       _this.fourTypeData.length / _this.four_pageSize
      //     );
      //     // 计算得0时设置为1
      //     _this.four_totalPage =
      //       _this.four_totalPage === 0 ? 1 : _this.four_totalPage;
      //     _this.getCurrentPageData_Four();
      //   });
      // 点击进入到详情页面时通过查询房源信息id获取房源的具体信息
      axios
        .get(
          "http://localhost:8181/secondHouse/findById/" + _this.second_house_id
        )
        .then(function(resp) {
          // console.log(resp.data);
          if (resp.status === 200) {
            _this.$router.push({
              name: "secondHouseItem",
              params: { second_house_indexData: resp.data }
            });
          }
        });
    },
    // 获取单选框的值
    getAreaValue() {
      let firstNumber = this.form.area.substring(
        0,
        this.form.area.indexOf("-")
      );
      let lastNumber = this.form.area.substring(
        this.form.area.length,
        this.form.area.lastIndexOf("-") + 1
      );
      let finalLastNumber = lastNumber.substring(
        0,
        lastNumber.lastIndexOf("㎡")
      );
      // 根据条件筛选进行后台接口调用和数据渲染
      const _this = this;
      axios
        .get(
          "http://localhost:8181/secondHouse/findByAreaRange/" +
            firstNumber +
            "/" +
            finalLastNumber
        )
        .then(function(resp) {
          _this.firstTypeData = resp.data;
          _this.first_totalPage = Math.ceil(
            _this.firstTypeData.length / _this.first_pageSize
          );
          // // 计算得0时设置为1
          _this.first_totalPage =
            _this.first_totalPage === 0 ? 1 : _this.first_totalPage;
          _this.getCurrentPageData_First();

          _this.secondTypeData = resp.data;
          // 第二大类下的计算
          _this.second_totalPage = Math.ceil(
            _this.secondTypeData.length / _this.second_pageSize
          );
          // 计算得0时设置为1
          _this.second_totalPage =
            _this.second_totalPage === 0 ? 1 : _this.second_totalPage;
          _this.getCurrentPageData_Second();

          _this.thirdTypeData = resp.data;
          // 第三大类下的计算
          _this.third_totalPage = Math.ceil(
            _this.thirdTypeData.length / _this.third_pageSize
          );
          // 计算得0时设置为1
          _this.third_totalPage =
            _this.third_totalPage === 0 ? 1 : _this.third_totalPage;
          _this.getCurrentPageData_Third();

          _this.fourTypeData = resp.data;
          // 第四大类下的计算
          _this.four_totalPage = Math.ceil(
            _this.fourTypeData.length / _this.four_pageSize
          );
          // 计算得0时设置为1
          _this.four_totalPage =
            _this.four_totalPage === 0 ? 1 : _this.four_totalPage;
          _this.getCurrentPageData_Four();
        });
    },
    // 根据输入框的内容调用模糊查询
    getInputValue() {
      const _this = this;
      axios
        .get(
          "http://localhost:8181/secondHouse/findByInputData/" + this.inputData
        )
        .then(function(resp) {
          _this.firstTypeData = resp.data; // 查询出来进行数据渲染并重新设置分页
          _this.first_totalPage = Math.ceil(
            _this.firstTypeData.length / _this.first_pageSize
          );
          // // 计算得0时设置为1
          _this.first_totalPage =
            _this.first_totalPage === 0 ? 1 : _this.first_totalPage;
          _this.getCurrentPageData_First();

          _this.secondTypeData = resp.data;
          // 第二大类下的计算
          _this.second_totalPage = Math.ceil(
            _this.secondTypeData.length / _this.second_pageSize
          );
          // 计算得0时设置为1
          _this.second_totalPage =
            _this.second_totalPage === 0 ? 1 : _this.second_totalPage;
          _this.getCurrentPageData_Second();

          _this.thirdTypeData = resp.data;
          // 第三大类下的计算
          _this.third_totalPage = Math.ceil(
            _this.thirdTypeData.length / _this.third_pageSize
          );
          // 计算得0时设置为1
          _this.third_totalPage =
            _this.third_totalPage === 0 ? 1 : _this.third_totalPage;
          _this.getCurrentPageData_Third();

          _this.fourTypeData = resp.data;
          // 第四大类下的计算
          _this.four_totalPage = Math.ceil(
            _this.fourTypeData.length / _this.four_pageSize
          );
          // 计算得0时设置为1
          _this.four_totalPage =
            _this.four_totalPage === 0 ? 1 : _this.four_totalPage;
          _this.getCurrentPageData_Four();
        });
      console.log(this.inputData);
    }
  }
};
</script>

<style>
@import "../../../common/css/front_css/secondHouse.css";
@import "../../../common/css/front_css/publicCSS.css";
</style>
