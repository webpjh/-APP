<template>
  <div v-transfer-dom>
    <popup v-model="showRescue" @on-hide="hide" @on-show="showModel">
      <div class="rescue-wrap">
        <p class="rescue-title">一键救援</p>
        <div class="rescue-content">
          <span class="iconfont iconyijianjiuyuan"></span>
          <a href="tel: 15701309073">15701309073</a>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import { TransferDom, Popup, Group } from "vux";
export default {
  directives: {
    TransferDom
  },
  name: "",
  props: [],
  data() {
    return {
      show: false
    };
  },

  components: {
    Popup,
    Group
  },

  computed: {
    showRescue: {
      get() {
        return this.$parent.showRescueP;
      },
      set() {}
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    hide() {
      this.$parent.showRescueP = false;
    },
    showModel() {
      this.$parent.showRescueP = true;
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.rescue-wrap {
  padding: 0 15px 10px;
  height: 200px;
  background: #fff;
}
.rescue-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
.rescue-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
</style>