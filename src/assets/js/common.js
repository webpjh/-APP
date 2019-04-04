import { AdvertiseLoop, getUpdateInfo } from "@/servers/api";
import store from "@/store/index";
import { checkMobileSystem } from "@/assets/js/tools";

let localVersion = "";
let serverVersion = "";
let isFroceUpdate = null;

// 获取url中的参数
export const getUrlParam = (obj) => {
  return obj.$route.query.id;
}
// 获取广告位轮播图
export const getBannerImg = (type, height) => {
  let imgArr = [];
  AdvertiseLoop({
    type: type
  })
    .then(res => {
      if (res.result === 1) {
        for (let i = 0; i < res.data.data.carousel.length; i++) {
          imgArr.push({
            img: res.data.data.carousel[i]
          })
        }
        store.commit("setCarousel", imgArr);
        sessionStorage.removeItem("carouselTip");
        sessionStorage.setItem("carouselTip", JSON.stringify(res.data.advert));
      }
    })
    .catch(err => {
      console.log(err);
    })
}
// 获取服务器app版本信息
export const serverAPPVersion = () => {
  getUpdateInfo().then(res => {
    if (res.result === 1) {
      serverVersion = res.data.up_edition;
      isFroceUpdate = parseInt(res.data.up_type, 10) === 1 ? false : true;
      // 如果版本不一致
      if (localVersion != serverVersion) {
        store.commit("updateshowActionDialogStatus",true);
        store.commit("getAPPUpdateInfo", { isForce: isFroceUpdate, content: res.data.up_content });
      } else {
        return;
      }
    }
  })
    .catch(err => {
      console.log(err);
    })
}

// 获取本地app版本更新信息
export const appVersion = () => {
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    cordova.getAppVersion.getVersionNumber().then(function (version) {
      // 存储本地版本
      localVersion = version;
      // 获取服务器版本
      serverAPPVersion();
    });
  }
}

// 强制更新app提示
export const forceUpdateAPPConfirm = (desc, type) => {
  this.$vux.confirm.show({
    title: '提示',
    content: desc,
    showCancelButton: false,
    onConfirm() {
      if (type === 'ios') {
        window.open("https://itunes.apple.com/cn/app/id1437706521?mt=8");
      } else {
        window.open("http://www.kachuo.com/wap/");
      }
    }
  })
}

// 不强制更新app提示
export const updateAPPConfirm = (desc, type) => {
  this.$vux.confirm.show({
    title: '提示',
    content: desc,
    onCancel: () => {
      return;
    },
    onConfirm: () => {
      if (type === 'ios') {
        window.open("https://itunes.apple.com/cn/app/id1437706521?mt=8");
      } else {
        window.open("http://www.kachuo.com/wap/");
      }
    }
  })
}

// 更新app
export const updateAPPVersion = (con, type) => {
  let systemInfo = checkMobileSystem();
  if (systemInfo === 'ios') {
    window.open("https://itunes.apple.com/cn/app/id1437706521?mt=8");
  } else {
    window.open("http://www.kachuo.com/wap/");
  }
}