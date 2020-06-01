<template>
  <div class="map-plus">
    <!-- 地图容器 -->
    <baidu-map class="baidu-map"
               id="map"
               :double-click-zoom="false"
               :min-zoom="10"
               :max-zoom="18"
               :scroll-wheel-zoom="true"
               :center="center"
               :zoom="zoom"
               @ready="handler">
      <!-- 覆盖物组件 -->
      <happyLayer v-for="(item,index) in layerList"
                  :key="index"
                  :position="{lng: item.location.lng , lat: item.location.lat}"
                  :title="index"
                  :busActiveIndex="busActiveIndex"
                  @change="overLayClick"></happyLayer>
      <bm-marker :position="{lng: 113.27, lat: 23.13}"
                 :dragging="true"
                 animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="当前位置"
                  :labelStyle="{color: 'red', fontSize : '12px'}"
                  :offset="{width: -18, height: 10}" />
      </bm-marker>
    </baidu-map>
    <!-- 右侧搜索 -->
    <div class="search-wrap">
      <!-- 标签 -->
      <div class="tags">
        <div class="tag_item"
             :class="{'tag-active': activeIndex == index}"
             v-for="(item,index) in tagsArr"
             :key="index"
             @click="tagsClick(index,item)">{{item.name}}</div>
      </div>
      <!-- 列表 -->
      <div class="list">
        <div class="list-top"
             v-for="(bus,indexs) in layerList"
             :key="indexs"
             @click="chooseListItem(bus,indexs)">
          <div class="title"
               :class="{'active-bus': busActiveIndex == indexs+1}">
            <span class="indexs">{{indexs+1}}</span>
            <span>{{bus.name}}</span>
          </div>
          <div class="bus-num">{{bus.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable vue/no-dupe-keys */
import happyLayer from "./happyLayer";
export default {
  // props: ["mapLocationData"],
  // watch: {
  //   mapLocationData(newValue, oldValue) {
  //     console.log(newValue);
  //   }
  // },
  components: {
    happyLayer
  },
  data() {
    return {
      active: false,
      // 左边中心
      center: { lng: 0, lat: 0 },
      // 深度
      zoom: 3,
      //   标签激活索引
      activeIndex: 0,
      //   漂浮物激活索引
      busActiveIndex: 1,
      //   数据结果
      layerList: [],
      //   标签数组
      tagsArr: [
        {
          name: "公交"
        },
        {
          name: "教育"
        },
        {
          name: "医疗"
        },
        {
          name: "购物"
        },
        {
          name: "生活"
        },
        {
          name: "娱乐"
        }
      ]
      // mapLocationData: []
    };
  },
  mounted() {
    this.getMsg("公交");
  },
  methods: {
    // 地图组件渲染完毕时触发
    handler({ BMap, map }) {
      this.center.lng = 113.27;
      this.center.lat = 23.13;
      this.zoom = 16;
    },
    // 标签激活
    tagsClick: function(index, item) {
      this.activeIndex = index;
      this.getMsg(item.name);
    },
    // 获取周边接口
    getRound: function(key) {
      let ak = "emavT388l6AH2oaG0jykU3sD9C5HvGTn";
      return this.$jsonp(
        `http://api.map.baidu.com/place/v2/search?query=${key}&location=23.10,113.25&radius=2000&output=json&ak=${ak}`
      );
    },
    // 获取周边信息
    getMsg: function(a) {
      this.getRound(a).then(res => {
        this.layerList = [];
        res.results.forEach(el => el.location && this.layerList.push(el));
      });
    },
    // 覆盖物点击激活
    overLayClick: function(num) {
      this.busActiveIndex = num + 1;
    },
    // 选择列表某一项
    chooseListItem: function(bus, indexs) {
      this.busActiveIndex = indexs + 1;
      this.center = bus.location;
    }
  }
};
</script>

<style lang="scss">
.map-plus {
  position: relative;
}
// #map {
//   width: 1100px;
//   height: 508px;
//   margin-top: 200px;
//   margin-left: 50px;
// }
.search-wrap {
  width: 393px;
  height: 460px;
  border: 1px solid #eee;
  background-color: #fff;
  position: absolute;
  left: 736px;
  top: 25px;
  box-shadow: 0 0 10px #ccc;
  border-top: 3px solid #06c;

  .list {
    height: 400px;
    overflow-y: scroll;

    .list-top {
      color: #333;
      padding: 20px 20px 10px 20px;
      cursor: pointer;

      .indexs {
        padding: 2px 6px;
        font-size: 12px;
        border-radius: 50%;
        background-color: #06c;
        color: #fff;
      }

      &:hover {
        color: #06c;
      }
      .bus-num {
        font-size: 14px;
        margin: 5px 0 0 24px;
        color: #9c9fa1;
        line-height: 18px;
      }
    }
  }
  .active-bus {
    color: #06c;
  }

  .tags {
    line-height: 45px;
    height: 45px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;

    .tag_item {
      width: 66px;
      text-align: center;
      cursor: pointer;
    }
    .tag-active {
      background-color: #fff;
    }
  }
}
</style>
