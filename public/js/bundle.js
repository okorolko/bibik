// Lazy load
var myLazyLoad = new LazyLoad();


//Mobile/Desktop menu control
	(function() {

		"use strict";

		var navIcon = document.querySelectorAll(".c-hamburger")[0];
		var modal = document.querySelectorAll(".mobile-modal")[0];
		var slidingPart = document.querySelectorAll(".mobile-menu__container")[0];
		var headerLogo = document.querySelectorAll(".header-logo")[0];
		var slidingPartText = document.querySelectorAll(".mobile-menu")[0];
		var mobileLink = $(".mobile-menu__elem-link");
		var productsLink = $('.products__elem_link');
		var mobileMenuModal = $('.mobile-modal');

		//mobile link click
		mobileLink.click(function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)

			mobileMenuModal.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
				function() {
					window.location.assign(this.href);
				}.bind(this));
		})

		navIcon.addEventListener("click", function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
		});

		modal.addEventListener("click", function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
		});

		productsLink.click(function(e) {
			e.preventDefault();
			window.location.assign(this.href)
		});

		//Toggle class is-active
		function menuEventsHandler() {
			var args = Array.prototype.slice.call(arguments, 0);
			args.forEach(function(toggle) {
				(toggle.classList.contains('is-active') === true) ? toggle.classList.remove('is-active') : toggle.classList.add('is-active')
			})
		}

	})();

// Removes ".not-active" class on window load
window.onload = function() {

(function() {
	var bodyWrapper = document.querySelectorAll(".main-container")[0];
	var preloader = document.querySelectorAll(".preloader-container")[0];

	if (bodyWrapper.classList.contains('not-active') === true) {
			bodyWrapper.classList.remove('not-active')
			preloader.classList.add('not-active')
	}
}())

}




