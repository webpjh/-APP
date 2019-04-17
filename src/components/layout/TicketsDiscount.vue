<!--
门票购买
-->
<template>
  <div class="tickets-discount-list-wrap">
    <div class="tickets-discount-list" v-for="(item,index) in dataList" :key="index">
      <div class="img-wrap">
        <img :src="item.imgSrc">
        <span class="scence-distance-wrap">
          <span class="scence-distance">{{item.distance}}</span>
        </span>
      </div>
      <div class="img-desc">
        <div>
          <p class="font-size-14">{{item.name}}</p>
          <p class="font-size-12">
            <span>{{item.price}}</span>
            <span class="price-discount">原价：{{item.priceDiscount}}</span>
          </p>
        </div>
        <div>
          <x-button mini type="primary" style="border-radius:15px" @click.native="buyTickets">立即购票</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import { TicketsList } from "@/servers/api";
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
          distance: "500km",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120"
        },
        {
          imgSrc:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          distance: "500km",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120"
        },
        {
          imgSrc:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=4262ea29f6dcd100d29cfe21428a47be/78310a55b319ebc4cee036bd8c26cffc1e17167d.jpg",
          distance: "500km",
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

  mounted() {
    this.getDataList();
  },

  methods: {
    getDataList() {
      TicketsList({})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    buyTickets() {
      this.$router.push("/ticketsdetails");
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
  background: #f9f9f9;
  border-radius: 10px;
  position: relative;
  top: -200px;
  left: 10px;
  color: #fff;
  font-size: 12px;
}
</style>