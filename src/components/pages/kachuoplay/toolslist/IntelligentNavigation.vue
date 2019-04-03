<template>
  <div class="amap-page-container">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div id="container" :style="setMapHeight" class="amap-demo"></div>
    <!-- <Popup class="content-model" v-show="showModelFlag"></Popup> -->
    <NavigationTab :dataList="tabList" v-on:changePath="showPath"></NavigationTab>
  </div>
</template>

<script>
let map = null;
import Header from "@/components/common/Header";
import NavigationTab from "@/components/common/NavigationTab";
import Popup from "@/components/common/Popup";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { SCENICSPOT, SCENICLINE } from "@/assets/scencedata/penglai";
import locationIcon from "@/assets/images/location-icon.png";
import kachuoKocationIcon from "@/assets/images/kachuo-location-icon.png";

export default {
  name: "amap-page",
  data() {
    return {
      TitleObjData: {
        titleContent: "智慧导航",
        showLeftBack: true,
        showRightMore: false
      },
      tabList: [
        "全景图",
        "登山图",
        "寻花图",
        "戏水图",
        "访仙图",
        "问佛图",
        "探古图"
      ],
      count: 1,
      roadPath: []
    };
  },
  components: {
    Header,
    Popup,
    NavigationTab
  },
  methods: {
    init() {
      map = new AMap.Map("container", {
        center: [120.752564, 37.825461],
        resizeEnable: true,
        zoom: 18,
        features: ["bg", "road", "building"]
      });
      map.clearMap();
      SCENICSPOT.forEach(function(item, index) {
        if (item.label === "卡戳艺术馆") {
          var marker = new AMap.Marker({
            map: map,
            icon: kachuoKocationIcon,
            position: [item.position[0], item.position[1]],
            offset: new AMap.Pixel(-13, -30)
          });
        } else {
          var marker = new AMap.Marker({
            map: map,
            icon: locationIcon,
            position: [item.position[0], item.position[1]],
            offset: new AMap.Pixel(-13, -30)
          });
        }
        marker.setLabel({
          offset: new AMap.Pixel(20, 20),
          content: item.label
        });
        marker.on("click", function(item) {
          let con = item.target.Uh.label.content;
          console.log(con);
        });
      });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
      if (this.roadPath.length) {
        let bezierCurve = new AMap.BezierCurve({
          path: this.roadPath,
          isOutline: true,
          outlineColor: "#fff",
          borderWeight: 0,
          strokeColor: "#666",
          strokeOpacity: 1,
          strokeWeight: 2,
          strokeStyle: "dashed",
          strokeDasharray: [10, 10],
          lineJoin: "round",
          lineCap: "round",
          zIndex: 50
        });
        bezierCurve.setMap(map);
        map.setFitView([bezierCurve]);
      }
    },

    showPath(index) {
      this.roadPath = [];
      this.roadPath = SCENICLINE[index].path;
      this.init();
    },
    showModel(position) {
      console.log(position);
      this.$store.commit("changeNavigationDetailsState", true);
    },
    onClick() {
      this.count += 1;
    },
    changePosition() {
      console.log("changePosition");
    },
    chnageDraggle() {
      console.log("chnageDraggle");
    },
    toggleVisible() {
      console.log("toggleVisible");
    },
    addMarker() {
      let marker = {
        position: []
      };
      this.markers.push(marker);
    }
  },
  computed: {
    setMapHeight() {
      return { height: document.documentElement.clientHeight - 90 + "px" };
    },
    showModelFlag: {
      get: function() {
        return this.$store.state.navigationDetails;
      },
      set: function() {}
    }
  },
  mounted() {
    this.roadPath = SCENICLINE[0].path;
    this.init();
  }
};
</script>
<style lang="css" scoped>
.amap-demo {
  width: 100%;
  height: 300px;
  margin-top: 50px;
}

.amap-page-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-model {
  position: relative;
  z-index: 9999;
}
</style>
