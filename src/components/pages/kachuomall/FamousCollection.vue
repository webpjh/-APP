<template>
  <div class="scence-gifts-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-gifts-content" :style="scenceGiftsContent">
      <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>
      <FlexWrap :dataListCon="dataList" ref="dataList"></FlexWrap>
      <DividedArea></DividedArea>
      <Divider :content="title"></Divider>
      <scroller
        :on-infinite="pullup"
        :on-refresh="refresh"
        :refreshText="refreshText"
        :noDataText="noDataText"
        class="scence-release-content"
      >
        <GoodsList></GoodsList>
      </scroller>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import FlexWrap from "@/components/layout/FlexWrap";
import Divider from "@/components/common/Divider";
import Scroll from "@/components/common/Scroller";
import GoodsList from "@/components/layout/GoodsList";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "发布详情",
        showLeftBack: true,
        showRightMore: false
      },
      title: "精选好物",
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据",
      dataList: [
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "吴三大",
          link: "/scenceconsumdetails?title=吴三大",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "张仲亭",
          link: "/scenceconsumdetails?title=张仲亭",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "钟明善",
          link: "/scenceconsumdetails?title=钟明善",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "宋水官",
          link: "/scenceconsumdetails?title=宋水官",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "杨曙华",
          link: "/scenceconsumdetails?title=杨曙华",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "张国庆",
          link: "/scenceconsumdetails?title=张国庆",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "官方馆藏",
          link: "/scenceconsumdetails?title=官方馆藏",
          class: "iconfont iconmenpiao"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "私人定制",
          link: "/scenceconsumdetails?title=私人定制",
          class: "iconfont iconmenpiao"
        }
      ]
    };
  },

  components: {
    Header,
    TabItemMallAdvertise,
    DividedArea,
    FlexWrap,
    Divider,
    Scroll,
    GoodsList
  },

  computed: {
    scenceGiftsContent() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.setTitle();
  },

  methods: {
    setTitle() {
      this.TitleObjData.titleContent = this.$route.query.title;
    },
    refresh(done) {
      console.log("refresh");
      setTimeout(() => {
        done();
      }, 2000);
    },
    pullup(done) {
      console.log("pullup");
      setTimeout(() => {
        done();
      }, 2000);
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-gifts-content {
  width: 100%;
  margin-top: 50px;
}
.scence-release-content {
  width: 100%;
  margin-top: 470px;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>