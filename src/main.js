// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import store from './store/index'
import router from './router/index'

import global from '@/assets/js/global'
Vue.prototype.GLOBAL = global

import './assets/css/index.css'
import './assets/css/reset.css'
import './assets/css/resetweui.less'
import './assets/css/iconfont.css'

import 'lib-flexible/flexible'
/**
 * 全局函数，获取广告图
 * @params:type
 * 1-首页
 * 2-带走的
 * 3-商城首页
 * 4-景区消费
 * 5-景区好礼
 * 6-名家妙藏
 * 7-变现首页
 * 8-艺品回购
 * 9-艺品租赁
 * 10-艺品寄卖
 * 11-信息消费
 * 12-创收首页
 * 13-才源共享 
 */
import { getBannerImg } from "@/assets/js/common"
Vue.prototype.getBannerImgFn = getBannerImg

/**
 * 导航默认行为类似手机APP的页面导航（A、B、C为页面）：
 * A前进到B，再前进到C；
 * C返回到B时，B会从缓存中恢复；
 * B再次前进到C，C会重新生成，不会从缓存中恢复；
 * C前进到A，A会生成，现在路由中包含2个A实例
 * */
import Navigation from 'vue-navigation'
Vue.use(Navigation, { router, store, moduleName: 'navigation', keyName: 'KC' })

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// vux组件库
import Vuex from 'vuex'
Vue.use(Vuex)

// 使用微信插件
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

// VueBetterScroll
import VueBetterScroll from 'vue2-better-scroll'
Vue.use(VueBetterScroll)

// vue国际化
import vuei18n from 'vuex-i18n'
Vue.use(vuei18n)

// vux中viewbox布局
import { ViewBox } from 'vux'
Vue.component('view-box', ViewBox)

// 仅仅只是VueScroller需要全局注册
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// vux toast插件方式调用
import { ToastPlugin, LoadingPlugin, ConfirmPlugin, ConfigPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})

// click事件在移动端300ms延时
import FastClick from 'fastclick'
FastClick.attach(document.body)

// vue中使用cordova插件
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

// 判断android用户是否点击两次返回键推出app
import { eventBackButton } from '@/assets/js/quitapp'
Vue.cordova.on('deviceready', () => {
  eventBackButton();
});

// 高德地图
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
Vue.prototype.AMap = VueAMap;
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '956cab63ef78320624fb7d7dff4c25b5',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  uiVersion: '1.0', // ui库版本，不配置不加载
  v: '1.4.4'
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: () => {
    return {
      cordova: Vue.cordova
    }
  },
  render: h => h(App)
}).$mount('#app-box')
