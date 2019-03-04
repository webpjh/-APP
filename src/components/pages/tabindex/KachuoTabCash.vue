<template>
  <div style="width:100%;height:200px">
    <!-- <Swiper-Out></Swiper-Out> -->
    <!-- <Mobile></Mobile> -->
    <!-- <Divider></Divider> -->
    <!-- <TimeLine></TimeLine> -->
    <!-- <ActionSheet></ActionSheet> -->
    <!-- <Popup></Popup> -->
    <!-- <QRcode></QRcode> -->
    <!-- <Swiper-Img></Swiper-Img> -->
    <!-- <Swiper-Tip></Swiper-Tip> -->
    <!-- <Popup-Picker></Popup-Picker> -->
    <!-- <Address></Address> -->
    <!-- <Number-Change></Number-Change> -->
    <!-- <TextArea></TextArea> -->
    <!-- <WeixinPay></WeixinPay> -->
    <Video-Player></Video-Player>
  </div>
</template>

<script>
import Search from "../../common/Search";
import ImagePreview from "../../common/ImagePreview";
import SwiperOut from "../../common/SwiperOut";
import Mobile from "../../common/Mobile";
import Divider from "../../common/Divider";
import TimeLine from "../../common/TimeLine";
import ActionSheet from "../../common/ActionSheet";
import Popup from "../../common/Popup";
import QRcode from "../../common/QRcode";
import SwiperImg from "../../common/SwiperImg";
import SwiperTip from "../../common/SwiperTip";
import PopupPicker from "../../common/PopupPicker";
import Address from "../../common/Address";
import NumberChange from "../../common/NumberChange";
import TextArea from "../../common/TextArea";
import WeixinPay from "../../common/WeixinPay";
import VideoPlayer from "../../common/VideoPlayer";

export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    Search,
    ImagePreview,
    SwiperOut,
    Mobile,
    Divider,
    TimeLine,
    ActionSheet,
    Popup,
    QRcode,
    SwiperImg,
    SwiperTip,
    PopupPicker,
    Address,
    NumberChange,
    TextArea,
    WeixinPay,
    VideoPlayer
  },

  computed: {},

  beforeMount() {},

  mounted() {

  },

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>

</style>