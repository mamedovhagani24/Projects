(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict'

const Slider = require("./scripts/slider");
require("./scripts/services-drag-n-drop.js");
require('./components/header/header.js')


},{"./components/header/header.js":1,"./scripts/services-drag-n-drop.js":3,"./scripts/slider":4}],3:[function(require,module,exports){
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
"use strict";

module.exports = class Slider {
  constructor(container, slides, slidesOnScreen = 1, speed = 1) {
    this.container = container;
    this.slidesOnScreen = slidesOnScreen;
    this.speed = speed;
    
    this.slidesElements = [];
    this.currentSlide = 0;
    this.width = 0;
    this.height = 0;

    this.init(slides);
  }

  init(slides) {
    this._updateSizes();
    this.slides = this._returnSlidesData(slides);
    this.slidesElements = this._createImages();
    this._drawSlides();
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
    if (index < 0 || index > this.slides.length-1) return;
    
    const scrollWidth = this.slides[index].position;

    this.slides = this.slides.map((el) => {
      if (this.currentSlide > index) {
        el.position -= scrollWidth;
      } else el.position -= scrollWidth;

      return el;
    });

    this.currentSlide = index;

    this._updateSlidesPosition();
  }

  _updateSizes() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
  }

  _returnSlidesData(slidesArr) {
    return slidesArr.map((el, i)=> {
      el.position = i * this.width;
      
      return el;
    });
  }

  _createImages() {
    return this.slides.map((el)=> this._returnSlideElement(el));
  }

  _drawSlides() {
    this.container.style.overflow = "hidden";
    this.container.style.position = 'relative';
    this.container.style.height = this.height;
    this.container.style.width = '100%';
    
    this.container.append(...this.slidesElements);
  }

  _updateSlidesPosition() {
    this.slidesElements.forEach((el, i) => 
      el.style.left = this.slides[i].position + 'px');
  }

  _returnSlideElement({imgUrl, position, heading, description}) {
    const slide = document.createElement('div');

    slide.style.background = 'url('+imgUrl+') no-repeat center';
    slide.style.position = 'absolute';
    slide.style.top = 0;
    slide.style.backgroundSize = 'cover';
    slide.style.height = 'inherit';
    slide.style.left = position + 'px';
    slide.style.transition = 'all '+this.speed+'s ease';
    slide.style.width = this._calcImagesWidth()+'px';
    
    if (heading && description) 
      slide.innerHTML = this._createSlideInfoElements(heading, description);

    return slide;
  }

  _createSlideInfoElements(title, desc) {
    return `<div class="slider__info">
      <h1 class="slider__title">${title}</h1>
      <div class="slider__subtitle">${desc}</div>
    </div>`;
  }

  _calcImagesWidth() {
    return this.width / this.slidesOnScreen;
  }
};

},{}]},{},[2]);
