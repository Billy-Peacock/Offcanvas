/*jslint browser: true*/
/*global $, jQuery*/

(function ($) {
	
	"use strict";
  
	$(document).ready(function () {

		// Offcanvas main menu functions
		function off_canvas_open() {
			$('body').addClass('offcanvas-open');
		}
		function off_canvas_close() {
			$('body').removeClass('offcanvas-open');
			$('.offcanvas-sidebar ul ul').removeClass('offcanvas-child-visible');
			$('.offcanvas-sidebar').delay(400).animate({scrollTop : 0}, 50);
		}

        // Offcanvas child menu functions
        function off_canvas_child_open() {
			$('.offcanvas-sidebar').addClass('offcanvas-child-open');
		}
        function off_canvas_child_close() {
			$('.offcanvas-sidebar').removeClass('offcanvas-child-open');
		}

        $('.offcanvas-navicon').click(function () {
			if (!$('body').hasClass('offcanvas-open')) {
				off_canvas_open();
			} else {
				off_canvas_close();
			}
		});
		$('.offcanvas-overlay').click(function () {
			off_canvas_close();
			off_canvas_child_close();
		});
		$(window).resize(function () {
			off_canvas_close();
			off_canvas_child_close();
		});

		$('.offcanvas-sidebar ul ul').parent().append('<span class="offcanvas-child-link">&raquo;</span>');
		$('.offcanvas-sidebar ul ul').prepend('<span class="offcanvas-child-back-link">&laquo; Back</span>');
	        
		$('.offcanvas-child-link').click(function () {
            $(this).siblings('ul').addClass('offcanvas-child-visible');
			off_canvas_child_open();
		});
		$('.offcanvas-child-back-link').click(function () {
			$(this).parents('ul').removeClass('offcanvas-child-visible');
			off_canvas_child_close();
		});
	});

}(jQuery));