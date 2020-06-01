<template>
  <div class="person-menu">
    <el-menu
      class="el-menu-vertical-demo"
      router
    >
        <el-menu-item index="/personCenter">
          <i class="el-icon-menu"></i>
          <span slot="title">系统首页</span>
        </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-house"></i>
          <span slot="title">房源管理</span>
        </template>
        <el-menu-item index="/personCenterlease">出租房源</el-menu-item>
        <el-menu-item index="/personCenterSell">出售房源</el-menu-item>
      </el-submenu>
      <el-menu-item index="/personCenterContract">
        <i class="el-icon-document"></i>
        <span slot="title">成交管理</span>
      </el-menu-item>
      <el-menu-item index="/personCenterCredit">
        <i class="el-icon-setting"></i>
        <span slot="title">租金押金</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  method: {}
}
</script>

<style>
@import "../../../common/css/back_css/personCenterSideBar.css";
</style>
