var tplShopcar = require('../templates/shopcar.string');

SPA.defineView('shopcar', {
  html: tplShopcar,
  plugins:['delegated',{
    name:'avalon',
  }],
  bindActions:{
    'goto.index':function (){
      console.log(9)
      SPA.open('home')
    }
  }
});
