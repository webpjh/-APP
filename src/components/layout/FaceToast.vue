<template>
  <div class="face-toast-wrap" v-show="showFaceCheck">
    <div class="toast-content">
      <p class="toast-title">人脸识别</p>
      <p class="toast-tip">通过人脸识别 刷脸便捷游园</p>
      <div>
        <img :src="imgUrl" class="face-to-face" alt="" srcset="" style="background:none">
      </div>
      <x-button type="primary" class="toast-btn" @click.native="beginFaceCheckFn">前往体验</x-button>
    </div>
    <div class="toast-close" @click="closeFaceFn">
      <span class="iconfont iconguanbi1"></span>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        showFaceCheck:true,
        imgUrl:require("@/assets/images/face-img/face-to-face.png")
      };
    },

    components: {
      XButton
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      beginFaceCheckFn(){
        this.$router.push("/face");
      },
      closeFaceFn(){
        this.showFaceCheck = false;
      }
    },

    watch: {}

  }

</script>
<style lang='css' scoped>
.face-toast-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.7);
  position: absolute;
  z-index: 10000;
}
.toast-content{
  width: 325px;
  height: 275px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  position: relative;
  z-index: 10002;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toast-title{
  font-size: 16px;
  color:#419FFF;
  font-weight: bold;
}
.toast-tip{
  font-size: 14px;
  color: #666;
}
.toast-btn{
  width: 180px;
  height: 45px;
  line-height: 45px;
  background: #419FFF;
  border-radius: 22px;
  margin-top: 20px;
}
.face-to-face{
  width: 139px;
  height: 113px;
  display: inline-block;
  margin-top: 12px;
}
.toast-close{
  margin-top: 20px;
}
</style>