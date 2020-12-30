// const module = require('./scripts/script.js'); <-- пример подключения скрипта из папки scripts

// const module = require('./scripts/script.js'); <-- пример подключения скрипта из папки scripts

require('./scripts/services-drag-n-drop.js');
'use strict'


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 200) {
        header.classList.add('header__small')
    } else {
        header.classList.remove('header__small')
    }
})




const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
    e.preventDefault();

    if (this.classList.contains('active')) {
        this.classList.remove("active")
    } else {
        this.classList.add("active");
    }
});
