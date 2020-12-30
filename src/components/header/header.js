window.onscroll = function headerSmall() {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 200) {
        header.classList.add('header__small')
    } else {
        header.classList.remove('header__small')
    }
}



