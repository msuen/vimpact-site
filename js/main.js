$(document).ready(function() {
	function setHeight() {
	var windowHeight = $(window).innerHeight();
	$('.is-full-height').css('height', windowHeight);
	}
	setHeight();

	$(window).resize(function() {
		setHeight();
	});
	
	window.sr = ScrollReveal().reveal('.hero__image');

	$(function(){
	    $("button").click(function(){
	      $.scrollTo($("#explainer"), { duration: 200});
	    });
	});

 //    $(function () { // wait for document ready
	// 	// init
	// 	var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
	// 			triggerHook: 'onLeave'
	// 		}
	// 	});

	// 	// get all slides
	// 	var slides = document.querySelectorAll(".hero");

	// 	// create scene for every slide
	// 	for (var i=0; i<slides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 			})
	// 			.setPin(slides[i])
	// 			.addTo(controller);
	// 	}
	// });

});