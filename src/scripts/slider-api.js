"use strict";

module.exports = class Slider {
  constructor(
    container,
    slides,
    slidesOnScreen = 1,
    speed = 1,
    touchActiveBreakpoint
  ) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    this.transitionValue = "all " + speed + "s ease";
    this.touchActiveBreakpoint = touchActiveBreakpoint;

    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.events = {
      changeSlide: null,
      touchEnabled: null,
      touchDisabled: null
    };

    this.touch = {
      startX: 0,
      moveX: 0,
    };
  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();
    this._initTouchEvents(this.width);

    window.addEventListener("resize", this._onResize.bind(this));
  }

  onEvent(type, callback) {
    this.events[type] = callback;
  }

  _onResize(e) {
    const width = e.currentTarget.innerWidth;
    
    this._initTouchEvents(width);

    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
    });

    this.setSlide(this.currentSlide);

    setTimeout(() => {
      this.slidesElements.forEach((el) => {
        el.style.transition = this.transitionValue;
      });
    }, 100);
  }

  _initTouchEvents(width) {
    if (this.touchActiveBreakpoint && width <= this.touchActiveBreakpoint) {
      this._addTouchEvents();
      
      if (this.events.touchEnabled !== null)
      this.events.touchEnabled();
    } else {
      this._removeTouchEvents();

      if (this.events.touchDisabled !== null)
        this.events.touchDisabled();
    }
  }

  _addTouchEvents() {
    this.container.addEventListener("touchstart", this._touchStart.bind(this));
    this.container.addEventListener("touchmove", this._touchMove.bind(this));
    this.container.addEventListener("touchend", this._touchEnd.bind(this));
  }

  _touchStart(e) {
    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
    });

    this.touch.startX = e.changedTouches[0].pageX;
  }

  _touchMove(e) {
    this.touch.moveX = e.changedTouches[0].pageX - this.touch.startX;
    const swipeLength = Math.abs(this.touch.moveX);

    if (swipeLength < 20) return;

    this.touch.slidesPosition =
      this.touch.slidesPosition ?? this.slides.map((el) => el.position);

    this.slideMove(this.touch.moveX);

    if (swipeLength > this.width / 2) {
      this.touch.nextSlide =
        this.touch.moveX < 0 ? this.currentSlide + 1 : this.currentSlide - 1;
    }
  }

  _touchEnd(e) {
    this.slidesElements.forEach((el) => {
      el.style.transition = this.transitionValue;
    });

    if (this.touch.nextSlide !== undefined) this.setSlide(this.touch.nextSlide);
    else this.setSlide(this.currentSlide);

    this.touch = {
      startX: 0,
      moveX: 0,
    };
  }

  _removeTouchEvents() {
    this.container.removeEventListener("touchstart", this._touchStart);
    this.container.removeEventListener("touchmove", this._touchMove);
    this.container.removeEventListener("touchend", this._touchEnd);
  }

  slideMove(positionX) {
    this.slides.forEach((el, i) => {
      el.position = this.touch.slidesPosition[i] + positionX;
    });

    this._updateSlidesTransform();
  }

  next() {
    this.setSlide(this.currentSlide + 1);
  }

  prev() {
    this.setSlide(this.currentSlide - 1);
  }

  setSlide(index) {
    this._updateSizes();

    if (index < 0) index = 0;
    else if (index > this.slides.length - 1) index = this.slides.length - 1;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();

    if (this.events.changeSlide !== null)
      this.events.changeSlide(index);
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition();
  }

  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.position = (i * this.width) / this.slidesOnScreen;
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
    });
  }

  _returnSlideElement({ imgUrl, position, heading, description, className }) {
    let slide = document.createElement("div");

    slide = this._setStyles(slide, imgUrl, position, className);

    if (heading && description)
      slide.innerHTML = this._createSlideInfoElementsHTML(heading, description);

    return slide;
  }

  _setStyles(slide, imgUrl, position, className) {
    if (className) slide.classList.add(className);

    slide.style.backgroundImage = "url(" + imgUrl + ")";
    slide.style.backgroundRepeat = 'no-repeat';
    slide.style.backgroundPosition = 'center center';
    slide.style.transform = "translateX(" + position + "px)";
    slide.style.position = "absolute";
    slide.style.width = this._calcImagesWidth();
    slide.style.top = 0;
    slide.style.top = 0;
    slide.style.height = "inherit";
    slide.style.transition = this.transitionValue;
    
    return slide;
  }

  _createSlideInfoElementsHTML(title, desc) {
    return `<div class="slider__info">
      <h1 class="slider__title">${title}</h1>
      <div class="slider__subtitle">${desc}</div>
    </div>`;
  }

  _calcImagesWidth() {
    return this.slidesOnScreen === 1 ? 'inherit' : (this.width / this.slidesOnScreen) + 'px';
  }
};
