<template>
  <div class="wrap-scroll">
    <scroller
      :on-infinite="pullup"
      :on-refresh="refresh"
      :refreshText="refreshText"
      :noDataText="noDataText"
      style="margin-top:48px"
    >
      <list-content  :list="list"></list-content>
    </scroller>
  </div>
</template>

<script>
import ListContent from "./Content";
export default {
  components: { ListContent },
  data() {
    return {
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据"
    };
  },
  methods: {
    refresh(done) {
      console.log("refresh");
      setTimeout(() => {
        done();
      }, 2000);
    },
    pullup(done) {
      this.$store.dispatch("getData", {
        page: ++this.page,
        scb: result => {
          this.list = this.list.concat(result);
          done();
        }
      });
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
