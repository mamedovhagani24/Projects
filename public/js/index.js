(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

const Slider = require("./scripts/slider");
require("./scripts/services-drag-n-drop.js");


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

const mainSlider = new Slider(mainSliderContainer, SLIDES_ARR);

const sliderButtonNext = document.getElementById("slider__next");
const sliderButtonPrev = document.getElementById("slider__prev");
const mainSliderMarkersWrapp = document.querySelector(".slider__bottom-controls");

const mainSliderMarkers = createMainSliderMarkers(SLIDES_ARR);

mainSliderMarkersWrapp.append(...mainSliderMarkers);

checkButtonsActivity([sliderButtonNext, sliderButtonPrev], 0, SLIDES_ARR.length);


mainSliderMarkersWrapp.addEventListener("click", (e) => {
  const markerIndex = e.target.closest('.slider__control-item')?.dataset.index;

  if (markerIndex === undefined) return;

  mainSlider.setSlide(+markerIndex);
  updateMainSliderMarkers(+markerIndex);
});

sliderButtonNext.addEventListener("click", () => {
  if (sliderButtonNext.classList.contains('btn_disabled')) return;

  const currSlide = mainSlider.next();

  updateMainSliderMarkers(+currSlide);
});

sliderButtonPrev.addEventListener("click", () => {
  if (sliderButtonPrev.classList.contains('btn_disabled')) return;

  const currSlide = mainSlider.prev();

  updateMainSliderMarkers(+currSlide);
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
  if (currSlide === 0) buttonsArr[1].classList.add('btn_disabled');
  else if (currSlide === slidesAmount-1) buttonsArr[0].classList.add('btn_disabled');
  else buttonsArr.forEach(el => el.classList.remove('btn_disabled'));
}

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
    e.preventDefault();

    if (this.classList.contains('active')) {
        this.classList.remove("active")
    } else {
        this.classList.add("active");
    }
});

},{"./scripts/services-drag-n-drop.js":2,"./scripts/slider":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1, speed = 1) {
    this.container = container;
    this.slides = slides;
    this.slidesOnScreen = slidesOnScreen;
    this.transitionValue = "all " + speed + "s ease";

    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.touch = {
      startX: 0,
      moveX: 0
    };

    this.init();
  }

  init() {
    this._updateSizes();
    this.slidesElements = this._createImages();
    this._drawSlides();
    this._initTouchEvents();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize(e) {
    const width = e.currentTarget.innerWidth;
    
    if (width <= 425) this._initTouchEvents();
    else this._removeTouchEvents();

    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
      return el;
    });

    this.setSlide(this.currentSlide);

    setTimeout(() => {
      this.slidesElements.forEach((el) => {
        el.style.transition = this.transitionValue;
        return el;
      });
    }, 100);
  }

  _initTouchEvents() {
    this.container.addEventListener('touchstart', this._touchStart.bind(this));
    this.container.addEventListener('touchmove', this._touchMove.bind(this));
    this.container.addEventListener('touchend', this._touchEnd.bind(this));
  }

  _touchStart(e) {
    this.slidesElements.forEach((el) => {
      el.style.transition = "none";
      return el;
    });

    this.touch.startX = e.changedTouches[0].pageX;
  }

  _touchMove(e){
    this.touch.moveX = e.changedTouches[0].pageX - this.touch.startX;
    
    console.log(this.touch.moveX)
    this.slideMove(this.touch.moveX)
    // this.touch.moveX = 0;
  }

  _touchEnd(e){
    this.touch = {
      startX: 0,
      moveX: 0
    }

    this.slidesElements.forEach((el) => {
      el.style.transition = this.transitionValue;
      return el;
    });
  }

  _removeTouchEvents() {

  }

  slideMove(positionX) {
    this.slides.forEach((el) => {
      el.position += positionX;

      return el;
    });

    this._updateSlidesTransform();
  }

  next() {
    this.setSlide(this.currentSlide + 1);
    return this.currentSlide;
  }

  prev() {
    this.setSlide(this.currentSlide - 1);
    return this.currentSlide;
  }

  setSlide(index) {
    this._updateSizes();

    if (index < 0 || index > this.slides.length - 1) return;

    const scrollWidth = this.slides[index].position;

    this.slides.forEach((el) => {
      el.position -= scrollWidth;
      return el;
    });

    this.currentSlide = index;

    this._updateSlidesTransform();
  }

  _updateSizes(width) {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    this._updateSlidesPosition(width);
  }

  _updateSlidesPosition(width) {
    this.slides.forEach((el, i) => {
      el.position = width ? el.position + (width - this.width) : i * this.width;

      return el;
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

      return el;
    });
  }

  _returnSlideElement({ imgUrl, position, heading, description }) {
    const slide = document.createElement("div");

    slide.style.background = "url(" + imgUrl + ") no-repeat center";
    slide.style.position = "absolute";
    slide.style.top = 0;
    slide.style.backgroundSize = "cover";
    slide.style.height = "inherit";
    slide.style.transform = "translateX(" + position + "px)";
    slide.style.transition = this.transitionValue;
    slide.style.width = "inherit";

    if (heading && description)
      slide.innerHTML = this._createSlideInfoElementsHTML(heading, description);

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

},{}]},{},[1]);
