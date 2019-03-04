<template>
  <div class="vux-1px-t">
    <swipeout>
      <swipeout-item
        @on-close="handleEvents('on-close')"
        @on-open="handleEvents('on-open')"
        transition-mode="follow"
      >
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">Yes</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">Right</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">JavaScript is the best language</div>
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

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
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
</style>