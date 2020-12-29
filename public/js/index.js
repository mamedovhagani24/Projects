(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Slider = require("./scripts/slider");

const sliderContainer = document.getElementById("slider__container");

const SLIDES_ARR = [
  {
    heading: "Vestibulium",
    description:
      "Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.",
    imgUrl: "https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg",
  },
  {
    heading: "Vestibulium",
    description:
      "Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.",
    imgUrl:
      "https://canadalifechurch.com/wp-content/uploads/2017/06/2017.02.05.jpg",
  },
];

const mainSlider = new Slider(sliderContainer, SLIDES_ARR);

const sliderButtonNext = document.getElementById("slider__next");
const sliderButtonPrev = document.getElementById("slider__prev");
const mainSliderMarkersWrapp = document.querySelector(".slider__bottom-controls");

const mainSliderMarkers = createMainSliderMarkers(SLIDES_ARR);

mainSliderMarkersWrapp.append(...mainSliderMarkers);

mainSliderMarkersWrapp.addEventListener("click", (e) => {
  const markerIndex = e.target.closest('.slider__control-item')?.dataset.index;

  if (markerIndex === undefined) return;

  mainSlider.setSlide(markerIndex);
  updateMainSliderMarkers(markerIndex);
});

function createMainSliderMarkers(slides) {
  return slides.map((el, i) => {
    const marker = document.createElement("div");
    marker.setAttribute("data-index", i);

    marker.classList.add("slider__control-item");
    if (i === 0) marker.classList.add("slider__control-item_active");

    return marker;
  });
}

function updateMainSliderMarkers(index) {
  mainSliderMarkers.forEach((el) =>
    el.classList.remove("slider__control-item_active")
  );

  mainSliderMarkers[index].classList.add("slider__control-item_active");
}

sliderButtonNext.addEventListener("click", () => {
  const currSlide = mainSlider.next();

  updateMainSliderMarkers(currSlide);
});

sliderButtonPrev.addEventListener("click", () => {
  const currSlide = mainSlider.prev();

  updateMainSliderMarkers(currSlide);
});

},{"./scripts/slider":2}],2:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1, speed = 1) {
    this.container = container;
    this.slidesOnScreen = slidesOnScreen;
    this.speed = speed;
    
    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.init(slides);
  }

  init(slides) {
    this._updateSizes();
    this.slides = this._returnSlidesData(slides);
    this.slidesElements = this._createImages();
    this._drawSlides();
  }

  next() {
    this.setSlide(this.currentSlide + 1);

    return this.currentSlide;
  }
  
  prev() {
    this.setSlide(this.currentSlide - 1);
    
    return this.currentSlide;
  }


  setSlide(index) {
    if (index < 0 || index > this.slides.length-1) return;
    
    const scrollWidth = this.slides[index].position;

    this.slides = this.slides.map((el) => {
      if (this.currentSlide > index) {
        el.position -= scrollWidth;
      } else el.position -= scrollWidth;

      return el;
    });

    this.currentSlide = index;

    this._updateSlidesPosition();
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
  }

  _returnSlidesData(slidesArr) {
    return slidesArr.map((el, i)=> {
      el.position = i * this.width;
      
      return el;
    });
  }

  _createImages() {
    return this.slides.map((el)=> this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = 'relative';
    this.container.style.height = this.height;
    this.container.style.width = '100%';
    
    this.container.append(...this.slidesElements);
  }

  _updateSlidesPosition() {
    this.slidesElements.forEach((el, i) => 
      el.style.left = this.slides[i].position + 'px');
  }

  _returnSlideElement({imgUrl, position, heading, description}) {
    const slide = document.createElement('div');

    slide.style.background = 'url('+imgUrl+') no-repeat center';
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.backgroundSize = 'cover';
    slide.style.height = 'inherit';
    slide.style.left = position + 'px';
    slide.style.transition = 'all '+this.speed+'s ease';
    slide.style.width = this._calcImagesWidth()+'px';
    
    if (heading && description) 
      slide.innerHTML = this._createSlideInfoElements(heading, description);

    return slide;
  }

  _createSlideInfoElements(title, desc) {
    return `<div class="slider__info">
      <h1 class="slider__title">${title}</h1>
      <div class="slider__subtitle">${desc}</div>
    </div>`;
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }

  _calcImagesWrappWidth() {
    return this.width * this.slides.length;
  }
};

},{}]},{},[1]);
