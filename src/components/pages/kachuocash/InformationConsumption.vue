<template>
  <div class="scence-consum-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-consum-content" :style="scenceConsumHeight">
      <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>
      <Divider :content="title"></Divider>
      <scroller
        :on-infinite="pullup"
        :on-refresh="refresh"
        :refreshText="refreshText"
        :noDataText="noDataText"
        ref="myscroller"
        class="scence-release-content"
      >
        <VideoListWrap></VideoListWrap>
      </scroller>
    </div>
  </div>
</template>

<script>

import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";
import Scroll from "@/components/common/Scroller";
import VideoListWrap from "@/components/common/VideoListWrap";

export default {
  name: "",
  props: [""],
  data() {
    return {
      title: "信息消费",
      TitleObjData: {
        titleContent: "信息消费",
        showLeftBack: true,
        showRightMore: false
      },
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据"
    };
  },

  components: {
    Header,
    TabItemMallAdvertise,
    DividedArea,
    Divider,
    Scroll,
    VideoListWrap
  },

  computed: {
    scenceConsumHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    refresh(done) {
      console.log("refresh");
      setTimeout(() => {
        done();
      }, 2000);
    },
    pullup(done) {
      // console.log("pullup");
      //   this.$refs.myscroller.finishInfinite(2);
      //   this.$refs.myscroller.resize();
      //   done();
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-consum-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
}
.scence-release-content {
  width: 100%;
  margin-top: 310px;
}
</style>