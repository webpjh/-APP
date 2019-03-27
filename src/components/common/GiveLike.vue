<template>
  <div class="give-a-like-wrap">
    <span @click="giveLike">
      <span style="margin-right:10px">{{praiseNum}}</span>
      <span v-if="!clickState" class="iconfont iconzan"></span>
      <span v-else-if="clickState" class="iconfont icondianzan"></span>
    </span>
  </div>
</template>

<script>
import { NewsKachuoInpraise } from "@/servers/api";
export default {
  name: "",
  props: ["praiseNum", "clickState", "praiseNum"],
  data() {
    return {
      isCkick: false
    };
  },

  components: {},

  computed: {},

  beforeMount() {},
  created() {},
  mounted() {},

  methods: {
    giveLike() {
      let flag = this.$parent.clickState;
      let type = flag === 0 ? 1 : 0;
      this.$vux.toast.show({
        type: "success",
        text: "感谢评价",
        time: 1000,
        onHide: () => {
          this.$emit("changePhriseState", type);
        }
      });
      NewsKachuoInpraise({
        id: this.$route.query.id,
        type: type,
        branch: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
          }
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
.give-a-like-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #999;
  position: relative;
  z-index: 999;
  background: #fff;
}
</style>