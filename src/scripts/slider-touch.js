module.exports = class {
  constructor() {
    this.touch = {
      startX: 0,
      moveX: 0,
    };
  }

  init() {
    window.addEventListener("resize", this._onResize.bind(this));
  }
  
  _onResize(e) {
    this._updateSizes();
    
    this.setTransition(false);
    
    this.slidesElements.forEach((el) => {
      el.style.width = this._calcImagesWidth() + 'px';
    });
    
    const width = e.currentTarget.innerWidth;
    
    this._initTouchEvents(width);
    
    this.setSlide(this.currentSlide);

    setTimeout(() => this.setTransition(true), 100);
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
    this.setTransition(false);

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
    this.setTransition(true);

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


}