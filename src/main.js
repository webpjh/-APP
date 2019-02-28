// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import HomePage from './components/index/index'
import vuei18n from 'vuex-i18n'
import { ViewBox } from 'vux'
import Vuex from 'vuex'
import store from './store/index'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(vuei18n)
Vue.component('view-box', ViewBox)

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
