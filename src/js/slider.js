'use strict';

import Util from './utils';

class Slider {

  constructor() {
    this.interval = null;
    this.timer = 4000;
    this.currentSlide = 0;
    this.nextSlide = 1;
    this.slides = document.querySelectorAll('.slide');
    this.numSlides = this.slides.length;
    this.contentBanner = document.querySelectorAll('.content-banner');
    this.sliderController = document.querySelector('.slider-controller');
    this.controllers = document.querySelectorAll('.controller');
    this.init();
    this.initControllers();
  }

  initControllers() {
    for (let i = 0; i < this.controllers.length; i++) {
      this.controllers[i].addEventListener('click', () => {
        if (i != this.currentSlide)
          this.changeSlide(i)
      });
    }
  }

  init() {
    this.interval = setInterval(() => this.runningSlider(), this.timer);
  }

  addEventListenerToController() {

  }

  runningSlider() {
    if (this.nextSlide > this.numSlides - 1)
      this.nextSlide = 0;

    this.animatedSlide(this.currentSlide, this.nextSlide);

    this.currentSlide = this.nextSlide;
    this.nextSlide += 1;
  }

  animatedSlide(current, next) {
    Util.toggleClass(this.controllers.item(current), 'active');
    Util.toggleClass(this.controllers.item(next), 'active');
    Util.fadeOut(this.slides.item(current));
    Util.fadeIn(this.slides.item(next));
  }

  changeSlide(index) {
    clearInterval(this.interval);

    if (index > this.numSlides - 1)
      index = 0;

    this.animatedSlide(this.currentSlide, index);

    this.currentSlide = index;
    this.nextSlide = index + 1;

    this.init();
  }

  onScroll() {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop,
        windowHeight = window.innerHeight,
        // contentBannerPos = -50 - ((scrollPos / 2) * .1);
        contentBannerPos = -50 - (scrollPos / 2) * .3;

    for (let i = 0; i < this.contentBanner.length; i++) {
      this.contentBanner[i].style.transform = `translate(-50%, ${contentBannerPos}%`;
    }

    // this.contentBanner.forEach(element => element.style.transform = `translate(-50%, ${contentBannerPos}%)`);

    if (scrollPos > windowHeight / 4) {
      console.log(contentBannerPos);

      this.sliderController.classList.add('hidden');
    }
    else {
      // for (let i = 0; i < this.contentBanner.length; i++) {
      //   this.contentBanner[i].style.transform = `translate(-50%, -50%)`;
      // }
      this.sliderController.classList.remove('hidden');
    }

  }

}

export default Slider;
