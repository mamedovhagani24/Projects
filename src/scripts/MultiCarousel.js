import Slider from "./Slider";


export default class SliderMultiItems extends Slider {
  constructor(data) {
    super(data);
    this.slidesOnScreen = data.slidesOnScreen;
  }

  init() {
    super.init();
    this.maxSlide = this.elements.length - this.slidesOnScreen;
    this.elementWidth = (this.containerWidth / this.slidesOnScreen) + 10 / this.slidesOnScreen;
  }

  updateElementsInfo() {
    super.updateElementsInfo();
    
    this.elementWidth = (this.containerWidth / this.slidesOnScreen) + 10 / this.slidesOnScreen;

    this.updateElementsOnScreen()
    super.updateElementsInfo();

    this.maxSlide = this.elements.length - this.slidesOnScreen;
  }

  

  updateElementsOnScreen() {
    [...this.sliderDom.elements].map((el)=>{
      el.style.width = this.elementWidth+'px';
    });
  }
}