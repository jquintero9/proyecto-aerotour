(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = new _header2.default(),
    slider = new _slider2.default(),
    menu = new _menu2.default(header.header);

console.log(document.body.scrollTop);

var box = document.querySelector('.box'),
    content = document.querySelector('.content'),
    nav = document.querySelector('.nav-menu');

window.addEventListener('scroll', function () {
  header.checkScroll();
  slider.onScroll();
});

content.addEventListener('click', function () {
  _utils2.default.toggleClass(box, 'fadeIn');
  _utils2.default.toggleClass(box, 'fadeOut');
});

},{"./header":2,"./menu":3,"./slider":4,"./utils":5}],2:[function(require,module,exports){
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

    this.content = document.querySelector('.content');
    console.log(this.contentBanner);
  }

  _createClass(Header, [{
    key: 'checkScroll',
    value: function checkScroll() {
      var MIN_SCROLL = 100;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollY > MIN_SCROLL) {
        this.isTop = false;
        this.header.classList.add('scroll-header');
        // Util.changeClass(this.logoContainer, 'ph12', 'ph4');
        // Util.changeClass(this.navMenu, 'ph12', 'ph8');
        // Util.changeClass(this.menuList, 'justify-center', 'justify-flex-end');
      } else {
        this.header.classList.remove('scroll-header');
        // Util.changeClass(this.logoContainer, 'ph4', 'ph12');
        // Util.changeClass(this.navMenu, 'ph8', 'ph12');
        // Util.changeClass(this.menuList, 'justify-flex-end', 'justify-center');
      }
    }
  }]);

  return Header;
}();

exports.default = Header;

},{"./utils":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu(header) {
    var _this = this;

    _classCallCheck(this, Menu);

    this.header = header;
    this.button = document.querySelector('.menu-button');
    this.wrapperNav = document.querySelector('.wrapper-nav-menu');
    this.nav = document.querySelector('.nav-menu');
    this.button.addEventListener('click', function () {
      return _this.buttonActivated();
    });
    // this.wrapperNav.addEventListener('click', ev => {
    //   console.log(ev.target);
    //   if (ev.target == this.wrapperNav) {
    //     Util.toggleClass(this.button, 'button-activated');
    //     this.closeNav();
    //   }
    // });
  }

  _createClass(Menu, [{
    key: 'hideWrapperNav',
    value: function hideWrapperNav() {
      var _this2 = this;

      setTimeout(function () {
        return _utils2.default.toggleClass(_this2.wrapperNav, 'hidden');
      }, 150);
    }
  }, {
    key: 'showNav',
    value: function showNav() {
      var _this3 = this;

      setTimeout(function () {
        return _this3.nav.style.left = '0';
      }, 0);
    }
  }, {
    key: 'closeNav',
    value: function closeNav() {
      this.nav.style.left = '-100%';
      _utils2.default.fadeOut(this.wrapperNav);
      this.hideWrapperNav();
    }
  }, {
    key: 'buttonActivated',
    value: function buttonActivated() {
      _utils2.default.toggleClass(this.button, 'button-activated');

      if (this.button.classList.contains('button-activated')) {
        _utils2.default.toggleClass(this.wrapperNav, 'hidden');
        _utils2.default.fadeIn(this.wrapperNav);
        this.nav.style.left = '0';
        // this.nav.style.right = '0';
        // this.header.style.backgroundColor = "#1a237e";
      } else {
        this.closeNav();
      }
    }
  }]);

  return Menu;
}();

exports.default = Menu;

},{"./utils":5}],4:[function(require,module,exports){
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

      var _loop = function _loop(i) {
        _this.controllers[i].addEventListener('click', function () {
          if (i != _this.currentSlide) _this.changeSlide(i);
        });
      };

      for (var i = 0; i < this.controllers.length; i++) {
        _loop(i);
      }
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
    key: 'addEventListenerToController',
    value: function addEventListenerToController() {}
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

      // contentBannerPos = -50 - ((scrollPos / 2) * .1);
      contentBannerPos = -50 - scrollPos / 2 * .3;

      for (var i = 0; i < this.contentBanner.length; i++) {
        this.contentBanner[i].style.transform = 'translate(-50%, ' + contentBannerPos + '%';
      }

      // this.contentBanner.forEach(element => element.style.transform = `translate(-50%, ${contentBannerPos}%)`);

      if (scrollPos > windowHeight / 4) {
        console.log(contentBannerPos);

        this.sliderController.classList.add('hidden');
      } else {
        // for (let i = 0; i < this.contentBanner.length; i++) {
        //   this.contentBanner[i].style.transform = `translate(-50%, -50%)`;
        // }
        this.sliderController.classList.remove('hidden');
      }
    }
  }]);

  return Slider;
}();

exports.default = Slider;

},{"./utils":5}],5:[function(require,module,exports){
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
