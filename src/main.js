// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'


import App from './App'
import HomePage from './components/index/index'

import store from './store/index'

import './assets/css/index.css'

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// vux组件库
import Vuex from 'vuex'
Vue.use(Vuex)

// vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue国际化
import vuei18n from 'vuex-i18n'
Vue.use(vuei18n)

// vux中viewbox布局
import { ViewBox } from 'vux'
Vue.component('view-box', ViewBox)

// 仅仅只是VueScroller需要全局注册
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// vux confirm弹窗提示插件形式调用
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

// vux toast插件方式调用
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

const routes = [{
  path: '/',
  component: HomePage
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
