/*$('#home-images').parallax();*/
/*
$('.lazy').unveil(800, function(){
  $(this).load(function() {
	this.style.opacity = 1;
  });
});
*/
$('.project-link').hover(
	function() {
	var image = $(this).attr('data-hover-image');
	$('#'+image+' .img-bg').addClass('active');
	},
	function() {
	var image = $(this).attr('data-hover-image');
	$('#'+image+' .img-bg').removeClass('active');			
	}
);

$('.project-link').on("touchstart", function(e) {
	"use strict";
	var image = $(this).attr('data-hover-image');
	$('#'+image+' .img-bg').addClass('active');
});

$('.project-link').on("touchend", function(e) {
	"use strict";
	var image = $(this).attr('data-hover-image');
	$('#'+image+' .img-bg').removeClass('active');
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}
/*
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        console.log(currLink);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}*/

		 $(document).ready(function () {
				$(document).on("scroll", onScroll);

				$('a[href^="#"]').on('click', function (e) {
					e.preventDefault();
					$(document).off("scroll");

					$('a').each(function () {
						$(this).removeClass('active');
					})
					$(this).addClass('active');

					var target = this.hash;
					$target = $(target);
					$('html, body').stop().animate({
						'scrollTop': $target.offset().top+2
					}, 500, 'swing', function () {
						window.location.hash = target;
						$(document).on("scroll", onScroll);
					});
				});
			});

			function onScroll(event){
				var scrollPosition = $(document).scrollTop();
				//console.log(scrollPosition);
				$('nav .hahaha a').each(function () {
					var currentLink = $(this);
					//console.log($(this).attr("href"));
					var refElement = $(currentLink.attr("href"));
					//console.log(refElement);
					//if(refElement == "index.html") return;
					if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
						$('nav ul li a').removeClass("active");
						currentLink.addClass("active");
					}
					else{
						currentLink.removeClass("active");
					}
				});
			}
