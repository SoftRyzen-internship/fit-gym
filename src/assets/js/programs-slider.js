$('.program__slick-slider').slick({
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  dots: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        dots: false,
      },
    },
  ],
});
