const touchSlider = require('./slider-touch');

module.exports = class extends touchSlider{
  __position = 0;
  __itemWidth = 0
  __movePosition = 0;
  __slidesElements = [];
  __wrapper = null;
  __transition = '';
  __events = [];

  constructor({ container, slides, slidesOnScreen = 1, speed, slidesToScroll = 1, slidesWrapperClass}) {
    super();

    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    this.slidesToScroll = slidesToScroll;
    this.speed = speed;
    this.slidesWrapperClass = slidesWrapperClass;
    this.transition = '';

  }

  init() {
    this.container.style.overflow = 'hidden';

    this.__itemWidth = this.container.clientWidth / this.slidesOnScreen;
    this.__movePosition = this.slidesToScroll * this.__itemWidth;
    this.transition = this.__transition = `all ${this.speed}s ease`;

    this.__createSlides();
    this.__drawSlides();
    
    super.init();
  }

  onEvent(event, callback) {
    this.__events[event] = callback;
  }
  
  next() {
    this.__position -= this.__movePosition;
    this.__emitEventSlide();
    this.__setPosition();
    
  }
  
  prev() {
    this.__position += this.__movePosition;
    this.__emitEventSlide();
    this.__setPosition();
  }

  __emitEventSlide() {
    this.__events?.slidesChange(this.__returnSlideConditions());
  }

  __touchMove(e) {
    super.__touchMove(e);
    
    this.__touch.position = this.__touch.position ?? this.__position;

    // const {prevBtn, nextBtn} = this.__returnSlideConditions();

    // console.log(prevBtn, nextBtn);
    
    this.__position = this.__touch.position + this.__touch.moveX;
    
    console.log(this.__position);
    // if (this.__position <= 0) return;
    
    this.transition = '';

    this.__setPosition();
  }


  __touchEnd() {
    super.__touchEnd();

    this.transition = this.__transition;

    this.__setPosition();
  }

  __setPosition() {
    this.__wrapper.style.transition = this.transition;
    this.__wrapper.style.transform = `translateX(${this.__position}px)`;
  }

  __createWrapper() {
    this.__wrapper = document.createElement('div');
    this.__wrapper.classList.add(this.slidesWrapperClass);
    this.__wrapper.style.transition = this.transition;
    this.__wrapper.style.width = (this.__itemWidth * this.slides.length )+ 'px';
  }

  __createSlides() {
    this.__slidesElements = this.slides.map((el)=> {
      const slide = document.createElement('div');
      const slideWrapp = document.createElement('div');

      slideWrapp.classList.add('about-us__slider-img-wrapp');
      slide.classList.add('about-us__slider-img');
      slide.style.backgroundImage = "url(" + el.imgUrl + ")";
      slideWrapp.style.width= this.__itemWidth + 'px';
      slideWrapp.append(slide);

      return slideWrapp;
    })
  }

  __drawSlides() {
    this.__createWrapper();
    this.__wrapper.append(...this.__slidesElements);
    this.container.append(this.__wrapper);
  }

  __returnSlideConditions() {
    return {
      prevBtn: this.__position >= 0,
      nextBtn: this.__position <= -((this.slides.length - this.slidesOnScreen)*this.__itemWidth)
    }
  }

};
