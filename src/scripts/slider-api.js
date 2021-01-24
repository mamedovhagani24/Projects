const touchSlides = require('./slider-touch');

module.exports = class Slider extends touchSlides{
  constructor({
    container,
    slides,
    speed = 1,
    slidesOnScreen,
    slidesToScroll = 1,
    touchActiveBreakpoint
  }) {
    super();

    this.container = container;
    this.slides = slides;
    this.transitionValue = "all " + speed + "s ease";
    this.touchActiveBreakpoint = touchActiveBreakpoint;
    this.slidesOnScreen = slidesOnScreen;
    this.slidesToScroll = slidesToScroll;

    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;
    this.maxSlide = this.slides.length - this.slidesOnScreen;

    this.events = {
      changeSlide: null,
      touchEnabled: null,
      touchDisabled: null
    };

  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();
    this._initTouchEvents(this.width);

    super.init();
  }

  onEvent(type, callback) {
    this.events[type] = callback;
  }

  setTransition(isOn) {
    this.slidesElements.forEach((el) => {
      el.style.transition = isOn ? this.transitionValue : 'none';
    });
  }
  
  slideMove(positionX) {
    this.touch.slidesPosition =
      this.touch.slidesPosition ?? this.slides.map((el) => el.position);
    
    this.slides.forEach((el, i) => {
      el.position = this.touch.slidesPosition[i] + positionX;
    });

    this._updateSlidesTransform();
  }

  next() {
    this.setSlide(this.currentSlide + this.slidesToScroll);
  }

  prev() {
    this.setSlide(this.currentSlide - this.slidesToScroll);
  }

  setSlide(index) {
    this._updateSizes();

    if (index < 0) index = 0;
    else if (index > this.maxSlide) index = this.maxSlide;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
    
    this._emitChangeSlideEvent(index);
  }

  _emitChangeSlideEvent(index) {
    if (this.events.changeSlide !== null)
      this.events.changeSlide(index, this.maxSlide);
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition();
  }

  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.id = i;
      el.position = i * this.width / this.slidesOnScreen;
    });
  }

  _createImages() {
    return this.slides.map((el) => this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = "relative";
    this.container.style.height = this.height + 'px';
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
    slide.style.height = "inherit";
    slide.style.transform = "translateX(" + position + "px)";
    slide.style.position = "absolute";
    slide.style.width = this._calcImagesWidth() + 'px';
    slide.style.transition = this.transitionValue;
    slide.style.top = 0;
    
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
