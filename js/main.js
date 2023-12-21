(function ($) {
    "use strict";

  //Loader
//   var myVar;
        
//   function myFunction() {
//     myVar = setTimeout(showPage, 2000);
//   }
  
//   function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
//   }

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

//Loader

    
    //Counter
    (function ($) {
        $.fn.count = function(options) {
            var $this = $(this);
            var settings = $.extend({
                startValue: 0,
                endValue: 300,
                durationValue: 4000
            }, options);
            $this.html(settings.startValue).attr('data-count', settings.endValue);
            var countTo = $this.attr('data-count');
            $({ countNum: $this.html()}).animate({
                countNum: countTo
            },
            {
                duration: settings.durationValue,
                easing:'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    console.log('done.');
                }
            });
            return this;
        }
    }( jQuery ));
    
    $("div:nth-child(1) .counter").count({
        startValue: 0,
        endValue: 256,
      durationValue: 4000
    });
    $("div:nth-child(2) .counter-2").count({
        startValue: 500,
        endValue: 1438,
        durationValue: 6000
    });
    // $("div:nth-child(3) .counter-3").count({
    //     startValue: 1500,
    //     endValue: 1011000,
    //     durationValue: 8000
    // });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

