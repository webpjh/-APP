<template>
  <div class="amap-page-container">
    <el-amap
      ref="map"
      vid="amapDemo"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :plugin="plugin"
      :events="events"
      class="amap-demo"
    >
      <el-amap-marker v-for="(marker,index) in markers" :position="marker" :key="index"></el-amap-marker>
    </el-amap>
    <el-amap-search-box
      class="search-box"
      :search-option="searchOption"
      :on-search-result="onSearchResult"
    ></el-amap-search-box>
    <div class="toolbar">
      <span v-if="loaded">location: lng = {{ lng }} lat = {{ lat }}</span>
      <span v-else>正在定位</span>
    </div>
  </div>
</template>

<script>
import { amapManager } from "vue-amap";

export default {
  name: "",
  props: [""],
  data() {
    return {
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      events: {
        init: o => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity(result => {
            console.log(result);
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          // alert("map clicked");
          console.log("map clicked");
        }
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ],
      markers: [
        [121.59996, 31.197646],
        [121.40018, 31.197622],
        [121.69991, 31.207649]
      ],
      searchOption: {
        city: "上海",
        citylimit: false
      },
      mapCenter: [121.59996, 31.197646]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getMap() {
      console.log(amapManager);
    },
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      console.log(pois);
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.amap-demo {
  height: 220px;
}

.search-box {
  width: 320px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -160px;
}

.amap-page-container {
  position: relative;
}
</style>