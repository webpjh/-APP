<template>
  <div class="setting-app-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="setting-app-content" :style="conHei">
      <CellNoIcon :cellList="cellListToolsA" v-if="authState === -1"></CellNoIcon>
      <CellNoIcon :cellList="cellListToolsE" v-else-if="authState != -1"></CellNoIcon>
      <!-- <CellNoIcon :cellList="cellListToolsB"></CellNoIcon> -->
      <CellNoIcon :cellList="cellListToolsC"></CellNoIcon>
      <CellNoIcon :cellList="cellListToolsD"></CellNoIcon>
      <div class="btn-wrap">
        <x-button class="btn-wrap-sub" type="primary" @click.native="quitAppLogin">退出登录</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import Header from "@/components/common/Header";
import CellNoIcon from "@/components/common/CellNoIcon";
import { GetAuthState } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "设置",
        showLeftBack: true,
        showRightMore: false
      },
      authState: -1,
      cellListToolsA: [
        {
          title: "实名认证",
          link: "/realnameauth",
          badge: true,
          text: "未认证"
        },
        // {
        //   title: "我的账号",
        //   link: "",
        //   badge: false,
        //   text: ""
        // },
        {
          title: "用户名",
          link: "",
          badge: false,
          text: ""
        }
      ],
      cellListToolsE: [
        {
          title: "实名认证",
          link: "/realnameauthstate",
          badge: false,
          text: ""
        },
        // {
        //   title: "我的账号",
        //   link: "",
        //   badge: false,
        //   text: ""
        // },
        {
          title: "用户名",
          link: "",
          badge: false,
          text: "",
          setNickName: true
        }
      ],
      cellListToolsB: [
        {
          title: "二维码",
          link: "/tokenqrcode",
          badge: false,
          text: ""
        }
      ],
      cellListToolsC: [
        {
          title: "收货地址",
          link: "/address",
          badge: false,
          text: ""
        }
      ],
      cellListToolsD: [
        {
          title: "关于我们",
          link: "/aboutus",
          badge: false,
          text: ""
        },
        {
          title: "意见反馈",
          link: "/opinion",
          badge: false,
          text: ""
        }
      ]
    };
  },

  components: {
    Header,
    CellNoIcon,
    XButton
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getAuthState();
  },

  methods: {
    quitAppLogin() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    // 查询实名认证状态
    getAuthState() {
      GetAuthState({})
        .then(res => {
          if (res) {
            this.authState = res.data.code;
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
.setting-app-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.setting-app-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
  background: #f9f9f9;
}
.btn-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.btn-wrap-sub {
  width: 80%;
}
</style>