<template>
  <div class="back-lease-sale-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="back-lease-sale-content-wrap" :style="scrollContentHeight">
      <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>
      <Divider :content="TitleObjData.titleContent"></Divider>
      <div class="scroll-wrap-con" :style="scrollWrapHeight">
        <scroller
          :on-infinite="pullup"
          :on-refresh="refresh"
          :refreshText="refreshText"
          :noDataText="noDataText"
          class="scence-release-content"
        >
          <GoodsList></GoodsList>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import Scroll from "@/components/common/Scroller";
import GoodsList from "@/components/layout/GoodsList";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "",
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
    Scroll,
    DividedArea,
    GoodsList,
    Divider
  },

  computed: {
    scrollContentHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    scrollWrapHeight() {
      return { height: document.documentElement.clientHeight - 200 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.setTitle();
  },

  methods: {
    setTitle() {
      let title = this.$route.query.title;
      this.TitleObjData.titleContent = title;
      if (title === "艺品回购") {
        this.getBannerImgFn("8");
      } else if (title === "艺品租赁") {
        this.getBannerImgFn("9");
      } else {
        this.getBannerImgFn("10");
      }
    },
    refresh(done) {
      console.log("refresh");
      setTimeout(() => {
        done();
      }, 2000);
    },
    pullup(done) {
      console.log("pullup");
      setTimeout(() => {
        done();
      }, 2000);
    }
  },

  watch: {
    $route(to, from) {
      this.setTitle();
    }
  }
};
</script>
<style lang='css' scoped>
.back-lease-sale-content-wrap {
  width: 100%;
  margin-top: 50px;
}
.scence-release-content {
  margin-top: 300px;
}
</style>