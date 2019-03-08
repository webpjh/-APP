<template>
  <div id="#app-box">
    <transition :name="transitionName">
      <router-view class="router-animate"/>
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
  watch: {
    $route(to, from) {
      console.log(to);
      this.$store.commit("changeCurrentRouteVal", to);
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
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
#app {
  width: 100%;
  height: 100%;
  position: fixed;
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
