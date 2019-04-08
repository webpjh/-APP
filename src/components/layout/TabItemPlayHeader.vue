<template>
  <div class="tab-item-play-header-wrap">
    <SwiperImg class="tab-item-play-swiper"></SwiperImg>
    <div class="tab-item-play-header-title">
      <div class="location-icon text-align-center" @click="locationSelf">
        <span class="iconfont icondingwei"></span>
      </div>
      <div class="search-icon text-align-center" @click="searchScence">输入作品/作者/景区</div>
      <div class="message-icon text-align-center" @click="appMessageCenter">
        <span class="iconfont iconxiaoxi"></span>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperImg from "@/components/common/SwiperImgIndex";
import { vueCordovaFunction } from "@/assets/js/vuecordova";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    SwiperImg
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    locationSelf() {
      if (!sessionStorage.getItem("positionInfo")) {
        vueCordovaFunction.getLocation();
      }
      this.$router.push("/userlocation");
    },
    searchScence() {
      this.$router.push("/usersearch");
    },
    appMessageCenter() {
      this.$router.push("/appmessage");
    }
  },

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
  z-index: 9999;
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