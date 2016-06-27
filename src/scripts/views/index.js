
var tplIndex=require("../templates/index.string");
//引入公共的方法
var util=require("../utils/fn.js");

SPA.defineView('index',{
  html:tplIndex,
  plugins: ['delegated'],
  // 定义并添加子视图
  modules: [{
    name: 'content', // 子视图的名字，用作后边引用的句柄
    views: ['home','fenlei','message','my','shopcar'], // 定义子视图的列表数组
    defaultTag: 'home', // 定义默认视图
    container: '.l-container' // 子视图的容器
  }],
  //点击切换视图
  bindActions:{
    "switch.tabs":function(e,data){
      // console.log(e)
      util.setFocus(e.el)
      this.modules.content.launch(data.tag);
    }
  }

});
