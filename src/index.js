const Slider = require('./scripts/slider');

const sliderContainer = document.getElementById('slider__container');

const SLIDES_ARR = [
  {
    heading: 'Vestibulium',
    description: 'Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.',
    imgUrl: 'https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg'
  },
  {
    heading: 'Vestibulium',
    description: 'Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.',
    imgUrl: 'https://canadalifechurch.com/wp-content/uploads/2017/06/2017.02.05.jpg'
  },
]

const mainSlider = new Slider(sliderContainer, SLIDES_ARR);

const sliderButtonNext = document.getElementById('slider__next');
const sliderButtonPrev = document.getElementById('slider__prev');

sliderButtonNext.addEventListener('click', ()=>{
  mainSlider.next();
});

sliderButtonPrev.addEventListener('click', ()=>{
  mainSlider.prev();
});