
var tplHome=require("../templates/home.string");
var util=require("../utils/fn.js");

SPA.defineView('home',{
  html:tplHome,
  init:{
    mySwiper:null,
    navListSwiper:null,
    vm:null,
    goodsArr:[],
    goodsBrand:[]
  },
  plugins:['delegated',{
    name: 'avalon',
    options: function (vm) {
      vm.homelist = [];
      vm.homebag=[];
    }
  }],

  bindActions:{
    'tab.slide': function (e, data) {
      // console.log(e)
      util.setFocus(e.el);
      this.navListSwiper.slideTo($(e.el).index());
      var index=$(e.el).index();
      var that=this;
      that.vm = that.getVM();
      if(index==0||index==10||index==11||index==12){
        return ;
      }
      $.ajax({
        url:'/api/getLivelist.php',
        type:'get',
        data:{
          rtype:'detail'+index
        },
        success:function(rs){
          that.goodsBrand=rs.brand_list;
          that.vm.homebag=rs.brand_list;

        }
      });
//
    },
    'goto.detail':function (e,data){
      SPA.open('detail');
    }
  },
  bindEvents:{

    //beforeShow中用Ajax加载数据
    'beforeShow':function(e){
      var that= this;
      //获得vm对象
      that.vm = that.getVM();
      $.ajax({
        url:'/api/getLivelist.php',
        type:'get',
        data:{
          rtype:'origin',
        },
        success:function(rs){
          that.goodsArr=rs.rec_list;
          that.vm.homelist=rs.rec_list;
        }
      })
    },
    'show':function(){
      //banner图的轮播
      var that=this;
      that.mySwiper = new Swiper('#banner-swiper', {
        loop: true,
        autoplay:1000,
        pagination: '.swiper-pagination'
      });
      //navlistscroll滚动
      var navlistscroll=this.widgets.navlistscroll;
      // console.log(navlistscroll)
      navlistscroll.options.scrollX=true;
      navlistscroll.options.scrollY=false;
      that.navListSwiper=new Swiper("#nav-list-swiper",{
        loop: false
      });
      //下拉刷新，上拉加载更多
      var scrollSize = 30;
      var myScroll = this.widgets.homeHotScroll;
      myScroll.scrollBy(0, -scrollSize);
      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');
      myScroll.on('scroll', function () {
          var y = this.y,
              maxY = this.maxScrollY - y;
          if (y >= 0) {
              !topImgHasClass && head.addClass('up');
              return '';
          }
          if (maxY >= 0) {
              !bottomImgHasClass && foot.addClass('down');
              return '';
          }
      });

      myScroll.on('scrollEnd', function () {
          if (this.y >= -scrollSize && this.y < 0) {
              myScroll.scrollTo(0, -scrollSize);
              head.removeClass('up');
          } else if (this.y >= 0) {
              head.attr('src', '/makemoney/images/ajax-loader.gif');
              //ajax下拉刷新数据
              $.ajax({
                url:'/api/getLivelist.php',
                data:{
                  rtype:'refresh'
                },
                success:function(rs){
                  console.log(rs)
                  var newArray = rs.data.concat(that.goodsArr);
                  that.vm.homelist = newArray;
                  that.goodsArr = newArray;
                  myScroll.scrollTo(0, -scrollSize);
                  head.removeClass('up');
                  head.attr('src', '/makemoney/images/arrow.png');
                }
              })
          }

          var maxY = this.maxScrollY - this.y;
          var self = this;
          if (maxY > -scrollSize && maxY < 0) {
              myScroll.scrollTo(0, self.maxScrollY + scrollSize);
              foot.removeClass('down')
          } else if (maxY >= 0) {
              foot.attr('src', '/makemoney/images/ajax-loader.gif');
              // ajax上拉加载数据

              $.ajax({
                url: '/api/getLivelist.php',
                data: {
                  rtype: 'more'
                },
                success: function (rs) {
                  var newArray = that.goodsArr.concat(rs.data);
                  that.vm.homelist = newArray;
                  that.goodsArr = newArray;
                  myScroll.scrollTo(0, self.y + self.maxScrollY);
                  foot.removeClass('down');
                  foot.attr('src', '/makemoney/images/arrow.png');
                }
              });
          }
      });
    },
    //回调
//     'ready':function(){
//       //判断index值
//       var that=this;
//       that.vm = that.getVM();
//       // if(index==0||index==10||index==11||index==12){
//       //   return ;
//       // }
//       for(var i=1;i<=12;i++){
//
//         var index=i;
//           $.ajax({
//             url:'/api/getLivelist.php',
//             type:'get',
//             data:{
//               rtype:'detail'+index
//             },
//             success:function(rs){
//               that.goodsBrand=rs.brand_list;
//               that.vm.homebag=rs.brand_list;
//             }
//           });
//       }
//
//     }

  }
});
