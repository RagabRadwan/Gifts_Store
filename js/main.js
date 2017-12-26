// JavaScript Document

(function () {

	"use strict";
	
	

new WOW().init();

	$(window).scroll(function () {

		var scroll = $(window).scrollTop();

		if (scroll > 100) {

			$(".mainMenu").addClass("fixed");

		} else {

			$(".mainMenu").removeClass("fixed");

		}

	});


	$('#nav-icon3').click(function () {

		$('.navbar-nav').slideToggle();

		$(this).toggleClass('open');

	});
	
$('.mainSectionRight .btn-group .btn').click(function(){
	$('.mainSectionRight .btn-group .btn').removeClass('active');
	$(this).addClass('active');
});




})();
