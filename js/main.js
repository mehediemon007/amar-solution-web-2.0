;(function(){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    // Banner Translate

    $(document).ready(function() {
        $(".banner-content h1, .banner-content p, .banner-content a").addClass("animate");
    });

    $(".partner-slider").owlCarousel({
        items: 7,
        loop: true,
        autoplay: true,
        dots: false,
        margin: 50,
        responsive:{
            0:{
                items:3,
                margin:30
            },
            768:{
                items: 5
            },
            1200:{
                items:7,
                margin:50
            }
        }
    })

    var owl = $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        items:3.25,
        margin:20,
        nav:false,
        smartSpeed:500,
        mouseDrag: false,
        responsive:{
            0:{
                dotsEach:3,
                items: 1.25
            },
            575:{
                items: 2.25
            },
            992:{
                items: 3
            },
            1099:{
                dotsEach: 2,
                itesm: 3.25
            }
        }
    })

    $('.owl-dots button').attr('aria-label', 'owl-btn');

    var activeElement = $('.client-reviews .owl-item.active');
    $(activeElement[0]).addClass("middle")
    // activeElement.eq(0).addClass('selezionato');

    owl.on('changed.owl.carousel', function(event) {

        $(".client-reviews .owl-item").each(function( index, value ) {
            if($(value).hasClass("middle")){
                $(value).removeClass("middle")
            }
        });

        activeElement = $('.client-reviews .owl-item.active');
        $(activeElement[1]).addClass("middle")

    });

    var navToggle = document.querySelector(".nav-toggle");

    navToggle.addEventListener("click",()=>{

       $(".ams-nav-menu").slideToggle("200");

    })

    $("li.menu-item-has-children").on("click",function(){

        $(".sub-menu").slideToggle("200");
        
    })

})(jQuery)
  
  
  