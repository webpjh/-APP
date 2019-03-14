<template>
  <scroller lock-y scrollbar-x class="scroll-wrap">
    <div class="box1">
      <div class="box1-item" v-for="i in 7" :key="i">
        <span>{{' ' + i + ' '}}</span>
      </div>
    </div>
  </scroller>
</template>

<script>
import {
  Scroller
} from "vux";

export default {
  components: {
    Scroller
  },
  data() {
    return {
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style lang="css" scoped>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 120px;
  height: 100px;
  background-color: #ccc;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>