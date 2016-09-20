$(document).ready(function() {
  console.log('asd')
});

(function() {

  "use strict";

  var navIcon = document.querySelectorAll(".c-hamburger")[0];
  var modal = document.querySelectorAll(".mobile-modal")[0];
  var slidingPart = document.querySelectorAll(".mobile-menu__container")[0];
  var headerLogo = document.querySelectorAll(".header-logo")[0];
  var slidingPartText = document.querySelectorAll(".mobile-menu")[0];
  var link = $(".mobile-menu__elem-link");


  link.click(function() {
    menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
  })

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


  var bodyWrapper =  document.querySelectorAll(".main-container")[0];
  var preloader = document.querySelectorAll(".preloader-container")[0];

  if (bodyWrapper.classList.contains('not-active') === true) {
    setTimeout(function() {
      bodyWrapper.classList.remove('not-active')
      preloader.classList.add('not-active')
    }, 100)
  }

})();