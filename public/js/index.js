(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Slider = require('./scripts/slider');

const sliderContainer = document.getElementById('slider__container');

const SLIDES_ARR = [
  {
    heading: 'Vestibulium',
    description: 'Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.',
    imgUrl: 'https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg'
  },
  {
    heading: 'Vestibulium',
    description: 'Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.',
    imgUrl: 'https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg'
  },
]

const slider = new Slider(sliderContainer, SLIDES_ARR);

console.log(slider)
},{"./scripts/slider":2}],2:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this.init();
  }

  init() {
    this.container.style.overflow = "hidden";
    this.container.innerHTML =
      `<div style="height:${this.height}px; width:${this._calcImagesWrappWidth()}px">${this._createImages()}</div>`;
  }



  _createImages() {
    return this.slides.map((el) =>
          `<img src="${el.imgUrl}" style="width:${this._calcImagesWidth()}px;object-fit:cover;height:inherit">`)
          .join("");
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }

  _calcImagesWrappWidth() {
    return this.width * this.slides.length;
  }
};

},{}]},{},[1]);
