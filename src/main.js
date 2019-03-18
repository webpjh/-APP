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

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// vux组件库
import Vuex from 'vuex'
Vue.use(Vuex)

// vue路由
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

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
import { ToastPlugin, LoadingPlugin,ConfirmPlugin,ConfigPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})

// click事件在移动端300ms延时
// import FastClick from 'fastclick'
// FastClick.attach(document.body)

// vue中使用cordova插件
import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})
console.log(Vue.cordova);

// 判断android用户是否点击两次返回键推出app
import { eventBackButton } from './assets/js/quitapp'
Vue.cordova.on('deviceready', () => {
  eventBackButton();
});

// 高德地图
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '956cab63ef78320624fb7d7dff4c25b5',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  uiVersion: '1.0', // ui库版本，不配置不加载
  v: '1.4.4'
});
lazyAMapApiLoaderInstance.load().then(() => {
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
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
