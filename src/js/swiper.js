import Swiper, { Pagination } from 'swiper';

export const swiper = () => {
  Swiper.use([Pagination]);
  
  new Swiper('.swiper', {
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
}