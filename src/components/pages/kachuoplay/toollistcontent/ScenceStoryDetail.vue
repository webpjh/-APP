<template>
  <div>
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-story-wrap" :style="contentHeight">
      <VideoPlayer :isControls="true" class="video-player-wrap"></VideoPlayer>
      <ScenceStoryDetailDesc></ScenceStoryDetailDesc>
      <DividedArea style="margin-top:10px"></DividedArea>
      <div class="scence-story-goods-title">
        <span style="font-size:16px;font-weight:bold">相关作品</span>
        <span style="color:#999">查看更多</span>
      </div>
      <HorizontalScroller class="scroll"></HorizontalScroller>
      <DividedArea style="margin-top:10px"></DividedArea>
      <CommentList></CommentList>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>

import Header from "@/components/common/Header";
import VideoPlayer from "@/components/common/VideoPlayer";
import ScenceStoryDetailDesc from "@/components/layout/ScenceStoryDetailDesc";
import DividedArea from "@/components/common/DividedArea";
import HorizontalScroller from "@/components/common/HorizontalScroller";
import CommentList from "@/components/layout/CommentList";
import Comments from "@/components/common/Comments";


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
    ScenceStoryDetailDesc,
    DividedArea,
    HorizontalScroller,
    CommentList,
    Comments
  },

  computed: {
    contentHeight() {
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
.video-player-wrap {
  width: 100%;
  height: 200px;
}
.scence-story-wrap {
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
}
.scence-story-goods-title {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
</style>