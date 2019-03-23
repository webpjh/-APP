<template>
  <div class="wrapper" ref="wrapper" :scrollbar="options.scrollbar" :startY="options.startY"></div>
</template>

<script>
let count = 1;
export default {
  name: "",
  components: {},
  data() {
    return {
      options: {
        pullDownRefresh: {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
        //     pullDownRefresh: false, //关闭下拉
        //     pullUpLoad: false, // 关闭上拉
        click: true,
        probeType: 3,
        startY: 0, //欢迎加入全栈开发交流圈一起学习交流：864305860
        scrollbar: true //面向1-3年前端人员
      } //帮助突破技术瓶颈，提升思维能力
    };
  },
  created() {
    this.$nextTick(() => {
      this.load();
      this.setData();
    });
  },
  methods: {
    load() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, this.options);
        // 上拉
        this.scroll.on("pullingUp", () => {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          this.setData();
        });
      } else {
        //欢迎加入全栈开发交流圈一起学习交流：864305860
        this.scroll.refresh(); //面向1-3年前端人员
      } //帮助突破技术瓶颈，提升思维能力
    },
    setData() {
      this.$nextTick(() => {
        let arr = [1, 2, 3, "james"];
        this.data = this.data.concat(arr); // 添加数据
        this.scroll.finishPullUp();
        this.pullingDownUp();
      });
    },
    pullingDownUp() {
      this.scroll.refresh(); //重新计算元素高度
    }
  }
};
</script>

<style>
.position-box {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>