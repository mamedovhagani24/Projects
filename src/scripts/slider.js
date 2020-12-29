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

    this._updateSlides();
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
