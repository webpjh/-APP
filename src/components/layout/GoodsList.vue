<!--
商品列表
-->
<template>
  <div class="goods-list-wrap">
    <div class="goods-list" v-for="(item,index) in dataList" :key="index">
      <img class="goods-img" :src="item.imgUrl">
      <div class="good-desc-wrap">
        <p class="goods-name">{{item.goodsName}}</p>
        <p class="goods-price">¥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Divider } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: [
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "10000"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "9999"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        }
      ]
    };
  },

  components: {
    Divider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.goods-list-wrap {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}
.goods-list {
  width: 49%;
  min-height: 80px;
  height: auto;
  margin-bottom: 20px;
}
.goods-img {
  width: 100%;
  height: 100px;
  display: inline-block;
  background: #000;
}
.goods-name {
  width: 100%;
  font-size: 12px;
  line-height: 15px;
  word-break: break-all;
  margin-top: 10px;
}
.goods-price {
  font-size: 14px;
  color: red;
  margin-top: 10px;
}
</style>