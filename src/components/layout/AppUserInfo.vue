<template>
  <div class="user-info-header">
    <div class="user-info-header-img-wrap">
      <div class="user-info-header-img">
        <img src="http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg" alt=""/>
      </div>
      <div class="user-info-header-desc">
        <p>姓名</p>
        <p>15701309073</p>
      </div>
    </div>
    <div class="user-info-header-right">></div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='css' scoped>
.user-info-header{
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
.user-info-header-img-wrap{
  width: 144px;
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user-info-header-img img{
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 2px solid #fff;
}
.user-info-header-right{
  font-size: 24px;
}
</style>