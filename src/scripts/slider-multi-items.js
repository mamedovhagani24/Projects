const Slider = require('./slider-api');

module.exports = class multiSlider extends Slider {
  lastIndex = 0;
  isLastSlideOnScreen = 0;
  constructor(args) {
    super(args);
    
    this.slidesOnScreen = args.slidesOnScreen;
    this.slidesGap = args.slidesGap ?? 0;
  }
  
  setSlide(index) {
    
    this.isLastSlideOnScreen = this.slides.filter((el) => el.position + this._calcImagesWidth() >= this.width).length;
    

    if (this.currentSlide < this.lastIndex || this.isLastSlideOnScreen > 1) super.setSlide(index);
    else if (this.isLastSlideOnScreen === 1) {
      this._resolveChangeSlideEvent(this.slides.length - 1);
      this.lastIndex = 0;
    }

    this.lastIndex = index;
  }
  
  _resolveChangeSlideEvent(index) {
    if (this.events.changeSlide !== null)
      this.events.changeSlide(index);
  }

  _lastSlideIndex(index) {
    return (this.width / this._calcImagesWidth());
  }
  
  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.position = ((i * this.width) / this.slidesOnScreen);
    });
  }
  
  _calcImagesWidth() {
    return (this.width / this.slidesOnScreen) - (this.slidesGap / 2);
  }
}