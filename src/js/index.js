import '../scss/index.scss';
import { showAll }  from  './show';
import { swiper } from './swiper';
import { toggleVisibleMenu } from './menu';
import { toggleVisibleModal } from './modal';

toggleVisibleMenu();
toggleVisibleModal();
showAll();
swiper();