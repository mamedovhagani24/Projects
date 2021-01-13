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

window.addEventListener('resize', resizeClientsSlider);

clientsSlider.onEvent('changeSlide', updateClientsSliderButtons);
updateClientsSliderButtons(0);

resizeClientsSlider();

clientsSlider.init();


clientsSlider__range.addEventListener('input', function (e) {
  const rangeVal = +this.value,
        slideWidth = clientsSlider._calcImagesWidth(),
        allSlidesWidth = calcAllSlidesWidth(slideWidth);

  clientsSlider.setTransition(false);
  
  const shiftValue = (allSlidesWidth / 100) * rangeVal;
  
  clientsSlider.slideMove(-shiftValue);
});

function calcAllSlidesWidth(slideWidth) {
  const allSlidesWidth = clientsSlider.slides.length * slideWidth,
        halfSlideWidth = (slideWidth / 2) - clientsSlider.slidesGap / 2;

  return allSlidesWidth - clientsSlider.width + halfSlideWidth;
}

let mapped = [];

clientsSlider__range.addEventListener('change', function (e) {
  const rangeVal = +this.value,
        slideWidth = clientsSlider._calcImagesWidth(),
        allSlidesWidth = calcAllSlidesWidth(slideWidth);
  
  const shiftValue = (allSlidesWidth / 100) * rangeVal;

  const sslides = mapped.length > 0 ? mapped : clientsSlider.slides;


  const slidesAfterShift = sslides.filter((el,i)=>{ 
    console.log(clientsSlider.slideDirection)

      return clientsSlider.slideDirection === 'right' ? 
        shiftValue - slideWidth > el.position + (slideWidth / 2):
        shiftValue > el.position - (slideWidth / 2);

        // shiftValue - (slideWidth /2) >= el.position + (slideWidth / 2);
  });

  clientsSlider.setTransition(true);

  if (slidesAfterShift.length === 0) {
    clientsSlider.setSlide(clientsSlider.currentSlide)
    changeRangeValue(clientsSlider.currentSlide);
  mapped = [...clientsSlider.slides.map(el=> ({...el}) )];

    return;
  }

  const nextSlideId = slidesAfterShift[slidesAfterShift.length-1].id

  clientsSlider.setSlide(nextSlideId);

  mapped = [...clientsSlider.slides.map(el=> ({...el}) )];

  changeRangeValue(nextSlideId);
});

function changeRangeValue(elId) {
  const amountSlides = clientsSlider.slides.length - clientsSlider.slidesOnScreen;

  const allW = amountSlides / elId;
  const value = 100 / allW;

  clientsSlider__range.value = value;
}



function updateClientsSliderButtons(currSlide, lastSlide) {
  clientsSliderButton_prev.disabled = currSlide === 0;
  clientsSliderButton_next.disabled = currSlide === lastSlide;

  changeRangeValue(currSlide);
}


function resizeClientsSlider(){
  const width = window.innerWidth;

  if (width <= 425) clientsSlider.slidesOnScreen = 2;
  else if (width <= 500) clientsSlider.slidesOnScreen = 3;
  else if (width <= 750) clientsSlider.slidesOnScreen = 4;
  else clientsSlider.slidesOnScreen = 6;
  
}
