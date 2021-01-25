import Slider from "../../scripts/Slider";

const carousel = document.getElementById("carousel");

const sliderControls = document.querySelectorAll('.slider__btn');

const slider = new Slider({
  container: carousel,
  slidesClass: ".carousel__slide",
  titleClass: ".carousel__slide-title",
  descriptionClass: ".carousel__slide-description",
});

slider.init();

sliderControls.forEach((btn)=>{
  const btnName = btn.id.split('__')[1];

  btn.addEventListener('click', ()=>{
    slider[btnName]();
    checkButtonsDisabling();
  });
});
checkButtonsDisabling();

slider.adaptive.onResize((e)=>{
  
});

function checkButtonsDisabling() {
  sliderControls[0].disabled = slider.activeSlide === 0;
  sliderControls[1].disabled = slider.activeSlide === slider.elements.length - 1;
}