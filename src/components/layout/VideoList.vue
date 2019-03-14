<!--
门票购买
-->
<template>
  <div class="tickets-discount-list-wrap">
    <div class="tickets-discount-list" v-for="(item,index) in dataList" :key="index" @click="getDetailsContent">
      <div class="img-wrap">
        <img v-lazy="item.imgSrc">
        <span class="scence-distance-wrap">
          <span class="scence-distance">{{item.distance}}</span>
        </span>
      </div>
      <div class="img-desc">
        <p class>
          <img class="img-desc-img" v-lazy="item.imgSrc">
          <span>{{item.name}}</span>
        </p>
        <div>
          <span style="margin-right:20px">
            <span class="iconfont iconxiaoxi" style="margin-right:10px"></span>223
          </span>
          <span>
            <span class="iconfont iconzan" style="margin-right:10px"></span>156
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      backgroundImgSty: {
        width: "100%",
        height: "400px"
      },
      dataList: [
        {
          imgSrc:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          distance: "3:30",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120"
        },
        {
          imgSrc:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          distance: "3:30",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120"
        },
        {
          imgSrc:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          distance: "3:30",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120"
        }
      ]
    };
  },

  components: {
    XButton
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getDetailsContent(){
      this.$router.push("/scencestorydetail");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.font-size-14 {
  font-size: 14px;
  font-weight: bold;
}
.font-size-12 {
  font-size: 12px;
}
.price-discount {
  color: #666;
  margin-left: 6px;
}
.tickets-discount-list-wrap {
  background: #f9f9f9;
  padding-top: 10px;
  box-sizing: border-box;
}
.tickets-discount-list {
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 4px;
}
.img-wrap {
  width: 100%;
  height: 200px;
  padding: 10px;
  background: #fff;
}
.img-desc {
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.scence-distance-wrap {
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  display: inline-block;
  background: #666;
  border-radius: 10px;
  position: relative;
  top: -170px;
  left: 10px;
  color: #fff;
  font-size: 12px;
}
.img-desc-img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
}
</style>