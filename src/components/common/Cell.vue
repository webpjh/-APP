<template>
    <group title style="border:none">
      <cell class="cell-sty" :title="item.title" is-link v-for="(item,index) in cellList" :key="index">
        <img slot="icon" style class="img-sty" :link="item.link" :src="item.icon">
      </cell>
    </group>
</template>

<script>
import { Cell, Group } from "vux";

export default {
  props: {
    cellList: {
      type: Array,
      required: true
    }
  },
  mounted() {},
  components: {
    Group,
    Cell
  },
  methods: {
    onClick() {
      console.log("on click");
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.img-sty {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  top: 2px;
}
.cell-sty{}
</style>