<template>
  <div class="address-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="address-con" :style="conHei"></div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "收获地址",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header
  },

  computed: {
    conHei() {
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
.address-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.address-con {
  width: 100%;
  background: #f9f9f9;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>