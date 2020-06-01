<template>
  <div class="rentingHouseItem">
    <div class="header">
      <transition name="el-fade-in-linear">
        <div class="top-show-box" id="top_show_box" v-show="show">
          <div class="tabContents">
            <a
              v-for="(tabContent,index) in tabContents"
              :key="index"
              :href="tabContent.href"
              :class="isactive == index ? 'on' : '' "
              @click="tabContenSkip(index)"
            >{{tabContent.content}}</a>
          </div>
        </div>
      </transition>
      <ThisHeader></ThisHeader>
      <div class="top-box">
        <div class="menu">
          <ul>
            <li>
              <a href>LOGO租房具体内容</a>
            </li>
            <li>
              <el-input placeholder="请输入区域或小区名开始找房" prefix-icon="el-icon-search"></el-input>
            </li>
          </ul>
        </div>
        <div class="title">
          <h2>昌岗晓园新，框架结构，方正实用</h2>
          <h3>北向采光好 楼梯低楼层 户型方正实用</h3>
        </div>
        <div class="follow-house">
          <el-button plain>关注房源</el-button>
          <h6>30人关注</h6>
        </div>
      </div>
    </div>
    <div class="all-content">
      <div class="menu">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>
            <a href>广州房产</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href>广州新房</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href>海珠新房</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href>昌岗新房</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href>晓园新村晓园新新房</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content-banner">
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="(bannerImage,index) in bannerImages" :key="index">
            <el-image :src="bannerImage.imageUrl"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="content-right">
        <div class="right-top">
          <h1>2000</h1>
          <span>元/月</span>
        </div>
        <div class="right-middle">
          <div class="middle-left">
            <h2>2室1厅</h2>
            <h5>高楼层/共8层</h5>
          </div>
          <div class="middle-middle">
            <h2>北</h2>
            <h5>平层/简装</h5>
          </div>
          <div class="middle-right">
            <h2>56.04平米</h2>
            <h5>2019建/塔楼</h5>
          </div>
          <a href>
            <el-image :src="tagUrl"></el-image>
            <span>诚心出租，省心租房</span>
          </a>
        </div>
        <div class="right-bottom">
          <div class="line-data" v-for="(lineData,index) in lineDatas" :key="index">
            <h4 class="title">{{lineData.name}}</h4>
            <h4 class="content">{{lineData.data}}</h4>
          </div>
        </div>
        <div class="right-bottom-last">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <div class="controduce">
            <h2>经纪人名</h2>
            <h3>我带过看房，清楚本房特色</h3>
          </div>
          <div class="phone-number">4000355608转7592</div>
          <el-button type="primary" plain>
            <i class="el-icon-chat-dot-round"></i>
            在线问
          </el-button>
        </div>
      </div>
      <div class="real-data-controduce">
        <div class="top-data">
          <i class="el-icon-s-data"></i>
          <span>真实存在，真实在售,真实价格，真实图片，假一赔百元</span>
          <a href>我要举报</a>
        </div>
        <div class="bottom-data">
          <i class="el-icon-reading"></i>
          <span>本房源已支持VR看房，在线看房，省时省力</span>
          <a href>立即看房</a>
        </div>
      </div>
      <div class="details-data">
        <!--房源基本信息-->
        <div class="house-base-info" id="introduction">
          <h2>房源基本信息</h2>
          <div class="base-attribute">
            <div class="small-title">基本属性</div>
            <div class="base-attribute-middle">
              <div v-for="(baseMiddleData,index) in baseMiddleDatas" :key="index">
                <span class="title">{{baseMiddleData.title}}</span>
                <span class="content">{{baseMiddleData.content}}</span>
              </div>
            </div>
            <div class="base-attribute-right">
              <div v-for="(baseRightData,index) in baseRightDatas" :key="index">
                <span class="title">{{baseRightData.title}}</span>
                <span class="content">{{baseRightData.content}}</span>
              </div>
            </div>
          </div>
          <div class="transaction-attribute">
            <div class="small-title">配套设施</div>
            <div class="transaction-attribute-middle">
              <div v-for="(transactionMiddleData,index) in transactionMiddleDatas" :key="index">
                <span class="title">
                  <i :class="transactionMiddleData.title"></i>
                </span>
                <span class="content">{{transactionMiddleData.content}}</span>
              </div>
            </div>
            <div class="transaction-attribute-right">
              <div v-for="(transactionRightData,index) in transactionRightDatas" :key="index">
                <span class="title">
                  <i :class="transactionRightData.title"></i>
                </span>
                <span class="content">{{transactionRightData.content}}</span>
              </div>
            </div>
          </div>
          <div class="be-careful">
            <span>注：房源所示“房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准</span>
          </div>
        </div>
        <!--房源特色-->
        <div class="house-characteristic-info">
          <h2>本房源特色</h2>
          <div class="house-characteristic-tag">
            <div class="tag-title">房源特色</div>
            <div class="tag-content">
              <a href>满5年</a>
              <a href>随时看房</a>
              <a href>地铁</a>
            </div>
          </div>
          <div
            class="characteristic-detail-info"
            v-for="(characteristic,index) in characteristics"
            :key="index"
          >
            <span class="title">{{characteristic.title}}</span>
            <p class="content">{{characteristic.content}}</p>
          </div>
          <div class="be-careful">
            <span>注：1.房源介绍中的周边配套、在建设施、规划设施、地铁信息、绿化率、得房率、容积率等信息为通过物业介绍、房产证、实勘、政府官网等渠道获取，因时间、政策会发生变化，与实际情况可能略有偏差，房源介绍仅供参考。 2.房源介绍中与距离相关的数据均来源于百度地图。 3.土地使用起止年限详见业主土地证明材料或查询相关政府部门的登记文件。</span>
          </div>
        </div>
        <!--户型分间-->
        <div class="house-compartment-info" id="layout">
          <h2>该户型分间</h2>
          <div class="house-compartment-img" @click="dialogTableVisible=true">
            <!-- <div class="pic-box">
              <pic-zoom :url="housecompartmentURL" :scale="3"></pic-zoom>
            </div>-->
            <el-image :src="housecompartmentURL"></el-image>
            <div class="hover-show">
              <i class="el-icon-search">查看原图</i>
            </div>
          </div>
          <div class="house-compartment-info-more-detail" style="overflow:auto">
            <div class="detail-item" v-for="(detailItem,index) in detailItems" :key="index">
              <span class="room-title">{{detailItem.title}}</span>
              <span class="room-place">{{detailItem.place}}</span>
              <span class="room-position">{{detailItem.position}}</span>
              <span class="room-window">{{detailItem.window}}</span>
            </div>
          </div>
          <div class="be-careful">
            <span>注：户型图标注的面积不同于房本面积，是实地测量后计算的地板面积，存在测量误差，购房请以房本面积为准。</span>
          </div>
        </div>
        <!-- 看房记录 -->
        <div class="look-house-record" id="record">
          <h2>近30日看房记录</h2>
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="time" label="带看时间" width="180"></el-table-column>
            <el-table-column prop="name" label="带看经纪人" width="180"></el-table-column>
            <el-table-column prop="ask" label="资询"></el-table-column>
            <el-table-column prop="totalNum" label="带看量"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[3, 6, 9, 10]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
          ></el-pagination>
        </div>
        <!-- 晓园新村晓园新简介 -->
        <div class="quarters-controduce" id="resblockCardContainer">
          <h2>晓园新村晓园新简介</h2>
          <a href>查看小区详情</a>
          <div class="quarters-controduce-details">
            <div v-for="(quartersControduction,index) in quartersControductions" :key="index">
              <span class="quarters-controduce-details-title">{{quartersControduction.title}}</span>
              <span class="quarters-controduce-details-content">{{quartersControduction.content}}</span>
            </div>
          </div>
          <el-image :src="quartersControductionURL"></el-image>
        </div>

        <!-- 周边配套 -->
        <div class="around-set" id="around">
          <h2>周边配套</h2>
          <div class="baidu-map">
            <mapPlus></mapPlus>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-info">
      <el-dialog :visible.sync="dialogTableVisible" width="1150px">
        <div class="left">
          <el-image :src="housecompartmentOringnalURL"></el-image>
        </div>
        <div class="right">
          <div class="title">
            <h2>户型分间</h2>
            <h4>户型特殊</h4>
            <div class="title-controduce">户型方正、全明格局、南北通透、卧室朝南、动静分区、明厨、明卫</div>
          </div>
          <div class="content">
            <div class="detail-item" v-for="(detailItem,index) in detailItems" :key="index">
              <span class="room-title">{{detailItem.title}}</span>
              <span class="room-place">{{detailItem.place}}</span>
              <span class="room-position">{{detailItem.position}}</span>
              <span class="room-window">{{detailItem.window}}</span>
            </div>
          </div>
        </div>
        <!-- <el-image :src="housecompartmentOringnalURL"></el-image> -->
      </el-dialog>
    </div>
    <div class="footer">
      <ThisFooter></ThisFooter>
    </div>
  </div>
</template>

<script>
import ThisHeader from './header'
import ThisFooter from './footer'
import mapPlus from './mapPlus'
// import PicZoom from "vue-piczoom";
/* eslint-disable camelcase */
import {
  image_data,
  line_data,
  base_middle_data,
  base_right_data,
  transaction_middle_data,
  transaction_right_data,
  characteristic_data,
  detail_item_data,
  table_data,
  quarters_details_controduction_data,
  // eslint-disable-next-line no-unused-vars
  tabContent_data
} from '../../../common/js/renting_house_item_data.js'
export default {
  name: 'new-house-item',
  components: {
    ThisHeader,
    ThisFooter,
    mapPlus
    // PicZoom
  },
  data () {
    return {
      tabContents: tabContent_data, // 顶部锚链接数据
      bannerImages: image_data, // 轮播图图片数据
      tagUrl: require('../../../common/images/mustlookgoodhouse.png'), // 必看好房图标图片数据
      housecompartmentURL: require('../../../common/images/house-compartment.jpg'), // 户型分间图片数据
      lineDatas: line_data, // 轮播图右方必看好房下面到房屋编号显示的数据内容
      baseMiddleDatas: base_middle_data, // 房源基本信息基本属性中间内容
      baseRightDatas: base_right_data, // 房源基本信息基本属性右边内容
      transactionMiddleDatas: transaction_middle_data, // 房源基本信息交易属性中间内容
      transactionRightDatas: transaction_right_data, // 房源基本信息交易属性右边内容
      characteristics: characteristic_data, // 房源特色中核心卖点到税费解析的数据内容
      detailItems: detail_item_data, // 户型分间点击图片显示对话框的里面的数据内容
      dialogTableVisible: false, // 设置对话框的初始状态
      housecompartmentOringnalURL: require('../../../common/images/house-compart-oringnal.jpg'), // 户型分间查看原图的图片数据
      // 分页的数据
      currentPage: 1, // 初始页
      pagesize: 3, //    每页的数据
      tableData: [],
      //
      quartersControductions: quarters_details_controduction_data, // 小区简介的内容数据
      quartersControductionURL: require('../../../common/images/house5.jpg'), // 小区简介的图片数据
      // searchValue: '',
      top: '', // 页面高度的初始值
      isactive: -1, // 顶部标签点击时样式变换的初始值
      show: false // 是否显示顶部标签的初始值
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  created () {
    this.handleTableData()
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    handleTableData () {
      this.tableData = table_data
    },
    onSubmit () {
      console.log('submit!')
    },
    chickvalue (selVal) {
      if (selVal === 'commercial_loans') {
        document.getElementById('commercial_loans').style.display = 'block'
        document.getElementById('provident_fund_loan').style.display = 'none'
        document.getElementById('portfolio_loan').style.display = 'none'
      }
      if (selVal === 'provident_fund_loan') {
        document.getElementById('commercial_loans').style.display = 'none'
        document.getElementById('provident_fund_loan').style.display = 'block'
        document.getElementById('portfolio_loan').style.display = 'none'
      }
      if (selVal === 'portfolio_loan') {
        document.getElementById('commercial_loans').style.display = 'none'
        document.getElementById('provident_fund_loan').style.display = 'none'
        document.getElementById('portfolio_loan').style.display = 'block'
      }
    },
    // 滚动到一定高度显示顶部标签
    scrollHandle (e) {
      this.top = e.srcElement.scrollingElement.scrollTop // 获取页面高度
      // this.top = window.pageYOffset || document.documentElement.scrollTop ||
      if (this.top > 1000) {
        this.show = true
      } else {
        this.show = false
      }
    },
    // 点击顶部标签切换样式
    tabContenSkip (index) {
      this.isactive = index
    }
  }
}
</script>

<style>
@import "../../../common/css/front_css/publicCSS.css";
@import "../../../common/css/front_css/rentingHouseItem.css";
</style>
