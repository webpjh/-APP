<!-- 
详情页评论列表
 -->
<template>
  <div class="comment-list-wrap">
    <div class="comment-list-amount">评论({{commentCount}})</div>
    <div class="comment-list-for flex-wrap" v-for="(item,index) in contentList" :key="index">
      <div class="comment-list-for-header">
        <img class="comment-list-header-img" :src="item.headerImg">
      </div>
      <div class="comment-list-content">
        <p class="comment-list-user">
          <span style="font-size:12px;">{{item.name}}</span>
          <span style="font-size:12px;margin-right:10px;color:#999">{{item.date}}</span>
        </p>
        <p class="comment-list-desc">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      commentCount: 99,
      contentList: [
        {
          headerImg:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          name: "你好啊",
          date: "2019-3-3",
          content:
            "你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊"
        },
        {
          headerImg:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          name: "你好啊",
          date: "2019-3-3",
          content:
            "你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊"
        },
        {
          headerImg:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          name: "你好啊",
          date: "2019-3-3",
          content:
            "你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊"
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.flex-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.comment-list-wrap {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
}
.comment-list-header-img {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
.comment-list-for {
  width: 100%;
  min-height: 50px;
  height: auto;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
  font-size: 12px;
}
.comment-list-for-header {
  width: 10%;
  min-height: 50px;
  height: auto;
  padding-top: 6px;
  box-sizing: border-box;
}
.comment-list-content {
  width: 90%;
  min-height: 50px;
  height: auto;
}
.comment-list-user {
  width: 100%;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.comment-list-desc {
  width: 100%;
  flex-wrap: wrap;
  line-height: 20px;
  font-size: 14px;
}
.comment-list-amount{
  font-weight: bold;
  height: 30px;
  line-height: 30px;
}
</style>