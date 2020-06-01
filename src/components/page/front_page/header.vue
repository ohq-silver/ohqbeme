<template>
  <div class="header">
    <div class="top-banner">
      <div class="top-text-box">
        <ul class="nav-menu-ul">
          <li>
            <a href>
              <router-link to="/">首页</router-link>
            </a>
          </li>
          <li>
            <a href>
              <router-link to="/second_house">二手房</router-link>
            </a>
          </li>
          <li>
            <a href>
              <router-link to="/new_house">新房</router-link>
            </a>
          </li>
          <li>
            <a href>
              <router-link to="/renting_house">租房</router-link>
            </a>
          </li>
          <li>
            <a href>
              <router-link to="/public_house_resource">发布房源</router-link>
            </a>
          </li>
        </ul>

        <ul class="log-reg-ul">
          <li>
            <a href>
              <router-link to="/login">登录</router-link>
            </a>
          </li>
          <li>
            <a href>
              <router-link to="/login">注册</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  },
  methods: {
    toIndex () {
      this.$router.push('/')
    },
    toSecondHouse () {
      this.$router.push('/second_house')
    },
    toLogin () {
      this.$router.push('/login')
    },
    toNewHouse () {
      this.$router.push('/new_house')
    },
    toRentingHouse () {
      this.$router.push('/renting_house')
    },
    toPublicHouseResource () {
      this.$router.push('/public_house_resource')
    }
  }
}
</script>

<style>
@import "../../../common/css/front_css/header.css";
@import "../../../common/css/front_css/publicCSS.css";
</style>
