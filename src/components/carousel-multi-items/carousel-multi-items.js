import SliderMultiItems from '../../scripts/MultiCarousel';

const multiSliderContainer = document.getElementById('carousel-multi');
const navBtns = document.querySelectorAll('.about-us__nav-btn');

const multiSlider = new SliderMultiItems({
  container: multiSliderContainer,
  slidesClass: ".carousel_multi__slide",
  slideTime: .5,
  slidesOnScreen: 6
});

setSlidesOnScreenByContainerWidth();

multiSlider.init();


navBtns.forEach((el) => {

  el.addEventListener('click', (e) => {
    const slideDir = el.id.split('__')[1];

    multiSlider[slideDir]();

    checkButtonsDisabling();
  });

});

multiSlider.adaptive.onResize(setSlidesOnScreenByContainerWidth);

function setSlidesOnScreenByContainerWidth() {
  if (multiSlider.containerWidth < 1000) multiSlider.slidesOnScreen = 4;
  if (multiSlider.containerWidth < 700) multiSlider.slidesOnScreen = 2;
  else multiSlider.slidesOnScreen = 6;
}

checkButtonsDisabling();
function checkButtonsDisabling() {
  navBtns[0].disabled = multiSlider.activeSlide === 0;
  navBtns[1].disabled = multiSlider.activeSlide === multiSlider.maxSlide;
}
