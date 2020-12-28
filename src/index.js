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
    imgUrl: 'https://look.com.ua/pic/201806/2560x1600/look.com.ua-286462.jpg'
  },
]

const slider = new Slider(sliderContainer, SLIDES_ARR);

console.log(slider)