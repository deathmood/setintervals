# setintervals
Better setInterval(...) for browser - allows you to clear interval automatically after callback was called `N` times :)

### sample
```js
// write 'hi!' 5 times every 1000ms 
setIntervals(function () {
  document.write('hi!<br>')
}, 1000, 5)
```

### usage
 - use `setinterval.js` or `setinterval.min.js` directly in browser or
 - `npm install --save setinterval` and `var setInterval = require('setinterval')` with browserify/webpack

### it is tooo little - only 105 bytes minified :))

