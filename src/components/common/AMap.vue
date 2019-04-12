<template>
  <div>
    <div class="amap-page-container">
      <div id="container" :style="mapHeight" class="amap-demo"></div>
    </div>
    <Popup class="content-model" ref="videoWrap" :dataPosition="clickPosition"></Popup>
  </div>
</template>

<script>
let map = null;
import locationIcon from "@/assets/images/location-icon.png";
import { getCurrentPositionByCurrentScenicId } from "@/assets/js/tools";
import { getScenicMerchants } from "@/servers/api";
import Popup from "@/components/common/PopupMerchants";
export default {
  name: "",
  props: ["mapHeight"],
  data() {
    return {
      mapCenter: [],
      markerArr: [],
      showModelFlag: false,
      clickPosition: {}
    };
  },

  components: {
    Popup
  },

  computed: {},

  beforeMount() {},
  created() {},
  mounted() {
    this.getUserClick();
  },

  methods: {
    getUserClick() {
      let type = this.$route.query.type;
      if (type) {
        this.getMapCenterPosition(type);
      } else {
        this.getMapCenterPosition("1");
      }
    },
    showModel(id) {
      this.$refs.videoWrap.getScenicDetails(id);
    },
    // 添加商家标记
    getMerchantsData(type) {
      let markerArr = [];
      getScenicMerchants({
        scenicid: sessionStorage.getItem("currentScenic"),
        type: type
      })
        .then(res => {
          if (res.result === 1) {
            if (res.data.length) {
              for (let i = 0; i < res.data.length; i++) {
                markerArr.push({
                  position: [
                    parseFloat(res.data[i].longitude),
                    parseFloat(res.data[i].latitude)
                  ],
                  label: res.data[i].name,
                  id: res.data[i].id
                });
              }
            }
          }
          if (markerArr.length) {
            this.showMarker(markerArr);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getMapCenterPosition(type) {
      let id = sessionStorage.getItem("currentScenic");
      getCurrentPositionByCurrentScenicId(id)
        .then(res => {
          this.mapCenter = res.split(",");
          this.init(type);
        })
        .catch(err => {
          console.log(err);
        });
    },
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
          content: item.label,
          id: item.id
        });
        marker.on("click", item => {
          this.showModel(item.target.Uh.label.id);
        });
      });
    },
    init(type) {
      //获取地图初始化中心点
      // 初始化地图
      map = new AMap.Map("container", {
        center: this.mapCenter,
        resizeEnable: true,
        zoom: 16,
        features: ["bg", "road", "building"]
      });
      map.clearMap();
      map.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
      // 获取标记点
      this.getMerchantsData(type);
    }
  },
  updated() {},
  watch: {}
};
</script>
<style lang='css' scoped>
.amap-page-container {
  position: relative;
}
.content-model {
  position: relative;
  z-index: 9999;
}
</style>