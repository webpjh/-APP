<!--
商品列表
-->
<template>
  <div class="goods-list-wrap">
    <div class="goods-list" v-for="(item,index) in dataList" :key="index" @click="getVideoDetails(index)">
      <div
        class="goods-img"
        :style="{backgroundImage: 'url(' + item.imgUrl + ')', backgroundSize:'cover',backgroundRepeat:'no-repeat'}"
      >
        <p class="goods-list-title">
          <span class="iconfont icondingwei"></span>
          <span class="iconfont-location">长春</span>
        </p>
        <p class="video-play-btn">播放</p>
        <div class="goods-img-desc">
          <div>
            <img :src="item.imgUrl">
            <span>姓名</span>
          </div>
          <span>赞123</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Divider } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: [
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "10000"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "9999"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "23123"
        },
        {
          imgUrl:
            "http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b9e8896ad3c451da81cb3e85.jpg",
          goodsName: "七山半水半分田 两分道路和庄园",
          price: "8888"
        }
      ]
    };
  },

  components: {
    Divider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getVideoDetails(index){
      this.$router.push("/informationconsumdetails");
      console.log(index);
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.goods-list-wrap {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}
.goods-list {
  width: 49%;
  height: auto;
  margin-bottom: 20px;
}
.goods-img {
  width: 100%;
  height: 100px;
  display: inline-block;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.goods-img-wrap {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
  top: 0;
  left: 0;
}
.goods-img-desc {
  width: 100%;
  height: 24px;
  background: rgba(102, 102, 102, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  color: #fff;
}
.goods-img-desc img {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 50%;
  font-size: 12px;
}
.video-play-btn {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.goods-list-title {
  width: 100%;
  height: 24px;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
}
.iconfont-location {
  margin-left: 4px;
}
</style>