<template>
  <div class="scence-story-details-desc-wrap">
    <div class="scence-story-details-desc-title">
      <p class="scence-story-details-desc-name text-overflow-hidden">{{dataObj.title}}</p>
      <p class="scence-story-details-desc-click">
        <GiveLike class="scence-story-details-like"></GiveLike>
      </p>
      <p>{{dataObj.praise_num}}</p>
    </div>
    <div
      class="scence-story-details-desc-con text-show-line4"
      v-if="!showDetailsFlag"
      @click="showDetails"
    >{{dataObj.content}}</div>
    <div
      class="scence-story-details-desc-con-normal"
      v-else-if="showDetailsFlag"
      @click="showDetails"
    >{{dataObj.content}}</div>
  </div>
</template>

<script>
import GiveLike from "@/components/common/GiveLike";

export default {
  name: "",
  props: ["dataObj"],
  data() {
    return {
      desc:
        "云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟云雾山：一团火焰看山娟一团火焰看山娟一团火焰看山娟",
      showDetailsFlag: false
    };
  },

  components: {
    GiveLike
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    showDetails() {
      this.showDetailsFlag = !this.showDetailsFlag;
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-story-details-desc-wrap {
  padding: 0 15px;
  box-sizing: border-box;
}
.scence-story-details-desc-title {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.scence-story-details-desc-name {
  flex: 3;
  font-weight: bold;
}
.scence-story-details-desc-click {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.scence-story-details-like {
  width: 30px;
  height: 30px;
  position: relative;
  left: 18px;
  top: -1px;
}
.scence-story-details-desc-con {
  width: 100%;
  height: 74px;
  font-size: 12px;
}
.scence-story-details-desc-con-normal {
  width: 100%;
  min-height: 74px;
  height: auto;
  font-size: 12px;
}
</style>