$(document).ready(function() {
	
	var containerEl = document.querySelector('.mixitup-container');
	var mixer = mixitup(containerEl, {
		selectors: {
			target: '[data-ref~="mixitup-target"]'
		},
		animation: {
			effects: 'fade stagger(100ms)',
			staggerSequence: function(i) {
				return i % 3;
			}
		},
		classNames: {
			block:'product',
			elementFilter: 'control'
		}
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	$(function() {
		var pull = $('#pull');
			menu = $('.main-menu > ul');
			menuHeight  = menu.height();
	
		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	}); 

	$('a[href^="#b"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
 
		var target = this.hash,
		$target = $(target);
 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'swing', function () {
			window.location.hash = target;
		});
	});
	
});