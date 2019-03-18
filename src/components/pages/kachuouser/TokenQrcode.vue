<template>
  <div class="qr-code-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="qr-code-con" :style="conStyle">
      <QRcode></QRcode>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import QRcode from "@/components/common/QRcode";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "通证",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    QRcode
  },

  computed: {
    conStyle() {
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
.qr-code-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.qr-code-con {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  box-sizing: border-box;
}
</style>