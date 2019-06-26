var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  spaceBetween: -100,
  slideToClickedSlide: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 35,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
