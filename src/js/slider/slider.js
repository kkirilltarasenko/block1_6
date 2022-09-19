import Swiper, { Pagination } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'

/* Initialize swiper containers */
let swiperBrands = document.querySelector('.swiper-brands')
let swiperTechnics = document.querySelector('.swiper-technics');
let swiperPrices = document.querySelector('.swiper-prices');

let screenWidth = document.querySelector('.screen-width');
let wScreenWidth;

/* Main function */
function start() {
  /* Calculate device width */
  wScreenWidth = screenWidth.offsetWidth;

  if (wScreenWidth <= 510) {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
    swiperBrands.classList.remove('hidden');
    swiperTechnics.classList.remove('hidden');
    swiperPrices.classList.remove('hidden')
  } else {
    swiperBrands.classList.add('hidden');
    swiperTechnics.classList.add('hidden');
    swiperPrices.classList.add('hidden');
  }
}


/* Recalculate device width without updating page */
window.addEventListener('resize', () => {
  start();
});

window.addEventListener('load', () => {
  start();
});
