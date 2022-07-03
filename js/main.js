;(function(){

    // Banner Translate

    $(document).ready(function() {
        $(".banner-content h1, .banner-content p, .banner-content a").addClass("animate");
    });

    var owl = $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        items:3.25,
        margin:20,
        nav:false,
        smartSpeed:500,
        responsive:{
            0:{
                items: 1.25
            },
            575:{
                items: 2.25
            },
            992:{
                items: 3
            },
            1099:{
                itesm: 3.25
            }
        }
    })

    var activeElement = $('.client-reviews .owl-item.active');
    $(activeElement[0]).addClass("middle")
    // activeElement.eq(0).addClass('selezionato');

    owl.on('changed.owl.carousel', function(event) {

        $(".owl-carousel .owl-item").each(function( index, value ) {
            if($(value).hasClass("middle")){
                $(value).removeClass("middle")
            }
        });

        activeElement = $('.owl-carousel .owl-item.active');
        $(activeElement[1]).addClass("middle")

    });

    $(".partner-slider").owlCarousel({
        items: 7,
        loop: true,
        autoplay: true, 
        dots: false,
        margin: 50
    })

})(jQuery)
  
  
  