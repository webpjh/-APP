<template>
  <div class="scence-release-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <DividedArea></DividedArea>
    <scroller
      :on-infinite="pullup"
      :on-refresh="refresh"
      :refreshText="refreshText"
      :noDataText="noDataText"
      class="scence-release-content"
      :style="contentNoHeaderHeight"
    >
      <VideoList></VideoList>
    </scroller>
  </div>
</template>

<script>

import Header from "@/components/common/ReleaseHeader";
import VideoList from "@/components/layout/VideoList";
import Scroll from "@/components/common/Scroller";
import DividedArea from "@/components/common/DividedArea";

export default {
  name: "",
  props: [""],
  data() {
    return {
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据",
      TitleObjData: {
        titleContent: "了解的",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    VideoList,
    Scroll,
    DividedArea
  },

  computed: {
    contentNoHeaderHeight: function() {
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
      console.log('pullup');
      done();
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-release-wrap {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
}
.scence-release-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 45px;
}
</style>