<template>
  <div>
    <group-title>循环模式</group-title>
    <swiper loop auto :list="demo_list" :index="demo_index" @on-index-change="demo_onIndexChange"></swiper>
    <p>current index: {{demo_index}}</p>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, Divider } from "vux";

const baseList = [
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img: "https://static.vux.li/demo/5.jpg", // 404
    title: "送你一次旅行",
    fallbackImg:
      "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];

const imgList = [
  "http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff",
  "http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff",
  "http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff"
];

const urlList = baseList.map((item, index) => ({
  url: "http://m.baidu.com",
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}));

const demoList = imgList.map((one, index) => ({
  url: "javascript:",
  img: one
}));


export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle
  },
  ready() {},
  methods: {
    demo_onIndexChange(index) {
      this.demo_index = index;
    }
  },
  data() {
    return {
      demo_list: urlList,
      demo_index: 0,
      swiperItemIndex: 1
    };
  }
};
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>