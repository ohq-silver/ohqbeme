<template>
  <bm-overlay ref="customOverlay" class="happyLayer" pane="labelPane" @draw="draw">
    <div
      class="content"
      :class="{active: busActiveIndex == title+1}"
      @click="handleClick"
    >{{title+1}}</div>
  </bm-overlay>
</template>

<script>
export default {
  props: [
    // 位置
    'position',
    // 是否激活
    'active',
    // 内容
    'title',
    // 激活的索引
    'busActiveIndex'
  ],
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('change', this.title)
    },
    draw ({ el, BMap, map }) {
      const { lng, lat } = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style lang="scss">
.happyLayer {
  position: absolute;
  z-index: 99;
  &:hover {
    z-index: 999;
  }
}
.happyLayer .content {
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #06c;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #00c170;
  }
}
.active {
  background-color: #00c170;
}
</style>
