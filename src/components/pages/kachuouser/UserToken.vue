<template>
  <div class="user-info-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="content-wrap" :style="conSty">
      <div class="content-card">
        <div class="content-card-top">
          <div class="content-card-top-left">
            <p>
              <img
                class="content-card-top-left-img"
                src="http://c.hiphotos.baidu.com/image/h%3D300/sign=58e2e7aada3f8794ccff4e2ee21a0ead/728da9773912b31b7af6c93b8818367adab4e10e.jpg"
              >
            </p>
            <div class="content-card-top-left-txt">
              <p>姓名</p>
              <p>等级</p>
            </div>
          </div>
          <div class="content-card-top-right">
            <span class="iconfont iconerweima" @click="getQRcode" style="font-size:24px;margin-left:10px"></span>
          </div>
        </div>
        <div class="content-card-mid">
          <span class="token-num">33333333333333333333333333333333...</span>
          <span
            class="iconfont iconliulan"
            @click="watchAllCode"
            style="font-size:12px;margin-left:10px"
          ></span>
        </div>
        <div class="content-card-bot">
          <span>余额：20000</span>
        </div>
      </div>
      <div class="content-card-tip">
        <p class="tip-title">提示：</p>
        <p>1.</p>
        <p>2.</p>
        <p>3.</p>
        <p>4.</p>
      </div>
      <XDialog style="display:none" :showDialog="showDialogFlag" ref="dialogCon"></XDialog>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import XDialog from "@/components/common/XDialog";

export default {
  name: "",
  props: [""],
  data() {
    return {
      showDialogFlag: false,
      TitleObjData: {
        titleContent: "通证",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    XDialog
  },

  computed: {
    conSty() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    watchAllCode() {
      this.$refs.dialogCon.showToastFn("333333");
    },
    getQRcode(){
      this.$router.push("/tokenqrcode");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.user-info-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-wrap {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
  padding: 0 15px;
  box-sizing: border-box;
}
.content-card {
  width: 100%;
  height: 160px;
  background: #111;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
}
.content-card {
  display: flex;
  flex-direction: column;
}
.content-card-top {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.content-card-mid {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffebb5;
  overflow: hidden;
}
.content-card-bot {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #ffebb5;
  font-size: 12px;
}
.content-card-top-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content-card-top-left-img {
  width: 26px;
  height: 26px;
  display: inline-block;
  border-radius: 50%;
}
.content-card-top-left-txt {
  color: #ffebb5;
  font-size: 12px;
  margin-left: 8px;
}
.content-card-tip {
  margin-top: 10px;
}
.tip-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
}
.content-card-top-right {
  color: #ffebb5;
}
</style>