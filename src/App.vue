<template>
  <div id="app">
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
@import url('common/css/front_css/publicCSS.css');
</style>
