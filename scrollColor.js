var q1 = "#FFF9E2", q2 = "#D7F9F4", q3 = "#E5F8FF";

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#q1").position().top) {
				$('body').css('background', $("#q1").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#q2").position().top-100) {
				$('body').css('background', $("#q2").attr("data-color"));
		};
		if ($(document).scrollTop() > $("#q3").position().top-100) {

				$('body').css('background', $("#q3").attr("data-color"));
		};
});