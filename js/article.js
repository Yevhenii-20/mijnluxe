$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(){
        $(".black-header").slideToggle();
        $(".bar").toggleClass('change');
    });

    $('.slider_ar_gallery').slick({
        arrows: true,
        fade: true,
        //asNavFor: ".slider_ar_gallery_small",
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /*$('.slider_ar_gallery_small').slick({
        asNavFor: ".slider_ar_gallery",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })*/
});