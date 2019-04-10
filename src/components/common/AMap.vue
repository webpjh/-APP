<template>
  <div class="amap-page-container">
    <div id="container" :style="mapHeight" class="amap-demo"></div>
  </div>
</template>

<script>
let map = null;
import locationIcon from "@/assets/images/location-icon.png";
export default {
  name: "",
  props: ["mapHeight"],
  data() {
    return {
      mapCenter: [116.386831,39.933229]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.init();
  },

  methods: {
    showMarker(markArr) {
      markArr.forEach((item, index) => {
        var marker = new AMap.Marker({
          map: map,
          icon: locationIcon,
          position: [item.position[0], item.position[1]],
          offset: new AMap.Pixel(-13, -30)
        });
        marker.setLabel({
          offset: new AMap.Pixel(20, 20),
          content: item.label
        });
        marker.on("click", item => {
          console.log(marker);
        });
      });
    },
    init() {
      map = new AMap.Map("container", {
        center: this.mapCenter,
        resizeEnable: true,
        zoom: 14,
        features: ["bg", "road", "building"]
      });
      map.clearMap();
      map.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.amap-page-container {
  position: relative;
}
</style>