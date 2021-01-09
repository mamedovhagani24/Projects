const Slider = require('./slider-api');

module.exports = class multiSlider extends Slider {
  lastIndex = 0;
  isLastSlideOnScreen = 0;
  constructor(args) {
    super(args);
    
    this.slidesGap = args.slidesGap ?? 0;
  }
  
  setSlide(index) {
    this._updateSizes();

    const maxSlide = this.slides.length - this.slidesOnScreen;

    if (index < 0) index = 0;
    else if (index > maxSlide) index = maxSlide;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
    
    this._resolveChangeSlideEvent(index);
  }
  
  
  _calcImagesWidth() {
    return (this.width / this.slidesOnScreen) - (this.slidesGap / 2);
  }
}