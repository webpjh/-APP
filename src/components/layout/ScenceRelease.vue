<template>
  <div>
    <div class="scence-releace-wrap" v-for="(item,index) in dataList" :key="index" @click="getReleaseDetails">
      <div class="scence-releace-top">
        <div class="scence-releace-top-left">
          <p class="scence-releace-top-left-title text-show-line2">{{item.title}}</p>
          <p class="scence-releace-top-left-content text-show-line3">{{item.content}}</p>
        </div>
        <div class="scence-releace-top-right">
          <img :src="item.img" alt>
        </div>
      </div>
      <div class="scence-releace-bot">
        <span>{{item.place}}</span>
        <span style="margin-left:10px">{{item.date}}</span>
        <span style="margin-left:120px">{{item.commentNum}}</span>
        <span>{{item.praiseNum}}</span>
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
      dataList: [
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        },
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        },
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        },
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        },
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        },
        {
          title:
            "满山杜鹃花开满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放满山杜鹃花开放放",
          content:
            "二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。二月即将来到，意味着春天马上就来了。",
          place: "云雾山景区",
          img:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          date: "2019-3-12",
          commentNum: "27评论",
          praiseNum: "156点赞"
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getReleaseDetails(){
      this.$router.push("/scencereleasedetals");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-releace-wrap {
  width: 100%;
  height: 155px;
  overflow: hidden;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
}
.scence-releace-top {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.scence-releace-bot {
  width: 100%;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 12px;
}
.scence-releace-top-left {
  flex: 3;
  padding-right: 6px;
  box-sizing: border-box;
}
.scence-releace-top-right {
  flex: 2;
}
.scence-releace-top-right img {
  width: 100%;
  height: 90px;
  overflow: hidden;
  border-radius: 4px;
}
.scence-releace-top-left-title {
  font-weight: bold;
  word-break: break-all;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  height: 38px;
}
.scence-releace-top-left-content {
  width: 100%;
  height: 52px;
  word-break: break-all;
  color: #999;
  font-size: 12px;
  margin-top: 4px;
}
</style>