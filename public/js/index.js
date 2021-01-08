(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const Slider = require("../../scripts/slider-multi-items");
const Slider = require("../../scripts/new-slider");


const clientsSliderWrapper = document.querySelector('.about-us__slider-body');

const clientsSliderButton_prev = document.getElementById('clientSlider__prev');
const clientsSliderButton_next = document.getElementById('clientSlider__next');
const clientsSlider__range = document.getElementById('clientsSlider__range');

const CLIENTS_ARR = [
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'}
];

const clientsSlider = new Slider({
  container: clientsSliderWrapper,
  slides: CLIENTS_ARR,
  slidesOnScreen: 6,
  speed: .6,
  slidesWrapperClass: 'about-us__slider-wrapp'
  // touchActiveBreakpoint: 425,
  // slidesGap: 20
});

clientsSlider.init();

clientsSliderButton_prev.addEventListener('click', () => {  
  clientsSlider.prev();
});

clientsSliderButton_next.addEventListener('click', () => {
  clientsSlider.next();
});

// clientsSlider__range.addEventListener('input', (e)=>{
//   const value = +e.srcElement.value;
  
//   const w = clientsSlider.container.offsetWidth;
  
//   const res = (value / 100) * w;
  
//   clientsSlider.slideMove(-res);
// })

clientsSlider.onEvent('slidesChange', updateClientsSliderButtons);
updateClientsSliderButtons({
  prevBtn: true,
  nextBtn: false
});



function updateClientsSliderButtons({prevBtn, nextBtn}) {

  clientsSliderButton_prev.disabled = prevBtn;
  clientsSliderButton_next.disabled = nextBtn;
}

},{"../../scripts/new-slider":6}],2:[function(require,module,exports){
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header__burger = document.querySelector('.header__menu')

        e.preventDefault();
        this.classList.toggle("active");
        header__burger.classList.toggle('active');

    });


const portfolio = document.querySelector('.portfolio')

portfolio.addEventListener('click', (e) => {
    const header__submenu = document.querySelector('.header__submenu')

    header__submenu.classList.toggle('active')
})

},{}],3:[function(require,module,exports){
function enableDragSort() {
  const sortableLists = document.querySelectorAll(".services__items-wrapper");
  sortableLists.forEach((list) => {
    enableDragList(list);
  });
}

function enableDragList(list) {
  list.querySelectorAll(".services__item").forEach((item) => {
    enableDragItem(item);
  });
}

function enableDragItem(item) {
  item.setAttribute("draggable", true);
  item.addEventListener('dragend', handleDrop);
}

function handleDrop(item) {
  const selectedItem = item.target;
  const list = selectedItem.parentNode;

  let swapItem =
    document.elementFromPoint(item.clientX, item.clientY) === null
      ? selectedItem
      : document.elementFromPoint(item.clientX, item.clientY);

  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

enableDragSort();

},{}],4:[function(require,module,exports){
const Slider = require("../../scripts/slider-api");

const SLIDES_ARR = [
  {
    heading: "Vestibulium",
    description:
      "Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.",
    imgUrl: "https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg",
  },
  {
    heading: "Vestibulium1",
    description:
      "Maecenas tincidunt, augue et rutrum condimentum, ut commodo.",
    imgUrl:
      "https://canadalifechurch.com/wp-content/uploads/2017/06/2017.02.05.jpg",
  },
  {
    heading: "Vestibulium 2",
    description:
      "Rutrum condimentum, libero lectus mattis orci, ut commodo. Maecenas tincidunt, augue et Maecenas tincidunt, augue et ",
    imgUrl:
      "https://s1.1zoom.me/b5050/7/225989-Sepik_2048x1152.jpg",
  },
  {
    heading: "Vestibulium 2",
    description:
      "Rutrum condimentum, libero lectus mattis orci, ut commodo. Maecenas tincidunt, augue et Maecenas tincidunt, augue et ",
    imgUrl:
      "https://s1.1zoom.me/b5050/7/225989-Sepik_2048x1152.jpg",
  },
  {
    heading: "Vestibulium 2",
    description:
      "Rutrum condimentum, libero lectus mattis orci, ut commodo. Maecenas tincidunt, augue et Maecenas tincidunt, augue et ",
    imgUrl:
      "https://s1.1zoom.me/b5050/7/225989-Sepik_2048x1152.jpg",
  },
  {
    heading: "Vestibulium 2",
    description:
      "Rutrum condimentum, libero lectus mattis orci, ut commodo. Maecenas tincidunt, augue et Maecenas tincidunt, augue et ",
    imgUrl:
      "https://s1.1zoom.me/b5050/7/225989-Sepik_2048x1152.jpg",
  },
  {
    heading: "AAAAA 21",
    description:
      "Rutrum condimentum, libero lectus mattis orci, ut commodo. Maecenas tincidunt, augue et Maecenas tincidunt, augue et ",
    imgUrl:
      "https://canadalifechurch.com/wp-content/uploads/2017/06/2017.02.05.jpg",
  },
];

const mainSliderContainer = document.getElementById("main-slider__container");

const mainSlider = new Slider({
  container: mainSliderContainer,
  slides: SLIDES_ARR,
  slidesOnScreen: 2,
  speed: 1,
  slidesToScroll: 1,
  touchActiveBreakpoint: 425
});

const sliderButtonNext = document.getElementById("slider__next");
const sliderButtonPrev = document.getElementById("slider__prev");
const mainSliderMarkersWrapp = document.querySelector(".slider__bottom-controls");

const mainSliderMarkers = createMainSliderMarkers(SLIDES_ARR);


mainSliderMarkersWrapp.append(...mainSliderMarkers);

checkButtonsActivity([sliderButtonNext, sliderButtonPrev], 0, SLIDES_ARR.length);

mainSlider.onEvent('changeSlide', updateMainSliderMarkers);

mainSlider.onEvent('touchEnabled', () => {
  sliderButtonPrev.style.display = 'none';
  sliderButtonNext.style.display = 'none';

  mainSliderMarkers.forEach(el=> el.style.height = '10px');
});

mainSlider.onEvent('touchDisabled', () => {
  sliderButtonPrev.style.display = 'block';
  sliderButtonNext.style.display = 'block';

  mainSliderMarkers.forEach(el=> el.style.height = '5px');
});

mainSlider.init();


mainSliderMarkersWrapp.addEventListener("click", (e) => {
  const markerIndex = e.target.closest('.slider__control-item')?.dataset.index;

  if (markerIndex === undefined) return;

  mainSlider.setSlide(+markerIndex);
});

sliderButtonNext.addEventListener("click", () => {
  if (sliderButtonNext.classList.contains('btn_disabled')) return;

  mainSlider.next();
});

sliderButtonPrev.addEventListener("click", () => {
  if (sliderButtonPrev.classList.contains('btn_disabled')) return;

  mainSlider.prev();
});


function createMainSliderMarkers(slides) {
  return slides.map((el, i) => {
    const marker = document.createElement("div");
    marker.setAttribute("data-index", i);

    marker.classList.add("slider__control-item");

    if (i === 0) marker.classList.add("slider__control-item_active");

    return marker;
  });
}

function updateMainSliderMarkers(index) {
  mainSliderMarkers.forEach((el) => el.classList.remove("slider__control-item_active"));

  mainSliderMarkers[index].classList.add("slider__control-item_active");

  checkButtonsActivity([sliderButtonNext, sliderButtonPrev], index, SLIDES_ARR.length);
}

function checkButtonsActivity(buttonsArr, currSlide, slidesAmount) {
  buttonsArr.forEach(el => el.classList.remove('btn_disabled'));
  
  if (currSlide === 0) 
    buttonsArr[1].classList.add('btn_disabled');
  else if (currSlide === slidesAmount-1) 
    buttonsArr[0].classList.add('btn_disabled');
}

},{"../../scripts/slider-api":7}],5:[function(require,module,exports){
require("./components/services/services-drag-n-drop");
require("./components/header/header");
require("./components/slider/slider");
require("./components/about_us/about_us");

},{"./components/about_us/about_us":1,"./components/header/header":2,"./components/services/services-drag-n-drop":3,"./components/slider/slider":4}],6:[function(require,module,exports){
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

},{"./slider-touch":8}],7:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor({
    container,
    slides,
    speed = 1,
    slidesOnScreen,
    slidesToScroll = 1,
    touchActiveBreakpoint
  }) {
    this.container = container;
    this.slides = slides;
    this.transitionValue = "all " + speed + "s ease";
    this.touchActiveBreakpoint = touchActiveBreakpoint;
    this.slidesOnScreen = slidesOnScreen;
    this.slidesToScroll = slidesToScroll;

    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.events = {
      changeSlide: null,
      touchEnabled: null,
      touchDisabled: null
    };

    this.touch = {
      startX: 0,
      moveX: 0,
    };
  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();
    this._initTouchEvents(this.width);

    window.addEventListener("resize", this._onResize.bind(this));
  }

  onEvent(type, callback) {
    this.events[type] = callback;
  }

  _onResize(e) {
    this._updateSizes();
    
    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
      el.style.width = this._calcImagesWidth() + 'px';
    });
    
    const width = e.currentTarget.innerWidth;
    
    this._initTouchEvents(width);
    
    this.setSlide(this.currentSlide);

    setTimeout(() => {
      this.slidesElements.forEach((el) => {
        el.style.transition = this.transitionValue;
      });
    }, 100);
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
    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
    });

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
    this.slidesElements.forEach((el) => {
      el.style.transition = this.transitionValue;
    });

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

  slideMove(positionX) {
    this.touch.slidesPosition =
      this.touch.slidesPosition ?? this.slides.map((el) => el.position);
    
    this.slides.forEach((el, i) => {
      el.position = this.touch.slidesPosition[i] + positionX;
    });

    this._updateSlidesTransform();
  }

  next() {
    const nextIndex = this.slides.findIndex(el=> el.position >= this.slidesToScroll * this._calcImagesWidth());
    // this.slides.findIndex(el=> el.position >= (this.slides.length - this.slidesOnScreen)*this._calcImagesWidth())

    // el.position -= this.slidesToScroll * this._calcImagesWidth();
    console.log('>',nextIndex)
    this.setSlide(nextIndex);
    // ;
  }

  prev() {
    this.setSlide(this.currentSlide - 1);
  }

  setSlide(index) {
    this._updateSizes();
    console.log('>>',index)

    if (index < 0) index = 0;
    else if (index > this.slides.length - 1) index = this.slides.length - 1;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
    
    this._resolveChangeSlideEvent(index);
  }

  _resolveChangeSlideEvent(index) {
    if (this.events.changeSlide !== null)
      this.events.changeSlide(index);
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition();
  }

  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.position = i * this.width / this.slidesOnScreen;
    });
  }

  _createImages() {
    return this.slides.map((el) => this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = "relative";
    this.container.style.height = this.height + 'px';
    this.container.style.width = "100%";

    this.container.append(...this.slidesElements);
  }

  _updateSlidesTransform() {
    this.slidesElements.forEach((el, i) => {
      el.style.transform = "translateX(" + this.slides[i].position + "px)";
    });
  }

  _returnSlideElement({ imgUrl, position, heading, description, className }) {
    let slide = document.createElement("div");

    slide = this._setStyles(slide, imgUrl, position, className);

    if (heading && description)
      slide.innerHTML = this._createSlideInfoElementsHTML(heading, description);

    return slide;
  }

  _setStyles(slide, imgUrl, position, className) {
    if (className) slide.classList.add(className);

    slide.style.backgroundImage = "url(" + imgUrl + ")";
    slide.style.backgroundRepeat = 'no-repeat';
    slide.style.backgroundPosition = 'center center';
    slide.style.height = "inherit";
    slide.style.transform = "translateX(" + position + "px)";
    slide.style.position = "absolute";
    slide.style.width = this._calcImagesWidth() + 'px';
    slide.style.transition = this.transitionValue;
    slide.style.top = 0;
    
    return slide;
  }
  
  _createSlideInfoElementsHTML(title, desc) {
    return `<div class="slider__info">
      <h1 class="slider__title">${title}</h1>
      <div class="slider__subtitle">${desc}</div>
    </div>`;
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }
};

},{}],8:[function(require,module,exports){
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
},{}]},{},[5]);
