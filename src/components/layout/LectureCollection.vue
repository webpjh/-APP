<template>
  <div class="video-create-wrap">
    <div class="video-create-content" :style="contentSty">
      <VideoListWrap></VideoListWrap>
    </div>
  </div>
</template>

<script>

import VideoListWrap from "@/components/common/VideoListWrap";

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
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
}
</style>