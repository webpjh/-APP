<template>
  <div class="amap-page-container">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <el-amap
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
    </el-amap>
    <Popup class="content-model" v-show="showModelFlag"></Popup>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { amapManager } from "vue-amap";
import Popup from "@/components/common/Popup";

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
