// const Slider = require("../../scripts/slider-multi-items");
const Slider = require("../../scripts/new-slider");


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
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'},
  {imgUrl: './img/jquery.png', className: 'about-us__slider-img'}
];

const clientsSlider = new Slider({
  container: clientsSliderWrapper,
  slides: CLIENTS_ARR,
  slidesOnScreen: 6,
  speed: .6,
  slidesWrapperClass: 'about-us__slider-wrapp'
  // touchActiveBreakpoint: 425,
  // slidesGap: 20
});

clientsSlider.init();

clientsSliderButton_prev.addEventListener('click', () => {  
  clientsSlider.prev();
});

clientsSliderButton_next.addEventListener('click', () => {
  clientsSlider.next();
});

// clientsSlider__range.addEventListener('input', (e)=>{
//   const value = +e.srcElement.value;
  
//   const w = clientsSlider.container.offsetWidth;
  
//   const res = (value / 100) * w;
  
//   clientsSlider.slideMove(-res);
// })

clientsSlider.onEvent('slidesChange', updateClientsSliderButtons);
updateClientsSliderButtons({
  prevBtn: true,
  nextBtn: false
});



function updateClientsSliderButtons({prevBtn, nextBtn}) {

  clientsSliderButton_prev.disabled = prevBtn;
  clientsSliderButton_next.disabled = nextBtn;
}
