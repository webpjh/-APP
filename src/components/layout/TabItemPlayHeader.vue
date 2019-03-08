<template>
  <div class="tab-item-play-header-wrap">
    <SwiperImg :SwiperImgData="SwiperImgData" class="tab-item-play-swiper"></SwiperImg>
    <div class="tab-item-play-header-title">
      <div class="location-icon text-align-center">左侧</div>
      <div class="search-icon text-align-center">搜索目的地/景点/酒店/饭店</div>
      <div class="message-icon text-align-center">右侧</div>
    </div>
  </div>
</template>

<script>
import SwiperImg from "@/components/common/SwiperImg";

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
        height: "220px"
      }
    };
  },

  components: {
    SwiperImg
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-play-header-wrap {
  width: 100%;
  height: 220px;
  overflow: hidden;
}
.tab-item-play-header-title {
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.text-align-center {
  text-align: center;
}
.location-icon {
  flex: 1;
}
.message-icon {
  flex: 1;
}
.search-icon {
  flex: 4;
  width: 300px;
  height: 26px;
  line-height: 26px;
  background: #fff;
  border-radius: 20px;
  font-size: 12px;
  color: #999;
}
.tab-item-play-swiper {
  width: 100%;
  height: 100%;
}
.tab-item-play-content {
  width: 100%;
  min-height: 200px;
  height: auto;
  background: #999;
}
</style>