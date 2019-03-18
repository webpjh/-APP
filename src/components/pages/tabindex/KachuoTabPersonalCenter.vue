<template>
  <div class="tab-personal-center-wrap">
    <TabPersonCenterHeader></TabPersonCenterHeader>
    <AppUserInfo></AppUserInfo>
    <Cell class="margin-top-10px" :cellList="cellListToolsA"></Cell>
    <Cell class="margin-top-10px" :cellList="cellListToolsB"></Cell>
    <Cell class="margin-top-10px" :cellList="cellListToolsC"></Cell>
  </div>
</template>

<script>

import TabPersonCenterHeader from "@/components/layout/TabItemPersonHeader.vue";
import AppUserInfo from "@/components/layout/AppUserInfo.vue";
import DividedArea from "@/components/common/DividedArea.vue";
import Cell from "@/components/common/Cell.vue";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListToolsA: [
        {
          title: "通证",
          icon: "iconfont icontongzheng",
          link: "/usertoken"
        },
        {
          title: "积分",
          icon: "iconfont iconjifen",
          link: "/userintegral"
        }
      ],
      cellListToolsB: [
        {
          title: "购物车",
          icon: "iconfont icongouwuche",
          link: "/ShoppingCart"
        },
        {
          title: "订单",
          icon: "iconfont icondingdan",
          link: "/orderlist"
        }
      ],
      cellListToolsC: [
        {
          title: "收藏",
          icon: "iconfont iconshoucang",
          link: "/collection"
        },
        {
          title: "云相册",
          icon: "iconfont iconyunxiangce",
          link: "/photoalbum"
        }
      ]
    };
  },

  components: {
    TabPersonCenterHeader,
    AppUserInfo,
    DividedArea,
    Cell
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-personal-center-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.margin-top-10px {
  margin-top: 10px;
}
</style>