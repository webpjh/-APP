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
          title="作品名称："
          placeholder
          :icon-type="iconType"
          :show-clear="false"
          v-model="valueName"
          placeholder-align="right"
        ></x-input>
        <popup-picker title="品类：" :data="listPL" :columns="4" v-model="valuePL" show-name></popup-picker>
        <popup-picker title="材质：" :data="listCZ" :columns="3" v-model="valueCZ" show-name></popup-picker>
        <popup-picker title="形制：" :data="listXZ" :columns="3" v-model="valueXZ" show-name></popup-picker>
        <popup-picker title="颜色：" :data="listYS" :columns="3" v-model="valueYS" show-name></popup-picker>
        <popup-picker title="纹饰：" :data="listWS" :columns="3" v-model="valueWS" show-name></popup-picker>
        <popup-picker title="用途：" :data="listYT" :columns="3" v-model="valueYT" show-name></popup-picker>
        <popup-picker title="技法：" :data="listJF" :columns="4" v-model="valueJF" show-name></popup-picker>
        <x-input
          title="规格："
          placeholder
          :icon-type="iconType"
          :show-clear="false"
          v-model="valueGG"
          placeholder-align="right"
        ></x-input>
        <x-input
          title="价格："
          placeholder
          :icon-type="iconType"
          :show-clear="false"
          v-model="valueJG"
          placeholder-align="right"
        ></x-input>
        <x-input
          title="工时："
          placeholder="单位（小时）"
          :icon-type="iconType"
          :show-clear="false"
          v-model="valueGS"
          placeholder-align="right"
        ></x-input>
        <popup-picker title="价值取向：" :data="listJZQX" :columns="3" v-model="valueJZQX" show-name></popup-picker>
        <x-address title="地址：" :list="addressData" v-model="valueAddress"></x-address>
        <x-input
          title="详细地址："
          placeholder
          :icon-type="iconType"
          :show-clear="false"
          v-model="valueDZ"
          placeholder-align="right"
        ></x-input>
      </group>
      <p class="image-upload-title">
        <span class>上传图片(最多上传三张)</span>
        <span class="image-upload-weak-tip">( 图片大小不能超过3M )</span>
      </p>
      <ImageUploader ref="imgUpload" v-on:getImgUploadUrl="getImgUrl"></ImageUploader>
      <x-button type="primary" class="submit" @click.native="formData">提交</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import {
  XInput,
  Group,
  XButton,
  Cell,
  PopupPicker,
  XAddress,
  ChinaAddressV4Data
} from "vux";
import ImageUploader from "@/components/common/ImageUploader";
import { SaveWcOrder, YcList, getUserRule } from "@/servers/api";
import { formData } from "@/assets/js/tools";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "文创征集",
        showLeftBack: true,
        showRightMore: false
      },
      iconType: "",
      addressData: ChinaAddressV4Data,
      imgList: [],
      valueName: "",
      valueGG: "",
      valueJG: "",
      valueGS: "",
      listPL: [],
      valuePL: [],
      listCZ: [],
      valueCZ: [],
      listXZ: [],
      valueXZ: [],
      listYS: [],
      valueYS: [],
      listWS: [],
      valueWS: [],
      listYT: [],
      valueYT: [],
      listJF: [],
      valueJF: [],
      listJZQX: [],
      valueJZQX: [],
      valueAddress: [],
      valueDZ: ""
    };
  },

  components: {
    Header,
    Group,
    XInput,
    XButton,
    Cell,
    ImageUploader,
    PopupPicker,
    XAddress
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.initData();
  },

  methods: {
    initData() {
      YcList({})
        .then(res => {
          console.log(res);
          if (res.result === 1) {
            let dataResult = formData(res.data.list);
            dataResult.forEach((item, index) => {
              switch (item.name) {
                case "品类":
                  this.listPL = item.data;
                  break;
                case "材质":
                  this.listCZ = item.data;
                  break;
                case "形制":
                  this.listXZ = item.data;
                  break;
                case "颜色":
                  this.listYS = item.data;
                  break;
                case "纹饰":
                  this.listWS = item.data;
                  break;
                case "用途":
                  this.listYT = item.data;
                  break;
                case "技法":
                  this.listJF = item.data;
                  break;
                case "价值取向-标签":
                  this.listJZQX = item.data;
                  break;
                default:
                  return;
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showToast(content) {
      this.$vux.toast.show({
        type: "text",
        text: content,
        position: "middle",
        time: 1000
      });
    },
    formData() {
      if (!this.valueName) {
        this.showToast("请输入作品名称");
      } else if (this.valuePL.length === 0) {
        this.showToast("请选择品类");
      } else if (this.valueCZ.length === 0) {
        this.showToast("请选择材质");
      } else if (this.valueXZ.length === 0) {
        this.showToast("请选择形制");
      } else if (this.valueYS.length === 0) {
        this.showToast("请选择颜色");
      } else if (this.valueWS.length === 0) {
        this.showToast("请选择纹饰");
      } else if (this.valueYT.length === 0) {
        this.showToast("请选择用途");
      } else if (this.valueJF.length === 0) {
        this.showToast("请选择技法");
      } else if (!this.valueGG) {
        this.showToast("请输入规格");
      } else if (!this.valueJG) {
        this.showToast("请输入价格");
      } else if (!this.valueGS) {
        this.showToast("请输入工时");
      } else if (this.valueJZQX.length === 0) {
        this.showToast("请选择价值取向");
      } else if (this.valueAddress.length === 0) {
        this.showToast("请选择地址");
      } else if (!this.valueDZ) {
        this.showToast("请输入详细地址");
      } else if (this.imgList.length === 0) {
        this.showToast("请上传设计图");
      } else {
        console.log("ok");
      }
    },
    submitBtn() {
      SaveWcOrder({
        id: this.$route.query.id,
        label: this.label,
        explains: this.explain,
        element: this.elem,
        unscramble: this.desc,
        or_img: this.imgList
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
  padding-bottom: 50px;
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