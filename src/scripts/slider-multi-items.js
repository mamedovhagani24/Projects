const Slider = require('./slider-api');

module.exports = class multiSlider extends Slider {
  constructor(args) {
    super(args);
    
    this.slidesOnScreen = args.slidesOnScreen;
    this.slidesGap = args.slidesGap ?? 0;
  }
  
  setSlide(index) {
    const isLastSlideOnScreen = !this.slides.some((el) => el.position + this._calcImagesWidth() >= this.width);
    
    if (!isLastSlideOnScreen) super.setSlide(index);
  }
  
  _lastSlideIndex(index) {
    return (this.width / this._calcImagesWidth());
  }
  
  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.position = ((i * this.width) / this.slidesOnScreen);
    });
  }
  
  _setStyles(slide, imgUrl, position, className) {
    super._setStyles(slide, imgUrl, position, className);
    
    slide.style.width = this._calcImagesWidth() + 'px';
    
    return slide;
  }
  
  _calcImagesWidth() {
    return (this.width / this.slidesOnScreen) - this.slidesGap;
  }
}