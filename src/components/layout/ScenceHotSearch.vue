<template>
  <div class="search-hot-wrap">
    <p class="search-hot-title">热门景区</p>
    <div class="search-hot-list-wrap">
      <span class="text-overflow-hidden" v-for="(item,index) in dataList" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        dataList:["少林寺","蓬莱阁","苍岩山","身后","长白山","少林寺","蓬莱阁","苍岩山","身后","长白山"]
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
.search-hot-wrap{
  width: 100%;
  height: 160px;
  background: #eee;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.search-hot-title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
}
.search-hot-list-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}
.search-hot-list-wrap span{
  width: 50px;
  height: 20px;
  background: #fff;
  color: #222;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin: 0 16px 16px 0;
  border-radius: 2px;
}
</style>