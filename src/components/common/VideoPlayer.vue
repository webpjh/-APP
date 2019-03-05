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

  mounted() {
    this.createVideoDom(this.isControls);
  },

  methods: {
    createVideoDom(flag) {
      new ChimeeMobilePlayer({
        wrapper: "#wrapper", // video dom容器
        src: "http://cdn.toxicjohann.com/lostStar.mp4",
        autoplay: false,
        poster:
          "http://b.hiphotos.baidu.com/image/h%3D300/sign=c8a9d4e2841363270aedc433a18fa056/11385343fbf2b2114a65cd70c48065380cd78e41.jpg",
        controls: flag,
        playsInline: true,
        preload: "auto",
        x5VideoPlayerFullscreen: true,
        x5VideoOrientation: "landscape|portrait",
        xWebkitAirplay: true,
        muted: true
        // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
      });
    }
  },

  watch: {
    isControls:function(flag){
      return flag;
    }
  }
};
</script>
<style lang='' scoped>
.video {
  width: 100%;
  /* height: 200px; */
  overflow: hidden;
}
</style>