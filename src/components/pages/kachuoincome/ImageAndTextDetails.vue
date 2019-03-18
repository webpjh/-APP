<template>
  <div style="img-text-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scroll-content-wrap" :style="conHeight">
      <SwiperImg :SwiperImgData="SwiperImgData"></SwiperImg>
      <ImgAndTextNoteDetailsUserInfo></ImgAndTextNoteDetailsUserInfo>
      <div class="content-wrap">
        <p style="font-size:18px;font-weight:bold">回归本性</p>
        <p>回归本性回归本性回归本性回归本性回归本性回归本性回归本性回归本性回归本性回归本性回归本性回归本性</p>
      </div>
      <DividedArea></DividedArea>
      <CommentList></CommentList>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import SwiperImg from "@/components/common/SwiperImg";
import ImgAndTextNoteDetailsUserInfo from "@/components/layout/ImgAndTextNoteDetailsUserInfo";
import CommentList from "@/components/layout/CommentList";
import DividedArea from "@/components/common/DividedArea";
import Comments from "@/components/common/Comments";

export default {
  name: "",
  props: [""],
  data() {
    return {
      SwiperImgData: {
        ImgList: [
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
            title: ""
          },
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
            title: ""
          },
          {
            url: "javascript:",
            img:
              "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg", // 404
            title: ""
          }
        ],
        index: 0,
        dotsPosition: "center",
        loop: true,
        auto: true,
        height: "220px"
      },
      TitleObjData: {
        titleContent: "详情",
        showLeftBack: true,
        showRightMore: false
      }
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
.content-wrap {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.scroll-content-wrap{
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
.img-text-details-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>