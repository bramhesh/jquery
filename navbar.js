$(document).ready(function() {

	$("#search-some").mouseenter(function() {
		
		$(this).removeClass("no-hover").addClass("hover");

}),
	$("#search-some").mouseleave(function() {
		
		$(this).removeClass("hover").addClass("no-hover");	
}),

    $(".menu").click(() => {
    	
        $("ul").toggleClass("active");


    });

});