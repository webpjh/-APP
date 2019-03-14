<template>
  <div class="scence-release-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-release-content" :style="contentStyle">
      <p class="details-title padding-15px">满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放</p>
      <p class="details-attribute padding-15px">
        <span>
          <span>云雾山风景区</span>
          <span style="margin-left:10px">2019-3-13</span>
        </span>
        <span>
          <span style="margin-right:10px">2评论</span>
          <span>10点赞</span>
        </span>
      </p>
      <p
        class="details-conetnt padding-15px"
      >满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放</p>
      <GiveLike></GiveLike>
      <DividedArea></DividedArea>
      <CommentList></CommentList>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Comments from "@/components/common/Comments";
import GiveLike from "@/components/common/GiveLike";
import DividedArea from "@/components/common/DividedArea";
import CommentList from "@/components/layout/CommentList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "发布详情",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    Comments,
    GiveLike,
    DividedArea,
    CommentList
  },

  computed: {
    contentStyle() {
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
.scence-release-content {
  width: 100%;
  background: #fff;
  margin-top: 45px;
  padding: 20px 0 45px 0;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
}
.details-title {
  font-size: 16px;
  font-weight: bold;
}
.details-attribute {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}
</style>