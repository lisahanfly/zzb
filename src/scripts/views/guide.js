var guide=require("../templates/guide.string");
SPA.defineView('guide',{
  html:guide,
  init:{
    vm:null,
    guideArr:[]
  },
  plugins:['delegated',{
    name:'avalon',
    options:function(vm){
        vm.guideList=[]
    }
  }],
  bindEvents:{
    // 'show': function () {
    //
    // },
    'beforeShow':function(){
      var that=this;
      that.vm=that.getVM();
      $.ajax({
        url:'api/getLivelist.php',
        type:'get',
        data:{
          rtype:'guide'
        },
        success:function(rs){
          that.vm.guideList=rs.data;
          that.guideArr=rs.data;
          var mySwiper = new Swiper('#guide-swiper', {//ajax请求有延迟,所以不能写在show方法中
            loop: false
          });
          setTimeout(function(){
            SPA.open("index");
          },2000)
        }
      })
    }
  },
});
