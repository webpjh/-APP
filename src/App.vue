<template>
  <div id="app" style="width:100%;height:100%;">
    <div style="height:100%;" class="app-wrap">
      <view-box ref="viewBox" body-padding-top="50px" body-padding-bottom="54px">
        <Header
          :titleContent="showCurrentTitle.title"
          :showLeftBack="showCurrentTitle.showLeftBack"
          :showRightMore="showCurrentTitle.showRightMore"
          slot="header"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        ></Header>
        <!-- <router-view></router-view> -->
        <KachuoIndex></KachuoIndex>
        <tabbar v-transfer-dom slot="bottom" style="overflow:hidden"></tabbar>
      </view-box>
    </div>
  </div>
</template>

<script>
import { XHeader, Tabbar, TransferDom } from "vux";
import KachuoIndex from "./components/index/index";
import Header from "./components/common/Header";

export default {
  directives: {
    TransferDom
  },
  name: "app",
  data() {
    return {
      title: "标题",
      showBackOptions: false,
      showRightOptions: false
    };
  },
  components: {
    XHeader,
    Tabbar,
    KachuoIndex,
    Header
  },
  methods: {
    // 判断当前路由，浏览器刷新路由不变
    changeVuexCurrentRoute() {
      this.$store.commit("changeCurrentRouteVal", this.$route.path);
    }
  },
  created() {},
  mounted() {
    this.changeVuexCurrentRoute();
  },
  computed: {
    showCurrentTitle() {
      return this.$store.state.titleObj;
    }
  },
  watch: {
    $route(to, from) {
      this.$store.commit("changeCurrentRouteVal", to.path);
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
.app-wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left: 0;
}
</style>
