$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(e){
        $(".black-header").slideToggle();
        $(".bar").toggleClass('change');
        e.preventDefault();
    });

    /*$('.slider_ar_gallery').slick({
        arrows: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });*/

    Fancybox.bind('[data-fancybox="gallery"]', {});   
});