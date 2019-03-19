<template>
  <div class="real-name-auth-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="real-name-auth-con" :style="conHei">
      <PopupPicker :dataOpion="dataOpA" v-on:givePickerVal="getPickValA"></PopupPicker>
      <PopupPicker :dataOpion="dataOpB" v-on:givePickerVal="getPickValB"></PopupPicker>
      <PopupPicker :dataOpion="dataOpC" v-on:givePickerVal="getPickValC"></PopupPicker>
      <PopupPicker :dataOpion="dataOpD" v-on:givePickerVal="getPickValD"></PopupPicker>
      <PopupPicker :dataOpion="dataOpE" v-on:givePickerVal="getPickValE"></PopupPicker>
      <p class="id-card-img">身份证正面照片</p>
      <img class="upload-img" v-if="imgUrl" :src="imgUrl" alt srcset>
      <UploadImgOne v-else-if="!imgUrl" v-on:getHeaderImgUrl="getImgVal"></UploadImgOne>
      <div class="btn-wrap">
        <x-button class="sub-btn" type="primary">提交</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import PopupPicker from "@/components/common/PopupPicker";
import UploadImgOne from "@/components/common/UploadImgOne";
import { XButton } from "vux";

import { getUserRule } from "@/servers/api";
import { formData } from "@/assets/js/tools";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "实名认证",
        showLeftBack: true,
        showRightMore: false
      },
      pickValA: [],
      pickValB: [],
      pickValC: [],
      pickValD: [],
      pickValE: [],
      imgUrl: "",
      dataOpA: {
        title: "学历",
        columns: 1,
        data: [
          {
            name: "中国",
            value: "china",
            parent: 0
          },
          {
            name: "美国",
            value: "USA",
            parent: 0
          }
        ]
      },
      dataOpB: {
        title: "专业",
        columns: 1,
        data: [
          {
            name: "中国",
            value: "china",
            parent: 0
          },
          {
            name: "美国",
            value: "USA",
            parent: 0
          }
        ]
      },
      dataOpC: {
        title: "爱好",
        columns: 1,
        data: [
          {
            name: "中国",
            value: "china",
            parent: 0
          },
          {
            name: "美国",
            value: "USA",
            parent: 0
          }
        ]
      },
      dataOpD: {
        title: "信仰",
        columns: 1,
        data: [
          {
            name: "中国",
            value: "china",
            parent: 0
          },
          {
            name: "美国",
            value: "USA",
            parent: 0
          }
        ]
      },
      dataOpE: {
        title: "师承",
        columns: 3,
        data: [
          {
            name: "中国",
            value: "china",
            parent: 0
          },
          {
            name: "美国",
            value: "USA",
            parent: 0
          },
          {
            name: "广东",
            value: "china001",
            parent: "china"
          },
          {
            name: "广西",
            value: "china002",
            parent: "china"
          },
          {
            name: "美国001",
            value: "usa001",
            parent: "USA"
          },
          {
            name: "美国002",
            value: "usa002",
            parent: "USA"
          },
          {
            name: "广州",
            value: "gz",
            parent: "china001"
          },
          {
            name: "深圳",
            value: "sz",
            parent: "china001"
          },
          {
            name: "广西001",
            value: "gx001",
            parent: "china002"
          },
          {
            name: "广西002",
            value: "gx002",
            parent: "china002"
          },
          {
            name: "美国001_001",
            value: "0003",
            parent: "usa001"
          },
          {
            name: "美国001_002",
            value: "0004",
            parent: "usa001"
          },
          {
            name: "美国002_001",
            value: "0005",
            parent: "usa002"
          },
          {
            name: "美国002_002",
            value: "0006",
            parent: "usa002"
          }
        ]
      }
    };
  },

  components: {
    Header,
    PopupPicker,
    UploadImgOne,
    XButton
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getDataList();
  },

  methods: {
    getImgVal(val) {
      console.log(val);
      this.imgUrl = val;
    },
    getPickValA(val) {
      console.log(val);
      this.pickValA = val;
    },
    getPickValB(val) {
      console.log(val);
      this.pickValB = val;
    },
    getPickValC(val) {
      console.log(val);
      this.pickValC = val;
    },
    getPickValD(val) {
      console.log(val);
      this.pickValD = val;
    },
    getPickValE(val) {
      console.log(val);
      this.pickValE = val;
    },
    getDataList() {
      getUserRule({})
        .then(res => {
          console.log(res.data.list[4].children);
          if(res.result === 1){
            let data = formData(res.data.list[4].children);
            console.log(data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.real-name-auth-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.real-name-auth-con {
  width: 100%;
  background: #f9f9f9;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
.btn-wrap {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sub-btn {
  width: 80%;
}
.upload-img {
  width: 94px;
  height: 94px;
  display: inline-block;
  object-fit: cover;
  margin: 0 0 0 20px;
}
.id-card-img{
  width: 100%;
  height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  line-height: 30px;
  margin-top: 10px;
}
</style>