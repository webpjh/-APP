<template>
  <div>
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
    <!-- <Video-Player></Video-Player> -->
    <!-- <Cell></Cell> -->
    <!-- <Tab></Tab> -->
    <!-- <Comments></Comments> -->
    <!-- <CommentList></CommentList> -->
    <!-- <Tickets-Discount></Tickets-Discount> -->
    <!-- <GoodsList></GoodsList> -->
    <!-- <Function-Areas></Function-Areas> -->
    <Link-List-Icon></Link-List-Icon>
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
import Popup from "../../layout/Popup";
import QRcode from "../../common/QRcode";
import SwiperImg from "../../common/SwiperImg";
import SwiperTip from "../../common/SwiperTip";
import PopupPicker from "../../common/PopupPicker";
import Address from "../../common/Address";
import NumberChange from "../../common/NumberChange";
import TextArea from "../../common/TextArea";
import WeixinPay from "../../common/WeixinPay";
import VideoPlayer from "../../common/VideoPlayer";
import Cell from "../../common/Cell";
import Tab from "../../common/Tab";
import Comments from "../../common/Comments";
import CommentList from "../../layout/CommentList";
import TicketsDiscount from "../../layout/TicketsDiscount";
import GoodsList from "../../layout/GoodsList";
import FunctionAreas from "../../layout/FunctionAreas";
import LinkListIcon from "../../layout/LinkListIcon";

export default {
  name: "",
  props: [""],
  data() {
    return {
      varmax: 3,
      images: [],
      uploadUrl: "",
      params: {}
    };
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
    VideoPlayer,
    Cell,
    Tab,
    Comments,
    CommentList,
    TicketsDiscount,
    GoodsList,
    FunctionAreas,
    LinkListIcon
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    previewMethod() {},
    addImageMethod() {},
    removeImageMethod() {}
  },

  watch: {}
};
</script>
<style lang='' scoped>
</style>