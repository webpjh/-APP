<template>
  <div>
    <group title="set position">
      <x-switch title="left(100% width)" v-model="show"></x-switch>
    </group>

    <div v-transfer-dom>
      <popup v-model="show" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show = false"></span>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {
  TransferDom,
  Popup,
  Group,
  Cell,
  XButton,
  XSwitch,
  Toast,
  XAddress,
  ChinaAddressData
} from "vux";

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    Cell,
    XSwitch,
    Toast,
    XAddress,
    XButton
  },
  data() {
    return {
      show:false
    };
  },
  methods: {
    log(str) {
      console.log(str);
    }
  },
  watch: {
    show10(val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false;
        }, 1000);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/close.less";

.popup0 {
  padding-bottom: 15px;
  height: 200px;
}
.popup1 {
  width: 100%;
  height: 100%;
}
.popup2 {
  padding-bottom: 15px;
  height: 400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>