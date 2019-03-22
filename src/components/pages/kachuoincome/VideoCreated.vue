<template>
  <div class="video-create-wrap">
    <x-header
      :left-options="{showBack: true,preventGoBack:true}"
      :right-options="{showMore: false}"
      @on-click-back="back"
      @on-click-more="showMenus = true"
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
    >
      <a slot="right" @click="releaseContent">发布</a>
    </x-header>
    <div class="video-create-content" :style="contentSty">
      <scroller
        lock-x
        scrollbar-y
        height="-45"
        ref="scroller"
        use-pullup
        :pulldown-config="pulldownConfig"
        :pullup-config="pullupConfig"
        :scroll-bottom-offset="scrollBottomOffset"
        @on-pullup-loading="onPullupLoading"
        @on-pulldown-loading="onPulldownLoading"
      >
        <VideoListWrap :videoDataList="dataList"></VideoListWrap>
      </scroller>
    </div>
  </div>
</template>

<script>
import { XHeader, Scroller } from "vux";
import VideoListWrap from "@/components/common/VideoListWrap";
import { VideoCreditList } from "@/servers/api";
import { setTimeout } from "timers";
export default {
  name: "",
  props: [""],
  data() {
    return {
      page: 1,
      dataList: [],
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20,
      scrollBottomOffset: 20,
      pulldownConfig: {
        content: "下拉刷新",
        height: 40,
        autoRefresh: false,
        downContent: "下拉刷新",
        upContent: "释放后刷新",
        loadingContent: "正在刷新...",
        clsPrefix: "xs-plugin-pulldown-"
      },
      pullupConfig: {
        content: "上拉加载更多",
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: "释放后加载",
        upContent: "上拉加载更多",
        loadingContent: "加载中...",
        clsPrefix: "xs-plugin-pullup-"
      }
    };
  },

  components: {
    XHeader,
    VideoListWrap,
    Scroller
  },

  computed: {
    contentSty() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},
  created() {},
  mounted() {
    this.getVideoList();
  },

  methods: {
    onPulldownLoading() {
      console.log("刷新");
      this.page = 1;
      this.dataList = [];
      this.getVideoList("onPulldownLoading");
    },
    onPullupLoading() {
      console.log("加载");
      if (this.noData) {
        this.$nextTick(() => {
          this.pullupConfig = null;
        });
        return;
      } else {
        ++this.page;
        this.getVideoList("onPullupLoading");
      }
    },
    back() {
      this.$router.goBack();
    },
    releaseContent() {
      this.$router.push("/releasevideo");
    },
    getVideoList(loadType) {
      VideoCreditList({
        page: this.page
      })
        .then(res => {
          if (res.result === 1) {
            console.log(res);
            this.noData =
              res.data.currentpage === res.data.totalpage ? true : false;
            if (res.data.currentpage === 1) {
              this.dataList = res.data.comment;
            } else {
              this.dataList = this.dataList.concat(res.data.comment);
            }
            if (loadType == "onPulldownLoading") {
              setTimeout(() => {
                this.$refs.scroller.disablePullup();
                this.$refs.scroller.donePulldown();
              }, 2000);
            } else {
              setTimeout(() => {
                this.$refs.scroller.enablePullup();
                this.$refs.scroller.donePullup();
              }, 2000);
            }
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
.video-create-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background: #f9f9f9;
  padding: 15px 0;
  box-sizing: border-box;
  margin-top: 45px;
}
</style>