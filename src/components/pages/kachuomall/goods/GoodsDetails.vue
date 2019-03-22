<template>
  <div class="goods-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="goods-details-content" :style="conHei"></div>
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
        titleContent: "商品详情",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header
  },

  computed: {
    conHei(){
      return{height:document.documentElement.clientHeight - 45 + 'px'}
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.goods-details-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.goods-details-content{
  width: 100%;
  background: #f9f9f9;
  margin-top: 50px;
}
</style>