jQuery(document).ready(function($){
	"use strict";

/* ==================================================
   Mobile Detection
================================================== */

	function isMobile(){
    	return ((navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)));
	}

	var MQL = 991;


	$(window).resize(function() {
		if( $(window).width() < MQL || isMobile() ) {
			$('html').addClass('is-mobile');
		}
		else if( $(window).width() > MQL || !isMobile() ) {
			$('html').removeClass('is-mobile');
		}

	}).resize();


/* ==================================================
   Header Settings
================================================== */
var headerHeight = $('#header').outerHeight();
var headerOffset = headerHeight;

//primary navigation slide-in effect
$(window).on('scroll', { previousTop: 0 }, function() {
		var currentTop = $(window).scrollTop();
		//check if user is scrolling up
		if (currentTop < this.previousTop ) {
			//if scrolling up...
			if (currentTop > 0 && $('#header .menu-wrapper').hasClass('is-fixed')) {
				$('#header .menu-wrapper').addClass('is-visible');
			}
		else {
				$('#header .menu-wrapper').removeClass('is-visible is-fixed');
				$('#header .menu-wrapper').css('top', '0px');
				$('#header').css('height', 'auto');
			}
		}
	else if( currentTop > this.previousTop ) {
		//if scrolling down...
		$('#header .menu-wrapper').removeClass('is-visible');
		if( currentTop > headerHeight && !$('#header .menu-wrapper').hasClass('is-fixed')) {
		$('#header .menu-wrapper').addClass('is-fixed');
		$('#header .menu-wrapper').css('top', '-' + headerOffset + 'px');
		$('#header').css('height', headerHeight + 'px');
	}
	}
	this.previousTop = currentTop;
});

	// Section Parallax
	 $('.parallax').each(function() {
		 var $this = this;
		 var firstTop = $(this).offset().top;
		 var height = $(this).outerHeight();
		 var xpos = $(this).find('.img-bg').css('backgroundPosition').split(' ');

		 if(xpos[1] === 'top') {
			 xpos = '0%';
		 } else {
			 xpos = '50%';
		 }

		 if($(window).width() > MQL || !isMobile()) {
	 	 	$(window).scroll(function() {
    			if ( $($this).offset().top + height < $(window).scrollTop() || $($this).offset().top > $(window).scrollTop() + $(window).height() ) {
					return;
				}
				$($this).find('.img-bg').css('backgroundPosition', xpos + Math.round((firstTop - $(window).scrollTop()) * 0.1) + 'px');
		 	});
		 }
	 });

/* ==================================================
	  Slider Settings
================================================== */
function ago(date) {
    function render(n, unit) {
        return n + " " + unit + ((n == 1) ? "" : "s") + " ago";
    }

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / (60 * 60 * 24 * 30 * 365));
    if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
        return render(interval, "year");
    }
    interval = Math.floor(seconds / (60 * 60 * 24 * 30));
    if (interval >= 1) {
        return render(interval, "month");
    }
    interval = Math.floor(seconds / (60 * 60 * 24));
    if (interval >= 1) {
        return render(interval, "day");
    }
    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
        return render(interval, "hour");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return render(interval, "minute");
    }
    interval = Math.floor(seconds);
    return render(interval, "second");
}

var date = Date.parse($('.post-meta > .posted').attr('datetime'));
$('.post-meta > .posted').html(ago(date));


/* ==================================================
    Slider Settings
==================================================

$('#hero .owl-carousel').owlCarousel({
  touchDrag: true,
	mouseDrag: true,
	addClassActive: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
	rewind: false,
	loop: true,
  nav: true,
  dots: false,
	margin: 30,
	stagePadding: 160,
  items: 1,
  navText : ["<span class='arrow-left-icon'></span>","<span class='arrow-right-icon'></span>"],
  autoHeight: false,
  responsiveClass: true,
	responsive: {
		0: {
			margin: 15,
			stagePadding: 40
		},
		991: {
			margin: 30,
			stagePadding: 160,
		},
	}
});

$('.testimonials .owl-carousel').owlCarousel({
  touchDrag: true,
	mouseDrag: true,
	addClassActive: true,
	rewind: false,
	loop: true,
  nav: true,
  dots: true,
  items: 1,
  navText : ["<span class='arrow-left-icon'></span>","<span class='arrow-right-icon'></span>"],
  autoHeight: false,
  responsiveClass: true
});

// Fancybox init
$("[data-fancybox]").fancybox({
		toolbar : true,
		arrows : false,
		buttons : [
        'fullScreen',
        'close'
    ],
}); */

/* Form AJAX */
$("#register form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize(), $form[0].reset()).then(function() {
    alert("Thank you! Your submission was completed successfully.");
  });
});

});

/* Preloader */
$(window).on('load', function() { // makes sure the whole site is loaded
  $('#preloader .loader').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
});
