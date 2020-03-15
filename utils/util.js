// 生成日期,形如 2019.08.16 10:00
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('.') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 生成时间,形如 10:00
function formatTimeStamp(timeStamp) {
  var date = new Date(timeStamp);
  var hour = date.getHours()
  var minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':')
}

// 生成日期,形如 2019.08.16
function formatDateStamp(timeStamp) {
  var date = new Date(timeStamp);
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('.');
}

// 生成数字
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 自动跳转,若page堆栈中已经存在,则返回到那一页
function autoNavigateOrRedirectTo(object) {
  var end = object.url.indexOf('?');
  var mark = object.url.substring(3, end != -1 ? end : object.url.length);
  var pages = getCurrentPages();
  for (let index in pages) {
    if (pages[index].route.indexOf(mark) != -1) {
      wx.navigateBack({
        delta: pages.length - index - 1
      });
      return;
    }
  }

  wx.navigateTo(object);
}

//判断字符是否为空的方法
function isEmpty(obj) {
  if (obj === undefined || obj === null || obj === "") {
    return true;
  } else {
    return false;
  }
}

// 控制台打印输出
function lg(log) {
  console.log(log);
}

// 控制台打印输出
function error(log) {
  console.error(log);
}

module.exports = {
  formatTime,
  formatTimeStamp,
  formatDateStamp,
  autoNavigateOrRedirectTo,
  isEmpty,
  lg,
  error,
}