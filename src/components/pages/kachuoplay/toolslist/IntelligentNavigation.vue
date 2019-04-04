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
let scenicDataObj = {};

import {
  SCENICSPOT as SCENICSPOT_A,
  SCENICLINE as SCENICLINE_A
} from "@/assets/scencedata/cangyanshan";
import {
  SCENICSPOT as SCENICSPOT_B,
  SCENICLINE as SCENICLINE_B
} from "@/assets/scencedata/huizhou";
import {
  SCENICSPOT as SCENICSPOT_C,
  SCENICLINE as SCENICLINE_C
} from "@/assets/scencedata/penglai";
import {
  SCENICSPOT as SCENICSPOT_D,
  SCENICLINE as SCENICLINE_D
} from "@/assets/scencedata/shaolin";
import {
  SCENICSPOT as SCENICSPOT_E,
  SCENICLINE as SCENICLINE_E
} from "@/assets/scencedata/shenhu";
import {
  SCENICSPOT as SCENICSPOT_F,
  SCENICLINE as SCENICLINE_F
} from "@/assets/scencedata/yunwushan";
import {
  SCENICSPOT as SCENICSPOT_G,
  SCENICLINE as SCENICLINE_G
} from "@/assets/scencedata/sankong";
import {
  SCENICSPOT as SCENICSPOT_H,
  SCENICLINE as SCENICLINE_H
} from "@/assets/scencedata/yungang";

import Header from "@/components/common/Header";
import NavigationTab from "@/components/common/NavigationTab";
import Popup from "@/components/common/Popup";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import locationIcon from "@/assets/images/location-icon.png";
import kachuoKocationIcon from "@/assets/images/kachuo-location-icon.png";
import { CheckByLocation } from "@/servers/api";
import { setTimeout } from "timers";
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
      scenicList: [
        {
          id: "22",
          name: "苍岩山",
          position: [114.145831, 37.831976]
        },
        {
          id: "23",
          name: "徽州古城",
          position: [118.434598, 29.867]
        },
        {
          id: "24",
          name: "蓬莱",
          position: [120.752564, 37.825461]
        },
        {
          id: "25",
          name: "少林",
          position: [112.95978, 34.520026]
        },
        {
          id: "26",
          name: "神垕",
          position: [113.228142, 34.118356]
        },
        {
          id: "27",
          name: "云雾山",
          position: [114.214391, 31.12476]
        },
        {
          id: "35",
          name: "三孔",
          position: [116.989873, 35.590745]
        },
        {
          id: "66",
          name: "云冈石窟",
          position: [113.144103, 40.109236]
        }
      ],
      count: 1,
      roadPath: [],
      mapCenter: [],
      path: [],
      SCENICSPOT: [],
      SCENICLINE: []
    };
  },
  components: {
    Header,
    Popup,
    NavigationTab
  },
  methods: {
    getDataPromise(path) {
      let obj = {};
      import(path).then(res => {
        console.log(res);
        obj.SCENICLINE = JSON.parse(JSON.stringify(res.SCENICLINE));
        obj.SCENICSPOT = JSON.parse(JSON.stringify(res.SCENICSPOT));
      });
      return obj;
    },
    importDataSync(id) {
      let dataObj = {};
      switch (id) {
        case "22":
          this.SCENICSPOT = SCENICSPOT_A;
          this.SCENICLINE = SCENICLINE_A;
          break;
        case "23":
          this.SCENICSPOT = SCENICSPOT_B;
          this.SCENICLINE = SCENICLINE_B;
          break;
        case "24":
          this.SCENICSPOT = SCENICSPOT_C;
          this.SCENICLINE = SCENICLINE_C;
          break;
        case "25":
          this.SCENICSPOT = SCENICSPOT_D;
          this.SCENICLINE = SCENICLINE_D;
          break;
        case "26":
          this.SCENICSPOT = SCENICSPOT_E;
          this.SCENICLINE = SCENICLINE_E;
          break;
        case "27":
          this.SCENICSPOT = SCENICSPOT_F;
          this.SCENICLINE = SCENICLINE_F;
          break;
        case "35":
          this.SCENICSPOT = SCENICSPOT_G;
          this.SCENICLINE = SCENICLINE_G;
          break;
        case "66":
          this.SCENICSPOT = SCENICSPOT_H;
          this.SCENICLINE = SCENICLINE_H;
          break;
      }
      return dataObj;
    },
    initLocalData() {
      let scenicId = sessionStorage.getItem("currentScenic");
      let data = this.importDataSync(scenicId);
      for (let i = 0; i < this.scenicList.length; i++) {
        if (this.scenicList[i].id == scenicId) {
          this.mapCenter = this.scenicList[i].position;
        }
      }
      this.path = this.SCENICSPOT;
      this.SCENICLINE = this.SCENICLINE;
      this.roadPath = this.SCENICLINE[0].path;
      this.init();
    },
    init() {
      map = new AMap.Map("container", {
        center: this.mapCenter,
        resizeEnable: true,
        zoom: 18,
        features: ["bg", "road", "building"]
      });
      map.clearMap();
      this.path.forEach(function(item, index) {
        if (item.label.indexOf("卡戳文化艺术馆") != -1) {
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
      } else {
        this.$vux.toast.text("暂无推荐路线", "middle");
        setTimeout(() => {
          this.$vux.toast.hide();
        }, 1000);
      }
    },

    showPath(index) {
      this.roadPath = [];
      this.roadPath = this.SCENICLINE[index].path;
      this.init(this.mapCenter, this.path);
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
    this.initLocalData();
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
