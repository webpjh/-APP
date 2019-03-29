<template>
  <div id="#app-box" class="app-box">
    <transition :name="transitionName">
      <navigation>
        <router-view class="router-animate"/>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  beforeRouteUpdate(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  computed: {},
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
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
