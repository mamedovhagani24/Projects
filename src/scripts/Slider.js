import { times } from "underscore";

export default class Slider {
  constructor(data) {
    this.slideTime = data.slideTime;
    this.sliderDom = new sliderDOM(data);
    this.adaptive = new sliderAdaptive({
      onResizeCallback: () => {
        this.activeTransition(false);

        this.updateElementsInfo();
        this.setSlide(this.activeSlide);
        
        setTimeout(() => {
          this.activeTransition(true);
        }, 10);
      }
    });

    this.elements = {};
    this.activeSlide = 0;
    this.maxSlide = null;
  }

  init() {
    this.sliderDom.init();
    this.adaptive.init();

    this.updateElementsInfo();
    this.activeTransition(true);

    this.maxSlide = this.elements.length - 1;
  }

  updateElementsInfo() {
    this.elements = this.sliderDom.getInfoFromElements();
  }

  next() {
    this.setSlide(++this.activeSlide);
  }

  prev() {
    this.setSlide(--this.activeSlide);
  }

  activeTransition(isActive) {
    this.sliderDom.container.style.transition = isActive ? `transform ${this.slideTime}s ease` : 'none';
  }

  setSlide(index) {
    if (index !== this.activeSlide) this.activeTransition(true);
    
    index =
      index < 0 ?
      0 :
      index > this.maxSlide ?
      this.maxSlide :
      index;

    const shift = this.elements[index].position;

    this.activeSlide = index;
    this.sliderDom.moveElements(-shift);
  }
}

class sliderDOM {
  constructor({
    container,
    slidesClass
  }) {
    this.container = container;
    this.slidesClass = slidesClass;

    this.elements = [];
  }


  init() {
    this.elements = this.container.querySelectorAll(this.slidesClass);
  }

  getInfoFromElements() {
    return [...this.elements].map((el) => {
      return {
        position: el.offsetLeft
      };
    });
  }

  moveElements(positionX) {
    this.container.style.transform = `translateX(${positionX}px)`;
  }
}


class sliderAdaptive {
  constructor({
    onResizeCallback
  }) {
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
