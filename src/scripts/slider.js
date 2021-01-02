"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1, speed = 1) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    this.transitionValue = 'all '+speed+'s ease';

    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.init();
  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();

    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize(e) {
    this.slidesElements.forEach((el) => {
      el.style.transition = 'none';
      return el;
    });

    this.setSlide(this.currentSlide);

    this.slidesElements.forEach((el) => {
      el.style.transition = this.transitionValue;
      return el;
    });
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
    this._updateSizes();

    if (index < 0 || index > this.slides.length - 1) return;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
      return el;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
  }

  _updateSizes(width) {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition(width);
  }

  _updateSlidesPosition(width) {
    this.slides.forEach((el, i) => {
      el.position = width ? el.position + (width - this.width) : i * this.width;

      return el;
    });
  }

  _createImages() {
    return this.slides.map((el) => this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = "relative";
    this.container.style.height = this.height;
    this.container.style.width = "100%";

    this.container.append(...this.slidesElements);
  }

  _updateSlidesTransform() {
    this.slidesElements.forEach((el, i) => {
      el.style.transform = "translateX(" + this.slides[i].position + "px)";

      return el;
    });
  }

  _returnSlideElement({ imgUrl, position, heading, description }) {
    const slide = document.createElement("div");

    slide.style.background = "url(" + imgUrl + ") no-repeat center";
    slide.style.position = "absolute";
    slide.style.top = 0;
    slide.style.backgroundSize = "cover";
    slide.style.height = "inherit";
    slide.style.transform = "translateX(" + position + "px)";
    slide.style.transition = this.transitionValue;
    slide.style.width = "inherit";

    if (heading && description)
      slide.innerHTML = this._createSlideInfoElementsHTML(heading, description);

    return slide;
  }

  _createSlideInfoElementsHTML(title, desc) {
    return `<div class="slider__info">
      <h1 class="slider__title">${title}</h1>
      <div class="slider__subtitle">${desc}</div>
    </div>`;
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }
};
