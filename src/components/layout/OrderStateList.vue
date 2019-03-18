<template>
  <div>
    <div class="order-state-list-wrap" v-for="(item,index) in orderData" :key="index">
      <div class="order-state-list-top">
        <p>{{item.classify}}</p>
        <p>
          <span>{{item.orderState}}</span>
          <span></span>
        </p>
      </div>
      <div class="order-state-list-mid">
        <div class="order-state-list-mid-left">
          <img
            class="goods-img"
            :src="item.goodImg"
            alt
            srcset
          >
          <p class="goods-img-desc">
            <span class="text-overflow-hidden">{{item.name}}</span>
            <span class="font-12-px">{{item.spec}}</span>
          </p>
        </div>
        <div class="order-state-list-mid-right">
          <p>{{item.price}}</p>
          <p class="font-12-px">{{item.count}}</p>
          <p>使用说明</p>
        </div>
      </div>
      <div class="order-state-list-bot">
        <p class="order-state-list-bot-top">
          <span>创建时间：{{item.date}}</span>
          <span>共1件</span>
          <span>应付总额：{{item.priceCount}}</span>
        </p>
        <div class="order-state-list-bot-bot">
          <p>
            <x-button type="primary" mini>取消订单</x-button>
          </p>
          <p style="margin-left:20px">
            <x-button type="warn" mini>立即付款</x-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
export default {
  name: "",
  props: ["orderData"],
  data() {
    return {};
  },

  components: {
    XButton
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.font-12-px {
  font-size: 12px;
  color: #999;
}
.order-state-list-wrap {
  width: 100%;
  height: 180px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #fff;
}
.order-state-list-top {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.order-state-list-mid {
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.order-state-list-bot {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.order-state-list-mid-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.order-state-list-mid-right {
  flex: 1;
  text-align: right;
}
.goods-img {
  width: 50px;
  height: 50px;
  display: inline-block;
}
.goods-img-desc {
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;
}
.order-state-list-bot-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
}
.order-state-list-bot-bot {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>