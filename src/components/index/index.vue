<template>
  <div>
    <div>
      <KachuoTabPlay v-if="getCurrentTabItem === '/kachuotabplay' || getCurrentTabItem === '/'"></KachuoTabPlay>
      <KachuoTabMall v-if="getCurrentTabItem === '/kachuotabmall'"></KachuoTabMall>
      <KachuoTabCash v-if="getCurrentTabItem === '/kachuotabcash'"></KachuoTabCash>
      <KachuoTabIncome v-if="getCurrentTabItem === '/kachuotabincome'"></KachuoTabIncome>
      <KachuoTabPersonalCenter v-if="getCurrentTabItem === '/kachuotabpersonalcenter'"></KachuoTabPersonalCenter>
    </div>
    <tabbar class="tabbar-bottom">
      <tabbar-item
        :selected="getCurrentTabItem === '/kachuotabplay' || getCurrentTabItem === '/'"
        :link="{path: '/kachuotabplay',replace:true}"
      >
        <img slot="icon" src>
        <span slot="label">游玩</span>
      </tabbar-item>
      <tabbar-item
        :selected="getCurrentTabItem === '/kachuotabmall'"
        :link="{path: '/kachuotabmall',replace:true}"
      >
        <img slot="icon" src>
        <span slot="label">商城</span>
      </tabbar-item>
      <tabbar-item
        :selected="getCurrentTabItem === '/kachuotabcash'"
        :link="{path: '/kachuotabcash',replace:true}"
      >
        <img slot="icon" src>
        <span slot="label">变现</span>
      </tabbar-item>
      <tabbar-item
        :selected="getCurrentTabItem === '/kachuotabincome'"
        :link="{path: '/kachuotabincome',replace:true}"
      >
        <img slot="icon" src>
        <span slot="label">创收</span>
      </tabbar-item>
      <tabbar-item
        :selected="getCurrentTabItem === '/kachuotabpersonalcenter'"
        :link="{path: '/kachuotabpersonalcenter',replace:true}"
      >
        <img slot="icon" src>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import store from "../../store/index";
import { Tabbar, TabbarItem, Group, Cell } from "vux";

import Header from "../common/Header";

import KachuoTabPlay from "../pages/tabindex/KachuoTabPlay";
import KachuoTabMall from "../pages/tabindex/KachuoTabMall";
import KachuoTabCash from "../pages/tabindex/KachuoTabCash";
import KachuoTabIncome from "../pages/tabindex/KachuoTabIncome";
import KachuoTabPersonalCenter from "../pages/tabindex/KachuoTabPersonalCenter";

export default {
  components: {
    Header,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    KachuoTabPlay,
    KachuoTabMall,
    KachuoTabCash,
    KachuoTabIncome,
    KachuoTabPersonalCenter
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    getCurrentTabItem() {
      return this.$store.getters.getCurrentRouteVal;
    }
  },
  watch: {
    $route: (to, from) => {}
  }
};
</script>
<style scoped>
</style>
