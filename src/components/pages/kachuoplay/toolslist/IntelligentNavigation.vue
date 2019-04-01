<template>
  <div class="amap-page-container">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div id="container" style="width:100%; height:300px" class="amap-demo"></div>
    <!-- <el-amap
      vid="amapDemo"
      :zoom="zoom"
      :map-manager="amapManager"
      :center="center"
      :events="events"
      class="amap-demo"
    >
      <el-amap-marker vid="component-marker"></el-amap-marker>
      <el-amap-marker
        v-for="(marker, index) in markers"
        :position="marker.position"
        :events="marker.events"
        :vid="index"
        :key="index"
        animation="AMAP_ANIMATION_DROP"
      ></el-amap-marker>
    </el-amap>-->
    <Popup class="content-model" v-show="showModelFlag"></Popup>
  </div>
</template>

<script>
let path = [
  //每个弧线段有两种描述方式
  [116.39, 39.91, 116.37, 39.91], //起点
  //第一段弧线
  [116.380298, 39.907771, 116.38, 39.9], //控制点，途经点
  //第二段弧线
  [116.385298, 39.907771, 116.4, 39.9], //控制点，途经点//弧线段有两种描述方式1
  //第三段弧线
  [
    //弧线段有两种描述方式2
    [116.392872, 39.887391], //控制点
    [116.40772, 39.909252], //控制点
    [116.41, 39.89] //途经点
  ],
  //第四段弧线
  [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
  //控制点，控制点，途经点，每段最多两个控制点
];
let map = null;
import Header from "@/components/common/Header";
import { amapManager } from "vue-amap";
import Popup from "@/components/common/Popup";
import { lazyAMapApiLoaderInstance } from "vue-amap";
const exampleComponents = {
  props: ["text"],
  template: `<div>{{text}}</div>`
};

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
      },
      zoom: 16,
      center: [120.752564, 37.825461],
      amapManager,
      markers: [
        {
          iconLabel: "A",
          iconStyle: "red",
          position: [120.752564, 37.825461],
          events: {
            click: () => {
              this.showModel("120.752564, 37.825461");
            }
          }
        },
        {
          position: [120.753701, 37.827308],
          events: {
            click: () => {
              this.showModel("120.753701, 37.827308");
            }
          }
        },
        {
          position: [120.756319, 37.827512],
          events: {
            click: () => {
              this.showModel("120.756319, 37.827512");
            }
          }
        }
      ],
      events: {
        init(map) {
          // AMapUI.loadUI(["overlay/SimpleMarker"], function(SimpleMarker) {
          //   const marker = new SimpleMarker({
          //     iconLabel: "A",
          //     iconStyle: "red",
          //     map: map,
          //     position: map.getCenter()
          //   });
          // });
        }
      }
    };
  },
  components: {
    Header,
    Popup
  },
  methods: {
    init() {
      console.log(AMap)
      map = new AMap.Map("container", {
        center: [120.752564, 37.825461],
        resizeEnable: true,
        zoom: 16
      });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
      var bezierCurve = new AMap.BezierCurve({
        path: path,
        isOutline: true,
        outlineColor: "#ffeeff",
        borderWeight: 3,
        strokeColor: "#3366FF",
        strokeOpacity: 1,
        strokeWeight: 6,
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
