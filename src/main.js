/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/axios'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import jsonp from 'vue-jsonp'
import './assets/icon/iconfont.css'
import echarts from 'echarts'
// import 'common/css/publicCSS.css'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(jsonp)
Vue.use(BaiduMap, {
  ak: 'emavT388l6AH2oaG0jykU3sD9C5HvGTn' // 官方提供的ak秘钥
})
Vue.use(ElementUI)
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
