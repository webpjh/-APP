<template>
  <group style="border:none;">
    <div v-for="(item,index) in cellList" :key="index">
      <DividedArea></DividedArea>
      <cell class="cell-sty" :title="item.title" is-link :link="item.link">
        <img slot="icon" style class="img-sty" :src="item.icon">
        <badge :text="item.badgeText" v-show="item.showBadge"></badge>
      </cell>
    </div>
  </group>
</template>

<script>
import { Cell, Group, Badge } from "vux";
import DividedArea from "@/components/common/DividedArea"

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
    Cell,
    Badge,
    DividedArea
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
</style>