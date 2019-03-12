<template>
  <div class="tab-item-mall-wrap">
    <TabItemMallHeader></TabItemMallHeader>
    <TabItemMallAdvertise></TabItemMallAdvertise>
    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>
    <DividedArea></DividedArea>
    <Divider :content="dividerContent"></Divider>
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import TabItemMallHeader from "@/components/layout/TabItemMallHeader";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";
import Divider from "@/components/common/Divider";
import GoodsList from "@/components/layout/GoodsList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListTools: [
        {
          title: "景区消费",
          icon:
            "iconfont iconshangchengxiaofei",
          link: ""
        },
        {
          title: "景区好礼",
          icon:
            "iconfont iconshangchenghaoli",
          link: ""
        },
        {
          title: "名家秒藏",
          icon:
            "iconfont iconmingjiamiaocang",
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
    CellDivider,
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
.tab-item-mall-wrap {
  padding-bottom: 30px;
  box-sizing: border-box;
}
</style>