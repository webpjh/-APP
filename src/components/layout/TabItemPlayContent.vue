<template>
  <div class="tab-item-paly-content">
    <FunctionAreas class="tab-item-play-content-tools-wrap"></FunctionAreas>
    <div class="tab-item-play-content-tip-wrap">
      <AdvertiseSwiper></AdvertiseSwiper>
    </div>
    <div class="tab-item-play-content-scence">
      <div class="tab-item-play-content-tools">
        <span class="tab-item-play-content-tools-line"></span>
        <span class="tab-item-play-content-title">景区服务</span>
      </div>
      <Cell class="tab-item-play-content-cell" :cellList="cellListScence"></Cell>
    </div>
    <div class="tab-item-play-content-scence tab-item-play-content-scence-wrap">
      <div class="tab-item-play-content-tools">
        <span class="tab-item-play-content-tools-line"></span>
        <span class="tab-item-play-content-title">周边服务</span>
      </div>
      <Cell class="tab-item-play-content-cell tab-item-play-content-cell-spec" :cellList="cellListAround"></Cell>
    </div>
  </div>
</template>

<script>

import FunctionAreas from "@/components/layout/FunctionAreas";
import AdvertiseSwiper from "@/components/layout/AdvertiseSwiper";
import Cell from "@/components/common/CellNoBorder";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListScence: [
        {
          title: "吃吧",
          icon: "iconfont iconchiba",
          link: "/scenceservice"
        },
        {
          title: "喝吧",
          icon: "iconfont iconheba",
          link: "/scenceservice"
        },
        {
          title: "玩吧",
          icon: "iconfont iconwanba",
          link: "/scenceservice"
        }
      ],
      cellListAround: [
        {
          title: "美食",
          icon: "iconfont iconmeishi",
          link: "/servicesurround"
        },
        {
          title: "休闲",
          icon: "iconfont iconxiuxian",
          link: "/servicesurround"
        },
        {
          title: "酒店",
          icon: "iconfont iconjiudian",
          link: "/servicesurround"
        },
        {
          title: "娱乐",
          icon: "iconfont iconyule",
          link: "/servicesurround"
        }
      ]
    };
  },

  components: {
    FunctionAreas,
    AdvertiseSwiper,
    Cell
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getBannerImgFn("1");
  },

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-play-content-tools {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.tab-item-play-content-tools-line {
  width: 2px;
  height: 16px;
  background: #000;
  display: inline-block;
  margin-right: 10px;
}
.tab-item-play-content-title {
  font-weight: bold;
}
.tab-item-play-content-cell {
  margin-top: -20px;
}
.tab-item-play-content-tip-wrap {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
}
.tab-item-play-content-tools-wrap {
  width: 100%;
  height: 180px;
  background: #fff;
  position: relative;
  top: -10px;
  border-radius: 10px 10px 0 0;
}
.tab-item-play-content-scence {
  width: 100%;
  height: 200px;
}
.tab-item-play-content-scence-wrap {
  width: 100%;
  min-height: 210px;
  height: auto;
  padding: 0 0 20px 0;
  box-sizing: border-box;
}
.tab-item-play-content-cell-spec span{
  width: 24px;
  height: 24px;
  display: inline-block;
  font-size: 20px;
}
.tab-item-play-content-scence-line {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  margin-top: -10px;
}
</style>