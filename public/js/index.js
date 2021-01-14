(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Slider = require("../../scripts/slider-api");

// const clientsSlider = new Slider(mainSliderContainer, SLIDES_ARR, 1, 1, 425);
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
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'}
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

clientsSlider__range.addEventListener('input', (e)=>{
  const value = +e.srcElement.value;
  
  const w = clientsSlider.container.offsetWidth;
  
  const res = (value / 100) * w;
  
  clientsSlider.slideMove(-res);
})

clientsSlider.onEvent('changeSlide', updateClientsSliderButtons);
updateClientsSliderButtons(0);

clientsSlider.init();


function updateClientsSliderButtons(currSlide) {
  [clientsSliderButton_prev, clientsSliderButton_next].forEach(el => el.classList.remove('btn_disabled'));

  if (currSlide === 0)
    clientsSliderButton_prev.classList.add('btn_disabled');
  else if (currSlide === CLIENTS_ARR.length-1)
    clientsSliderButton_next.classList.add('btn_disabled');
}

},{"../../scripts/slider-api":6}],2:[function(require,module,exports){
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200 && !header.classList.contains('header-mobile_open')) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header__burger = document.querySelector('.header');
        const mobileBody = header__burger.querySelector('.header-mobile__body');

        mobileBody.style.height = '100vh';

        const navHeight = mobileBody.offsetHeight;
        console.log(navHeight)
        // e.preventDefault();
        
        if (header__burger.classList.contains('header-mobile_open')){
            header__burger.style.transform = 'translateY('+(-navHeight)+'px)';
            setTimeout(()=>header__burger.classList.remove('header-mobile_open'), 500); 
        } else {
            header__burger.classList.add('header-mobile_open');
            header__burger.style.transform = 'translateY(0px)';
        }
        this.classList.toggle("active");

    });


const submenuBtns = document.querySelectorAll('.nav__submenu')

submenuBtns.forEach((el)=>{
    el.addEventListener('click', toggleSubmenu);
});

setHeaderPostision();

function setHeaderPostision() {
    if (window.innerWidth > 900) return;
    const header__burger = document.querySelector('.header');
    header__burger.style.display = 'flex';

    const navHeight = header__burger.querySelector('.header-mobile__body').offsetHeight;

    if (!header__burger.classList.contains('header-mobile_open')){
        header__burger.style.transform = 'translateY('+(-navHeight)+'px)';
    } else {
        header__burger.style.transform = 'translateY(0px)';
    }
}

function toggleSubmenu(e) {
    if (!e.target.classList.contains('nav__submenu')) return;

    this.classList.toggle('submenu_active');
}


},{}],3:[function(require,module,exports){
function enableDragSort(listClass) {
  const sortableLists = document.getElementsByClassName(listClass);
  Array.prototype.map.call(sortableLists, (list) => {
    enableDragList(list);
  });
}

function enableDragList(list) {
  Array.prototype.map.call(list.children, (item) => {
    enableDragItem(item);
  });
}

function enableDragItem(item) {
  item.setAttribute("draggable", true);
  item.ondrag = handleDrag;
  item.ondragend = handleDrop;
}

function handleDrag(item) {
  const selectedItem = item.target,
    list = selectedItem.parentNode,
    x = event.clientX,
    y = event.clientY;

  selectedItem.classList.add("drag-sort-active");
  let swapItem =
    document.elementFromPoint(x, y) === null
      ? selectedItem
      : document.elementFromPoint(x, y);

  if (list === swapItem.parentNode) {
    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(item) {
  item.target.classList.remove("drag-sort-active");
}

(() => {
  enableDragSort("services__items-wrapper");
})();

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

},{"../../scripts/slider-api":6}],5:[function(require,module,exports){
require("./components/services/services-drag-n-drop");
require("./components/header/header");
require("./components/slider/slider");
require("./components/about_us/about_us");

},{"./components/about_us/about_us":1,"./components/header/header":2,"./components/services/services-drag-n-drop":3,"./components/slider/slider":4}],6:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor({
    container,
    slides,
    slidesOnScreen = 1,
    speed = 1,
    touchActiveBreakpoint,
    slidesGap = 0
  }) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    this.transitionValue = "all " + speed + "s ease";
    this.touchActiveBreakpoint = touchActiveBreakpoint;
    this.slidesGap = slidesGap;

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
    const width = e.currentTarget.innerWidth;
    
    this._initTouchEvents(width);

    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
    });

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
    this.setSlide(this.currentSlide + 1);
  }

  prev() {
    this.setSlide(this.currentSlide - 1);
  }

  setSlide(index) {
    this._updateSizes();

    if (index < 0) index = 0;
    else if (index > this.slides.length - 1) index = this.slides.length - 1;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
    
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
      el.position = ((i * this.width) / this.slidesOnScreen);
    });
  }

  _createImages() {
    return this.slides.map((el) => this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = "relative";
    this.container.style.height = this.height;
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
    slide.style.width = this._calcImagesWidth();
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
    return this.slidesOnScreen === 1 ? 'inherit' : (this.width / this.slidesOnScreen) - this.slidesGap + 'px';
  }
};

},{}]},{},[5]);
