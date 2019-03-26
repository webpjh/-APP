<template>
  <div class="scence-consum-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-consum-content" :style="scenceConsumHeight">
      <TabItemMallAdvertise class="z-index-99"></TabItemMallAdvertise>
      <DividedArea class="z-index-99"></DividedArea>
      <Divider :content="title"></Divider>
      <GoodsListWrap></GoodsListWrap>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";
import Scroll from "@/components/common/Scroller";
import GoodsList from "@/components/layout/GoodsList";
import GoodsListWrap from "@/components/layout/GoodsListWrap";

export default {
  name: "",
  props: [""],
  data() {
    return {
      title: "",
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
    DividedArea,
    Divider,
    Scroll,
    GoodsList,
    GoodsListWrap
  },

  computed: {
    scenceConsumHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.setTitle();
  },

  methods: {
    setTitle() {
      this.title = this.$route.query.title;
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.z-index-99{
  position: relative;
  z-index: 999;
}
.scence-consum-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scence-consum-content {
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
}
.scence-release-content {
  width: 100%;
  margin-top: 310px;
}
</style>