<template>
  <div>
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-story-wrap" :style="contentHeight">
      <SwiperImg :SwiperImgData="imgListObj"></SwiperImg>
      <ScenceStoryDetailDesc :dataObj="videoData"></ScenceStoryDetailDesc>
      <DividedArea style="margin-top:10px"></DividedArea>
      <div class="scence-story-goods-title">
        <span style="font-size:16px;font-weight:bold">相关作品</span>
        <span style="color:#999">查看更多</span>
      </div>
      <HorizontalScroller class="scroll"></HorizontalScroller>
      <DividedArea style="margin-top:10px"></DividedArea>
      <CommentList
        :id="currentId"
        :pullDownRefreshObj="pullDownRefreshObj"
        :dataList.sync="commitDataList"
        :scrollTop="580"
        class="commit-list"
      ></CommentList>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import SwiperImg from "@/components/common/SwiperImg";
import ScenceStoryDetailDesc from "@/components/layout/ScenceStoryDetailDesc";
import DividedArea from "@/components/common/DividedArea";
import HorizontalScroller from "@/components/common/HorizontalScroller";
import CommentList from "@/components/layout/CommentList";
import Comments from "@/components/common/Comments";
import { ScenceRememberAndLearnDetails } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "",
        showLeftBack: true,
        showRightMore: false
      },
      videoData: {},
      currentId: "",
      pullDownRefreshObj: {
        threshold: 70,
        stop: 40
      },
      commitDataList: [],
      imgListObj: {
        ImgList: [],
        index: 0,
        dotsPosition: "center",
        loop: true,
        auto: true,
        height: "220px"
      }
    };
  },

  components: {
    Header,
    SwiperImg,
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

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.currentId = this.$route.query.id;
      ScenceRememberAndLearnDetails({
        id: this.$route.query.id,
        type: this.$route.query.type,
        page: 1
      })
        .then(res => {
          console.log(res);
          let arr = [];
          if (res.result === 1) {
            this.videoData = res.data.content;
            for (let i = 0; i < res.data.content.image.length; i++) {
              arr.push({
                img: res.data.content.image[i]
              });
            }
            this.imgListObj.ImgList = JSON.parse(JSON.stringify(arr));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

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
.video {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
</style>