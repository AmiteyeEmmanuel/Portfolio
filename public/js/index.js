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


// netlify form data fordocument.querySelector("form").addEventListener("submit", handleSubmit);
// document.querySelector("form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//     e.preventDefault()
//     let myForm = document.getElementById('contact');
//     let formData = new FormData(myForm)
//     fetch('/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//     }).then(() => console.log('Form successfully submitted')).catch((error) =>
//         alert(error))
// }


// EMAIL JS
const contactForm = document.getElementById('contact-form"');
   const contactName = document.getElementById('contact-name');
   const contactEmail = document.getElementById('email');
   const contactMessage = document.getElementById('message');

   const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
            //Add and remove color 
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
    
    //show message
    contactMessage.textContent = 'Write all input fields'
    }else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_jz2m009', 'template_f9kqnyb', '#contact-form', 'crq3hnSimjD3k01rl')
         .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
         })
    }


   }

   contactForm.addEventListener('submit', sendEmail)