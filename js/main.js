;(function(){

    // Banner Translate

    $(document).ready(function() {
        $(".banner-content h1, .banner-content p, .banner-content a").addClass("animate");
    });

    $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        items:3.25,
        margin:30,
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

})(jQuery)
  
  
  