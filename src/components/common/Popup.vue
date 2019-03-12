<template>
  <div v-transfer-dom>
    <popup v-model="isShow" :hide-on-blur="true" @on-hide="hide">
      <div class="popup2">
        <VideoPlayer :isControls="isControls"></VideoPlayer>
        <div class="navigaion-video-detail-wrap">
          <p class="navigaion-video-detail-p">
            <span class="dot"></span>
            <span>龙王宫</span>
          </p>
          <p class="navigaion-video-detail-con">{{content}}</p>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>

import { TransferDom, Popup } from "vux";
import VideoPlayer from "@/components/common/VideoPlayer";

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    VideoPlayer
  },
  data() {
    return {
      show: false,
      isControls:true,
      content:'龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍龙王宫介绍'
    };
  },
  methods: {
    hide() {
      this.$store.commit("changeNavigationDetailsState", false);
    }
  },
  computed: {
    isShow: {
      get: function() {
        return this.$store.state.navigationDetails;
      },
      set: function() {}
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/close.less";

.popup2 {
  padding-bottom: 15px;
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #fff;
}
.navigaion-video-detail-wrap{
  padding: 10px;
  box-sizing: border-box
}
.navigaion-video-detail-p{
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.dot{
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 50%;
  background: #222;
  margin-right: 6px;
}
</style>