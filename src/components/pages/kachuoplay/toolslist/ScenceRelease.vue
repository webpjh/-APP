<template>
  <div class="scence-release-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <scroller
      :on-infinite="pullup"
      :on-refresh="refresh"
      :refreshText="refreshText"
      :noDataText="noDataText"
      class="scence-release-content"
      :style="contentNoHeaderHeight"
    >
      <ScenceRelease ></ScenceRelease>
    </scroller>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ScenceRelease from "@/components/layout/ScenceRelease";
import Scroll from "@/components/common/Scroller";

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
        titleContent: "景区发布",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    ScenceRelease,
    Scroll
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
  background: #f5f5f5;
}
.scence-release-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  margin-top: 45px;
  padding-bottom: 10px;
}
</style>