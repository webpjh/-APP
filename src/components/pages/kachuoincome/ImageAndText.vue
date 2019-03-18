<template>
  <div class="img-and-text-wrap">
    <x-header
      :left-options="{showBack: true,preventGoBack:true}"
      :right-options="{showMore: false}"
      @on-click-back="back"
      @on-click-more="showMenus = true"
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
    >
      <a slot="right" @click="releaseContent">发布</a>
    </x-header>
    <div class="img-and-text-content" :style="conHeight">
      <scroller
        :on-infinite="pullup"
        :on-refresh="refresh"
        :refreshText="refreshText"
        :noDataText="noDataText"
        ref="myscroller"
        class="scence-release-content"
      >
        <ImgAndTxtList></ImgAndTxtList>
      </scroller>
    </div>
  </div>
</template>

<script>
import { XHeader } from "vux";
import ImgAndTxtList from "@/components/layout/ImgAndTxtList";
import DividedArea from "@/components/common/DividedArea";
import Scroll from "@/components/common/Scroller";

export default {
  name: "",
  props: [""],
  data() {
    return {
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据"
    };
  },

  components: {
    XHeader,
    ImgAndTxtList,
    DividedArea,
    Scroll
  },

  computed: {
    conHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    back() {
      this.$router.goBack();
    },
    releaseContent() {
      this.$router.push("/releaseimgandtext");
    },
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
.img-and-text-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.scence-release-content{
  margin-top: 30px;
}
</style>