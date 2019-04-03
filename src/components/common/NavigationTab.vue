<template>
    <tab :line-width="3" bar-position="top" custom-bar-width="40px">
      <tab-item v-for="(item,index) in dataList" :selected="index === 0" :key="index" @on-item-click="onItemClick">{{item}}</tab-item>
    </tab>
</template>

<script>
import { Tab, TabItem } from "vux";
export default {
  name: "",
  props: ["dataList"],
  data() {
    return {
      
    };
  },

  components: {
    Tab,
    TabItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    onItemClick(index) {
      this.$emit("changePath",index)
    }
  },

  watch: {}
};
</script>
<style lang='' scoped>
</style>