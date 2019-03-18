<template>
  <div class="vux-1px-t">
    <swipeout>
      <swipeout-item
        @on-close="handleEvents('on-close')"
        @on-open="handleEvents('on-open')"
        transition-mode="follow"
        v-for="(item,index) in dataListCon"
        :key="index"
        style="margin-top:10px"
      >
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t content-wrap">
          <div class="content-left">
            <CheckIcon></CheckIcon>
            <img
              :src="item.img"
              alt
              srcset
            >
          </div>
          <div class="content-mid">
            <p>{{item.name}}</p>
            <p style="font-size:12px;color:#999">{{item.specifications}}</p>
            <p style="margin-top:4px">
              <InLineXNumber></InLineXNumber>
            </p>
          </div>
          <div class="content-right">
            <span>{{item.price}}</span>
          </div>
        </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>

<script>
import {
  GroupTitle,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  XButton
} from "vux";

import InLineXNumber from "@/components/common/InLineXNumber";
import CheckIcon from "@/components/common/CheckIcon";

export default {
  props: ["dataListCon"],
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton,
    InLineXNumber,
    CheckIcon
  },
  methods: {
    onButtonClick(type) {
      alert("on button click " + type);
    },
    handleEvents(type) {
      console.log("event: ", type);
    }
  },
  data() {
    return {
      disabled: false
    };
  }
};
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
.content-wrap {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.content-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.content-left img {
  width: 60px;
  height: 60px;
  display: inline-block;
  object-fit: cover;
}
.content-mid {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  padding-left: 10px;
  box-sizing: border-box;
}
.content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>