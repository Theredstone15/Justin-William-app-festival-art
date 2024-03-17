const swiper = new Swiper('.swiper-screenshots', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }
  });