const Slider = require('./slider-api');

module.exports = class multiSlider extends Slider {
  _slidesOnScreen = this.slidesOnScreen;
  
  constructor(args) {
    super(args);
    this.breakpoints = args.breakpoints;
    this.slidesGap = args.slidesGap ?? 0;
  }
  
  init() {
    super.init();

    this._initBreakpoints(window.outerWidth);
  }

  _initBreakpoints(width) {
    for (let w in this.breakpoints) {
      if (width <= w) this.slidesOnScreen = this.breakpoints[w].slidesOnScreen;
      else this.slidesOnScreen = this._slidesOnScreen;

    }
    this.maxSlide = this.slides.length - this.slidesOnScreen
  }

  _onResize(e) {
    super._onResize(e);

    const width = e.currentTarget.innerWidth;

    this._initBreakpoints(width)


    console.log(this.slidesOnScreen)

  }

  _calcImagesWidth() {
    return (this.width / this.slidesOnScreen) - (this.slidesGap / 2);
  }
}