import Vue from 'vue'
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

export const KachuoAppPay = {
  WeixinPay: function (partnerid, prepayid, noncestr, timestamp, sign) {
    let WXparams = {
      partnerid: res.data.url.partnerid, // merchant id
      prepayid: res.data.url.prepayid, // prepay id
      noncestr: res.data.url.noncestr, // nonce
      timestamp: res.data.url.timestamp.toString(), // timestamp
      sign: res.data.url.paySign, // signed string
    }
    Wechat.sendPaymentRequest(WXparams, (s) => {
      this.$vux.toast.show({
        text: '支付成功',
        type: 'success',
        time: 2000
      })
    }, (e) => {
      this.$vux.toast.show({
        text: '支付失败,请重试!',
        type: 'warn',
        time: 2000
      })
    });
  },
  AliPay: function (aliInfo) {
    cordova.plugins.alipay.payment(aliInfo, function success(e) {
      if (e.resultStatus === 9000) {
        this.$vux.toast.show({
          text: '支付成功',
          type: 'success',
          time: 2000
        })
      } else if (e.resultStatus === 4000) {
        this.$vux.toast.show({
          text: '支付失败，请重试',
          type: 'warn',
          time: 2000
        })
      } else {
        return;
      }
    }, function error(e) {
      console.log(e);
    });
  }
}

export const getCordovaLocation = () => {
  if (typeof AMapPlugin != 'undefined') {
    AMapPlugin.getCurrentPosition(function (data) {
      // success
      alert(JSON.stringify(data));
    }, function (err) {
      // fail
      alert(JSON.stringify(err));
    })
  }
}

Vue.cordova.on('deviceready', () => {

});