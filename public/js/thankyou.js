let footer = document.querySelector("footer");
let successheight = document.querySelector(".form__success");
let height = footer.offsetHeight;


successheight.style.height = 90 - (height / 10) + "vh";
console.log(height);

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


// darkmode
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

// window.onchange = function() {
//         //  detect darkmode
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             // dark mode
//             bodyDark.classList.toggle('dark');
//             lightImg.classList.toggle('active');
//             darkImg.classList.toggle('active');
//         }
//         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
//             // dark mode
//             bodyDark.classList.remove('dark');
//             lightImg.classList.add('active');
//             darkImg.classList.remove('active');
//         }
// }
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