$(function () {

    $('.header-bars').on('click', function (e) {
        e.preventDefault();
        let mobileHeader = $('.header__mobile');
        if (mobileHeader.hasClass('header-show')) {
            mobileHeader.removeClass('header-show');
        } else {
            mobileHeader.addClass('header-show');
        }
    });
    
})

// rolly js
const r = rolly({
    view: document.querySelector('.wrapper'),
    native: true,
    // other options
});
r.init();

AOS.init({
    duration: 1500 //global duration
});



const text = document.querySelector(".text");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    )
    .join("");





