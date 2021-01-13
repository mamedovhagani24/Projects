window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200 && !header.classList.contains('header-mobile')) {
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


const submenuBtns = document.querySelectorAll('.nav__submenu')

submenuBtns.forEach((el)=>{
    el.addEventListener('click', toggleSubmenu);
});


function toggleSubmenu(e) {
    if (!e.target.classList.contains('nav__submenu')) return;

    this.classList.toggle('submenu_active');
}

