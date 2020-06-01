<template>
  <div class="person-header">
    <span class="head-text-one"
          @chlick="toIndex()">个人中心</span>
    <div class="head-text-two">
      <el-avatar size="medium"
                 :src="url"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">房东用户</el-dropdown-item>
          <el-dropdown-item command="b">租客用户</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require("../../../common/images/cat.jpg")
    };
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
@import "../../../common/css/back_css/personCenterHeader.css";
</style>
