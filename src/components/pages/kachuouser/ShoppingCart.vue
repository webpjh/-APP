<template>
  <div class="order-list-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="order-list-content" :style="orderListCon">
      <SwiperOut :dataListCon="dataList"></SwiperOut>
      <DividedArea></DividedArea>
      <Divider :content="desc"></Divider>
      <GoodsList></GoodsList>
    </div>
    <div class="bot-method-wrap">
      <span>共计：¥200.00</span>
      <div class="sub-btn">下单</div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import Header from "@/components/common/Header";
import SwiperOut from "@/components/common/SwiperOut";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";
import GoodsList from "@/components/layout/GoodsList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      desc: "精选好物",
      TitleObjData: {
        titleContent: "购物车",
        showLeftBack: true,
        showRightMore: false
      },
      dataList: [
        {
          img:
            "http://c.hiphotos.baidu.com/image/h%3D300/sign=58e2e7aada3f8794ccff4e2ee21a0ead/728da9773912b31b7af6c93b8818367adab4e10e.jpg",
          name: "作品名称",
          price: "¥200",
          num: "1",
          specifications: "20*30cm"
        },
        {
          img:
            "http://c.hiphotos.baidu.com/image/h%3D300/sign=58e2e7aada3f8794ccff4e2ee21a0ead/728da9773912b31b7af6c93b8818367adab4e10e.jpg",
          name: "作品名称",
          price: "¥200",
          num: "1",
          specifications: "20*30cm"
        },
        {
          img:
            "http://c.hiphotos.baidu.com/image/h%3D300/sign=58e2e7aada3f8794ccff4e2ee21a0ead/728da9773912b31b7af6c93b8818367adab4e10e.jpg",
          name: "作品名称",
          price: "¥200",
          num: "1",
          specifications: "20*30cm"
        }
      ]
    };
  },

  components: {
    Header,
    SwiperOut,
    DividedArea,
    GoodsList,
    Divider,
    XButton
  },

  computed: {
    orderListCon() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
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
.order-list-content {
  width: 100%;
  margin-top: 50px;
  background: #f9f9f9;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 60px;
}
.bot-method-wrap {
  width: 100%;
  height: 50px;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #f9f9f9;
}
.sub-btn {
  width: 100px;
  height: 40px;
  border-radius: 0;
  background: #222;
  color: #fff;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  margin-left: 20px;
}
</style>