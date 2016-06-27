var tplDetail=require("../templates/detail.string");
var util=require("../utils/fn.js");
SPA.defineView('detail',{
  html:tplDetail,
  init:{
    vm:null,
    detailArr:[]
  },
  plugins:['delegated',{
    name:'avalon',
    options:function(vm){
      vm.detailinfo=[];
      vm.isShowLoading=true;
    }
  }],
  bindActions:{
    'back': function(){
      this.hide();
    },
    'click':function(e,data){
      util.setFocus(e.el);
    }
  },
  bindEvents:{
    'beforeShow':function(){
      var that=this;
      that.vm=that.getVM();//获得vm对象
      $.ajax({
        url:'/api/getLivelist.php',
        type:'get',
        data:{
          rtype:'detailgoods'
        },
        success:function(rs){
          setTimeout(function(){
            that.vm.detailinfo=rs.data;
            that.vm.isShowLoading=false;
          },2000)
        }
      })
    }
  }

})
