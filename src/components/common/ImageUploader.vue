<template>
  <div>
    <uploaders
      :max="varmax"
      :images="images"
      :handle-click="true"
      :show-header="true"
      :readonly="true"
      :upload-url="uploadUrl"
      name="img"
      :params="params"
      size="small"
      @preview="previewMethod"
      @add-image="addImageMethod"
      @remove-image="removeImageMethod"
    ></uploaders>
  </div>
</template>

<script>
import Uploaders from "vux-uploads";
import "../../../assets/css/weui.css";
import { Toast, ToastPlugin, LoadingPlugin } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    Uploaders
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
</style>