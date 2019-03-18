<template>
  <div class="scence-service-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-service-content" :style="serviceContentHeight">
      <ElementAMap class="scence-service-map"></ElementAMap>
      <div class="scence-service-tab">
        <Tab :tabList="tabList"></Tab>
        <TabContentLoop :merchantsDataList="dataList"></TabContentLoop>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ElementAMap from "@/components/common/ElementAMap";
import Tab from "@/components/common/Tab";
import TabContentLoop from "@/components/layout/TabContentLoop";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "景区服务",
        showLeftBack: true,
        showRightMore: false
      },
      tabList: ["吃吧", "喝吧", "玩吧"],
      dataList: [
        {
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "蓬莱餐厅",
          distance: "据您79米",
          price: "人均90元"
        },
        {
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "蓬莱餐厅",
          distance: "据您79米",
          price: "人均90元"
        },
        {
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "蓬莱餐厅",
          distance: "据您79米",
          price: "人均90元"
        },
        {
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "蓬莱餐厅",
          distance: "据您79米",
          price: "人均90元"
        }
      ]
    };
  },

  components: {
    Header,
    ElementAMap,
    Tab,
    TabContentLoop
  },

  computed: {
    serviceContentHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-service-wrap {
  width: 100%;
  height: 100%;
}
.scence-service-content {
  width: 100%;
}
.scence-service-map {
  width: 100%;
  height: 66%;
}
.scence-service-tab {
  width: 100%;
  height: 33%;
}
</style>