<template>
  <div class="user-message-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <CellDivider class="user-message-cell" :cellList="cellListTools"></CellDivider>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import CellDivider from "@/components/common/CellDivider";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "消息中心",
        showLeftBack: true,
        showRightMore: false
      },
      cellListTools: [
        {
          title: "系统公告",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: "/messagelist?title=systemannounce"
        },
        {
          title: "订单通知",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: "/messagelist?title=ordernotice"
        },
        {
          title: "个人消息",
          icon:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=7cd08c6c3712b31bd86ccb29b6183674/730e0cf3d7ca7bcb051bd704b0096b63f624a8bc.jpg",
          link: "/messagelist?title=usermessage"
        }
      ]
    };
  },

  components: {
    Header,
    CellDivider
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.user-message-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.user-message-cell{
  margin-top: 45px;
}
</style>