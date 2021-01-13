(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Slider = require("../../scripts/slider-multi-items");


const clientsSliderWrapper = document.querySelector('.about-us__slider-body');

const clientsSliderButton_prev = document.getElementById('clientSlider__prev');
const clientsSliderButton_next = document.getElementById('clientSlider__next');
const clientsSlider__range = document.getElementById('clientsSlider__range');

const CLIENTS_ARR = [
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  },
  {
    imgUrl: './img/jquery.png',
    className: 'about-us__slider-img'
  }
];

const clientsSlider = new Slider({
  container: clientsSliderWrapper,
  slides: CLIENTS_ARR,
  slidesOnScreen: 6,
  speed: .8,
  touchActiveBreakpoint: 425,
  slidesGap: 20
});

clientsSliderButton_prev.addEventListener('click', () => {
  if (clientsSliderButton_prev.classList.contains('btn_disabled')) return;

  clientsSlider.prev();
});

clientsSliderButton_next.addEventListener('click', () => {
  if (clientsSliderButton_next.classList.contains('btn_disabled')) return;

  clientsSlider.next();
});

window.addEventListener('resize', resizeClientsSlider);

clientsSlider.onEvent('changeSlide', updateClientsSliderButtons);
updateClientsSliderButtons(0);

resizeClientsSlider();

clientsSlider.init();


clientsSlider__range.addEventListener('input', function (e) {
  const rangeVal = +this.value,
    slideWidth = clientsSlider._calcImagesWidth(),
    allSlidesWidth = calcAllSlidesWidth(slideWidth);

  clientsSlider.setTransition(false);

  const shiftValue = (allSlidesWidth / 100) * rangeVal;

  clientsSlider.slideMove(-shiftValue);
});


function calcAllSlidesWidth(slideWidth) {
  const allSlidesWidth = clientsSlider.slides.length * slideWidth,
    halfSlideWidth = (slideWidth / 2) - clientsSlider.slidesGap / 2;

  return allSlidesWidth - clientsSlider.width + halfSlideWidth;
}

let mapped = [];

clientsSlider__range.addEventListener('change', function (e) {
  clientsSlider.setTransition(true);
  clientsSlider.setSlide(clientsSlider.nextSlideId);
});

function changeRangeValue(elId) {
  const amountSlides = clientsSlider.slides.length - clientsSlider.slidesOnScreen;

  const allW = amountSlides / elId;
  const value = 100 / allW;

  clientsSlider__range.value = value;
}



function updateClientsSliderButtons(currSlide, lastSlide) {
  clientsSliderButton_prev.disabled = currSlide === 0;
  clientsSliderButton_next.disabled = currSlide === lastSlide;

  changeRangeValue(currSlide);
}


function resizeClientsSlider() {
  const width = window.innerWidth;

  if (width <= 425) clientsSlider.slidesOnScreen = 2;
  else if (width <= 500) clientsSlider.slidesOnScreen = 3;
  else if (width <= 750) clientsSlider.slidesOnScreen = 4;
  else clientsSlider.slidesOnScreen = 6;

}

},{"../../scripts/slider-multi-items":7}],2:[function(require,module,exports){
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
  slidesOnScreen: 1,
  speed: 1,
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
  mainSlider.next();
});

sliderButtonPrev.addEventListener("click", () => {
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

function updateMainSliderMarkers(index, lastSlide) {
  mainSliderMarkers.forEach((el) => el.classList.remove("slider__control-item_active"));

  mainSliderMarkers[index].classList.add("slider__control-item_active");

  checkButtonsActivity([sliderButtonNext, sliderButtonPrev], index, lastSlide);
}

function checkButtonsActivity(buttonsArr, currSlide, lastSlide) {  
  buttonsArr[1].disabled = currSlide === 0;
  buttonsArr[0].disabled = currSlide === lastSlide;
}

},{"../../scripts/slider-api":6}],5:[function(require,module,exports){
require("./components/services/services-drag-n-drop");
require("./components/header/header");
require("./components/slider/slider");
require("./components/about_us/about_us");

},{"./components/about_us/about_us":1,"./components/header/header":2,"./components/services/services-drag-n-drop":3,"./components/slider/slider":4}],6:[function(require,module,exports){
const touchSlides = require('./slider-touch');

module.exports = class Slider extends touchSlides{
  constructor({
    container,
    slides,
    speed = 1,
    slidesOnScreen,
    slidesToScroll = 1,
    touchActiveBreakpoint
  }) {
    super();

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
    this.maxSlide = this.slides.length - this.slidesOnScreen;

    this.events = {
      changeSlide: null,
      touchEnabled: null,
      touchDisabled: null
    };

    this.slideDirection = null;

  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();
    this._initTouchEvents(this.width);

    super.init();
  }

  onEvent(type, callback) {
    this.events[type] = callback;
  }

  setTransition(isOn) {
    this.slidesElements.forEach((el) => {
      el.style.transition = isOn ? this.transitionValue : 'none';
    });
  }

  _prevPositionX = 0;
  
  slideMove(positionX) {
    if (this._prevPositionX > positionX) this.slideDirection = 'left';
    else this.slideDirection = 'right';
    
    this.touch.slidesPosition =
      this.touch.slidesPosition ?? this.slides.map((el) => el.position);
    
    this.slides.forEach((el, i) => {
      el.position = this.touch.slidesPosition[i] + positionX;
    });

    this._updateSlidesTransform();
    
    this._prevPositionX = (positionX === this._prevPositionX) ? null : positionX;
  }

  next() {
    this.setSlide(this.currentSlide + this.slidesToScroll);
  }

  prev() {
    this.setSlide(this.currentSlide - this.slidesToScroll);
  }

  setSlide(index) {
    this._updateSizes();

    if (index < 0) index = 0;
    else if (index > this.maxSlide) index = this.maxSlide;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
    
    this._emitChangeSlideEvent(index);
  }

  _emitChangeSlideEvent(index) {
    if (this.events.changeSlide !== null)
      this.events.changeSlide(index, this.maxSlide);
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition();
  }

  _updateSlidesPosition() {
    this.slides.forEach((el, i) => {
      el.id = i;
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

},{"./slider-touch":8}],7:[function(require,module,exports){
const Slider = require('./slider-api');

module.exports = class multiSlider extends Slider {
  _slidesOnScreen = this.slidesOnScreen;
  
  constructor(args) {
    super(args);
    this.breakpoints = args.breakpoints;
    this.slidesGap = args.slidesGap ?? 0;
  }
  
  init() {
    super.init();

    this._initBreakpoints(window.outerWidth);
  }

  setSlide(index, callback) {
    super.setSlide(index);
    if (callback !== undefined) callback(this.slides[index]);
  }

  _initBreakpoints(width) {
    for (let w in this.breakpoints) {
      if (width <= w) {
        this.slidesOnScreen = this.breakpoints[w].slidesOnScreen;
        this._updateSizes();
      }
      else this.slidesOnScreen = this._slidesOnScreen;

    }
    this.maxSlide = this.slides.length - this.slidesOnScreen
  }

  _onResize(e) {
    super._onResize(e);

    const width = e.currentTarget.innerWidth;

    this._initBreakpoints(width);
  }

  _calcImagesWidth() {
    return (this.width / this.slidesOnScreen) - (this.slidesGap / 2);
  }
}
},{"./slider-api":6}],8:[function(require,module,exports){
module.exports = class {
  constructor() {
    this.touch = {
      startX: 0,
      moveX: 0,
    };
  }

  init() {
    window.addEventListener("resize", this._onResize.bind(this));
  }
  
  _onResize(e) {
    this._updateSizes();
    
    this.setTransition(false);
    
    this.slidesElements.forEach((el) => {
      el.style.width = this._calcImagesWidth() + 'px';
    });
    
    const width = e.currentTarget.innerWidth;
    
    this._initTouchEvents(width);
    
    this.setSlide(this.currentSlide);

    setTimeout(() => this.setTransition(true), 100);
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
    this.setTransition(false);

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

  get nextSlideId() {
    let nextSlide = this.slides.find(el => el.position + this._calcImagesWidth() / 2 > 0);
    
    return nextSlide !== undefined ? nextSlide.id : this.slides[this.slides.length - 1].id;
  }
  
  _touchEnd(e) {
    this.setTransition(true);

    this.setSlide(this.nextSlideId);
    
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


}
},{}]},{},[5]);
