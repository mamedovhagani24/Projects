const Slider = require("../../scripts/slider-api");

// const clientsSlider = new Slider(mainSliderContainer, SLIDES_ARR, 1, 1, 425);
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
  clientsSlider.prev();
});

clientsSliderButton_next.addEventListener('click', () => {
  clientsSlider.next();
});

clientsSlider__range.addEventListener('input', (e)=>{
  const value = +e.srcElement.value;
  
  const w = clientsSlider.container.offsetWidth;
  
  const res = (value / 100) * w;
  
  clientsSlider.slideMove(-res);
})

clientsSlider.onEvent('changeSlide', updateClientsSliderButtons);
updateClientsSliderButtons(0);

clientsSlider.init();


function updateClientsSliderButtons(currSlide) {
  [clientsSliderButton_prev, clientsSliderButton_next].forEach(el => el.classList.remove('btn_disabled'));

  if (currSlide === 0)
    clientsSliderButton_prev.classList.add('btn_disabled');
  else if (currSlide === CLIENTS_ARR.length-1)
    clientsSliderButton_next.classList.add('btn_disabled');
}
