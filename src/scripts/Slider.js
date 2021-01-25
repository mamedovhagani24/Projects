export default class Slider {
  constructor({container, slidesClass}) {
    this.slidesDom = new sliderDOM(container, slidesClass);
  }
  
  init() {
    this.slidesDom.init();
  }
}

class sliderDOM {
  constructor(container, slidesClass) {
    this.container = container;
    this.slidesClass = slidesClass;
    this.elements = [];
  }

  init() {
    this.elements = this.container.querySelectorAll(this.slidesClass);
  }

  getElementsData() {
    // return 
  }
}