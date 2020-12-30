'use strict'

window.onscroll = function headerSmall() {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 200) {
        header.classList.add('header__small')
    } else {
        header.classList.remove('header__small')
    }
}




let toggles = document.querySelectorAll(".burger");

toggles.forEach((elem) => {
    let toggle = elem
    toggleHandler(toggle)
})


function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
        e.preventDefault();



        this.classList.contains("active") ? this.classList.toggle("active")
            : this.classList.toggle("active");
    });
}