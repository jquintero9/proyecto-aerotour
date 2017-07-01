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
    this.controllers.forEach((controller, index) => {
      controller.addEventListener('click', () => {
        if (index != this.currentSlide)
          this.changeSlide(index)
      });
    });
  }

  init() {
    this.interval = setInterval(() => this.runningSlider(), this.timer);
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
        contentBannerPos = -50 - (scrollY / 2) * .3;

    this.contentBanner.forEach(element => element.style.transform = `translate(-50%, ${contentBannerPos}%)`);

    if (scrollPos > windowHeight / 2) {
      this.sliderController.classList.add('hidden');
    }
    else {
      this.sliderController.classList.remove('hidden');
    }

  }

}

export default Slider;
