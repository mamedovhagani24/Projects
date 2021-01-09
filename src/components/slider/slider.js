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
