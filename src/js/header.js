'use strict';

import Util from './utils';

class Header {

  constructor() {
    this.header = document.querySelector('.header');
    this.logoContainer = document.querySelector('.logo-container');
    this.navMenu = document.querySelector('.nav-menu');
    this.menuList = document.querySelector('.menu-list');


    this.content = document.querySelector('.content');
    console.log(this.contentBanner);
  }


  checkScroll() {
    const MIN_SCROLL = 100;
    const scrollY = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollY > MIN_SCROLL) {
      this.isTop = false;
      this.header.classList.add('scroll-header');
      // Util.changeClass(this.logoContainer, 'ph12', 'ph4');
      // Util.changeClass(this.navMenu, 'ph12', 'ph8');
      // Util.changeClass(this.menuList, 'justify-center', 'justify-flex-end');
    }
    else {
      this.header.classList.remove('scroll-header');
      // Util.changeClass(this.logoContainer, 'ph4', 'ph12');
      // Util.changeClass(this.navMenu, 'ph8', 'ph12');
      // Util.changeClass(this.menuList, 'justify-flex-end', 'justify-center');
    }
  }
}

export default Header;

