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
    // this.adaptive.onResize(this.updateElementsInfo.bind(this));
  }

  updateElementsInfo(e) {
    this.elements = this.sliderDom.getInfoFromElements();
  }

  next() {
    this.setSlide(++this.activeSlide);
  }

  prev() {
    this.setSlide(--this.activeSlide);
  }

  setSlide(index) {
    index = (index<0) ? 0 : 
            (index>=this.elements.length) ? 
            this.elements.length-1 : index;

    const shift = this.elements[index].position;

    this.activeSlide = index;
    this.sliderDom.moveElements(-shift);
  }
}


class sliderDOM {
  constructor({ container, slidesClass, titleClass, descriptionClass }) {
    this.container = container;
    this.slidesClass = slidesClass;
    this.titleClass = titleClass;
    this.descriptionClass = descriptionClass;

    this.elements = [];
  }

  init() {
    this.elements = this.container.querySelectorAll(this.slidesClass);
  }

  getInfoFromElements() {
    return [...this.elements].map((el, id) => {
      const { width, x: position } = el.getBoundingClientRect();
      return { id, width, position };
    });
  }

  moveElements(positionX) {
    this.container.style.transform = `translateX(${positionX}px)`;
  }
}


class sliderAdaptive {
  constructor() {
    this.callbacks = [];
  }

  init() {
    window.addEventListener("resize", this.initResize.bind(this));
  }

  initResize(event) {
    this.callbacks.forEach((callback)=>callback(event));
  }

  onResize(callback) {
    this.callbacks.push(callback);
  }
}
