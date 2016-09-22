(function() {

  "use strict";

  var navIcon = document.querySelectorAll(".c-hamburger")[0];
  var modal = document.querySelectorAll(".mobile-modal")[0];
  var slidingPart = document.querySelectorAll(".mobile-menu__container")[0];
  var headerLogo = document.querySelectorAll(".header-logo")[0];
  var slidingPartText = document.querySelectorAll(".mobile-menu")[0];
  var link = $(".mobile-menu__elem-link");
  var desktopLink = $('.menu-desktop__elem-link')
  var item = $( '.mobile-modal' );
  var slides = document.querySelectorAll(".swiper-slide").length;



  var bodyWrapper =  document.querySelectorAll(".main-container")[0];
  var preloader = document.querySelectorAll(".preloader-container")[0];

  if (bodyWrapper.classList.contains('not-active') === true) {
    setTimeout(function() {
      bodyWrapper.classList.remove('not-active')
      preloader.classList.add('not-active')
    }, 1)
  }


  link.click(function(e) {
    e.preventDefault();
    menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
    var self = this;
    item.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function() {
        window.location = self.href;
        //bodyWrapper.classList.add('fade-out')
      });
  })

  //desktopLink.click(function(e) {
    //e.preventDefault();
    //bodyWrapper.classList.add('fade-out')
    //var self = this;
    //$('.main-container').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      //function() {
        //window.location = self.href;
        //console.log(window.location)

      //});
  //})


  navIcon.addEventListener( "click", function(e) {
    e.preventDefault();
    menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
  });

  modal.addEventListener( "click", function(e) {
    e.preventDefault();
    menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
  });

  function menuEventsHandler() {
      var args = Array.prototype.slice.call(arguments, 0);
      args.forEach(function(toggle) {
         (toggle.classList.contains('is-active') === true) ? toggle.classList.remove('is-active') : toggle.classList.add('is-active')
    })
  }

})();