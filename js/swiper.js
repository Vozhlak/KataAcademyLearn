
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  enabled: true,
  pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
});
