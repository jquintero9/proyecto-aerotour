'use strict';

class Util {
  static changeClass(element, removeClass, newClass) {
    if (element) {
      element.classList.remove(removeClass);
      element.classList.add(newClass);
    }
  }

  static toggleClass(element, className) {
    if (element) {
      if (!element.classList.contains(className)) {
        element.classList.add(className);
      }
      else {
        element.classList.remove(className);
      }
    }
  }

  static fadeIn(element) {
    if (element) {
      element.classList.remove('fadeOut');
      element.classList.add('fadeIn');
    }
  }

  static fadeOut(element) {
    if (element) {
      element.classList.remove('fadeIn');
      element.classList.add('fadeOut');
    }
  }
}

module.exports =  Util;