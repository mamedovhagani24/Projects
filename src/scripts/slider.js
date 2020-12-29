"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    
    this._slidesDataArr = [];
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this.init();
  }

  init() {
    this.container.style.overflow = "hidden";
    this._initSlidesData();
    this.container.innerHTML =
      `<div style="position:relative; height:${this.height}px; width:${this._calcImagesWrappWidth()}px">${this._createImages()}</div>`;
  }

  next() {
    
  }

  _initSlidesData() {
    this._slidesDataArr = this.slides.map((el, i)=> {
      el.position = i * this.width;
      el.isOnScreen = (i === 0);
      return el;
    });
  }

  _createImages() {
    return this.slides.map((el, i) =>
          `<img src="${el.imgUrl}" style="
          position: absolute;
          left: ${this._slidesDataArr[i].position}px;
          width:${this._calcImagesWidth()}px;
          object-fit:cover;
          height:inherit;
          transition:all 1s ease">`)
          .join("");
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }

  _calcImagesWrappWidth() {
    return this.width * this.slides.length;
  }
};
