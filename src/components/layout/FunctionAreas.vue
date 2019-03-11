<!-- 
flex布局功能区域
-->
<template>
  <flexbox :gutter="0" wrap="wrap">
    <flexbox-item :span="1/4" v-for="(item,index) in dataList" :key="index">
      <div class="flex-wrap-for" @click="getItem(item.link)">
        <img class="flex-wrap-img" :src="item.imgUrl">
        <p class="flex-wrap-name">{{item.name}}</p>
      </div>
    </flexbox-item>
  </flexbox>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: [
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/ticketsdiscount"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/intelligentnavigation"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/scencerelease"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/scenceservice"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/remember"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/understand"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/takeaway"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "云雾山",
          link: "/servicesurround"
        }
      ]
    };
  },

  components: {
    Flexbox,
    FlexboxItem,
    Divider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getItem(link){
      this.$router.push(link);
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.flex-wrap-for {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex-wrap-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.flex-wrap-name {
  width: 100%;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
</style>