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
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "艺品租赁",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "艺品寄卖",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "信息消费",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
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
.tab-item-mall-wrap{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>