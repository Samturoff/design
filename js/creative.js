//Change nav color from scrolling
'use strict'
$(document).ready(function(){
    $('.mobile_navbar').hide();

    $( ".portfolio_project_one" ).hide();
    $( ".portfolio_project_two" ).hide();
    $( ".portfolio_project_three" ).hide();
    $( ".portfolio_project_four" ).hide();
    $( ".portfolio_project_five" ).hide();
    $( ".portfolio_project_six" ).hide();
    $( ".portfolio_project_seven" ).hide();
    $( ".portfolio_project_eight" ).hide();
    $( ".portfolio_project_nine" ).hide();
    $( ".portfolio_project_ten" ).hide();
    $( ".portfolio_project_eleven" ).hide();
    $( ".portfolio_project_twelve" ).hide();
    $( ".portfolio_project_thirteen" ).hide();
    $( ".portfolio_project_fourteen" ).hide();

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
//        $('.hamburger').addClass('menu_white');
//        $('.hamburger').removeClass('menu_black');

//        $('.hamburger2').addClass('menu_white');
//        $('.hamburger2').removeClass('menu_black');

//        $('.hamburger3').addClass('menu_white');
//        $('.hamburger3').removeClass('menu_black');

        $('.mobile_navbar').fadeIn();
    }
    else {
//        $('.hamburger').removeClass('menu_white');
//        $('.hamburger').addClass('menu_black');

//        $('.hamburger2').removeClass('menu_white');
//        $('.hamburger2').addClass('menu_black');

//        $('.hamburger3').removeClass('menu_white');
//        $('.hamburger3').addClass('menu_black');
        $('.mobile_navbar').fadeOut();

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
    $( ".portfolio_tab_one" ).click(function () {
      if ( $( ".portfolio_project_one" ).is( ":hidden" ) ) {
        $( ".portfolio_project_one" ).slideDown( 1000 );
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );                
      } else {
        $( ".portfolio_project_one" ).slideUp( 1000 );
      }
    });
    
    $( ".portfolio_tab_two" ).click(function () {
      if ( $( ".portfolio_project_two" ).is( ":hidden" ) ) {
        $( ".portfolio_project_two" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );
        } 
        else {
        $( ".portfolio_project_two" ).slideUp( 1000 );        
      }
    }); 
    
    $( ".portfolio_tab_three" ).click(function () {
      if ( $( ".portfolio_project_three" ).is( ":hidden" ) ) {
        $( ".portfolio_project_three" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_three" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_four" ).click(function () {
      if ( $( ".portfolio_project_four" ).is( ":hidden" ) ) {
        $( ".portfolio_project_four" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_four" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_five" ).click(function () {
      if ( $( ".portfolio_project_five" ).is( ":hidden" ) ) {
        $( ".portfolio_project_five" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_five" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_six" ).click(function () {
      if ( $( ".portfolio_project_six" ).is( ":hidden" ) ) {
        $( ".portfolio_project_six" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_six" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_seven" ).click(function () {
      if ( $( ".portfolio_project_seven" ).is( ":hidden" ) ) {
        $( ".portfolio_project_seven" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_seven" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_eight" ).click(function () {
      if ( $( ".portfolio_project_eight" ).is( ":hidden" ) ) {
        $( ".portfolio_project_eight" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        }
        else {
        $( ".portfolio_project_eight" ).slideUp( 1000 );        
      }
    });
    
    $( ".portfolio_tab_nine" ).click(function () {
      if ( $( ".portfolio_project_nine" ).is( ":hidden" ) ) {
        $( ".portfolio_project_nine" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_nine" ).slideUp( 1000 );        
      }
    });

    $( ".portfolio_tab_ten" ).click(function () {
      if ( $( ".portfolio_project_ten" ).is( ":hidden" ) ) {
        $( ".portfolio_project_ten" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_ten" ).slideUp( 1000 );        
      }
    }); 

    $( ".portfolio_tab_eleven" ).click(function () {
      if ( $( ".portfolio_project_eleven" ).is( ":hidden" ) ) {
        $( ".portfolio_project_eleven" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_eleven" ).slideUp( 1000 );        
      }
    }); 

    $( ".portfolio_tab_twelve" ).click(function () {
      if ( $( ".portfolio_project_twelve" ).is( ":hidden" ) ) {
        $( ".portfolio_project_twelve" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_twelve" ).slideUp( 1000 );        
      }
    });

    $( ".portfolio_tab_thirteen" ).click(function () {
      if ( $( ".portfolio_project_thirteen" ).is( ":hidden" ) ) {
        $( ".portfolio_project_thirteen" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );      
        } 
        else {
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );        
      }
    });

    $( ".portfolio_tab_fourteen" ).click(function () {
      if ( $( ".portfolio_project_fourteen" ).is( ":hidden" ) ) {
        $( ".portfolio_project_fourteen" ).slideDown( 1000 );
        $( ".portfolio_project_one" ).slideUp( 1000 );        
        $( ".portfolio_project_two" ).slideUp( 1000 );
        $( ".portfolio_project_three" ).slideUp( 1000 );                
        $( ".portfolio_project_four" ).slideUp( 1000 );                
        $( ".portfolio_project_five" ).slideUp( 1000 );                
        $( ".portfolio_project_six" ).slideUp( 1000 );                
        $( ".portfolio_project_seven" ).slideUp( 1000 );                
        $( ".portfolio_project_eight" ).slideUp( 1000 );                
        $( ".portfolio_project_nine" ).slideUp( 1000 );                
        $( ".portfolio_project_ten" ).slideUp( 1000 );                
        $( ".portfolio_project_eleven" ).slideUp( 1000 );                
        $( ".portfolio_project_twelve" ).slideUp( 1000 );                
        $( ".portfolio_project_thirteen" ).slideUp( 1000 );                
        } 
        else {
        $( ".portfolio_project_fourteen" ).slideUp( 1000 );        
      }
    });    
});

$(function portfolioMoveLeft() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo(".portfolio_header1", 2, {left: 700}, {left: 0, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
                    .setTween(tween)
//                    .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function portfolioMoveright() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo(".portfolio_header2", 2, {right: 700}, {left: 0, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400})
                    .setTween(tween)
//                    .addIndicators({name: "staggering"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function portfolioTransitionColor() {
    var controller = new ScrollMagic.Controller();    

    new ScrollMagic.Scene({
        triggerElement: "#trigger_portfolio_color",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 100 // move trigger to center of element
    })
    .setClassToggle("#reveal1", "visible") // add class to reveal
//    .addIndicators({name: "reveal"}) // add indicators (requires plugin)
    .addTo(controller);
});
$(function lTransition() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo("#contact_header_l", 2, {top: 500}, {top: 100, right: 50, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_lets", duration: 100})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function eTransition() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo("#contact_header_e", 2, {top: 500}, {top: 100, right: 15, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_lets", duration: 200})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function tTransition() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo("#contact_header_t", 2, {top: 500}, {top: 100, right: -20, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_lets", duration: 300})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function sTransition() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo("#contact_header_s", 2, {top: 500}, {top: 100, right: -55, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_lets", duration: 400})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);
});
$(function collabTransition() {
    var controller = new ScrollMagic.Controller();    
    // build tween
    var tween = TweenMax.staggerFromTo("#contact_header_collab", 2, {right: 500}, {right: 0, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_collab", duration: 1})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);
});
