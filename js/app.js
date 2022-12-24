$(function() {
    $('.slide').slick({
        arrows: false ,
        // autoplay: true,
        // autoplaySpeed: 5000
        dots:true,
        dotsClass: 'ban_dots',
    });
    $(window).load(function(){
        $('#loder').fadeOut('slow')
    })
})
