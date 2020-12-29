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
    imgUrl: 'https://canadalifechurch.com/wp-content/uploads/2017/06/2017.02.05.jpg'
  },
]

const mainSlider = new Slider(sliderContainer, SLIDES_ARR);

const sliderButtonNext = document.getElementById('slider__next');
const sliderButtonPrev = document.getElementById('slider__prev');

sliderButtonNext.addEventListener('click', ()=>{
  mainSlider.next();
});

sliderButtonPrev.addEventListener('click', ()=>{
  mainSlider.prev();
});
},{"./scripts/slider":2}],2:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1) {
    this.container = container;
    this.slidesOnScreen = slidesOnScreen;
    
    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.init(slides);
  }

  init(slides) {
    this._updateSizes()
    this.slides = this._returnSlidesData(slides);
    // this._updateCurrentSlide();
    this._createImages();
    this._drawSlides();
   
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
  }

  _updateCurrentSlide() {
    this.currentSlide = this.slides.findIndex((el)=>el.isOnScreen);
  }

  next() {
    this.setSlide(this.currentSlide + 1);    
  }

  prev() {
    this.setSlide(this.currentSlide - 1);
  }


  setSlide(index) {
    if (index < 0 || index > this.slides.length-1) return;
    
    const scrollWidth = this.slides[index].position;

    this.slides = this.slides.map((el) => {
      if (this.currentSlide > index) {
        el.position -= scrollWidth;
      } else el.position -= scrollWidth;

      el.isOnScreen = false;
      return el;
    });

    this.currentSlide = index;

    this._updateSlides();
  }

  _returnSlidesData(slidesArr) {
    return slidesArr.map((el, i)=> {
      el.position = i * this.width;
      el.isOnScreen = (i === 0);
      
      return el;
    });
  }

  _createImages() {
    this.slides.forEach((el)=>{
      this.slidesElements.push(
        this._returnSlideElement(el)
      );
    });
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = 'relative';
    this.container.style.height = this.height;
    this.container.style.width = this._calcImagesWrappWidth();
    
    this.container.append(...this.slidesElements);
  }

  _updateSlides() {
    this.slidesElements.forEach((el, i) => 
      el.style.left = this.slides[i].position + 'px');
  }


  _returnSlideElement({imgUrl, position}) {
    const img = document.createElement('img');
    img.src = imgUrl;

    img.style.position = 'absolute';
    img.style.top = 0;
    img.style.objectFit = 'none';
    img.style.height = 'inherit';
    img.style.left = position + 'px';
    img.style.transition = 'all 1s ease';
    img.style.width = this._calcImagesWidth()+'px';
    
    return img;
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }

  _calcImagesWrappWidth() {
    return this.width * this.slides.length;
  }
};

},{}]},{},[1]);
