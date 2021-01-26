export default class Slider {
  constructor(data) {
    this.sliderDom = new sliderDOM(data);
    this.adaptive = new sliderAdaptive();

    this.elements = {};
    this.activeSlide = 0;
  }

  init() {
    this.sliderDom.init();
    this.adaptive.init();

    this.updateElementsInfo();
  }
  updateElementsInfo() {
    this.elements = this.sliderDom.getInfoFromElements();
    // console.log(this.activeSlide)
    const a = this.sliderDom.container;
    const containerPosition = +window.getComputedStyle(a).transform.split(',')[4];
    console.log(containerPosition,this.adaptive.windowResizedWidth)

    this.sliderDom.container.style.transform = `translateX(${containerPosition - this.adaptive.windowResizedWidth}px)`;
  }

  next() {
    this.setSlide(++this.activeSlide);
  }

  prev() {
    this.setSlide(--this.activeSlide);
  }

  setSlide(index) {
    index =
      index < 0
        ? 0
        : index >= this.elements.length
        ? this.elements.length - 1
        : index;

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

  getInfoFromElements() {
    return [...this.elements].map((el) => {
      return { position: el.offsetLeft };
    });
  }

  moveElements(positionX) {
    this.container.style.transform = `translateX(${positionX}px)`;
  }
}


class sliderAdaptive {
  constructor() {
    this.callbacks = [];
    this.windowResizedWidth = 0;
  }

  init() {
    window.addEventListener("resize", this.initResize.bind(this));
    window.addEventListener(
      "resize",
      this.debounce(this.onResizeEnd.bind(this))
    );
  }

  _startResizeWidth = null;
  initResize(event) {
    this._startResizeWidth =
      this._startResizeWidth ?? document.documentElement.clientWidth;

    this.windowResizedWidth =
      document.documentElement.clientWidth - this._startResizeWidth;

    this.callbacks.forEach((callback) => callback(event));
  }

  onResize(callback) {
    this.callbacks.push(callback);
  }
  onResizeEnd() {
    console.log(this.windowResizedWidth)
    this._startResizeWidth = null;
    this.windowResizedWidth = 0;
  }
  debounce(func) {
    let timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  }
}
