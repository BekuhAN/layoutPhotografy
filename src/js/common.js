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
	window.addEventListener("DOMContentLoaded", function() {
	function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			else if (elem.createTextRange) {
					var range = elem.createTextRange();
					range.collapse(true);
					range.moveEnd("character", pos);
					range.moveStart("character", pos);
					range.select()
			}
	}

	function mask(event) {
			var matrix = "+7 (___) ___ __ __",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
					return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
					if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
	};
			var input = document.querySelector("#phone");
			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
	});