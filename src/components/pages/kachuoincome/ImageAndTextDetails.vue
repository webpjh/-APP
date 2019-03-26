<template>
  <div style="img-text-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scroll-content-wrap" :style="conHeight">
      <SwiperImg class="z-index-sty" :SwiperImgData="SwiperImgData"></SwiperImg>
      <ImgAndTextNoteDetailsUserInfo
        style="background:#fff"
        :detailsObj="descContent"
        class="z-index-sty"
      ></ImgAndTextNoteDetailsUserInfo>
      <div class="content-wrap z-index-sty">
        <p style="font-size:18px;font-weight:bold">{{descContent.title}}</p>
        <p>{{descContent.summary}}</p>
      </div>
      <DividedArea class="z-index-sty"></DividedArea>
      <CommentList
        :id="currentId"
        :pullDownRefreshObj="pullDownRefreshObj"
        :dataList.sync="commitDataList"
        :scrollTop="390"
        class="commit-list"
      ></CommentList>
    </div>
    <Comments v-on:pushCommition="updateCommintList"></Comments>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import SwiperImg from "@/components/common/SwiperImg";
import ImgAndTextNoteDetailsUserInfo from "@/components/layout/ImgAndTextNoteDetailsUserInfo";
import CommentList from "@/components/layout/CommentList";
import DividedArea from "@/components/common/DividedArea";
import Comments from "@/components/common/Comments";
import { SeourceCreatedListDetails } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      SwiperImgData: {
        ImgList: [],
        index: 0,
        dotsPosition: "center",
        loop: true,
        auto: true,
        height: "220px"
      },
      pullDownRefreshObj: {
        threshold: 40,
        stop: 40
      },
      TitleObjData: {
        titleContent: "详情",
        showLeftBack: true,
        showRightMore: false
      },
      commitDataList: [],
      descContent: {}
    };
  },

  components: {
    Header,
    SwiperImg,
    ImgAndTextNoteDetailsUserInfo,
    CommentList,
    DividedArea,
    Comments
  },

  computed: {
    conHeight() {
      return { height: document.documentElement.clientHeight - 90 + "px" };
    },
    currentId() {
      return this.$route.query.id;
    }
  },

  beforeMount() {},

  mounted() {
    this.getDetailsData();
  },

  methods: {
    //更新评论数据列表
    updateCommintList() {
      this.videoId = this.$route.query.id;
      SeourceCreatedListDetails({
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
      SeourceCreatedListDetails({
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
    getDetailsData() {
      SeourceCreatedListDetails({
        id: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
            this.descContent = res.data.video;
            this.commitDataList = res.data.comment;
            let imgList = res.data.video.video_img.split(",");
            let arrObj = [];
            for (let i = 0; i < imgList.length; i++) {
              arrObj.push({
                img: imgList[i]
              });
            }
            this.SwiperImgData.ImgList = JSON.parse(JSON.stringify(arrObj));
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
.img-text-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-wrap {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
}
.scroll-content-wrap {
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
  position: absolute;
}
.img-text-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.z-index-sty {
  position: relative;
  z-index: 9999;
}
</style>