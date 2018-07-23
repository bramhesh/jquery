$(document).ready(function() {

	$("#first").click(
		function(){
			$(".matter1").slideToggle("slow");
			$(".matter2").slideUp("slow");	
			$(".matter3").slideUp("slow");

	});

	$("#second").click(
		function(){
			$(".matter2").slideToggle("slow");
			$(".matter1").slideUp("slow");	
			$(".matter3").slideUp("slow");

	});

	$("#third").click(
		function(){
			$(".matter3").slideToggle("slow");
			$(".matter1").slideUp("slow");
			$(".matter2").slideUp("slow");

	});

	$("#first").hover(
		function(){
			$(this).toggleClass("focus");
	});

	$("#second").hover(
		function(){
			$(this).toggleClass("focus");
	});

	$("#third").hover(
		function(){
			$(this).toggleClass("focus");
	});

});