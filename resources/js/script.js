$(document).ready(function() {

    /* For Sticky Navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll on Buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Animations */
    $('.js--animation-1').waypoint(function(direction) {
        $('.js--animation-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--animation-2').waypoint(function(direction) {
        $('.js--animation-2').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });

    $('.js--animation-3').waypoint(function(direction) {
        $('.js--animation-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js--animation-4').waypoint(function(direction) {
        $('.js--animation-4').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });

    /* Animations */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon');

        nav.slideToggle(200);
        /* if (icon.hasClass('js--nav-icon')) {
            icon.addClass('js--nav-icon2');
            icon.removeClass('js--nav-icon');
        } else {
            icon.addClass('js--nav-icon');
            icon.removeClass('js--nav-icon2');
        }*/
    });
});
