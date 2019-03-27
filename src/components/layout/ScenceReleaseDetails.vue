<template>
  <div class="scence-release-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-release-content" :style="contentStyle">
      <p class="details-title padding-15px">{{contentData.title}}</p>
      <p class="details-attribute padding-15px">
        <span>
          <span>{{contentData.scenic}}</span>
          <span style="margin-left:10px">{{contentData.create_time}}</span>
        </span>
        <span>
          <span style="margin-right:10px">{{commentListData.length}}评论</span>
          <span>{{contentData.praise_num}}点赞</span>
        </span>
      </p>
      <p class="details-conetnt padding-15px">{{contentData.content}}</p>
      <GiveLike v-on:changePhriseState="refreshData" :clickState="clickState"></GiveLike>
      <DividedArea></DividedArea>
      <CommentList
        :id="currentId"
        :pullDownRefreshObj="pullDownRefreshObj"
        :contentList.sync="commentListData"
        :scrollTop="320"
        class="commit-list"
      ></CommentList>
    </div>
    <Comments v-on:pushCommition="updateCommintList"></Comments>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Comments from "@/components/common/Comments";
import GiveLike from "@/components/common/GiveLike";
import DividedArea from "@/components/common/DividedArea";
import CommentList from "@/components/layout/CommentListPlay";
import { ScenceReleaseListDetails } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "发布详情",
        showLeftBack: true,
        showRightMore: false
      },
      contentData: {},
      commentListData: [],
      currentId: "",
      clickState: 0,
      pullDownRefreshObj: {
        threshold: 40,
        stop: 40
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

  mounted() {
    this.getData();
  },

  methods: {
    // 更新点赞状态
    refreshData(type) {
      this.clickState = type;
      this.videoId = this.$route.query.id;
    },
    //更新评论数据列表
    updateCommintList() {
      let arr = [];
      ScenceReleaseListDetails({
        id: this.$route.query.id,
        type: this.$route.query.type,
        page: 1
      })
        .then(res => {
          if (res.result === 1) {
            if (res.data.comment.length) {
              arr = JSON.parse(JSON.stringify(res.data.comment));
            }
          }
          this.commentListData = arr;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 初始化数据
    getData() {
      this.currentId = this.$route.query.id;
      ScenceReleaseListDetails({
        id: this.$route.query.id,
        page: 1
      })
        .then(res => {
          if (res.result === 1) {
            this.contentData = res.data.content;
            this.commentListData = res.data.comment;
            this.clickState = res.data.content.type;
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
  background: #fff;
  position: relative;
  z-index: 999;
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
  background: #fff;
  position: relative;
  z-index: 999;
}
.details-conetnt {
  width: 100%;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fff;
  position: relative;
  z-index: 999;
}
</style>