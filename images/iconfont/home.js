
var tplHome=require("../templates/home.string");
var util=require("../utils/fn.js");

SPA.defineView('home',{
  html:tplHome,
  init:{
    mySwiper:null,
    navListSwiper:null,
    vm:null
  },
  plugins:['delegated',{
    name: 'avalon',
    options: function (vm) {
      vm.homelist = [];
    }
  }],

  bindActions:{
    'tab.slide': function (e, data) {
      // this.mySwiper.slideTo($(e.el).index())
      // console.log($(e.el).index())
      util.setFocus(e.el)
      // console.log($(e.el).index())
      // console.log(this)
      // console.log(this.navListSwiper)
      // this.navListSwiper.slideTo($(e.el).index());
      this.navListSwiper.slideTo($(e.el).index());
    }
  },
  bindEvents:{
    //beforeShow中用Ajax加载数据
    'beforeShow':function(){
      // console.log(this)
      var that= this;
      //获得vm对象
      that.vm = that.getVM();
      $.ajax({
        url:'/api/getLivelist.php',
        type:'get',
        data:{
          rtype:'origin'
        },
        success:function(rs){
          that.vm.homelist=rs.data;
        }
      })


    },
    'show':function(){
      //banner图的轮播
      var that=this;
      that.mySwiper = new Swiper('#banner-swiper', {
        loop: false
      });
      //navlistscroll滚动
      var navlistscroll=this.widgets.navlistscroll;
      // console.log(navlistscroll)
      navlistscroll.options.scrollX=true;
      navlistscroll.options.scrollY=false;
      that.navListSwiper=new Swiper("#nav-list-swiper",{
        loop: false
      });
    }
  }
});
