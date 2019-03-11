<template>
  <div class="tab-item-paly-wrap">
    <TabItemPlayHeader></TabItemPlayHeader>
    <TabItemPlayContent></TabItemPlayContent>
  </div>
</template>

<script>

import TabItemPlayHeader from '@/components/layout/TabItemPlayHeader'
import TabItemPlayContent from '@/components/layout/TabItemPlayContent'

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    TabItemPlayHeader,
    TabItemPlayContent
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-paly-wrap{
  background: #f5f5f5;
}
</style>