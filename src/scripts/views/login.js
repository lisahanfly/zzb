var tplLogin=require("../templates/login.string");

SPA.defineView('login',{
  html:tplLogin,
  plugins:['delegated',{
    name:'avalon'
  }],
  bindActions:{
    'back':function(){
      this.hide()
    }
  }
})
