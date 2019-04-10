<template>
  <div class="scence-service-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-service-content" :style="serviceContentHeight">
      <AMap class="scence-service-map" ref="map" :mapHeight="mapHeight"></AMap>
      <div class="scence-service-tab">
        <Tab :tabList="tabList"></Tab>
        <TabContentLoop :merchantsDataList="dataList"></TabContentLoop>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import AMap from "@/components/common/AMap";
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
      ],
      positionArr: [
        {
          position: [116.403139,39.933098],
          label: "蓬莱水城"
        },
        {
          position: [116.403139,39.933098],
          label: "蓬莱水城"
        },
        {
          position: [116.390522,39.928819],
          label: "蓬莱水城"
        }
      ]
    };
  },

  components: {
    Header,
    AMap,
    Tab,
    TabContentLoop
  },

  computed: {
    serviceContentHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    mapHeight() {
      return { height: document.documentElement.clientHeight - 245 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getMarker();
  },

  methods: {
    getMarker() {
      this.$refs.map.showMarker(this.positionArr);
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-service-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scence-service-content {
  width: 100%;
}
.scence-service-map {
  width: 100%;
  overflow: hidden;
}
.scence-service-tab {
  width: 100%;
  height: 200px;
}
</style>