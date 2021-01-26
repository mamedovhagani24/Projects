import Slider from "./Slider";


export default class SliderMultiItems extends Slider {
  constructor(data) {
    super(data);
    this.slidesOnScreen = data.slidesOnScreen;
    this.elementsWidth = 0;
  }

  init() {
    super.init();
    this.maxSlide = this.elements.length - this.slidesOnScreen;
  }

  get containerWidth() {
    return this.sliderDom.container.offsetWidth;
  };

  updateElementsInfo() {
    super.updateElementsInfo();
    
    this.elementsWidth = (this.containerWidth / this.slidesOnScreen) + 10 / this.slidesOnScreen;

    this.updateElementsOnScreen()
    super.updateElementsInfo();

    this.maxSlide = this.elements.length - this.slidesOnScreen;
  }

  

  updateElementsOnScreen() {
    [...this.sliderDom.elements].map((el)=>{
      el.style.width = this.elementsWidth+'px';
    });
  }
}