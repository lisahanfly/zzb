// 引入spa类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

// 引入views
require('./views/index.js');
require('./views/home.js');
require('./views/fenlei.js');
require('./views/message.js');
require('./views/my.js');
require('./views/shopcar.js');
require('./views/detail.js');
require('./views/guide.js');
require('./views/login.js');


//设置先进入哪个页面
SPA.config({
  indexView:'guide'
});
