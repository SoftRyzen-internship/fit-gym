$('.plans-slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  speed: 400,
  cssEase: 'linear',
  prevArrow: '.plans-prev-btn',
  nextArrow: '.plans-next-btn',
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        unslick: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '27.4%',
      },
    },
  ],
});