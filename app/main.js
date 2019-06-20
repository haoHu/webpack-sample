/**
 * 为了展示模块化的开发效果，我们的主文件引用Greeter模块，并调用他的方法，实现将greeter函数执行的结果插入到页面的#root节点
 */
const greeter = require('./Greeter');
document.querySelector('#root').appendChild(greeter());
