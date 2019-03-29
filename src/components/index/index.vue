<template>
  <div class="view-box-wrap">
    <TabContent></TabContent>
    <Kachuo-Bottom-Tab></Kachuo-Bottom-Tab>
  </div>
</template>

<script>

import { XHeader, TransferDom } from "vux";
import TabContent from "@/components/layout/TabContent";
import Header from "@/components/common/Header";
import KachuoBottomTab from "@/components/pages/tabindex/KachuoBottomTab";
import Vue from "vue";
import {AdvertiseLoop} from "@/servers/api";

export default {
  directives: {
    TransferDom
  },
  name: "app",
  data() {
    return {
      title: "",
      showBackOptions: false,
      showRightOptions: false,
      cordova: Vue.cordova,
      plugins: {
        "cordova-plugin-camera": function() {
          if (!Vue.cordova.camera) {
            window.alert("Vue.cordova.camera not found !");
            return;
          }
          Vue.cordova.camera.getPicture(
            imageURI => {
              window.alert("Photo URI : " + imageURI);
            },
            message => {
              window.alert("FAILED : " + message);
            },
            {
              quality: 50,
              destinationType: Vue.cordova.camera.DestinationType.FILE_URI
            }
          );
        },
        "cordova-plugin-device": function() {
          if (!Vue.cordova.device) {
            window.alert("FAILED : device information not found");
          } else {
            window.alert(
              "Device : " +
                Vue.cordova.device.manufacturer +
                " " +
                Vue.cordova.device.platform +
                " " +
                Vue.cordova.device.version
            );
          }
        },
        "cordova-plugin-geolocation": function() {
          if (!Vue.cordova.geolocation) {
            window.alert("Vue.cordova.geolocation not found !");
            return;
          }
          Vue.cordova.geolocation.getCurrentPosition(
            position => {
              window.alert(
                "Current position : " +
                  position.coords.latitude +
                  "," +
                  position.coords.longitude
              );
            },
            error => {
              window.alert("FAILED Error #" + error.code + " " + error.message);
            },
            {
              timeout: 1000,
              enableHighAccuracy: true
            }
          );
        },
        "cordova-plugin-contacts": function() {
          if (!Vue.cordova.contacts) {
            window.alert("Vue.cordova.contacts not found !");
            return;
          }
          const ContactFindOptions = ContactFindOptions || function() {};
          Vue.cordova.contacts.find(
            ["displayName"],
            contacts => {
              window.alert("Contacts found : " + contacts.length);
            },
            error => {
              window.alert("FAILED : " + error.code);
            }
          );
        }
      }
    };
  },
  components: {
    XHeader,
    Header,
    KachuoBottomTab,
    TabContent
  },
  methods: {
    // 判断当前路由，浏览器刷新路由不变
    changeVuexCurrentRoute() {
      this.$store.commit("changeCurrentRouteVal", this.$route.path);
    },
    pluginEnabled: function(pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1;
    }
  },
  created() { 
  },
  mounted() {
    this.changeVuexCurrentRoute();
  },
  computed: {
    showCurrentTitle() {
      return this.$store.state.titleObj;
    }
  },
  watch: {

  }
};
</script>

<style lang="less">
.view-box-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
