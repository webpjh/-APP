//自定义弹框 2s消失
export const Toast = () => {
  isToast = true;
  beginDate = new Date().getTime();
  duration = isNaN(duration) ? 3000 : duration; // duration是不是一个数字    
  var m = document.createElement('div');
  m.innerHTML = msg;
  m.style.cssText = "width:60%; min-width:150px; background:#000; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; top:80%; left:20%; z-index:999999; font-weight:bold;";
  document.body.appendChild(m);
  setTimeout(function () {
    var d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function () { document.body.removeChild(m) }, d * 1000);
  }, duration);
}

export const eventBackButton = () => {
  function eventBackButton() {
    if (window.location.href.indexOf('/kachuotab') != -1) {
      if (exitAppTicker == 0) {
        exitAppTicker++;
        Toast("再点一次退出", 2000);
        setTimeout(function () {
          exitAppTicker = 0;
        }, 2000);
      } else {
        navigator.app.exitApp(); //退出app
      }
    } else {
      navigator.app.backHistory();
    }
  }
  function onDeviceReady() {
    document.addEventListener("backbutton", eventBackButton, false);
  }
  document.addEventListener("deviceready", onDeviceReady, false);
}