<template>
  <div class="tab-item-mall-advertise-wrap">
    <SwiperImg class="tab-item-mall-advertise-swiper" :SwiperImgData="SwiperImgData"></SwiperImg>
    <AdvertiseSwiper class="tab-item-mall-advertise-tip"></AdvertiseSwiper>
  </div>
</template>

<script>
import SwiperImg from "@/components/common/SwiperImg";
import AdvertiseSwiper from "@/components/layout/AdvertiseSwiper";

export default {
  name: "",
  props: [""],
  data() {
    return {
      SwiperImgData: {
        ImgList: [
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
            title: ""
          },
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
            title: ""
          },
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg", // 404
            title: ""
          }
        ],
        index: 0,
        dotsPosition: "center",
        loop: true,
        auto: true,
        height: "160px"
      }
    };
  },

  components: {
    SwiperImg,
    AdvertiseSwiper
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-mall-advertise-swiper {
  padding: 0 15px;
  box-sizing: border-box;
  /* margin-top: 50px; */
}
.vux-swiper-item {
  border-radius: 20px;
}
</style>