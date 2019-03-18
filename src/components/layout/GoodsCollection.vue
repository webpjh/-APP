<template>
  <div>
    <div class="order-state-list-wrap" v-for="(item,index) in orderData" :key="index">
      <div class="order-state-list-mid">
        <div class="order-state-list-mid-left">
          <img class="goods-img" :src="item.goodImg" alt srcset>
          <p class="goods-img-desc">
            <span class="text-overflow-hidden">{{item.name}}</span>
            <span class="font-12-px">{{item.spec}}</span>
            <span>价格：{{item.price}}</span>
          </p>
        </div>
      </div>
      <div class="order-state-list-bot">
        <div class="order-state-list-bot-bot">
          <p>
            <x-button type="warn" mini>删除</x-button>
          </p>
          <p style="margin-left:20px">
            <x-button type="primary" mini>购买</x-button>
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
  height: 120px;
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
  flex: 1;
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
  width: 70px;
  height: 70px;
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