$(document).ready(function(){
  $('.slider').slick({
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: "<img src='img/arrows.png' class='slick-prev-one prev-one' alt='1'>",
  nextArrow: "<img src='img/arrows-right.png' class='slick-next-one next-one' alt='2'>",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        
      }
    }
]
  });
    
});