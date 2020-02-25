//Change nav color from scrolling
'use strict'
$(document).ready(function(){
    $( ".portfolio_project_one" ).hide();    
    $(window).scroll(function(){
    var light_pos = $('#container_color_changer').offset().top;
    var light_height = $('#container_color_changer').height();
    var menu_pos = $('.hamburger').offset().top;
    var menu_height = $('.hamburger').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
        $('.hamburger').addClass('menu_black');
      $('.hamburger').removeClass('menu_white');

        $('.hamburger2').addClass('menu_black');
      $('.hamburger2').removeClass('menu_white');

        $('.hamburger3').addClass('menu_black');
      $('.hamburger3').removeClass('menu_white');            
    }
    else {
        $('.hamburger').removeClass('menu_black');
      $('.hamburger').addClass('menu_white');

        $('.hamburger2').removeClass('menu_black');
      $('.hamburger2').addClass('menu_white');

        $('.hamburger3').removeClass('menu_black');
      $('.hamburger3').addClass('menu_white');            
    }
    
  })
})

//Hamburger menu + scroll button
function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}

//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);



$(function() {
    $( ".portfolio_tab_placement" ).click(function () {
      if ( $( ".portfolio_project_one" ).is( ":hidden" ) ) {
        $( ".portfolio_project_one" ).slideDown( 2000 );
      } else {
        $( ".portfolio_project_one" ).slideUp( 1000 );
      }
    });
    
    $(".rightbtn").click(function(){
        $(".moveme").animate({left: '250px'});
    });
    $(".leftbtn").click(function(){
        $(".moveme").animate({left: '0px'});
    }); 
});







(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
