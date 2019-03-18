<template>
  <div class="setting-app-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="setting-app-content" :style="conHei">
      <CellNoIcon :cellList="cellListToolsA"></CellNoIcon>
      <CellNoIcon :cellList="cellListToolsB"></CellNoIcon>
      <CellNoIcon :cellList="cellListToolsC"></CellNoIcon>
      <CellNoIcon :cellList="cellListToolsD"></CellNoIcon>
      <div class="btn-wrap">
        <x-button class="btn-wrap-sub" type="primary">退出登录</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import Header from "@/components/common/Header";
import CellNoIcon from "@/components/common/CellNoIcon";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "设置",
        showLeftBack: true,
        showRightMore: false
      },
      cellListToolsA: [
        {
          title: "实名认证",
          link: ""
        },
        {
          title: "我的账号",
          link: ""
        },
        {
          title: "昵称",
          link: ""
        }
      ],
      cellListToolsB: [
        {
          title: "二维码",
          link: ""
        }
      ],
      cellListToolsC: [
        {
          title: "收货地址",
          link: ""
        }
      ],
      cellListToolsD: [
        {
          title: "关于我们",
          link: ""
        },
        {
          title: "意见反馈",
          link: ""
        }
      ]
    };
  },

  components: {
    Header,
    CellNoIcon,
    XButton
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.setting-app-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.setting-app-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
  background: #f9f9f9;
}
.btn-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.btn-wrap-sub {
  width: 80%;
}
</style>