<template>
  <div class="new-house">
    <div class="header">
      <ThisHeader ref="Header"></ThisHeader>
      <div class="search-box">
        <div class="menu">
          <ul>
            <li>
              <a href><img src="../../../common/images/indexlogo2.png" alt="" width="87px"></a>
            </li>
            <li>
              <a href class="menu-one">全部楼盘</a>
            </li>
            <li>
              <a href class="menu-two">近期开盘</a>
            </li>
            <li>
              <a href class="menu-three">优惠楼盘</a>
            </li>
            <li>
              <a href class="menu-four">地图找房</a>
            </li>
            <li>
              <a href class="menu-four">帮我找房</a>
            </li>
          </ul>
          <el-input placeholder="请输入区域或小区名开始找房" prefix-icon="el-icon-search"></el-input>
        </div>
      </div>
    </div>
    <div class="new-house-content">
      <div class="choose-form">
        <div class="position-place">
          <ul>
            <li class="text-one">位置</li>
            <li id="text-two" @click="showArea()">区域</li>
            <li id="text-three" @click="showLine()">地铁线</li>
          </ul>
          <hr />
        </div>
        <div class="area" id="area">
          <ul class="area-all">
            <li
              v-for="(area,index) in areas"
              :key="index"
              :class="'area-data-'+area.classNUM"
            >{{area.name}}</li>
          </ul>
        </div>
        <div class="line" id="line">
          <ul class="line-all">
            <li
              v-for="(line,index) in lines"
              :key="index"
              :class="'line-data-'+line.classNUM"
            >{{line.name}}</li>
          </ul>
        </div>
        <div class="check-box-form">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="单价" label-width="60px">
              <el-checkbox-group v-model="form.type" style="margin-left:20px">
                <el-checkbox label="15000元/m²以下" name="type"></el-checkbox>
                <el-checkbox label="15000-20000元/m²" name="type"></el-checkbox>
                <el-checkbox label="20000-25000元/m²" name="type"></el-checkbox>
                <el-checkbox label="25000-30000元/m²" name="type"></el-checkbox>
                <el-checkbox label="30000-40000元/m²" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="总价" label-width="60px">
              <el-checkbox-group v-model="form.type" style="margin-left:20px">
                <el-checkbox label="50万以下" name="type"></el-checkbox>
                <el-checkbox label="50-80万" name="type"></el-checkbox>
                <el-checkbox label="80-100万" name="type"></el-checkbox>
                <el-checkbox label="100-120万" name="type"></el-checkbox>
                <el-checkbox label="120-150万" name="type"></el-checkbox>
                <el-checkbox label="150-200万" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="面积" label-width="60px">
              <el-checkbox-group v-model="form.type" style="margin-left:20px">
                <el-checkbox label="40㎡以下" name="type"></el-checkbox>
                <el-checkbox label="40-60㎡" name="type"></el-checkbox>
                <el-checkbox label="60-80㎡" name="type"></el-checkbox>
                <el-checkbox label="80-100㎡" name="type"></el-checkbox>
                <el-checkbox label="100-120㎡" name="type"></el-checkbox>
                <el-checkbox label="120-144㎡" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="户型" label-width="60px">
              <el-checkbox-group v-model="form.type" style="margin-left:20px">
                <el-checkbox label="1居" name="type"></el-checkbox>
                <el-checkbox label="2居" name="type"></el-checkbox>
                <el-checkbox label="3居" name="type"></el-checkbox>
                <el-checkbox label="4居" name="type"></el-checkbox>
                <el-checkbox label="5居" name="type"></el-checkbox>
                <el-checkbox label="5居+" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <div class="show-hide-choose" id="show_hide_choose">
              <el-form-item label="开盘" label-width="60px">
                <el-checkbox-group v-model="form.type" style="margin-left:20px">
                  <el-checkbox label="近期开盘" name="type"></el-checkbox>
                  <el-checkbox label="未来一个月" name="type"></el-checkbox>
                  <el-checkbox label="未来三个月" name="type"></el-checkbox>
                  <el-checkbox label="未来半年" name="type"></el-checkbox>
                  <el-checkbox label="过去一个月" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="物业" label-width="60px">
                <el-checkbox-group v-model="form.type" style="margin-left:20px">
                  <el-checkbox label="住宅" name="type"></el-checkbox>
                  <el-checkbox label="别墅" name="type"></el-checkbox>
                  <el-checkbox label="商业" name="type"></el-checkbox>
                  <el-checkbox label="写字楼" name="type"></el-checkbox>
                  <el-checkbox label="底商" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="状态" label-width="60px">
                <el-checkbox-group v-model="form.type" style="margin-left:20px">
                  <el-checkbox label="在售" name="type"></el-checkbox>
                  <el-checkbox label="未开盘" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="特色" label-width="60px">
                <el-checkbox-group v-model="form.type" style="margin-left:20px">
                  <el-checkbox label="免费专车" name="type"></el-checkbox>
                  <el-checkbox label="VR看房" name="type"></el-checkbox>
                  <el-checkbox label="优惠楼盘" name="type"></el-checkbox>
                  <el-checkbox label="品牌房企" name="type"></el-checkbox>
                  <el-checkbox label="地铁沿线" name="type"></el-checkbox>
                  <el-checkbox label="公交直达" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>

            <div class="more-choose-text" @click="showMoreChoose()" id="open_choose">更多选项</div>
            <div class="recive-choose-text" @click="hideMoreChoose()" id="recive_choose">收起选项</div>
          </el-form>
        </div>
      </div>
      <div class="house-details">
        <el-tabs style="width: 923px; height:1500px">
          <el-tab-pane label="默认排序" class="default-order">
            <div
              v-for="(fistTypeHouse,index) in fistTypeHouses"
              :key="index"
              :class="'first-type-house-'+fistTypeHouse.classNUM"
              @click="toItem(index)"
            >
              <el-image :src="fistTypeHouse.src_house"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <div class="show-text">
                  <h2 class="area-name">{{fistTypeHouse.introduce_name}}</h2>
                  <div class="type-tag">
                    <span class="on-buy">{{fistTypeHouse.typetag_one}}</span>
                    <span class="live-house">{{fistTypeHouse.typetag_two}}</span>
                  </div>
                  <h4>
                    <i class="el-icon-place"></i>
                    {{fistTypeHouse.details_content}}
                  </h4>
                  <h4>
                    <i class="el-icon-office-building"></i>
                    {{fistTypeHouse.house_type}}
                  </h4>
                  <!-- <h4>
                    <i class="el-icon-office-building"></i>
                  </h4>-->
                </div>
                <div class="tag">
                  <span>{{fistTypeHouse.tag_one}}</span>
                  <span>{{fistTypeHouse.tag_two}}</span>
                  <span>{{fistTypeHouse.tag_three}}</span>
                  <span>{{fistTypeHouse.tag_four}}</span>
                </div>
                <div class="total-unit-price">
                  <h2>{{fistTypeHouse.price}}</h2>
                  <h4>{{fistTypeHouse.total_price}}</h4>
                </div>
                <div class="show-follow">关注+</div>
              </div>
              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-left"
                  @click="first_prevPage()"
                  class="last-page"
                >上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{first_currentPage}}页/共{{first_totalPage}}页</div>
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-right"
                  @click="first_nextPage()"
                  class="next-page"
                >下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="户型" class="type-house">
            <div
              v-for="(secondTypeHouse,index) in secondTypeHouses"
              :key="index"
              :class="'second-type-house-'+secondTypeHouse.classNUM"
            >
              <el-image :src="secondTypeHouse.src_house"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <div class="show-text">
                  <h2 class="area-name">{{secondTypeHouse.introduce_name}}</h2>
                  <div class="type-tag">
                    <span class="on-buy">{{secondTypeHouse.typetag_one}}</span>
                    <span class="live-house">{{secondTypeHouse.typetag_two}}</span>
                  </div>
                  <h4>
                    <i class="el-icon-location-outline"></i>
                    {{secondTypeHouse.price}}
                  </h4>
                  <h4>
                    <i class="el-icon-office-building"></i>
                    {{secondTypeHouse.details_content}}
                  </h4>
                </div>
                <div class="tag">
                  <span>{{secondTypeHouse.tag_one}}</span>
                  <span>{{secondTypeHouse.tag_two}}</span>
                  <span>{{secondTypeHouse.tag_three}}</span>
                  <span>{{secondTypeHouse.tag_four}}</span>
                </div>
                <div class="total-unit-price">
                  <h2>{{secondTypeHouse.price}}</h2>
                  <h4>{{secondTypeHouse.total_price}}</h4>
                </div>
                <div class="show-follow">关注+</div>
              </div>

              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-left"
                  @click="second_prevPage()"
                  class="last-page"
                >上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{second_currentPage}}页/共{{second_totalPage}}页</div>
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-right"
                  @click="second_nextPage()"
                  class="next-page"
                >下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="总价" class="total-price">
            <div
              v-for="(thirdTypeHouse,index) in thirdTypeHouses"
              :key="index"
              :class="'third-type-house-'+thirdTypeHouse.classNUM"
            >
              <el-image :src="thirdTypeHouse.src_house"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <div class="show-text">
                  <h2 class="area-name">{{thirdTypeHouse.introduce_name}}</h2>
                  <div class="type-tag">
                    <span class="on-buy">{{thirdTypeHouse.typetag_one}}</span>
                    <span class="live-house">{{thirdTypeHouse.typetag_two}}</span>
                  </div>
                  <h4>
                    <i class="el-icon-location-outline"></i>
                    {{thirdTypeHouse.price}}
                  </h4>
                  <h4>
                    <i class="el-icon-office-building"></i>
                    {{thirdTypeHouse.details_content}}
                  </h4>
                </div>
                <div class="tag">
                  <span>{{thirdTypeHouse.tag_one}}</span>
                  <span>{{thirdTypeHouse.tag_two}}</span>
                  <span>{{thirdTypeHouse.tag_three}}</span>
                  <span>{{thirdTypeHouse.tag_four}}</span>
                </div>
                <div class="total-unit-price">
                  <h2>{{thirdTypeHouse.price}}</h2>
                  <h4>{{thirdTypeHouse.total_price}}</h4>
                </div>
                <div class="show-follow">关注+</div>
              </div>

              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-left"
                  @click="third_prevPage()"
                  class="last-page"
                >上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{third_currentPage}}页/共{{third_totalPage}}页</div>
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-right"
                  @click="third_nextPage()"
                  class="next-page"
                >下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>

          <el-tab-pane label="开盘时间" class="open-time">
            <div
              v-for="(fourTypeHouse,index) in fourTypeHouses"
              :key="index"
              :class="'four-type-house-'+fourTypeHouse.classNUM"
            >
              <el-image :src="fourTypeHouse.src_house"></el-image>
              <div class="ciryle">
                <div class="donghua"></div>
              </div>
              <div class="introduce-text">
                <div class="show-text">
                  <h2 class="area-name">{{fourTypeHouse.introduce_name}}</h2>
                  <div class="type-tag">
                    <span class="on-buy">{{fourTypeHouse.typetag_one}}</span>
                    <span class="live-house">{{fourTypeHouse.typetag_two}}</span>
                  </div>
                  <h4>
                    <i class="el-icon-location-outline"></i>
                    {{fourTypeHouse.price}}
                  </h4>
                  <h4>
                    <i class="el-icon-office-building"></i>
                    {{fourTypeHouse.details_content}}
                  </h4>
                </div>
                <div class="tag">
                  <span>{{fourTypeHouse.tag_one}}</span>
                  <span>{{fourTypeHouse.tag_two}}</span>
                  <span>{{fourTypeHouse.tag_three}}</span>
                  <span>{{fourTypeHouse.tag_four}}</span>
                </div>
                <div class="total-unit-price">
                  <h2>{{fourTypeHouse.price}}</h2>
                  <h4>{{fourTypeHouse.total_price}}</h4>
                </div>
                <div class="show-follow">关注+</div>
              </div>

              <hr />
            </div>
            <div class="pagination-box">
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-left"
                  @click="four_prevPage()"
                  class="last-page"
                >上一页</el-button>
              </el-button-group>
              <div class="page-number">第{{four_currentPage}}页/共{{four_totalPage}}页</div>
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-arrow-right"
                  @click="four_nextPage()"
                  class="next-page"
                >下一页</el-button>
              </el-button-group>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="content-right">
        <div class="help-me-look-house">
          <el-image :src="look_house_image"></el-image>
          <el-button type="primary">帮我找房</el-button>
        </div>
        <div class="hot-house-properties">
          <h4>热门楼盘</h4>
          <div v-for="(hotHouse,index) in hotHouses" :key="index" class="hot-house-more-info">
            <el-image :src="hotHouse.image"></el-image>
            <h5>{{hotHouse.name}}</h5>
            <div class="tag">
              <span class="tag-one">{{hotHouse.tag_one}}</span>
              <span class="tag-two">{{hotHouse.tag_two}}</span>
            </div>
            <h4>{{hotHouse.price}}</h4>
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
import ThisHeader from './header'
import ThisFooter from './footer'
import {
  /* eslint-disable camelcase */
  areas_data,
  line_data
} from '../../../common/js/static_second_house_area_line.js'
import {
  first_type,
  second_type,
  third_type,
  four_type
} from '../../../common/js/new_house_all_type.js'
import {
  right_data
} from '../../../common/js/new_house_page_right_data.js'
export default {
  name: 'new-house',
  components: {
    ThisHeader,
    ThisFooter
  },
  data () {
    return {
      areas: areas_data,
      lines: line_data,
      show: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // 第一大类里的几个分页变量
      first_totalPage: 1, // 统共页数，默认为1
      first_currentPage: 1, // 当前页数 ，默认为1
      first_pageSize: 5, // 每页显示数量
      fistTypeHouses: [], // 当前页显示内容
      // 第二大类里的几个分页变量
      second_totalPage: 1, // 统共页数，默认为1
      second_currentPage: 1, // 当前页数 ，默认为1
      second_pageSize: 3, // 每页显示数量
      secondTypeHouses: [], // 当前页显示内容
      // 第三大类里的几个分页变量
      third_totalPage: 1, // 统共页数，默认为1
      third_currentPage: 1, // 当前页数 ，默认为1
      third_pageSize: 3, // 每页显示数量
      thirdTypeHouses: [], // 当前页显示内容
      // 第四大类里的几个分页变量
      four_totalPage: 1, // 统共页数，默认为1
      four_currentPage: 1, // 当前页数 ，默认为1
      four_pageSize: 3, // 每页显示数量
      fourTypeHouses: [], // 当前页显示内容
      look_house_image: require('../../../common/images/help_me_find_house_img@2x.png'),
      hotHouses: right_data
    }
  },
  mounted () {
    // 第一大类下的计算
    // 计算一共有几页
    this.first_totalPage = Math.ceil(first_type.length / this.first_pageSize)
    // 计算得0时设置为1
    this.first_totalPage = this.first_totalPage === 0 ? 1 : this.first_totalPage
    this.getCurrentPageData_First()
    // 第二大类下的计算
    this.second_totalPage = Math.ceil(
      second_type.length / this.second_pageSize
    )
    // 计算得0时设置为1
    this.second_totalPage =
      this.second_totalPage === 0 ? 1 : this.second_totalPage
    this.getCurrentPageData_Second()
    // 第三大类下的计算
    this.third_totalPage = Math.ceil(third_type.length / this.third_pageSize)
    // 计算得0时设置为1
    this.third_totalPage = this.third_totalPage === 0 ? 1 : this.third_totalPage
    this.getCurrentPageData_Third()
    // 第四大类下的计算
    this.four_totalPage = Math.ceil(four_type.length / this.four_pageSize)
    // 计算得0时设置为1
    this.four_totalPage = this.four_totalPage === 0 ? 1 : this.four_totalPage
    this.getCurrentPageData_Four()
  },
  methods: {
    showArea () {
      document.getElementById('text-two').style.color = '#06c'
      document.getElementById('text-three').style.color = '#000'
      document.getElementById('area').style.display = 'block'
      document.getElementById('line').style.display = 'none'
      this.show = !this.show
    },
    showLine () {
      document.getElementById('text-two').style.color = '#000'
      document.getElementById('text-three').style.color = '#06c'
      document.getElementById('area').style.display = 'none'
      document.getElementById('line').style.display = 'block'
      this.show = !this.show
    },
    onSubmit () {
      // console.log("submit!");
    },
    showMoreChoose () {
      document.getElementById('show_hide_choose').style.display = 'block'
      document.getElementById('recive_choose').style.display = 'block'
      document.getElementById('open_choose').style.display = 'none'
    },
    hideMoreChoose () {
      document.getElementById('show_hide_choose').style.display = 'none'
      document.getElementById('recive_choose').style.display = 'none'
      document.getElementById('open_choose').style.display = 'block'
    },
    // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
    // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
    // 第一个分类中数据显示
    getCurrentPageData_First () {
      let begin = (this.first_currentPage - 1) * this.first_pageSize
      let end = this.first_currentPage * this.first_pageSize
      this.fistTypeHouses = first_type.slice(begin, end)
    },
    // 上一页
    first_prevPage () {
      // console.log(document.getElementById('tab-0').className)
      if (this.first_currentPage === 1) {
        return false
      } else {
        this.first_currentPage--
        this.getCurrentPageData_First()
      }
    },
    // 下一页
    first_nextPage () {
      if (this.first_currentPage === this.first_totalPage) {
        return false
      } else {
        this.first_currentPage++
        this.getCurrentPageData_First()
      }
    },
    // 第二个分类中数据显示
    getCurrentPageData_Second () {
      let begin = (this.second_currentPage - 1) * this.second_pageSize
      let end = this.second_currentPage * this.second_pageSize
      this.secondTypeHouses = second_type.slice(begin, end)
    },
    // 上一页
    second_prevPage () {
      // console.log(document.getElementById('tab-0').className)
      if (this.second_currentPage === 1) {
        return false
      } else {
        this.second_currentPage--
        this.getCurrentPageData_Second()
      }
    },
    // 下一页
    second_nextPage () {
      if (this.second_currentPage === this.second_totalPage) {
        return false
      } else {
        this.second_currentPage++
        this.getCurrentPageData_Second()
      }
    },
    // 第三个分类中数据显示
    getCurrentPageData_Third () {
      let begin = (this.third_currentPage - 1) * this.third_pageSize
      let end = this.third_currentPage * this.third_pageSize
      this.thirdTypeHouses = third_type.slice(begin, end)
    },
    // 上一页
    third_prevPage () {
      // console.log(document.getElementById('tab-0').className)
      if (this.third_currentPage === 1) {
        return false
      } else {
        this.third_currentPage--
        this.getCurrentPageData_Third()
      }
    },
    // 下一页
    third_nextPage () {
      if (this.third_currentPage === this.third_totalPage) {
        return false
      } else {
        this.third_currentPage++
        this.getCurrentPageData_Third()
      }
    },
    // 第四个分类中数据显示
    getCurrentPageData_Four () {
      let begin = (this.four_currentPage - 1) * this.four_pageSize
      let end = this.four_currentPage * this.four_pageSize
      this.fourTypeHouses = four_type.slice(begin, end)
    },
    // 上一页
    four_prevPage () {
      // console.log(document.getElementById('tab-0').className)
      if (this.four_currentPage === 1) {
        return false
      } else {
        this.four_currentPage--
        this.getCurrentPageData_Four()
      }
    },
    // 下一页
    four_nextPage () {
      if (this.four_currentPage === this.four_totalPage) {
        return false
      } else {
        this.four_currentPage++
        this.getCurrentPageData_Four()
      }
    },
    toItem (index) {
      this.$router.push('/new_house_item')
    }
  }
}
</script>

<style>
@import "../../../common/css/front_css/publicCSS.css";
@import "../../../common/css/front_css/newHouse.css";
</style>
