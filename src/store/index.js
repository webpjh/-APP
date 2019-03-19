import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import data from '../assets/data'

const request = () => {
  return new Promise((res, rej) => {
    let requestTime = Math.ceil(((0.1 + Math.random())) * 1000);
    console.log("requestTIme:", requestTime);
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
    userLoginInfo:{},
    toastInfo: {
      type: 'text',
      text: '',
      show: true
    },
    currentRouteVal: '',
    isShowBottomTabbar: true,
    tabIndex: 0,
    navigationDetails: false,
    showMallLeftOption: false
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
    changeUserAvatar(state, Payload){
      state.userLoginInfo.avatar = Payload;
    },
    setUserLoginInfo(state, Payload){
      state.userLoginInfo = Payload;
    },
    showToastInfo(state, Payload) {
      state.toastInfo = {
        type: Payload.type,
        text: Payload.text,
        show: Payload.show
      }
    },
    changeCurrentRouteVal(state, Payload) {
      state.currentRouteVal = Payload.path;
      if (Payload.path === "/") {
        state.titleObj = {
          title: '',
          showLeftBack: false,
          showRightMore: false
        }
        state.isShowBottomTabbar = true;
      }
    },
    chnageCurrentTitleObj(state, Payload) {
      state.titleObj = Payload;
    },
    changeTabIndex(state, Payload) {
      state.tabIndex = Payload;
    },
    changeNavigationDetailsState(state, Payload) {
      state.navigationDetails = Payload;
    },
    showMallLeftOptionState(state, Payload) {
      state.showMallLeftOption = Payload;
    }
  },
  actions: {
    getData({ commit, state }, param = {}) {
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