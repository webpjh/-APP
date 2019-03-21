<template>
  <x-address
    @on-hide="logHide"
    @on-show="logShow"
    :title="title"
    v-model="value"
    :list="addressData"
    @on-shadow-change="onShadowChange"
    placeholder="请选择地址"
    inline-desc
    :show.sync="showAddress"
    style="font-size:12px"
  ></x-address>
</template>

<script>
import {
  Group,
  XAddress,
  ChinaAddressV4Data,
  XButton,
  Cell,
  Value2nameFilter as value2name
} from "vux";

export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell
  },
  data() {
    return {
      title: "所在位置",
      value: [],
      addressData: ChinaAddressV4Data,
      showAddress: false
    };
  },
  methods: {
    onShadowChange(ids, names) {
      this.value = names;
      this.$emit("selectAddress",this.value);
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data);
    },
    logHide(str) {
      console.log("on-hide", str);
    },
    logShow(str) {
      console.log("on-show");
    }
  }
};
</script>