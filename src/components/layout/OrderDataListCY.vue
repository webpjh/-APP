<template>
  <div>
    <group v-for="(item,index) in orderData" :key="index">
      <cell title="订单编号：" class="order-title" :value="item.order"></cell>
      <div class="data-list">
        <p>
          <span>标签：</span>
          <span>{{item.label}}</span>
        </p>
        <p>
          <span>释义：</span>
          <span>{{item.explains}}</span>
        </p>
        <p>
          <span>元素：</span>
          <span>{{item.element}}</span>
        </p>
        <p>
          <span>解读：</span>
          <span>{{item.unscramble}}</span>
        </p>
        <p>
          <span>佣金：</span>
          <span>{{item.price}}</span>
        </p>
        <p>
          <span>订单状态</span>
          <span>{{item.state | formOrderState}}</span>
        </p>
        <p>
          <span>下单时间：</span>
          <span>{{item.created_time | formTime}}</span>
        </p>
      </div>
    </group>
  </div>
</template>

<script>
import { CellFormPreview, Group, Cell } from "vux";
import { timeTodate } from "@/assets/js/tools";
export default {
  name: "",
  props: ["orderData"],
  data() {
    return {

    };
  },

  components: {
    CellFormPreview,
    Group,
    Cell
  },
  filters: {
    formTime(val) {
      return timeTodate(val);
    },
    formOrderState(val) {
      switch (val) {
        case "0":
          return "审核中";
          break;
        case "1":
          return "审核通过";
          break;
        case "2":
          return "审核不通过";
          break;
      }
    }
  },
  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.data-list {
  width: 100%;
  height: auto;
  padding: 0 15px;
  box-sizing: border-box;
  padding-bottom: 10px;
}
.data-list p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.order-title {
  border-bottom: 1px solid #eee;
}
</style>