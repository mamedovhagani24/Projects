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
        const header__burger = document.querySelector('.header');
        const mobileBody = header__burger.querySelector('.header-mobile__body');

        mobileBody.style.height = '100vh';

        const navHeight = mobileBody.offsetHeight;
        console.log(navHeight)
        // e.preventDefault();
        
        if (header__burger.classList.contains('header-mobile_open')){
            header__burger.style.transform = 'translateY('+(-navHeight)+'px)';
            setTimeout(()=>header__burger.classList.remove('header-mobile_open'), 500); 
        } else {
            header__burger.classList.add('header-mobile_open');
            header__burger.style.transform = 'translateY(0px)';
        }
        this.classList.toggle("active");

    });


const submenuBtns = document.querySelectorAll('.nav__submenu')

submenuBtns.forEach((el)=>{
    el.addEventListener('click', toggleSubmenu);
});

setHeaderPostision();

function setHeaderPostision() {
    if (window.innerWidth > 900) return;
    const header__burger = document.querySelector('.header');
    header__burger.style.display = 'flex';

    const navHeight = header__burger.querySelector('.header-mobile__body').offsetHeight;

    if (!header__burger.classList.contains('header-mobile_open')){
        header__burger.style.transform = 'translateY('+(-navHeight)+'px)';
    } else {
        header__burger.style.transform = 'translateY(0px)';
    }
}

function toggleSubmenu(e) {
    if (!e.target.classList.contains('nav__submenu')) return;

    this.classList.toggle('submenu_active');
}

