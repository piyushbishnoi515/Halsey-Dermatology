
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
    
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    autoPlay:true,
    speed:500,
    autoplaySpeed:5000,
    variableWidth:true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
});

