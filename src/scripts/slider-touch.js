module.exports = class {
  __touch = {
    startX: 0,
    moveX: 0,
  };
  constructor() {
  }

  init() {
    // window.addEventListener('resize', this.__onResize.bind(this));

    this.__initTouchEvents();
  }

  __initTouchEvents() {
    this.container.addEventListener("touchstart", this.__touchStart.bind(this));
    this.container.addEventListener("touchmove", this.__touchMove.bind(this));
    this.container.addEventListener("touchend", this.__touchEnd.bind(this));
  }

  __touchStart(e){
    this.__touch.startX = e.changedTouches[0].pageX;
  }

  __touchMove(e) {
    this.__touch.moveX = e.changedTouches[0].pageX - this.__touch.startX;
    const swipeLength = Math.abs(this.__touch.moveX);

    if (swipeLength < 20) return;

    this.__touch.moveX = swipeLength;


    // this.touch.slidesPosition =
    //   this.touch.slidesPosition ?? this.slides.map((el) => el.position);

    // this.slideMove(this.touch.moveX);

    // if (swipeLength > this.width / 2) {
    //   this.touch.nextSlide =
    //     this.touch.moveX < 0 ? this.currentSlide + 1 : this.currentSlide - 1;
    // }
  }

  __touchEnd(e) {
    // this.slidesElements.forEach((el) => {
    //   el.style.transition = this.transitionValue;
    // });

    // if (this.touch.nextSlide !== undefined) this.setSlide(this.touch.nextSlide);
    // else this.setSlide(this.currentSlide);

    this.__touch = {
      startX: 0,
      moveX: 0,
    };
  }

}