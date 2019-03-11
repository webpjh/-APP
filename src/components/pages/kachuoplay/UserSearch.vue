<template>
  <div class="tab-item-play-search-wrap">
    <Search ref="searchBox" :placeHolder="placeHolderTxt"></Search>
    <SearchModel class="search-model"></SearchModel>
  </div>
</template>

<script>
import Search from "@/components/common/Search";
import SearchModel from "@/components/layout/SearchModel";

export default {
  name: "",
  props: [""],
  data() {
    return {
      placeHolderTxt: "搜索目的地/景点/酒店/饭店"
    };
  },

  components: {
    Search,
    SearchModel
  },

  computed: {},

  beforeMount() {},

  mounted() {
    console.log(this.$refs.searchBox);
  },

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-play-search-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
}
.search-model{
  margin-top: 50px;
}
</style>