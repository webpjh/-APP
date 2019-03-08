<template>
  <div class="tab-item-mall-header-wrap">
    <div class="tab-item-mall-left flex-wrap-center-wrap">左侧</div>
    <div class="tab-item-mall-mid">输入作品/作者名</div>
    <div class="tab-item-mall-right flex-wrap-center-wrap">右侧</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-mall-header-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top:0;
  left: 0;
  z-index: 9999;
}
.tab-item-mall-left {
  flex: 1;
}
.tab-item-mall-mid {
  flex: 4;
  width: 300px;
  height: 26px;
  line-height: 26px;
  background: #fff;
  border-radius: 20px;
  font-size: 12px;
  color: #999;
  text-align: center;
  background: #f5f5f5;
}
.tab-item-mall-right {
  flex: 1;
}
</style>