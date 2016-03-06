window.setIntervals = function (callback, period, n) {
  var i = 0, interval = setInterval(function () {
    if (i < n) {
      callback()
      i++
    } else {
      clearInterval(interval)
    }
  }, period)
}
