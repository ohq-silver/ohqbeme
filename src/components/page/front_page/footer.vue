
<template>
  <div class="footer-all">
    <div class="footer-link-title">
      <a href class="web-map">网站地图</a>
      <a href class="konw-me">了解信我</a>
      <a href class="ask-me" style="float: right; margin-right: 12px;">官方客服咨询</a>
      <div class="tag-menu">
        <div class="tag-menu-title">
          <ul>
            <li v-for="(title,index) in tagMenuTitles" :key="index">
              <a
                href
                :class="'title-'+title.classNUM"
                @mouseover="mover(index)"
                @mouseout="mount(index)"
              >{{title.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-one-content" id="menu_one_content">
          <ul>
            <li v-for="(content,index) in menuContentOne" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
          <ul style="margin-top:-25px">
            <li v-for="(content,index) in menuContentOneTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-two-content" id="menu_two_content">
          <ul>
            <li v-for="(content,index) in menuContentTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
          <ul style="margin-top:-25px">
            <li v-for="(content,index) in menuContentTwoTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-three-content" id="menu_three_content">
          <ul>
            <li v-for="(content,index) in menuContentThree" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
          <ul style="margin-top:-25px">
            <li v-for="(content,index) in menuContentThreeTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-four-content" id="menu_four_content">
          <ul>
            <li v-for="(content,index) in menuContentFour" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
          <ul style="margin-top:-25px">
            <li v-for="(content,index) in menuContentFourTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-five-content" id="menu_five_content">
          <ul>
            <li v-for="(content,index) in menuContentFive" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
          <ul style="margin-top:-25px">
            <li v-for="(content,index) in menuContentFiveTwo" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
        <div class="menu-six-content" id="menu_six_content">
          <ul>
            <li v-for="(content,index) in menuContentSix" :key="index">
              <a href :class="'gz-area-'+content.classNUM">{{content.text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="img-box">
      <el-image :src="gdyh"></el-image>
      <!-- <hr /> -->
    </div>
    <div class="last-content">
      <p>
        <!-- 天津小屋信息科技有限公司 | 地址：天津经济技术开发区南港工业区综合服务区办公楼C座一层112室09单元 | 电话：10106188 | 津ICP备18000836号-1 | © Copyright 2019 ke.com版权所有 | 营业执照 | ICP证
        违法和不良信息举报电话：010-86440676 | 违法和不良信息举报邮箱：jubaoyouxiang@ke.com
        津公网安备 12019002000223号 -->
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import {
  content_one_data,
  content_one_two_data
} from '../../../common/js/static_menu_content_one_data.js'
import {
  content_two_data,
  content_two_two_data
} from '../../../common/js/static_menu_content_two_data.js'
import {
  content_three_data,
  content_three_two_data
} from '../../../common/js/static_menu_content_three_data.js'
import {
  content_four_data,
  content_four_two_data
} from '../../../common/js/static_menu_content_four_data.js'
import {
  content_five_data,
  content_five_two_data
} from '../../../common/js/static_menu_content_five_data.js'
import content_six_data from '../../../common/js/static_menu_content_six_data.js'
import title_text_data from '../../../common/js/static_title_text_data.js'
export default {
  data () {
    return {
      tagMenuTitles: title_text_data,
      menuContentOne: content_one_data,
      menuContentTwo: content_two_data,
      menuContentThree: content_three_data,
      menuContentFour: content_four_data,
      menuContentFive: content_five_data,
      menuContentSix: content_six_data,
      menuContentOneTwo: content_one_two_data,
      menuContentTwoTwo: content_two_two_data,
      menuContentThreeTwo: content_three_two_data,
      menuContentFourTwo: content_four_two_data,
      menuContentFiveTwo: content_five_two_data,
      gdyh: require('../../../common/images/gdyh.png')
    }
  },
  methods: {
    /* 鼠标悬停 */
    mover (index) {
      if (index === 0) {
        document.getElementById('menu_one_content').style.display = 'block'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 1) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'block'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 2) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'block'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 3) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'block'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 4) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'block'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 5) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'block'
      }
    },
    /* 鼠标移开 */
    mount (index) {
      if (index === 0) {
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 1) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'block'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 2) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'block'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 3) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'block'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 4) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'block'
        document.getElementById('menu_six_content').style.display = 'none'
      }
      if (index === 5) {
        document.getElementById('menu_one_content').style.display = 'none'
        document.getElementById('menu_two_content').style.display = 'none'
        document.getElementById('menu_three_content').style.display = 'none'
        document.getElementById('menu_four_content').style.display = 'none'
        document.getElementById('menu_five_content').style.display = 'none'
        document.getElementById('menu_six_content').style.display = 'block'
      }
    }
  }
}
</script>

<style>
@import "../../../common/css/front_css/footer.css";
@import "../../../common/css/front_css/publicCSS.css";
</style>
