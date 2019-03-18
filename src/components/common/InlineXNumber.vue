<template>
  <div class="inline-number-wrap">
    <inline-x-number width="50px" :min="1" :max="999"></inline-x-number>
  </div>
</template>

<script>
import { Group, Cell, InlineXNumber } from "vux";

export default {
  components: {
    Group,
    Cell,
    InlineXNumber
  }
};
</script>
<style lang="css" scoped>
</style>
