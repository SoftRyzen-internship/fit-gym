$('.program__slick-slider').slick({
  slidesToShow: 1,
  infinite: true,
  // speed: 300,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  dots: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        dots: false,
      },
    },
  ],
});
