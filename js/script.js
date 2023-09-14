
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

