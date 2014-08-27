


// Now, Now  //
$(document).ready(function($) {

    // Prevent FOUC while JS loads, then swap for Run
    /////////////////////////////////////////////////////////
    $('html').removeClass('no-js').addClass('js');
    setTimeout(function () {
        $('body').removeClass('init').addClass('run');
    }, 500);



    // Slick Nav
    /////////////////////////////////////////////////////////
    $(function(){
        $('nav#site-nav').slicknav({
            prependTo: '#site-nav-wrap',
            label: ' ',
            duration: '400',
            closeOnClick: 'true'
        });
    });



    // lightSlider & lightGallery
    /////////////////////////////////////////////////////////
    $(function(){
        $(".image-list").lightSlider({
            gallery:true,
            minSlide:1,
            maxSlide:1,
            auto:true,
            mode:'fade',
            proportion:'71.3%',
            thumbWidth:142,
            onSliderLoad: function() {
                $('.image-list').removeClass('cS-hidden');
            }
        });

        $(".image-list").lightGallery();

    });

    // SMOOTH
    /////////////////////////////////////////////////////////
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    // VALIDATION
    /////////////////////////////////////////////////////////
    // $('#contact-form').isHappy({
    //   fields: {
    //     // reference the field you're talking about, probably by `id`
    //     // but you could certainly do $('[name=name]') as well.
    //     '#name': {
    //       required: true,
    //       message: 'How may we address you?'
    //     },
    //     '#company': {
    //       required: true,
    //       message: "What company are you with?",
    //     },
    //     '#phone': {
    //       required: true,
    //       message: 'Where may we reach you via land-line?',
    //     },
    //     '#email': {
    //       required: true,
    //       message: "We\'ll need your email to contact you.",
    //       test: happy.email // this can be *any* function that returns true or false
    //     }
    //   }
    // });



    // PROMPT
    /////////////////////////////////////////////////////////
    // $(".prompt").click(function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({scrollTop: $('#about-us').offset().top -0 }, 1000, 'swing');
    // });


    // FORMS
    /////////////////////////////////////////////////////////
    // $("form :input").focus(function() {
    //   $("label[for='" + this.id + "']").addClass("labelfocus");
    // }).blur(function() {
    //   $("label").removeClass("labelfocus");
    // });


    // UNVEIL IMAGES
    /////////////////////////////////////////////////////////
    $("img").unveil(0, function() {
      $(this).load(function() {
        this.style.opacity = 1;
      });
    });

});
