const Slider = require("../../scripts/slider-multi-items");


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
  slidesGap: 20,
  breakpoints: {
    754: {
      slidesOnScreen: 3
    },

  }
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
  const value = +e.target.value;
  clientsSlider.setTransition(false);

  const slideWidth = clientsSlider._calcImagesWidth(),
        allSlidesWidth = clientsSlider.slides.length * slideWidth,
        halfSlideWidth = (slideWidth / 2) - clientsSlider.slidesGap / 2;

  const w = allSlidesWidth - clientsSlider.width + halfSlideWidth;
  
  const res = (w / 100) * value;
  
  clientsSlider.slideMove(-res);
});

clientsSlider__range.addEventListener('change', function (e) {
  const val = +this.value;
  const slideWidth = clientsSlider._calcImagesWidth(),
        allSlidesWidth = clientsSlider.slides.length * slideWidth,
        halfSlideWidth = (slideWidth /2) - clientsSlider.slidesGap / 2;

  const w = allSlidesWidth - clientsSlider.width + halfSlideWidth;
  
  const res = (w / 100) * val;

  const a = clientsSlider.slides.filter((el)=> res >= el.position);

  clientsSlider.setTransition(true);

  clientsSlider.setSlide(a[a.length-1].id);

  changeRangeValue(a[a.length-1].id);
});

function changeRangeValue(elId) {
  const amountSlides = clientsSlider.slides.length - clientsSlider.slidesOnScreen;

  const allW = amountSlides / elId;
  const value = 100 / allW;

  clientsSlider__range.value = value;
}

clientsSlider.onEvent('changeSlide', updateClientsSliderButtons);
updateClientsSliderButtons(0);

clientsSlider.init();


function updateClientsSliderButtons(currSlide, lastSlide) {
  clientsSliderButton_prev.disabled = currSlide === 0;
  clientsSliderButton_next.disabled = currSlide === lastSlide;

  changeRangeValue(currSlide);
}
