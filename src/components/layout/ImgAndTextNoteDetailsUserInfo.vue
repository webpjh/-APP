<template>
  <div class="img-and-text-details-user-info-wrap">
    <div class="details-left">
      <div>
        <img class="header-img" src="http://f.hiphotos.baidu.com/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg"/>
      </div>
      <div class="header-desc">
        <p >姓名</p>
        <p style="font-size:12px">2019-3-18</p>
      </div>
    </div>
    <div class="details-right">
      <span>
        <GiveLike></GiveLike>
      </span>
    </div>
  </div>
</template>

<script>

import GiveLike from "@/components/common/GiveLike";

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    GiveLike
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='css' scoped>
.img-and-text-details-user-info-wrap{
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
}
.header-img{
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
}
.details-left{
  flex: 1;
  display: flex;
  flex-direction: row;
}
.details-right{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.header-desc{
  margin-left: 10px;
}
</style>