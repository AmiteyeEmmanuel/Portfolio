$(document).ready(function() {

    var slider = $("#autoWidth").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        auto: false,
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        // easing: 'linear', //'for jquery animation',////

        speed: 700, //ms'
        loop: true,
        controls: true,
        enableTouch: false,
        enableDrag: false,
        currentPagerPosition: 'middle',

    });

    $('#prev').click(function() {
        slider.goToPrevSlide();
    });
    $('#next').click(function() {
        slider.goToNextSlide();
    });
});

//Menu bar
const mobileMenu = document.getElementById('mobile');
const navToggle = document.getElementById('nav-toogle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
    })
}




// dark theme
let bodyDark = document.querySelector('body');
let lightImg = document.querySelector('.toggle--light');
let darkImg = document.querySelector('.toggle--dark');
let darkToggle = document.querySelector('.toggle');


darkToggle.onclick = function() {
    bodyDark.classList.toggle('dark');
    lightImg.classList.toggle('active');
    darkImg.classList.toggle('active');
}

// aos
AOS.init({
    offset: 120,
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-back', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true,
    anchorPlacement: 'top-bottom',
});
//refresh animations
window.addEventListener('load', AOS.refresh)
    //  detect darkmode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    bodyDark.classList.toggle('dark');
    lightImg.classList.toggle('active');
    darkImg.classList.toggle('active');
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // dark mode
    bodyDark.classList.remove('dark');
    lightImg.classList.add('active');
    darkImg.classList.remove('active');
}

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
        if (event.matches) {
            //dark mode
            // dark mode
            bodyDark.classList.toggle('dark');
            lightImg.classList.toggle('active');
            darkImg.classList.toggle('active');
        } else {
            //light mode
            bodyDark.classList.remove('dark');
            lightImg.classList.add('active');
            darkImg.classList.remove('active');
        }
    })
    // scq
let footer = document.querySelector("footer");
let successheight = document.querySelector(".form__success");
let height = footer.offsetHeight;


successheight.style.height = 90 - (height / 10) + "vh";


