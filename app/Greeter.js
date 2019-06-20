/**
 * 为了掩饰模块化的效果，这里依据CommonJS规范写一个最简单的模块，导出这个函数为一个模块
 */
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = 'Hello Holla';
  return greet;
};
