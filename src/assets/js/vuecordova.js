export const vueCordovaFunction = {
  /** 
   * 获取经纬度
  */
  getLocation: function () {
    let positionInfo = {
      "Latitude": "",
      "Longitude": ""
    }
    document.addEventListener("deviceready", onDeviceReady, false);
    function onSuccess(position) {
      positionInfo.Latitude = position.coords.Latitude;
      positionInfo.Longitude = position.coords.Longitude;
      sessionStorage.setItem("positionInfo", JSON.stringify(positionInfo));
    }
    function onError(error) {
      console.log(`code:${error.code},message:${error.message}`);
    }
    function onDeviceReady() {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  },
  /**
  partnerid: res.partnerid, // merchant id
  prepayid: res.prepayid, // prepay id
  noncestr: res.noncestr, // nonce
  timestamp: res.timestamp.toString(), // timestamp
  sign: res.paySign, // signed string
  **/
  WeixinPay: function (res) {
    let WXparams = {
      partnerid: res.partnerid, // merchant id
      prepayid: res.prepayid, // prepay id
      noncestr: res.noncestr, // nonce
      timestamp: res.timestamp.toString(), // timestamp
      sign: res.paySign, // signed string
    }
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
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
    }
  },
  /**
   * 支付宝支付
   *  */
  AliPay: function (aliInfo) {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
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
  },
  /**
   * 社会化分享
   */
  socialShare: function (id) {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      var options = {
        message: '卡戳', // not supported on some apps (Facebook, Instagram)
        subject: 'the subject', // fi. for email
        files: ['', ''], // an array of filenames either locally or remotely
        url: 'https://core.kachuo.com/share/index.html?id='+id,
        chooserTitle: '卡戳', // Android only, you can override the default share sheet title,
        appPackageName: '' // Android only, you can provide id of the App you want to share with
      };

      var onSuccess = function (result) {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
      };

      var onError = function (msg) {
        console.log("Sharing failed with message: " + msg);
      };

      window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    }
  }
}