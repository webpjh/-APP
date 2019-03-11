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
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "积分",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        }
      ],
      cellListToolsB: [
        {
          title: "购物车",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "订单",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        }
      ],
      cellListToolsC: [
        {
          title: "收藏",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
        },
        {
          title: "云相册",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: ""
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
.margin-top-10px{
  margin-top: 10px;
}
</style>