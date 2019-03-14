<template>
  <div class="comments-wrap">
    <input
      title
      placeholder="说点什么吧～"
      class="comments-wrap-input"
      :show-clear="false"
      v-model="value"
      :min="1"
      :max="100"
      ref="inputVal"
      @input="onChange"
    />
      <x-button slot="right" type="primary" class="comments-wrap-btn" mini>提交</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from "vux";

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onChange() {
      console.log(this.value);
    }
  }
};
</script>
<style lang="css" scoped>
.comments-wrap {
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 0 20px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
}
.comments-wrap-input{
  width: 74%;
  height: 24px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 0 3px;
  box-sizing: border-box;
  font-size: 12px;
}
.comments-wrap-btn{
  margin-left: 24px;
}
</style>