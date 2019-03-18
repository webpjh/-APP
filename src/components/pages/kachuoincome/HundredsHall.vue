<template>
  <div class="video-create-wrap">
    <x-header
      :left-options="{showBack: true,preventGoBack:true}"
      :right-options="{showMore: false}"
      @on-click-back="back"
      @on-click-more="showMenus = true"
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
    >百家讲堂
      <a slot="right" @click="releaseContent">发布</a>
    </x-header>
    <div class="video-create-content" :style="contentSty">
      <VideoListWrap></VideoListWrap>
    </div>
  </div>
</template>

<script>

import { XHeader } from "vux";
import VideoListWrap from "@/components/common/VideoListWrap";

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    XHeader,
    VideoListWrap
  },

  computed: {
    contentSty() {
      return { height: document.documentElement.clientHeight - 50 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    back() {
      this.$router.goBack();
    },
    releaseContent() {
      this.$router.push("/releasevideo");
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
  margin-top: 50px;
}
</style>