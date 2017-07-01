'use strict';

import Util from './utils';

class Slider {

  constructor() {
    this.interval = null;
    this.timer = 4000;
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.slide');
    this.numSlides = this.slides.length;
    this.contentBanner = document.querySelectorAll('.content-banner');
    this.sliderController = document.querySelector('.slider-controller');
    this.controllers = document.querySelectorAll('.controller');
    console.log(this.slides, this.currentSlide, this.numSlides, this.controllers);
    this.init();
    this.initControllers();
  }

  initControllers() {
    this.controllers.forEach((controller, index) => {
      controller.addEventListener('click', ev => {

        if (index != this.currentSlide) {
          clearInterval(this.interval);
          const current = this.getCurrentSlide();



          const nextIndex = this.isOutIndex(index) ? 0 : index + 1,
              next = this.slides.item(nextIndex);

          // this.currentSlide = nextIndex;

          Slider.animatedSlide(current, next);

          console.log(`current slide Controller: ${this.currentSlide}`);
          this.init();
        }
        else {
          console.log(`index: ${index}  -  current slide: ${this.currentSlide}`);
        }
      });
    });
  }

  init() {
    this.interval = setInterval(() => this.changeSlide(), this.timer);
  }

  isOutIndex(index) {
    return (index + 1 >= this.numSlides);
  }

  getCurrentSlide() {
    return this.slides.item(this.currentSlide);
  }

  getNextSlide() {
    const nextIndex  = this.isOutIndex(this.currentSlide) ? 0: this.currentSlide + 1;

    //Change Controller
    Util.toggleClass(this.controllers.item(this.currentSlide), 'active');
    Util.toggleClass(this.controllers.item(nextIndex), 'active');

    this.currentSlide = nextIndex;
    return this.slides.item(nextIndex);
  }

  changeSlide() {
    let current = this.getCurrentSlide(),
        next = this.getNextSlide();



    Slider.animatedSlide(current, next);
  }

  static animatedSlide(current, next) {
    console.log('current: ');
    Util.fadeOut(current);
    console.log(current);
    console.log('next: ');
    Util.fadeIn(next);
    console.log(next)
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
