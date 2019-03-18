<template>
  <div>
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="information-content-wrap" :style="informationContent">
      <VideoPlayer :isControls="true"></VideoPlayer>
      <GiveLike></GiveLike>
      <DividedArea></DividedArea>
      <CommentList></CommentList>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import VideoPlayer from "@/components/common/VideoPlayer";
import DividedArea from "@/components/common/DividedArea";
import GiveLike from "@/components/common/GiveLike";
import CommentList from "@/components/layout/CommentList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    VideoPlayer,
    DividedArea,
    GiveLike,
    CommentList
  },

  computed: {
    informationContent() {
      return { height: document.documentElement.clientHeight - 50 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.information-content-wrap {
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>