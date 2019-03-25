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
        :pullup-config="pullupConfig"
        @on-pullup-loading="onPullupLoading"
      >
        <VideoListWrap :videoDataList="dataList"></VideoListWrap>
      </scroller>
    </div>
  </div>
</template>

<script>
import { XHeader, Scroller } from "vux";
import VideoListWrap from "@/components/common/VideoListWrap";
import { VideoCreditList, SeourceCreatedList } from "@/servers/api";
import { setTimeout } from "timers";
export default {
  name: "",
  props: [""],
  data() {
    return {
      page: 1,
      dataList: [],
      scrollTop: 0,
      pullupConfig: {
        content: "加载更多",
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: "释放后加载",
        upContent: "加载更多",
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
    onPullupLoading() {
      if (this.noData) {
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
      SeourceCreatedList({
        type: 9,
        page: this.page
      })
        .then(res => {
          if (res.result === 1) {
            console.log(res);
            this.noData =
              res.data.currentpage === res.data.totalpage ? true : false;
            if (this.noData) {
              this.pullupConfig.loadingContent = "没有更多";
            }
            if (res.data.currentpage === 1) {
              this.dataList = res.data.comment;
            } else {
              this.dataList = this.dataList.concat(res.data.comment);
            }
            this.$nextTick(() => {
              setTimeout(() => {
                this.$refs.scroller.enablePullup();
                this.$refs.scroller.donePullup();
              }, 2000);
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeDestroy() {
    this.$refs.scroller.reset();
  },
  activated() {
    this.$refs.scroller.reset();
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