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

const sliderContainer = document.getElementById("slider__container");

const mainSlider = new Slider(sliderContainer, SLIDES_ARR);

const sliderButtonNext = document.getElementById("slider__next");
const sliderButtonPrev = document.getElementById("slider__prev");
const mainSliderMarkersWrapp = document.querySelector(".slider__bottom-controls");

const mainSliderMarkers = createMainSliderMarkers(SLIDES_ARR);

mainSliderMarkersWrapp.append(...mainSliderMarkers);

mainSliderMarkersWrapp.addEventListener("click", (e) => {
  const markerIndex = e.target.closest('.slider__control-item')?.dataset.index;

  if (markerIndex === undefined) return;

  mainSlider.setSlide(+markerIndex);
  updateMainSliderMarkers(+markerIndex);
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
}

sliderButtonNext.addEventListener("click", () => {
  const currSlide = mainSlider.next();

  updateMainSliderMarkers(+currSlide);
});

sliderButtonPrev.addEventListener("click", () => {
  const currSlide = mainSlider.prev();

  updateMainSliderMarkers(+currSlide);
});


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
