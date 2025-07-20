/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(function($){
  "use strict";
    $('.menu > ul').superfish({
      delay:       500,                            
      animation:   {opacity:'show',height:'show'},  
      speed:       'fast'                         
    });

    $('.search-box span i').click(function(){
        $(".serach_outer").toggle();
    });
});

/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

jQuery(function() {
  //----- OPEN
  jQuery('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  jQuery('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});


jQuery('document').ready(function(){

  var owl = jQuery('#why-choose-us .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

  var owl = jQuery('#our_records .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#our_partners .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#testimonials .owl-carousel');
        owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });
    
    var owl = jQuery('#tour-type .owl-carousel');
        owl.owlCarousel({
        margin: 20,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    jQuery('a.accordion-toggle').click(function() {
        jQuery("i", this).toggleClass("fas fa-plus fas fa-times");
    });
    new WOW().init();
});
/* Counter */
jQuery(document).ready(function(){
  jQuery('.count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 30000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });
});
