<!--
 * @Description: 
 * @Author: lpb
 * @Github: https://github.com/lpb273
 * @LastEditors: lpb
 * @Date: 2019-05-07 11:08:15
 * @LastEditTime: 2019-05-07 11:10:57
 -->
<template>
  <div class="photo-album-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      style="border-bottom:1px solid #d9d9d9"
    ></Header>
    <div class="photo-album-content" :style="conHei">
      <group>
        <x-input
          title="姓名："
          placeholder="请输入姓名"
          :icon-type="iconType"
          :show-clear="false"
          v-model="label"
          placeholder-align="left"
        ></x-input>
        <x-input
          title="电话："
          placeholder="请输入电话"
          :icon-type="iconType"
          :show-clear="false"
          v-model="explain"
          placeholder-align="left"
        ></x-input>
        <x-input
          title="地址："
          placeholder="请输入地址"
          :icon-type="iconType"
          :show-clear="false"
          v-model="elem"
          placeholder-align="left"
        ></x-input>
        <x-input
          title="设备信息："
          placeholder="请输入设备信息"
          :icon-type="iconType"
          :show-clear="false"
          v-model="desc"
          placeholder-align="left"
        ></x-input>
      </group>
      <x-button type="primary" class="submit" @click.native="formData">提交</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, Group, XButton, Cell } from "vux";
import ImageUploader from "@/components/common/ImageUploader";
import { SaveSyOrder } from "@/servers/api";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "溯源抢单",
        showLeftBack: true,
        showRightMore: false
      },
      iconType: "",
      imgList: [],
      label: "",
      explain: "",
      elem: "",
      desc: ""
    };
  },

  components: {
    Header,
    Group,
    XInput,
    XButton,
    Cell,
    ImageUploader
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    console.log(this.$route);
  },

  methods: {
    formData() {
      if (!this.label) {
        this.$vux.toast.show({
          type: "text",
          text: "请输入姓名",
          position: "middle",
          time: 1000
        });
      } else if (!this.explain) {
        this.$vux.toast.show({
          type: "text",
          text: "请输入电话",
          position: "middle",
          time: 1000
        });
      } else if (!this.elem) {
        this.$vux.toast.show({
          type: "text",
          text: "请输入地址",
          position: "middle",
          time: 1000
        });
      } else if (!this.desc) {
        this.$vux.toast.show({
          type: "text",
          text: "请输入设备信息",
          position: "middle",
          time: 1000
        });
      } else {
        this.submitBtn();
      }
    },
    submitBtn() {
      SaveSyOrder({
        sy_id: JSON.parse(this.$route.query.item).id,
        name: this.label,
        tel: this.explain,
        address: this.elem,
        equipment: this.desc
      })
        .then(res => {
          console.log(res);
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "提交成功",
              time: 1000,
              onHide: () => {
                this.$router.goBack();
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getImgUrl(val) {
      this.imgList = val;
    },
    onBlur(val) {
      console.log("on blur", val);
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
* {
  font-size: 16px;
}
.photo-album-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
.photo-album-content {
  width: 100%;
  background: #fff;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.tip {
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.p-title {
  width: 100%;
  height: 30px;
  text-align: left;
  line-height: 30px;
  font-size: 14px;
  padding-left: 15px;
  box-sizing: border-box;
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
.submit {
  width: 80%;
  margin-top: 30px;
}
</style>