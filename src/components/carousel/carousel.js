import Slider from "../../scripts/Slider";

const carousel = document.getElementById("carousel");

const sliderControls = document.querySelectorAll('.slider__btn');
const sliderBottomControls = document.querySelectorAll('.slider__control-item');

const slider = new Slider({
  container: carousel,
  slidesClass: ".carousel__slide",
  slideTime: .5
});

slider.init();

sliderControls.forEach((btn) => {
  const btnName = btn.id.split('__')[1];

  btn.addEventListener('click', () => {
    slider[btnName]();

    checkControlsDisabling(slider.activeSlide);
    checkButtonsDisabling();
  });
});
checkButtonsDisabling();

sliderBottomControls.forEach((el) => {

  el.addEventListener('click', (e) => {
    const index = +el.dataset.index;

    slider.setSlide(index);

    checkControlsDisabling(index);
    checkButtonsDisabling();
  });

});

// slider.adaptive.onResize((e) => {
//   slider.updateElementsInfo();
//   slider.setSlide(slider.activeSlide);
// });

function checkControlsDisabling(i) {
  sliderBottomControls.forEach((btn) => btn.classList.remove('slider__control-item_active'));
  sliderBottomControls[i].classList.add('slider__control-item_active');
}

function checkButtonsDisabling() {
  sliderControls[0].disabled = slider.activeSlide === 0;
  sliderControls[1].disabled = slider.activeSlide === slider.elements.length - 1;
}
