'use strict';

import Util from './utils';

class Menu {

  constructor(header) {
    this.header = header;
    this.button = document.querySelector('.menu-button');
    this.wrapperNav = document.querySelector('.wrapper-nav-menu');
    this.nav = document.querySelector('.nav-menu');
    this.button.addEventListener('click', () => this.buttonActivated());
    // this.wrapperNav.addEventListener('click', ev => {
    //   console.log(ev.target);
    //   if (ev.target == this.wrapperNav) {
    //     Util.toggleClass(this.button, 'button-activated');
    //     this.closeNav();
    //   }
    // });
  }

  hideWrapperNav() {
    setTimeout(() => Util.toggleClass(this.wrapperNav, 'hidden'), 150);
  }

  showNav() {
    setTimeout(() => this.nav.style.left = '0', 0);
  }

  closeNav() {
    this.nav.style.left = '-100%';
    Util.fadeOut(this.wrapperNav);
    this.hideWrapperNav();
  }

  buttonActivated() {
    Util.toggleClass(this.button, 'button-activated');

    if (this.button.classList.contains('button-activated')) {
      Util.toggleClass(this.wrapperNav, 'hidden');
      Util.fadeIn(this.wrapperNav);
      this.nav.style.left = '0';
      // this.nav.style.right = '0';
      // this.header.style.backgroundColor = "#1a237e";
    }
    else {
      this.closeNav();
    }
  }

}

export default Menu;
