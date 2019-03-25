<template>
  <div class="goods-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="goods-details-content" :style="conHei">
      <VideoPlayer :isControls="true" class="video-player-wrap"></VideoPlayer>
      <div class="goods-details-desc">
        <p>商品名称</p>
        <p></p>
        <p>¥200</p>
        <p>
          <span>运费：包邮</span>
          <span>销量：19</span>
          <span>库存：1</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import VideoPlayer from "@/components/common/VideoPlayer";
import { getDetail } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "商品详情",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    VideoPlayer
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getGoodsDetailsInfo();
  },

  methods: {
    getGoodsDetailsInfo() {
      getDetail({
        gid:this.$route.query.id
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.goods-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.goods-details-content {
  width: 100%;
  background: #f9f9f9;
  margin-top: 50px;
}
.video-player-wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.goods-details-desc{
  width: 100%;
  height: 60px;
}
</style>