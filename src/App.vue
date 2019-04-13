<template>
  <div id="#app-box" class="app-box">
    <transition :name="transitionName">
      <navigation>
        <router-view class="router-animate"/>
      </navigation>
    </transition>
    <loading v-model="isLoading"></loading>
    <confirm
      v-model="showModel"
      title="版本更新"
      :show-cancel-button="isForceUpdata"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
    >
      <p style="text-align:center;">{{modelContent}}</p>
    </confirm>
  </div>
</template>

<script>
import { vueCordovaFunction } from "@/assets/js/vuecordova";
import { Loading, Confirm } from "vux";
import { CheckByLocation } from "@/servers/api";
import { appVersion, updateAPPVersion } from "@/assets/js/common";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  components: {
    Loading,
    Confirm
  },
  mounted() {
    vueCordovaFunction.getLocation();
    vueCordovaFunction.socialShare();
    appVersion();
  },
  beforeRouteUpdate(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    showModel: {
      get: function() {
        return this.$store.state.showActionDialog;
      },
      set: function() {}
    },
    isForceUpdata: {
      get: function() {
        return this.$store.state.appUpdateInfo.isForce;
      }
    },
    modelContent: {
      get: function() {
        return this.$store.state.appUpdateInfo.content;
      }
    }
  },
  methods: {
    onCancel() {},
    onConfirm() {
      updateAPPVersion();
    }
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
.app-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.router-animate {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0.5;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
