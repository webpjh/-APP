<template>
  <div class="tab-item-mall-wrap">
    <TabItemMallHeader></TabItemMallHeader>
    <TabItemMallAdvertise></TabItemMallAdvertise>
    <DividedArea></DividedArea>
    <Cell :cellList="cellListTools" class="tab-item-mall-tools-wrap"></Cell>
    <DividedArea></DividedArea>
    <Divider :content="dividerContent"></Divider>
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import TabItemMallHeader from "@/components/layout/TabItemMallHeader";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import Cell from "@/components/common/Cell";
import Divider from "@/components/common/Divider";
import GoodsList from "@/components/layout/GoodsList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListTools: [
        {
          title: "吃吧",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "喝吧",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "玩吧",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        }
      ],
      dividerContent: "猜你喜欢"
    };
  },

  components: {
    TabItemMallHeader,
    TabItemMallAdvertise,
    DividedArea,
    Cell,
    Divider,
    GoodsList
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-mall-tools-wrap {
  margin-top: -20px;
}
.tab-item-mall-wrap {
  padding-bottom: 30px;
  box-sizing: border-box;
}
</style>