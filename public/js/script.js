(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		};
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_header = $('.main-header .sticky-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}


	//Banner Carousel
	if ($('.banner-carousel').length) {
		var swiper = new Swiper('.banner-carousel', {
			//animateOut: 'slideInDown',
    		//animateIn: 'slideIn',
			pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		});   		
	}
	
	
	//Date Picker
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
	}
	
	
	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 2500,
			max: 100000,
			values: [ 25000, 62000 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}
	
	
	//Price Range Slider
	if($('.price-range-slider-two').length){
		$( ".price-range-slider-two" ).slider({
			range: true,
			min: 2016,
			max: 2020,
			values: [ 2016, 2019 ],
			slide: function( event, ui ) {
			$( "input.property-amount-2" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount-2" ).val( $( ".price-range-slider-two" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider-two" ).slider( "values", 1 ) );	
	}
	
	
	//Price Range Slider
	if($('.price-range-slider-three').length){
		$( ".price-range-slider-three" ).slider({
			range: true,
			min: 0,
			max: 10000,
			values: [ 0, 10000 ],
			slide: function( event, ui ) {
			$( "input.property-amount-3" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount-3" ).val( $( ".price-range-slider-three" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider-three" ).slider( "values", 1 ) );	
	}
	
	
	
	
	
	// Product Carousel Slider
	if ($('.fleet-products-carousel .image-carousel').length && $('.fleet-products-carousel .thumbs-carousel').length) {

		var $sync3 = $(".fleet-products-carousel .image-carousel"),
			$sync4 = $(".fleet-products-carousel .thumbs-carousel"),
			flags = false,
			durations = 500;

			$sync3
				.owlCarousel({
					loop:true,
					items: 1,
					margin: 0,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					autoplay: true,
					autoplayTimeout: 5000
				})
				.on('changed.owl.carousel', function (e) {
					if (!flags) {
						flags = false;
						$sync4.trigger('to.owl.carousel', [e.item.index, durations, true]);
						flags = false;
					}
				});

			$sync4
				.owlCarousel({
					loop:true,
					margin: 10,
					items: 1,
					nav: false,
					navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
					dots: false,
					center: false,
					autoplay: true,
					autoplayTimeout: 5000,
					responsive: {
						0:{
				            items:2,
				            autoWidth: false
				        },
				        400:{
				            items:3,
				            autoWidth: false
				        },
				        600:{
				            items:4,
				            autoWidth: false
				        },
				        900:{
				            items:4,
				            autoWidth: false
				        },
				        1000:{
				            items:4,
				            autoWidth: false
				        }
				    },
				})
				
		.on('click', '.owl-item', function () {
			$sync3.trigger('to.owl.carousel', [$(this).index(), durations, true]);
		})
		.on('changed.owl.carousel', function (e) {
			if (!flags) {
				flags = true;		
				$sync3.trigger('to.owl.carousel', [e.item.index, durations, true]);
				flags = false;
			}
		});

	}
	
	
	
	
	
	//Product Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1400:{
					items:4
				},
				1600:{
					items:4
				}
			}
		});    		
	}
	
	
	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	
	
	// Sponsors Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	// Sponsors Carousel
	if ($('.project-index3-carousel').length) {
		$('.project-index3-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	// Sponsors Carousel
	if ($('.tours-index3-carousel').length) {
		$('.tours-index3-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}


	// Sponsors Carousel
	if ($('.reviews-carousel').length) {
		$('.reviews-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}


	// // Sponsors Carousel
	// if ($('.reviews-carousel').length) {
	// 	$('.reviews-carousel').owlCarousel({
	// 		loop:true,
	// 		margin:30,
	// 		nav:true,
	// 		smartSpeed: 500,
	// 		autoplay: 4000,
	// 		navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
	// 		responsive:{
	// 			0:{
	// 				items:1
	// 			},
	// 			480:{
	// 				items:1
	// 			},
	// 			600:{
	// 				items:1
	// 			},
	// 			800:{
	// 				items:1
	// 			},
	// 			1024:{
	// 				items:1
	// 			}
	// 		}
	// 	});    		
	// }


	// Sponsors Carousel
	if ($('.single-item-carousel-2').length) {
		$('.single-item-carousel-2').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

	// Sponsors Carousel
	if ($('.counter-carousel').length) {
		$('.counter-carousel').owlCarousel({
			loop:false,
			rewind: true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:3
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:25,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});    		
	}
	
	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}	
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//Time Picker
	if($('.timepicker').length){
		$('.timepicker').timepicker();
	}

	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-bs-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	






// 	jQuery('img.svg').each(function(){
//     var $img = jQuery(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     jQuery.get(imgURL, function(data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = jQuery(data).find('svg');

//         // Add replaced image's ID to the new SVG
//         if(typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if(typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass+' replaced-svg');
//         }

//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');

//         // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
//         if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//             $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//         }

//         // Replace image with new SVG
//         $img.replaceWith($svg);

//     }, 'xml');

// });




})(window.jQuery);

var $svgIconBox = $('.card-box');
$svgIconBox.each(function () {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, { duration: 150, file: $icon});
    $this.on('mouseenter', function () {
        $vivus.reset().play();
    });
});