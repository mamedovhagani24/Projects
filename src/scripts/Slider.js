export default class Slider {
  constructor(data) {
    this.slideTime = data.slideTime;
    this.sliderDom = new sliderDOM(data);
    this.touch = new sliderTouch(data.container);
    this.adaptive = new sliderAdaptive({
      onResizeCallback: () => {
        this.activeTransition(false);

        this.updateElementsInfo();
        this.setSlide(this.activeSlide);

        setTimeout(() => {
          this.activeTransition(true);
        }, 10);
      },
    });

    this.elements = {};
    this.activeSlide = 0;
    this.maxSlide = null;
    this.elementWidth = null;
  }

  init() {
    this.sliderDom.init();
    this.adaptive.init();

    this.updateElementsInfo();
    this.activeTransition(true);

    this.touch.initTouchEvents({
      touchStart: this.touchStart.bind(this),
      touchMove: this.touchMove.bind(this),
      touchEnd: this.touchEnd.bind(this),
    });

    this.elementWidth = this.containerWidth;

    this.maxSlide = this.elements.length - 1;
  }

  touchStart() {
    this.activeTransition(false);
  }

  _startElementMovePosition = null;
  touchMove({ moveX }) {
    this._startElementMovePosition =
      this._startElementMovePosition ?? this.sliderDom.cotainerPosition;

    const shift = this._startElementMovePosition + moveX;

    this.sliderDom.moveElements(shift);
  }

  touchEnd() {
    this._startElementMovePosition = null;

    this.activeTransition(true);

    this.setSlide(this.nextSlideIndexByPosition);
  }

  get nextSlideIndexByPosition() {
    const index = this.sliderDom
      .getComputedElementsPosition()
      .findIndex((el) => el.position + this.elementWidth / 2 > 0);

    return index >= 0 ? index : this.maxSlide;
  }

  get containerWidth() {
    return this.sliderDom.container.offsetWidth;
  }

  updateElementsInfo() {
    this.elements = this.sliderDom.getStaticElementsPosition();
  }

  next() {
    this.setSlide(++this.activeSlide);
  }

  prev() {
    this.setSlide(--this.activeSlide);
  }

  activeTransition(isActive) {
    this.sliderDom.container.style.transition = isActive
      ? `transform ${this.slideTime}s ease`
      : "none";
  }

  setSlide(index) {
    if (index !== this.activeSlide) this.activeTransition(true);

    index = index < 0 ? 0 : index > this.maxSlide ? this.maxSlide : index;

    const shift = this.elements[index].position;

    this.activeSlide = index;
    this.sliderDom.moveElements(-shift);
  }
}

class sliderDOM {
  constructor({ container, slidesClass }) {
    this.container = container;
    this.slidesClass = slidesClass;

    this.elements = [];
  }

  init() {
    this.elements = this.container.querySelectorAll(this.slidesClass);
  }

  get cotainerPosition() {
    const { transform } = window.getComputedStyle(this.container);
    return new WebKitCSSMatrix(transform).m41;
  }

  getStaticElementsPosition() {
    return [...this.elements].map((el) => {
      return {
        position: el.offsetLeft,
      };
    });
  }

  getComputedElementsPosition() {
    return [...this.elements].map((el) => {
      return {
        position: el.getBoundingClientRect().left,
      };
    });
  }

  moveElements(positionX) {
    this.container.style.transform = `translateX(${positionX}px)`;
  }
}

class sliderAdaptive {
  constructor({ onResizeCallback }) {
    this.callbacks = [];
    this.windowResizedWidth = 0;
    this.onResizeCallback = onResizeCallback;
  }

  init() {
    window.addEventListener("resize", this.initResize.bind(this));
  }

  initResize(event) {
    this.onResizeCallback();
    this.callbacks.forEach((callback) => callback(event));
  }

  onResize(callback) {
    this.callbacks.push(callback);
  }
}

class sliderTouch {
  constructor(container) {
    this.container = container;

    this.touch = {
      startX: 0,
      moveX: 0,
    };

    this.events = {};
  }

  initTouchEvents(callbacks) {
    this.container.addEventListener("touchstart", this._touchStart.bind(this));
    this.container.addEventListener("touchmove", this._touchMove.bind(this));
    this.container.addEventListener("touchend", this._touchEnd.bind(this));

    this.events = callbacks;
  }

  _touchStart(e) {
    this.touch.startX = e.changedTouches[0].pageX;

    if (this.events.touchStart) this.events.touchStart(this.touch);
  }
  _touchMove(e) {
    this.touch.moveX = e.changedTouches[0].pageX - this.touch.startX;

    if (Math.abs(this.touch.moveX) < 20) return;

    if (this.events.touchMove) this.events.touchMove(this.touch);
  }
  _touchEnd() {
    this.touch = {
      startX: 0,
      moveX: 0,
    };

    if (this.events.touchEnd) this.events.touchEnd();
  }
}
