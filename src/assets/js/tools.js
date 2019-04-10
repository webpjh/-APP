// 格式化师承返回数据
export const formData = (dataArr) => {
  let resultArr = new Array();
  let flagIndexArr = new Array();
  dataArr.forEach(function (item, index) {
    if (item.parent === "0") {
      flagIndexArr.push(index);
      resultArr.push({
        name: item.name,
        data: []
      })
    }
  })
  for (let i = 0; i < flagIndexArr.length; i++) {
    resultArr[i].data = dataArr.slice(flagIndexArr[i], flagIndexArr[i + 1]);
  }
  return resultArr;
}
// 日期转换(2019/10/12 下午10：09)
export const getLocalTime = (time) => {
  return new Date(parseInt(time, 10) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

// 补零函数
function addZero(m) {
  return m < 10 ? '0' + m : m
}

// 时间戳转日期
export const timeTodate = (timeDate) => {
  // return new Date(parseInt(date) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
  var time = new Date(parseInt(timeDate) * 1000);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + addZero(m) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(mm) + ':' + addZero(s);
}

// 获取当前位置
export const getLocation = () => {
  function showPosition(position) {
    alert(position.coords.latitude + "," + position.coords.longitude);
  }
  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition);
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

// 获取手机操作系统
export const checkMobileSystem = () => {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return "android";
  } else {
    return "ios";
  }
}

// 已知开始时间呵结束时间，计算日期间隔
export const computedDataInterval = (beginDate, endDate) => {
  let begindate = new Date(Date.parse(beginDate.replace(/-/g, "/"))).getTime();
  let enddate = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
  let day = parseInt((enddate - begindate) / 1000 / 3600 / 24,10);
  return day;
}