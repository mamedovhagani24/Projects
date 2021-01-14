window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200 && !header.classList.contains('header-mobile_open')) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header__burger = document.querySelector('.header')

        e.preventDefault();
        this.classList.toggle("active");

        if (header__burger.classList.contains('header-mobile_open')){
            header__burger.classList.remove('header-mobile_open')
            header__burger.classList.add('header-mobile_closing');

            setTimeout(() => {
                header__burger.classList.remove('header-mobile_closing');                
            }, 1000);
        } else {
            header__burger.classList.add('header-mobile_open');
        }

    });


const submenuBtns = document.querySelectorAll('.nav__submenu')

submenuBtns.forEach((el)=>{
    el.addEventListener('click', toggleSubmenu);
});


function toggleSubmenu(e) {
    if (!e.target.classList.contains('nav__submenu')) return;

    this.classList.toggle('submenu_active');
}

