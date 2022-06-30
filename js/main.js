;(function(){

    // Banner Translate

    $(document).ready(function() {
        $(".banner-content h1, .banner-content p, .banner-content a").addClass("animate");
    });
    
    // Aos
  
    $(window).on("load", function () {
        AOS.init();
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

    $('.owl-dots button').attr('aria-label', 'owl-btn');

    var navSidebarToggle = document.querySelector(".toggle-1");
    var sidebarToggle = document.querySelector(".mah-sidebar .nav-toggle");
    var sidebar = document.querySelector(".mah-sidebar");

    navSidebarToggle.addEventListener("click",()=>{
        sidebar.classList.add("active")
    })

    sidebarToggle.addEventListener("click",()=>{
        sidebar.classList.remove("active")
    })

})(jQuery)
  
  
  