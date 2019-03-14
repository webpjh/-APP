<template>
  <div class="give-a-like-wrap">
    <span @click="giveLike">
      <!-- <span style="margin-right:10px">点赞</span> -->
      <span v-show="!isCkick" class="iconfont iconzan"></span>
      <span v-show="isCkick" class="iconfont icondianzan"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      isCkick:false
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    giveLike(){
      this.isCkick = !this.isCkick;
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
}
</style>