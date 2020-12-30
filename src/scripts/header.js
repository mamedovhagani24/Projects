'use strict'


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 200) {
        header.classList.add('header__small')
    } else {
        header.classList.remove('header__small')
    }
})




let toggle = document.querySelector(".burger");
toggleHandler(toggle)


function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
        e.preventDefault();

            if (this.classList.contains('active')) {
                this.classList.remove("active")
            } else {
                this.classList.add("active");
            }
     });
}