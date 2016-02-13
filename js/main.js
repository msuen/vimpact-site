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
});