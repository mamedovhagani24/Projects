import SliderMultiItems from "../../scripts/MultiCarousel";

const multiSliderContainer = document.getElementById("carousel-multi");
const navBtns = document.querySelectorAll(".about-us__nav-btn");
const sliderRange = document.getElementById("slider-range");

const multiSlider = new SliderMultiItems({
  container: multiSliderContainer,
  slidesClass: ".carousel_multi__slide",
  slideTime: 0.5,
  slidesOnScreen: 6,
});

multiSlider.init(function () {
  setAmountSlidesByContainerWidth();
  setRangeAttributes();

  multiSlider.events.onSlideChange = slideChanged;
});

function slideChanged(index) {
  checkButtonsDisabling(index);
  setRangeValueBySlideIndex(index);
}

function setRangeAttributes() {
  sliderRange.setAttribute(
    "max",
    multiSlider.elements[multiSlider.maxSlide].position
  );
}

sliderRange.addEventListener("input", function () {
  const val = +this.value;

  multiSlider.activeTransition(false);
  multiSlider.sliderDom.moveElements(-val);
});

sliderRange.addEventListener("change", function () {
  const nextSliderId = multiSlider.nextSlideIndexByPosition;
  multiSlider.activeTransition(true);
  multiSlider.setSlide(nextSliderId);
  setRangeValueBySlideIndex(nextSliderId);
});

function setRangeValueBySlideIndex(index) {
  sliderRange.value = multiSlider.elements[index].position;
}

navBtns.forEach((el) => {
  el.addEventListener("click", () => {
    const slideDir = el.id.split("__")[1];

    multiSlider[slideDir]();
  });
});

multiSlider.adaptive.onResize(setAmountSlidesByContainerWidth);

function setAmountSlidesByContainerWidth() {
  if (multiSlider.containerWidth < 700) multiSlider.slidesOnScreen = 2;
  else if (multiSlider.containerWidth < 1000) multiSlider.slidesOnScreen = 4;
  else multiSlider.slidesOnScreen = 6;
  
  setRangeAttributes();
}

checkButtonsDisabling();
function checkButtonsDisabling() {
  navBtns[0].disabled = multiSlider.activeSlide === 0;
  navBtns[1].disabled = multiSlider.activeSlide === multiSlider.maxSlide;
}
