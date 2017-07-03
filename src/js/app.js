'use strict';

import Header from './header';
import Slider from './slider';
import Util from './utils';
import Menu from './menu';

const header = new Header(),
    slider = new Slider(),
    menu = new Menu(header.header);

console.log(document.body.scrollTop);

const box = document.querySelector('.box'),
    content = document.querySelector('.content'),
    nav = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
  header.checkScroll();
  slider.onScroll();
});

content.addEventListener('click', () => {
  Util.toggleClass(box, 'fadeIn');
  Util.toggleClass(box, 'fadeOut');
});

