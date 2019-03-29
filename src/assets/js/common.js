import { AdvertiseLoop } from "@/servers/api";
import store from "@/store/index";

// 获取url中的参数
export const getUrlParam = (obj) => {
  return obj.$route.query.id;
}
// 获取广告位轮播图
export const getBannerImg = (type) => {
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
      }
    })
    .catch(err => {
      console.log(err);
    })
}