<template>
  <div class="tab-bar-wrap">
    <div
      v-for="(item,index) in tabItem"
      :key="index"
      class="tab-bar-item"
      @click="changeTabIndex(index)"
    >
      <img class="tab-bar-item-img" :src="item.icon">
      <span
        :class="{normal:!item.isActive,active:item.isActive}"
      >{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      tabItem: [
        {
          title: "游玩",
          icon:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=622b9205f3faaf519be387bfbc5494ed/738b4710b912c8fc6ffecceef2039245d6882187.jpg",
            isActive:true
        },
        {
          title: "商城",
          icon:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=622b9205f3faaf519be387bfbc5494ed/738b4710b912c8fc6ffecceef2039245d6882187.jpg",
            isActive:false
        },
        {
          title: "变现",
          icon:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=622b9205f3faaf519be387bfbc5494ed/738b4710b912c8fc6ffecceef2039245d6882187.jpg",
            isActive:false
        },
        {
          title: "创收",
          icon:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=622b9205f3faaf519be387bfbc5494ed/738b4710b912c8fc6ffecceef2039245d6882187.jpg",
            isActive:false
        },
        {
          title: "我的",
          icon:
            "http://e.hiphotos.baidu.com/image/h%3D300/sign=622b9205f3faaf519be387bfbc5494ed/738b4710b912c8fc6ffecceef2039245d6882187.jpg",
            isActive:false
        }
      ],
      tabIndex: 0
    };
  },

  components: {
    Tabbar,
    TabbarItem
  },

  computed: {
    getCurrentTabIndex() {
      return this.$store.state.tabIndex;
    },
    setTabBarClass() {
      return this.$store.state.tabIndex === this.tabIndex ? "tab-bar-item-title-normal" : "tab-bar-item-title-active";
    }
  },

  beforeMount() {},

  mounted() {
    // console.log(this.$store.state.tabIndex);
    // console.log(this.tabIndex);
  },

  methods: {
    changeTabIndex(index) {
      this.$store.commit("changeTabIndex", index);
      for(let i = 0;i< this.tabItem.length;i++){
        this.tabItem[i].isActive = false;
      }
      this.tabItem[index].isActive = true;
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-bar-wrap {
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  padding-top: 2px;
  background: #fff;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  position: relative;
  z-index: 9999;
}
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.tab-bar-item-img {
  width: 22px;
  height: 22px;
  display: block;
}
.normal {
  font-size: 12px;
  margin-top: 2px;
  color: #999;
}
.active {
  font-size: 12px;
  margin-top: 2px;
  color: #222;
}
</style>