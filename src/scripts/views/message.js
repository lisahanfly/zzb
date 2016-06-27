var tplMessage = require('../templates/message.string');

SPA.defineView('message', {
  html: tplMessage,
  plugins:['delegated',{
    name:'avalon'
  }],
  // bindActions:{
  //   // 'gotologin':function(){
  //   //   console.log(9)
  //   //   SPA.open('login')
  //   // }
  //   'gotologin':function (e,data){
  //     SPA.open('login');
  //   }
  // },
  bindEvents:{
    'beforeShow':function(){
      SPA.open('login');

    }
  }
});
