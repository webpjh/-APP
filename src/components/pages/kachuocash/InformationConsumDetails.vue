<template>
  <div class="video-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="information-content-wrap" :style="informationContent">
      <div class="video" id="wrapper"></div>
      <GiveLike
        :praiseNum="praiseNum"
        :clickState="clickState"
        v-on:changePhriseState="refreshData"
      ></GiveLike>
      <DividedArea></DividedArea>
      <CommentList
        :id="currentId"
        :pullDownRefreshObj="pullDownRefreshObj"
        :dataList.sync="commitDataList"
        :scrollTop="340"
        class="commit-list"
      ></CommentList>
      <Comments v-on:pushCommition="updateCommintList"></Comments>
    </div>
  </div>
</template>

<script>
let count = 1;
import ChimeeMobilePlayer from "chimee-mobile-player";
import "../../../../node_modules/chimee-mobile-player/lib/chimee-mobile-player.browser.css";
import Header from "@/components/common/Header";
import VideoPlayer from "@/components/common/VideoPlayer";
import DividedArea from "@/components/common/DividedArea";
import GiveLike from "@/components/common/GiveLike";
import Comments from "@/components/common/Comments";
import CommentList from "@/components/layout/CommentList";
import { ScenceVideoDetails } from "@/servers/api";

import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";

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
      pullDownRefreshObj: {
        threshold: 70,
        stop: 40
      },
      videoObj: {},
      commitDataList: [],
      videoId: "",
      clickState: 0,
      praiseNum: 0
    };
  },

  components: {
    Header,
    VideoPlayer,
    DividedArea,
    GiveLike,
    CommentList,
    Comments
  },

  computed: {
    informationContent() {
      return { height: document.documentElement.clientHeight - 50 + "px" };
    },
    currentId() {
      return this.$route.query.id;
    }
  },

  beforeMount() {},

  mounted() {
    this.getDetails();
  },

  methods: {
    //更新评论数据列表
    updateCommintList() {
      this.videoId = this.$route.query.id;
      ScenceVideoDetails({
        id: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
            if (res.data.comment.length) {
              this.commitDataList = res.data.comment;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 更新点赞状态
    refreshData() {
      this.videoId = this.$route.query.id;
      ScenceVideoDetails({
        id: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.data.video) {
            this.clickState = res.data.video.type;
            this.praiseNum = res.data.video.praise_num;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 初始化数据
    getDetails() {
      this.videoId = this.$route.query.id;
      ScenceVideoDetails({
        id: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
            if (res.data.video) {
              this.createVideoDom(true, res.data.video);
              // this.createDPlayer(res.data.video);
              this.clickState = res.data.video.type;
              this.praiseNum = res.data.video.praise_num;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    createVideoDom(flag, videoObj) {
      new ChimeeMobilePlayer({
        wrapper: "#wrapper",
        src: videoObj.video_url,
        autoplay: false,
        poster: videoObj.video_img,
        controls: flag,
        playsInline: true,
        preload: "auto",
        x5VideoPlayerFullscreen: true,
        x5VideoOrientation: "landscape|portrait",
        xWebkitAirplay: true,
        muted: true
      });
    },
    createDPlayer(videoObj) {
      const dp = new DPlayer({
        container: document.getElementById("wrapper"),
        autoplay: false,
        theme: "#FADFA3",
        loop: true,
        lang: "zh-cn",
        screenshot: true,
        hotkey: true,
        preload: "auto",
        screenshot: true,
        volume: 0.7,
        video: {
          url: videoObj.video_url,
          pic: videoObj.video_img,
          thumbnails: "",
          type: "auto"
        }
      });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.video-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
.information-content-wrap {
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
.video {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.commit-list {
}
</style>