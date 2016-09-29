
//Mobile/Desktop menu control
	(function() {

		"use strict";

		var navIcon = document.querySelectorAll(".c-hamburger")[0];
		var modal = document.querySelectorAll(".mobile-modal")[0];
		var slidingPart = document.querySelectorAll(".mobile-menu__container")[0];
		var headerLogo = document.querySelectorAll(".header-logo")[0];
		var slidingPartText = document.querySelectorAll(".mobile-menu")[0];
		var link = $(".mobile-menu__elem-link");
		var item = $('.mobile-menu__container');

		//mobile link click
		link.click(function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
			var self = this;
			item.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
				function() {
					window.location = self.href;
				});
		})

		navIcon.addEventListener("click", function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
		});

		modal.addEventListener("click", function(e) {
			e.preventDefault();
			menuEventsHandler(navIcon, modal, slidingPart, headerLogo, slidingPartText)
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
