<template>
  <div class="input-textarea-wrap">
    <p class="input-textarea-title">标题</p>
    <x-input class="input-textarea-input" placeholder="请输入标题" v-model="inputValue" @on-change="getInputVal"></x-input>
    <p class="input-textarea-title">内容</p>
    <Group>
      <x-textarea
        class="input-textarea-textarea"
        :rows="6"
        :max="999"
        name="description"
        placeholder="请输入内容"
        v-model="textareaValue"
        @on-change="getTextareaValue"
      ></x-textarea>
    </Group>
    <p class="image-upload-title">
      <span class>上传图片</span>
      <span class="image-upload-weak-tip">( 图片大小不能超过10M )</span>
    </p>
    <ImageUploader ref="imgUpload"></ImageUploader>
    <x-button type="primary" class="submit-btn" @click.native="submitForm">发布</x-button>
  </div>
</template>

<script>

import { XTextarea, Group, XInput, XButton } from "vux";
import ImageUploader from "@/components/common/ImageUploader";

export default {
  data(){
    return{
      inputValue: "",
      textareaValue:""
    }
  },
  components: {
    XTextarea,
    Group,
    XInput,
    XButton,
    ImageUploader
  },
  methods: {
    onEvent(event) {
      console.log("on", event);
    },
    getInputVal(){
      console.log(this.inputValue);
    },
    getTextareaValue(){
      console.log(this.textareaValue);
    },
    submitForm(){
      this.$refs.imgUpload.submit();
    }
  }
};
</script>

<style scoped>
.input-textarea-input {
  width: 100%;
  height: 40px;
  background: #f9f9f9;
  font-size: 14px;
  border-radius: 4px;
  font-weight: normal;
}
.input-textarea-textarea {
  width: 100%;
  height: 150px;
  background: #f9f9f9;
  font-size: 14px;
  border-radius: 4px;
}
.input-textarea-title {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.submit-btn {
  margin-top: 80px;
}
.image-upload-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
}
.image-upload-weak-tip {
  font-size: 12px;
  color: #999;
}
</style>
