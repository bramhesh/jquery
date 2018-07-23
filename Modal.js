$(document).ready(function() {

	$("#modal-button").click(function() {

		$(".modal").css("display", "flex");
	});

	$(".close").click(function() {

		$(".modal").css("display", "none");
	});

	$(".close").hover(function() {

		$(".close").css("cursor", "pointer");
	});

	$(window).click(function (event) {

        var target = $(event.target);
        if ( target.is(".modal")  || target.is(".btnCloseBtn") ) {
            $(".modal").css("display", "none");
        }
    }); 

});