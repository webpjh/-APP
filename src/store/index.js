import Vue from 'vue';
import Vuex from 'vuex';
import vueRouter from 'vue-router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleObj: {
      title: '',
      showLeftBack: false,
      showRightMore: false
    },
    currentRouteVal: ''
  },
  getters: {
    getCurrentTitleObj(state) {
      return state.titleObj;
    },
    getCurrentRouteVal(state) {
      return state.currentRouteVal;
    }
  },
  mutations: {
    changeCurrentRouteVal(state, Payload) {
      state.currentRouteVal = Payload;
      switch (Payload) {
        case "/kachuotabplay":
          state.titleObj = {
            title: '游玩',
            showLeftBack: false,
            showRightMore: false
          }
          break;
        case "/kachuotabplay":
          state.titleObj = {
            title: '游玩',
            showLeftBack: false,
            showRightMore: false
          }
          break;
        case "/kachuotabmall":
          state.titleObj = {
            title: "商城",
            showLeftBack: false,
            showRightMore: false
          }
          break;
        case "/kachuotabcash":
          state.titleObj = {
            title: "变现",
            showLeftBack: false,
            showRightMore: false
          }
          break;
        case "/kachuotabincome":
          state.titleObj = {
            title: "创收",
            showLeftBack: false,
            showRightMore: false
          }
          break;
        case "/kachuotabpersonalcenter":
          state.titleObj = {
            title: "我的",
            showLeftBack: false,
            showRightMore: false
          }
          break;
        default:
          state.titleObj = {
            title: "游玩",
            showLeftBack: false,
            showRightMore: false
          }
      }
    },
    chnageCurrentTitleObj(state, Payload) {
      state.titleObj = Payload;
    }
  },
  actions: {

  }
})