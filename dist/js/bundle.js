(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = new _header2.default(),
    slider = new _slider2.default();

console.log(document.body.scrollTop);

var box = document.querySelector('.box'),
    content = document.querySelector('.content');

function fadeInFadeOut() {}

window.addEventListener('scroll', function () {
  header.checkScroll();
  slider.onScroll();
});

content.addEventListener('click', function () {
  _utils2.default.toggleClass(box, 'fadeIn');
  _utils2.default.toggleClass(box, 'fadeOut');
});

},{"./header":2,"./slider":3,"./utils":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header() {
    _classCallCheck(this, Header);

    this.header = document.querySelector('.header');
    this.logoContainer = document.querySelector('.logo-container');
    this.navMenu = document.querySelector('.nav-menu');
    this.menuList = document.querySelector('.menu-list');
    this.menuButton = document.querySelector('.menu-button');
    this.menuButton.addEventListener('click', this.buttonActivated);

    this.content = document.querySelector('.content');
    console.log(this.contentBanner);
  }

  _createClass(Header, [{
    key: 'buttonActivated',
    value: function buttonActivated() {
      _utils2.default.toggleClass(this, 'button-activated');
    }
  }, {
    key: 'checkScroll',
    value: function checkScroll() {
      var MIN_SCROLL = 100;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollY > 50) {
        this.isTop = false;
        this.header.classList.add('scroll-header');
        _utils2.default.changeClass(this.logoContainer, 'ph12', 'ph4');
        _utils2.default.changeClass(this.navMenu, 'ph12', 'ph8');
        _utils2.default.changeClass(this.menuList, 'justify-center', 'justify-flex-end');
      } else {
        this.header.classList.remove('scroll-header');
        _utils2.default.changeClass(this.logoContainer, 'ph4', 'ph12');
        _utils2.default.changeClass(this.navMenu, 'ph8', 'ph12');
        _utils2.default.changeClass(this.menuList, 'justify-flex-end', 'justify-center');
      }
    }
  }]);

  return Header;
}();

exports.default = Header;

},{"./utils":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider() {
    _classCallCheck(this, Slider);

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

  _createClass(Slider, [{
    key: 'initControllers',
    value: function initControllers() {
      var _this = this;

      this.controllers.forEach(function (controller, index) {
        controller.addEventListener('click', function () {
          if (index != _this.currentSlide) _this.changeSlide(index);
        });
      });
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.runningSlider();
      }, this.timer);
    }
  }, {
    key: 'runningSlider',
    value: function runningSlider() {
      if (this.nextSlide > this.numSlides - 1) this.nextSlide = 0;

      this.animatedSlide(this.currentSlide, this.nextSlide);

      this.currentSlide = this.nextSlide;
      this.nextSlide += 1;
    }
  }, {
    key: 'animatedSlide',
    value: function animatedSlide(current, next) {
      _utils2.default.toggleClass(this.controllers.item(current), 'active');
      _utils2.default.toggleClass(this.controllers.item(next), 'active');
      _utils2.default.fadeOut(this.slides.item(current));
      _utils2.default.fadeIn(this.slides.item(next));
    }
  }, {
    key: 'changeSlide',
    value: function changeSlide(index) {
      clearInterval(this.interval);

      if (index > this.numSlides - 1) index = 0;

      this.animatedSlide(this.currentSlide, index);

      this.currentSlide = index;
      this.nextSlide = index + 1;

      this.init();
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var scrollPos = document.documentElement.scrollTop || document.body.scrollTop,
          windowHeight = window.innerHeight,
          contentBannerPos = -50 - scrollY / 2 * .3;

      this.contentBanner.forEach(function (element) {
        return element.style.transform = 'translate(-50%, ' + contentBannerPos + '%)';
      });

      if (scrollPos > windowHeight / 2) {
        this.sliderController.classList.add('hidden');
      } else {
        this.sliderController.classList.remove('hidden');
      }
    }
  }]);

  return Slider;
}();

exports.default = Slider;

},{"./utils":4}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'changeClass',
    value: function changeClass(element, removeClass, newClass) {
      if (element) {
        element.classList.remove(removeClass);
        element.classList.add(newClass);
      }
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(element, className) {
      if (element) {
        if (!element.classList.contains(className)) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      }
    }
  }, {
    key: 'fadeIn',
    value: function fadeIn(element) {
      if (element) {
        element.classList.remove('fadeOut');
        element.classList.add('fadeIn');
      }
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut(element) {
      if (element) {
        element.classList.remove('fadeIn');
        element.classList.add('fadeOut');
      }
    }
  }]);

  return Util;
}();

module.exports = Util;

},{}]},{},[1]);
