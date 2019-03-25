<template>
  <div class="video" id="wrapper"></div>
</template>

<script>
import ChimeeMobilePlayer from "chimee-mobile-player";
import "../../../node_modules/chimee-mobile-player/lib/chimee-mobile-player.browser.css";

export default {
  name: "",
  props: {
    isControls: {
      type: Boolean,
      required: true
    },
    videoObj: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      flag: false
    };
  },

  components: {},

  computed: {},

  beforeMount() {},
  created() {
  },
  mounted() {
    this.createVideoDom(this.isControls, this.videoObj);
  },

  methods: {
    createVideoDom(flag, videoObj) {
      console.log(videoObj);
      new ChimeeMobilePlayer({
        wrapper: "#wrapper", // video dom容器
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
    }
  },

  watch: {
    isControls: function(flag) {
      return flag;
    }
  }
};
</script>
<style lang='css' scoped>
.video {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
</style>