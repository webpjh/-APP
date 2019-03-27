<template>
  <div class="confirm-order-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="confirm-order-content" :style="scenceGiftsContent"></div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { getDetail } from "@/servers/api";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "确认订单",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header
  },

  computed: {
    scenceGiftsContent() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getGoodsDetailsInfo();
  },

  methods: {
    getGoodsDetailsInfo() {
      getDetail({
        goods_id: this.$route.query.id
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.confirm-order-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.confirm-order-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
}
</style>