<template>
  <tab
    v-model="index"
    prevent-default
    @on-before-index-change="switchTabItem"
    @on-item-click="onItemClick"
  >
    <tab-item
      :selected="index === 0"
      @on-item-click="onItemClick"
      v-for="(item,index) in listItem"
      :key="index"
    >{{item}}</tab-item>
  </tab>
</template>

<script>
import { Tab, TabItem } from "vux";

export default {
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      index: 0,
      listItem: ["全部订单", "待付款", "待发货", "待收货", "评价"]
    };
  },
  methods: {
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.index = index;
    },
    onItemClick(index) {
      console.log("on item click:", index);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>