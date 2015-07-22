$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.menu').fadeIn();
    } else {
        $('.menu').fadeOut();
    }

});

$('#modal').modal()

$(document).ready(function(){
	$('.go[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	 
	    var target = this.hash,
	    $target = $(target);
	 
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#fff",
        backgroundColor: "#baaf32",
        percentage: true,
        barHeight: 1,
        minimumTime: 200,
        fadeOutTime: 1000
    });
});

$(document).ready(function () {
    $("body").queryLoader2();
});