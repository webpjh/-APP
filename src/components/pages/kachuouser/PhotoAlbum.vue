<template>
  <div class="photo-album-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="photo-album-content" :style="conHei">
      <!-- <BetterScroll></BetterScroll> -->
      <p class="tip">敬请期待!</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import BetterScroll from "@/components/common/BetterScroll";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "云相册",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    BetterScroll
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
.photo-album-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.photo-album-content{
  width: 100%;
  background: #f9f9f9;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}
.tip{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
</style>