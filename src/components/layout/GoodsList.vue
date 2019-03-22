<!--
商品列表
-->
<template>
  <div class="goods-list-wrap">
    <div class="goods-list" v-for="(item,index) in goodList" :key="index" @click="watchGoodsDetails(item.id)">
      <img class="goods-img" v-lazy="item.thumb">
      <div class="good-desc-wrap">
        <p class="goods-name">{{item.title}}</p>
        <p class="goods-price">¥{{item.marketprice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Divider } from "vux";

export default {
  name: "",
  props: ["goodList"],
  data() {
    return {
      dataList: []
    };
  },

  components: {
    Divider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    watchGoodsDetails(id){
      this.$router.push("/goodsdetails?id="+id);
    }
  },

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