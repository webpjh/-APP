<template>
  <div class="img-and-txt-list-wrap">
    <div class="img-and-txt-list-for" v-for="(item,index) in dataList" :key="index" @click="getDetailsContent">
      <div class="img-and-txt-left">
        <p class="img-and-txt-left-top text-show-line3">{{item.title}}</p>
        <p class="img-and-txt-left-bot">
          <img :src="item.imgHeader" alt srcset class="img-and-txt-left-header">
          <span style="margin-left:-50px">{{item.name}}</span>
          <span style="color:#999">
            <span class="iconfont icondingwei"></span>
            {{item.location}}
          </span>
        </p>
      </div>
      <div class="img-and-txt-right">
        <img :src="item.img" alt srcset class="img-and-txt-right-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: [
        {
          title:
            "这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容",
          imgHeader:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg",
          name: "姓名",
          location: "北京",
          img:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg"
        },
        {
          title:
            "这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容",
          imgHeader:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg",
          name: "姓名",
          location: "北京",
          img:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg"
        },
        {
          title:
            "这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容",
          imgHeader:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg",
          name: "姓名",
          location: "北京",
          img:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg"
        },
        {
          title:
            "这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容这是标题内容",
          imgHeader:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg",
          name: "姓名",
          location: "北京",
          img:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=a573495ce5f81a4c3932eac9e72a6029/2e2eb9389b504fc27c224b2debdde71190ef6d9d.jpg"
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getDetailsContent(){
      this.$router.push("/imageandtextdetails");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.img-and-txt-list-wrap {
  background: #f9f9f9;
}
.img-and-txt-list-for {
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 10px;
}
.img-and-txt-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  box-sizing: border-box;
}
.img-and-txt-right {
  flex: 1;
  box-sizing: border-box;
  padding: 10px;
}
.img-and-txt-left-top {
  flex: 4.5;
  word-break: break-all;
  font-weight: bold;
  font-size: 16px;
}
.img-and-txt-left-bot {
  flex: 2.5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
}
.img-and-txt-left-header {
  width: 26px;
  height: 26px;
  border-radius: 50%;
}
.img-and-txt-right-img {
  border-radius: 4px;
}
</style>