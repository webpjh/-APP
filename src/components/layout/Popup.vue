<!--
分类导航
-->
<template>
  <div>
    <group title="set position">
      <x-switch title="left(100% width)" v-model="show"></x-switch>
    </group>

    <div v-transfer-dom>
      <popup v-model="show" position="left" width="100%">
        <div class="position-horizontal">
          <x-header
            :left-options="{backText: '返回',preventGoBack:true}"
            @on-click-back="show = false"
          >分类</x-header>
          <div class="content-wrap">
            <div class="content-left">
              <p
                :class="{'content-left-p':currentIndex!=index,'content-left-p-active':currentIndex==index}"
                v-for="(item,index) in leftContent"
                :key="index"
                @click="changeIndex(index)"
              >{{item}}</p>
            </div>
            <div class="content-right">
              <div class="content-video">
                <Video :isControls="true"></Video>
              </div>
              <div class="content-list-wrap">
                <div class="content-list-item" v-for="(item,index) in rightContent" :key="index">
                  <img class="content-list-img" :src="item.src">
                  <p class="content-list-title">{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {
  TransferDom,
  Popup,
  Group,
  XSwitch,
  ChinaAddressData,
  XHeader,
  Sticky
} from "vux";

import Video from "../common/VideoPlayer";

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    XSwitch,
    XHeader,
    Video,
    Sticky
  },
  data() {
    return {
      show: true,
      leftContent: ["书法", "国画", "陶瓷", "雕刻", "紫砂", "名家"],
      rightContent: [
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        },
        {
          src:
            "http://www.hrwdw.com/UploadFiles/2015-12/0/2015123014313760961.png",
          title: "书法"
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    changeIndex(i) {
      // console.log(i);
      this.currentIndex = i;
    }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.position-horizontal {
  position: relative;
  height: 100%;
}
.content-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 46px;
  left: 0;
}
.content-left {
  flex: 20%;
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.content-right {
  flex: 80%;
  height: 100%;
  overflow-y: scroll;
  background: red;
  padding: 10px;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.content-left-p {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.content-left-p-active {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #000;
  color: #fff;
}
.content-video {
  width: 100%;
  height: 160px;
  overflow: hidden;
}
.content-list-wrap {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}
.content-list-item {
  width: 33%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-list-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.content-list-title {
  width: 100%;
  height: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
</style>