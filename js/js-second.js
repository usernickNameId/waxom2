$(document).ready(function(){
  $('.recent-slider').slick({
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: "<img src='img/arrows-left.png' class='slick-prev prev' alt='1'>",
  nextArrow: "<img src='img/arrows-right-second.png' class='slick-next next' alt='2'>",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
        
      }
    },
      {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
      }
    }
]
  });
    
});