<template>
  <div class="confirm-order-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="confirm-order-content" :style="scenceGiftsContent">
      <div class="address-wrap" @click="selAddress">
        <div class="address-left">
          <span class="iconfont icondingwei"></span>
        </div>
        <div class="address-mid">
          <p>
            <span>{{addressDetails.realname}}</span>
            <span>{{addressDetails.tel}}</span>
          </p>
          <p>{{addressDetails.province}},{{addressDetails.city}},{{addressDetails.area}}</p>
          <p>{{addressDetails.address}}</p>
        </div>
        <div class="address-right">
          <span class="iconfont iconyoujiantou"></span>
        </div>
      </div>
      <div class="goods-details-wrap">
        <div class="goods-details-left">
          <img class="goods-details-img" :src="goodsDetails.thumb_url" :alt="goodsDetails.title">
        </div>
        <div class="goods-details-mid">
          <p>{{goodsDetails.title}}</p>
          <p style="color:#999999">已选</p>
          <p style="color:#B7090A">¥{{goodsDetails.marketprice}}</p>
        </div>
        <div class="goods-details-right">
          <p>数量：1</p>
        </div>
      </div>
      <div class="goods-details-desc">
        <p>
          <span style="font-size:17px;color:#000">商品总额：</span>
          <span>¥{{goodsDetails.marketprice}}</span>
        </p>
        <p>
          <span>优惠</span>
          <span>-¥0.00</span>
        </p>
        <p style="border:none">
          <span>运费</span>
          <span>¥0.00</span>
        </p>
      </div>
    </div>
    <div class="confirm-order-btn-wrap">
      <p class="confirm-order-desc">应付：¥{{goodsDetails.marketprice}}</p>
      <p class="confirm-order-btn">立即下单</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { getDetail, getAddressDefault } from "@/servers/api";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "确认订单",
        showLeftBack: true,
        showRightMore: false
      },
      addressDetails: {},
      goodsDetails: {}
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
    this.getAddressDefault();
  },

  methods: {
    selAddress() {
      this.$router.push("/address");
    },
    // 获取商品详情
    getGoodsDetailsInfo() {
      getDetail({
        goods_id: this.$route.query.id
      })
        .then(res => {
          console.log(res);
          if (res.result === 1) {
            this.goodsDetails = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取默认收货地址
    getAddressDefault() {
      getAddressDefault({})
        .then(res => {
          if (res.result === 1) {
            this.addressDetails = res.data[0];
          } else {
            this.$vux.confirm.show({
              title: "提示",
              content: "请先添加收货地址",
              showCancelButton: false,
              onConfirm: () => {
                this.selAddress();
              }
            });
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
.confirm-order-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f9f9f9;
}
.confirm-order-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
}
.address-wrap {
  width: 100%;
  min-height: 50px;
  background: #fff;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 5px;
}
.address-left {
  flex: 1;
}
.address-mid {
  flex: 8;
}
.address-right {
  flex: 1;
  text-align: right;
}
.goods-details-wrap {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #fff;
}
.goods-details-img {
  width: 60px;
  height: 60px;
  display: inline-block;
}
.goods-details-left {
  flex: 1;
}
.goods-details-mid {
  flex: 2;
}
.goods-details-right {
  flex: 1;
}
.goods-details-desc {
  width: 100%;
  height: 150px;
  padding-left: 15px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 10px;
}
.goods-details-desc p{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  box-sizing: border-box;
  color: #666666;
}
.confirm-order-btn-wrap{
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
}
.confirm-order-desc{
  flex: 2;
  padding-left: 15px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 17px;
}
.confirm-order-btn{
  flex: 1;
  height: 50px;
  background: #222;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
</style>