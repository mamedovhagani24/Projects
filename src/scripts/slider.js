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

  next() {
    
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
