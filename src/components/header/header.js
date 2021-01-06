window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header__burger = document.querySelector('.header__menu')

        e.preventDefault();
        this.classList.toggle("active");
        header__burger.classList.toggle('active');

    });


const portfolio = document.querySelector('.portfolio')

portfolio.addEventListener('click', (e) => {
    const header__submenu = document.querySelector('.header__submenu')

    header__submenu.classList.toggle('active')
})