<template>
  <div class="scence-service-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-service-content" :style="serviceContentHeight">
      <ElementAMap class="scence-service-map"></ElementAMap>
      <Tab class="scence-service-tab" :tabList="tabList"></Tab>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ElementAMap from "@/components/common/ElementAMap";
import Tab from "@/components/common/Tab";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "周边服务",
        showLeftBack: true,
        showRightMore: false
      },
      tabList: ["美食", "休闲", "酒店", "娱乐"]
    };
  },

  components: {
    Header,
    ElementAMap,
    Tab
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