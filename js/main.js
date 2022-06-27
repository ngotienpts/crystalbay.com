document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // header
  var header = document.querySelector('#header');

  // submenu
  var subMenu = document.querySelector('.sub-menu-wrapper');

  // navbar arrow 
  var arrow = document.querySelector('.navbar-arrow');

  // height fixed
  var heightFixed = document.querySelector('.height-fixed');

  // header
  var prevScrollpos = window.pageYOffset;

  // about
  var aboutIcons = document.querySelectorAll('.about-minus')

  // tabs
  var tabs = document.querySelectorAll('.tab-item');
  var panes = document.querySelectorAll('.tab-pane');

  // destination list
  var destination = document.querySelector('.destination-list');

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // 
      if(header){
        var extendsMenu = header.querySelectorAll('.header-extend-icon');
        extendsMenu.forEach(function(a){
          if(subMenu){
            subMenu.style.top = header.clientHeight + 'px';
            a.onclick = function(){
              subMenu.classList.toggle('open');
              if(widthDoc.clientWidth <= 980){
                widthDoc.classList.toggle('hide');
              }
            }
          }
        });
        
        
        if(heightFixed){
          heightFixed.style.height = header.clientHeight + 'px';
        }

      }


      // arrow
      if(arrow){
        var navbarList = document.querySelector('.navbar-mb__list');
        arrow.onclick = function(){
          navbarList.scrollLeft += 100;
        }
      }

      // destination list
      if(destination){
        destination.style.marginTop = '-' + ((destination.clientHeight) - 50) + 'px';
      }

      // tabs
      if(tabs || panes){
        tabs.forEach((tab,index)=>{
          var pane = panes[index]
          tab.onclick = function() {
            document.querySelector('.tab-item.active').classList.remove('active');
            document.querySelector('.tab-pane.active').classList.remove('active');
            
            
            this.classList.add('active');
            pane.classList.add('active');
            
            if(destination){
              destination.style.marginTop = '-' + ((destination.clientHeight) - 50) + 'px';
            }
            
          }
        })
      }

      

      
      // about icon 
      if(aboutIcons){
        aboutIcons.forEach(function(index){
          index.onclick = function(){
            index.parentElement.parentElement.lastElementChild.classList.toggle('open');
            if(index.parentElement.parentElement.lastElementChild.matches('.open')){
              if(index.firstElementChild.getAttribute('class') == 'fas fa-plus'){
                index.firstElementChild.setAttribute('class','fas fa-minus')
              }
            }else {
              index.firstElementChild.setAttribute('class','fas fa-plus')
            }
          }
        })
      }
      if(widthDoc){
        var expNoEditFull = document.querySelectorAll('.expNoEdit.full');
        expNoEditFull.forEach(function(a){
          a.style.width = widthDoc.clientWidth + 'px';
          a.style.marginLeft = '-' + a.offsetLeft + 'px';
        })
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // slider điểm đến mùa hè
    sliderSummer: function(){
      var swiper3 = new Swiper(".mySwiperSummer", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // slider thư viện ảnh & video
    sliderPicture: function(){
      var swiper4 = new Swiper(".mySwiperPiture", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
        pagination: {
          el: ".swiper-pagination2",
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 8,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // slider nhà đầu tư
    sliderInvestos: function(){
      var swiper5 = new Swiper(".mySwiperInvestor", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        },
        pagination: {
          el: ".swiper-pagination3",
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slider điểm đến mùa hè
      this.sliderSummer();
      // slider thư viện ảnh & video
      this.sliderPicture();
      // slider nhà đầu tư
      this.sliderInvestos();
    },
  };

  app.start();
});
