import Vue from 'vue';
import Vuex from 'vuex';
import vueRouter from 'vue-router';

Vue.use(Vuex)

import data from '../assets/data'

const request = () => {
  return new Promise((res, rej) => {
    let requestTime = Math.ceil(((0.1 + Math.random()))*1000);
    console.log("requestTIme:",requestTime);
    try {
      setTimeout(() => {
        let result = getRandomData(data, 10);
        res(result);
      }, requestTime)
    } catch (e) {
      rej(e);
    }
  })
}

const getRandomData = (arr, count) => {
  let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

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
    getData({commit, state}, param = {}){
      let page = param.page;  // 实际项目中会用到分页参数 page
      let scb = param.scb;
      let ecb = param.ecb;
      request().then(res => {
        scb && scb(res);
      }, err => {
        ecb && ecb(err);
      })
    }
  }
})