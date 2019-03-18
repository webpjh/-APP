<template>
  <div class="order-list-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <Tab style="margin-top:50px" :tabList="tabListCon"></Tab>
    <div class="con-hei-wrap" :style="conSty">
      <OrderStateList :orderData="dataList"></OrderStateList>
    </div>
  </div>
</template>

<script>

import Header from "@/components/common/Header";
import Tab from "@/components/common/Tab";
import OrderStateList from "@/components/layout/OrderStateList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "订单",
        showLeftBack: true,
        showRightMore: false
      },
      tabListCon: ["全部订单", "待付款", "待发货", "待收货"],
      dataList: [
        {
          classify: "景区好礼",
          orderState: "已完成",
          goodImg:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "书法",
          spec: "60cm",
          price: "220",
          count: "1",
          date: "2018-01-1",
          priceCount: "300"
        },
        {
          classify: "景区好礼",
          orderState: "已完成",
          goodImg:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "书法",
          spec: "60cm",
          price: "220",
          count: "1",
          date: "2018-01-1",
          priceCount: "300"
        },
        {
          classify: "景区好礼",
          orderState: "已完成",
          goodImg:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "书法",
          spec: "60cm",
          price: "220",
          count: "1",
          date: "2018-01-1",
          priceCount: "300"
        },
        {
          classify: "景区好礼",
          orderState: "已完成",
          goodImg:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "书法",
          spec: "60cm",
          price: "220",
          count: "1",
          date: "2018-01-1",
          priceCount: "300"
        },
        {
          classify: "景区好礼",
          orderState: "已完成",
          goodImg:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          name: "书法",
          spec: "60cm",
          price: "220",
          count: "1",
          date: "2018-01-1",
          priceCount: "300"
        }
      ]
    };
  },

  components: {
    Header,
    Tab,
    OrderStateList
  },

  computed: {
    conSty() {
      return { height: document.documentElement.clientHeight - 60 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.order-list-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.con-hei-wrap {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background: #f9f9f9;
  padding-bottom: 50px;
  box-sizing: border-box;
}
</style>