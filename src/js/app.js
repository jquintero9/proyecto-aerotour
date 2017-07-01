'use strict';

import Header from './header';
import Slider from './slider';
import Util from './utils';

const header = new Header(),
    slider = new Slider();

console.log(document.body.scrollTop);

const box = document.querySelector('.box'),
    content = document.querySelector('.content');

function fadeInFadeOut() {

}

window.addEventListener('scroll', () => {
  header.checkScroll();
  slider.onScroll();
});

content.addEventListener('click', () => {
  Util.toggleClass(box, 'fadeIn');
  Util.toggleClass(box, 'fadeOut');
});

