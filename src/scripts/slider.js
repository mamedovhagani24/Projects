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
};
