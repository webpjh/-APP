<template>
  <div class="amap-page-container">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div id="container" style="width:100%; height:300px" class="amap-demo"></div>
    <Popup class="content-model" v-show="showModelFlag"></Popup>
  </div>
</template>

<script>
let map = null;
import Header from "@/components/common/Header";
import { amapManager } from "vue-amap";
import Popup from "@/components/common/Popup";
import { lazyAMapApiLoaderInstance } from "vue-amap";

export default {
  name: "amap-page",
  data() {
    return {
      TitleObjData: {
        titleContent: "智慧导航",
        showLeftBack: true,
        showRightMore: false
      },
      count: 1,
      slotStyle: {
        padding: "2px 8px",
        background: "#eee",
        color: "#333",
        border: "1px solid #aaa"
      }
    };
  },
  components: {
    Header,
    Popup
  },
  methods: {
    init() {
      map = new AMap.Map("container", {
        center: [120.752564, 37.825461],
        resizeEnable: true,
        zoom: 16,
        features: ["bg", "road", "building"]
      });
      map.clearMap();
      let markers = [
        {
          icon:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png",
          position: [120.753031, 37.8198],
          label: "三官庙",
          events: {
            click: e => {
              console.log(e);
            }
          }
        },
        {
          icon:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png",
          position: [120.755842, 37.819596],
          label: "水师府",
          events: {
            click: e => {
              console.log(e);
            }
          }
        },
        {
          icon:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png",
          position: [120.755691, 37.821749],
          label: "仪门",
          events: {
            click: e => {
              console.log(e);
            }
          }
        }
      ];
      markers.forEach(function(item) {
        var marker = new AMap.Marker({
          map: map,
          icon: item.icon,
          position: [item.position[0], item.position[1]],
          offset: new AMap.Pixel(-13, -30),
          content: item.content,
          events: item.events.click
        });
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
      var path = [
        [120.75574, 37.819579],
        [120.755761, 37.821783],
        [120.756233, 37.823291],
        [120.754914, 37.823541]
      ];
      let bezierCurve = new AMap.BezierCurve({
        path: path,
        isOutline: true,
        outlineColor: "#fff",
        borderWeight: 0,
        strokeColor: "#ff3030",
        strokeOpacity: 1,
        strokeWeight: 2,
        // 线样式还支持 'dashed'
        strokeStyle: "solid",
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 10],
        lineJoin: "round",
        lineCap: "round",
        zIndex: 50
      });
      bezierCurve.setMap(map);
      map.setFitView([bezierCurve]);
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
    showModelFlag: {
      get: function() {
        return this.$store.state.navigationDetails;
      },
      set: function() {}
    }
  },
  mounted() {
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
