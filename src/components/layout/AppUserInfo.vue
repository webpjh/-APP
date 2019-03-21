<template>
  <div class="user-info-header">
    <div class="user-info-header-img-wrap">
      <div class="user-info-header-img">
        <img :src="userInfo.avatar" alt="头像">
        <ImageUpload
          class="img-upload-wrap"
          ref="ImageUploadCom"
          v-on:getHeaderImgUrl="getHeaderImgUrlData"
        ></ImageUpload>
      </div>
      <div class="user-info-header-desc">
        <p>{{userInfo.nickname}}</p>
        <p>{{userInfo.mobile}}</p>
      </div>
    </div>
    <div class="user-info-header-right" @click="setting">></div>
  </div>
</template>

<script>
import ImageUpload from "@/components/common/UploadImgOne";

export default {
  name: "",
  props: [""],
  data() {
    return {
      imgUrl: "",
      userInfo: {}
    };
  },

  components: {
    ImageUpload
  },

  computed: {},
  created() {
    this.getUserInfo();
  },
  beforeMount() {},

  mounted() {},

  methods: {
    setting() {
      this.$router.push("/setting");
    },
    getHeaderImgUrlData(data) {
      this.imgUrl = data;
    },
    getUserInfo() {
      this.userInfo = this.GLOBAL.getSession("userLoginInfo");
      console.log(this.userInfo);
    }
  },

  watch: {},
  updated() {}
};
</script>
<style lang='css' scoped>
.user-info-header {
  width: 100%;
  height: 100px;
  background: #222;
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user-info-header-img-wrap {
  width: 144px;
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user-info-header-img img {
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 2px solid #fff;
  position: relative;
  box-sizing: border-box;
  top: 28px;
}
.img-upload-wrap {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: inline-block;
  background: red;
  position: relative;
  top: -25px;
  z-index: 999;
  opacity: 0;
}
.user-info-header-right {
  font-size: 24px;
}
</style>