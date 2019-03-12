<template>
  <div class="tab-item-mall-wrap">
    <TabItemCashHeader></TabItemCashHeader>
    <TabItemMallAdvertise></TabItemMallAdvertise>
    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>
  </div>
</template>

<script>
import TabItemCashHeader from "@/components/layout/TabItemCashHeader";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListTools: [
        {
          title: "艺品回购",
          icon: "iconfont iconyipinhuigou",
          link: ""
        },
        {
          title: "艺品租赁",
          icon: "iconfont iconyipinzulin",
          link: ""
        },
        {
          title: "艺品寄卖",
          icon: "iconfont iconyipinjimai",
          link: ""
        },
        {
          title: "信息消费",
          icon: "iconfont iconxinxixiaofei",
          link: ""
        }
      ]
    };
  },

  components: {
    TabItemCashHeader,
    TabItemMallAdvertise,
    DividedArea,
    CellDivider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    previewMethod() {},
    addImageMethod() {},
    removeImageMethod() {}
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-mall-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>