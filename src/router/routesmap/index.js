export default [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['@/components/index/Login'], resolve),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/indextab',
    name: 'indextab',
    component: resolve => require(['@/components/index/index'], resolve)
  },
  {
    path: '/userlocation',
    name: 'userlocation',
    component: resolve => require(['@/components/pages/kachuoplay/UserLocation'], resolve),
  },
  {
    path: '/appmessage',
    name: 'appmessage',
    component: resolve => require(['@/components/pages/kachuouser/Message'], resolve),
  },
  {
    path: '/messagelist',
    name: 'messagelist',
    component: resolve => require(['@/components/pages/kachuouser/MessageList'], resolve),
  },
  {
    path: '/usersearch',
    name: 'usersearch',
    component: resolve => require(['@/components/pages/kachuoplay/UserSearch'], resolve),
  },
  {
    path: '/ticketsdiscount',
    name: 'ticketsdiscount',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TicketsDiscount'], resolve),
  },
  {
    path: '/intelligentnavigation',
    name: 'intelligentnavigation',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation'], resolve),
  },
  {
    path: '/scencerelease',
    name: 'scencerelease',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease'], resolve),
  },
  {
    path: '/scenceservice',
    name: 'scenceservice',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceService'], resolve),
  },
  {
    path: '/remember',
    name: 'remember',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Remember'], resolve),
  },
  {
    path: '/understand',
    name: 'understand',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Understand'], resolve),
  },
  {
    path: '/takeaway',
    name: 'takeaway',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TakeAway'], resolve),
  },
  {
    path: '/servicesurround',
    name: 'servicesurround',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ServiceSurround'], resolve),
  },
  {
    path: '/scencereleasedetals',
    name: 'scencereleasedetals',
    component: resolve => require(['@/components/layout/ScenceReleaseDetails'], resolve),
  },
  {
    path: '/releasecontent',
    name: 'releasecontent',
    component: resolve => require(['@/components/layout/ReleaseContent'], resolve),
  },
  {
    path: '/scencestorydetail',
    name: 'scencestorydetail',
    component: resolve => require(['@/components/pages/kachuoplay/toollistcontent/ScenceStoryDetail'], resolve),
  },
  {
    path: '/scenceconsumdetails',
    name: 'scenceconsumdetails',
    component: resolve => require(['@/components/pages/kachuomall/ScenceConsumDetails'], resolve),
  },
  {
    path: '/scenceconsum',
    name: 'scenceconsum',
    component: resolve => require(['@/components/pages/kachuomall/ScenceConsum'], resolve),
  },
  {
    path: '/scencegifts',
    name: 'scencegifts',
    component: resolve => require(['@/components/pages/kachuomall/ScenceGifts'], resolve),
  },
  {
    path: '/famouscollection',
    name: 'famouscollection',
    component: resolve => require(['@/components/pages/kachuomall/FamousCollection'], resolve),
  },
  {
    path: '/backleasesale',
    name: 'BackLeaseSale',
    component: resolve => require(['@/components/pages/kachuocash/BackLeaseSale'], resolve),
  },
  {
    path: '/informationconsum',
    name: 'InformationConsumption',
    component: resolve => require(['@/components/pages/kachuocash/InformationConsumption'], resolve),
  },
  {
    path: '/informationconsumdetails',
    name: 'InformationConsumDetails',
    component: resolve => require(['@/components/pages/kachuocash/InformationConsumDetails'], resolve),
  },
  {
    path: '/videocreated',
    name: 'VideoCreated',
    component: resolve => require(['@/components/pages/kachuoincome/VideoCreated'], resolve),
  },
  {
    path: '/imageandtext',
    name: 'ImageAndText',
    component: resolve => require(['@/components/pages/kachuoincome/ImageAndText'], resolve),
  },
  {
    path: '/hundredshall',
    name: 'HundredsHall',
    component: resolve => require(['@/components/pages/kachuoincome/HundredsHall'], resolve),
  },
  {
    path: '/releasevideo',
    name: 'ReleaseVideo',
    component: resolve => require(['@/components/pages/kachuoincome/ReleaseVideo'], resolve),
  },
  {
    path: '/releaseimgandtext',
    name: 'ReleaseImgAndText',
    component: resolve => require(['@/components/pages/kachuoincome/ReleaseImgAndText'], resolve),
  },
  {
    path: '/imageandtextdetails',
    name: 'ImageAndTextDetails',
    component: resolve => require(['@/components/pages/kachuoincome/ImageAndTextDetails'], resolve),
  },
  {
    path: '/usertoken',
    name: 'UserToken',
    component: resolve => require(['@/components/pages/kachuouser/UserToken'], resolve),
  },
  {
    path: '/userintegral',
    name: 'UserIntegral',
    component: resolve => require(['@/components/pages/kachuouser/UserIntegral'], resolve),
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: resolve => require(['@/components/pages/kachuouser/ShoppingCart'], resolve),
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: resolve => require(['@/components/pages/kachuouser/OrderList'], resolve),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: resolve => require(['@/components/pages/kachuouser/Collection'], resolve),
  },
  {
    path: '/photoalbum',
    name: 'PhotoAlbum',
    component: resolve => require(['@/components/pages/kachuouser/PhotoAlbum'], resolve),
  },
  {
    path: '/tokenqrcode',
    name: 'TokenQrcode',
    component: resolve => require(['@/components/pages/kachuouser/TokenQrcode'], resolve),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: resolve => require(['@/components/pages/kachuouser/SignIn'], resolve),
  },
  {
    path: '/integraldesc',
    name: 'IntegralDesc',
    component: resolve => require(['@/components/pages/kachuouser/IntegralDesc'], resolve),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: resolve => require(['@/components/pages/kachuouser/Setting'], resolve),
  },
  {
    path: '/realnameauth',
    name: 'RealNameAuth',
    component: resolve => require(['@/components/pages/kachuouser/setting/RealNameAuth'], resolve),
  },
  {
    path: '/address',
    name: 'Address',
    component: resolve => require(['@/components/pages/kachuouser/setting/Address'], resolve),
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: resolve => require(['@/components/pages/kachuouser/setting/AboutUs'], resolve),
  },
  {
    path: '/opinion',
    name: 'Opinion',
    component: resolve => require(['@/components/pages/kachuouser/setting/Opinion'], resolve),
  },
  {
    path: '/realnameauthstate',
    name: 'RealNameAuthState',
    component: resolve => require(['@/components/pages/kachuouser/setting/RealNameAuthState'], resolve),
  },
  {
    path: '/addnewaddress',
    name: 'AddNewAddress',
    component: resolve => require(['@/components/pages/kachuouser/setting/AddNewAddress'], resolve),
  },
  {
    path: '/expressinfo',
    name: 'ExpressInfo',
    component: resolve => require(['@/components/pages/kachuouser/order/ExpressInfo'], resolve),
  },
  {
    path: '/goodsdetails',
    name: 'GoodsDetails',
    component: resolve => require(['@/components/pages/kachuomall/goods/GoodsDetails'], resolve),
  },
  {
    path: '/confirmorder',
    name: 'ConfirmOrder',
    component: resolve => require(['@/components/pages/kachuomall/goods/ConfirmOrder'], resolve),
  },
  {
    path: '/blockinfoindex',
    name: 'BlockInfoIndex',
    component: resolve => require(['@/components/pages/kachuomall/goods/blockchain/BlockInfoIndex'], resolve),
  },
  {
    path: '/blockchaininfodetails',
    name: 'BlockChainInfoDetails',
    component: resolve => require(['@/components/pages/kachuomall/goods/blockchain/BlockChainInfoDetails'], resolve),
  },
  {
    path: '/backleasedetails',
    name: 'BackLeaseDetails',
    component: resolve => require(['@/components/pages/kachuocash/BackLeaseDetails'], resolve),
  },
  {
    path: '/backbuydetails',
    name: 'BackBuyDetails',
    component: resolve => require(['@/components/pages/kachuocash/BackBuyDetails'], resolve),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: resolve => require(['@/components/pages/kachuomall/goods/Payment'], resolve),
  },
  {
    path: '/confirmordershoppingcart',
    name: 'ConfirmOrderShoppingCart',
    component: resolve => require(['@/components/pages/kachuomall/goods/ConfirmOrderShoppingCart'], resolve),
  }
]